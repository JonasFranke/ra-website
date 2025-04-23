import { Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  name: string,
  message: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
}) => (
  <Tailwind>
    <h1 className="text-gray-700 uppercase">Neue Anfrage von {name}!</h1>
    <p className="text-balance">{message}</p>
  </Tailwind>
);
