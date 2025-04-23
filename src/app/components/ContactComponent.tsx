"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Toaster } from "./ui/sonner";
import { Textarea } from "./ui/textarea";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name ist erforderlich" }),
  email: z.string().email({ message: "Ungültige E-Mail-Adresse" }),
  message: z
    .string()
    .min(1, { message: "Nachricht ist erforderlich" })
    .max(512, { message: "Nachricht darf maximal 512 Zeichen lang sein" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactComponent() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    const req = await fetch("/api/contactform", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (req.ok) {
      toast("Nachricht wurde erforderlich gesendet!");
    }
  };

  return (
    <section
      className="md:min-h-screen sm:h-min bg-white dark:bg-slate-800 dark:text-gray-200"
      id="contact"
    >
      <div className="md:flex md:flex-row py-20 p-10">
        <div className="md:basis-1/4" />
        <h1 className="uppercase text-gray-500 text-xl md:basis-1/4 dark:text-gray-400">
          Kontakt
        </h1>
        <div className="md:basis-1/3">
          <p className="text-balance mb-4">
            Melden Sie sich gerne für eine individuelle Beratung per E-Mail
            unter{" "}
            <a
              href="mailto:info@raumausstattung-franke.com"
              className="underline"
            >
              info@raumausstattung-franke.com
            </a>{" "}
            oder über das folgende Kontaktformular bei mir.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="my-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="my-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="resize-none" />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="my-2">
                Senden
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
