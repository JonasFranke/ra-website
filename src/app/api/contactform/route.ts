import { z } from "zod";
import { Resend } from "resend";
import { env } from "~/env";
import { EmailTemplate } from "~/app/components/emails/EmailTemplate";

const resend = new Resend(env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name ist erforderlich" }),
  email: z.string().email({ message: "Ungültige E-Mail-Adresse" }),
  message: z.string().min(1, { message: "Nachricht ist erforderlich" }).max(512, { message: "Nachricht darf maximal 512 Zeichen lang sein" })
});

export async function POST(request: Request) {
  try {
    const unvalidatedData = await request.json();
    const validatedData = contactSchema.parse(unvalidatedData);

    const { data, error } = await resend.emails.send({
      from: "no-reply@jonasfranke.xyz",
      to: ["jfhb06@gmail.com"],
      replyTo: validatedData.email,
      subject: "Anfrage auf der Website",
      react: EmailTemplate({ name: validatedData.name, message: validatedData.message })
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response("Error sending email", { status: 500 });
    }
    return new Response("E-Mail successfully sent!", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ message: error.errors }), { status: 422 });
    }
  }
}
