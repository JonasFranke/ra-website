import { validateTurnstileToken } from "next-turnstile";
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "~/app/components/emails/EmailTemplate";
import { env } from "~/env";

const resend = new Resend(env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, { error: "Name ist erforderlich" }),
  email: z.email({ error: "Ungültige E-Mail-Adresse" }),
  message: z
    .string()
    .min(1, { error: "Nachricht ist erforderlich" })
    .max(512, { error: "Nachricht darf maximal 512 Zeichen lang sein" }),
  token: z.string(),
});

export async function POST(request: Request) {
  try {
    const unvalidatedData = await request.json();
    const validatedData = contactSchema.parse(unvalidatedData);

    const sandbox = env.NODE_ENV === "development" ? "pass" : false;

    const turnstileResult = await validateTurnstileToken({
      token: validatedData.token,
      secretKey: env.TURNSTILE_SECRET_KEY,
      sandbox: sandbox,
    });

    if (turnstileResult.success) {
      const { error } = await resend.emails.send({
        from: "no-reply@jonasfranke.xyz",
        to: ["jfhb06@gmail.com"],
        replyTo: validatedData.email,
        subject: "Anfrage auf der Website",
        react: await EmailTemplate({
          name: validatedData.name,
          message: validatedData.message,
        }),
      });

      if (error) {
        console.error("Error sending email:", error);
        return new Response("Error sending email", { status: 500 });
      }
      return new Response("E-Mail successfully sent!", { status: 200 });
    } else {
      return new Response("Error during turnstile token validation", {
        status: 401,
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ message: error.issues }), {
        status: 422,
      });
    }
  }
  return new Response("Internal Server Error", { status: 500 });
}
