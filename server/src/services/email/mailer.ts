import { Resend } from "resend";
import { ENV } from "@config/env";
import { getSendDocumentRequestEmailTemplate } from "./templates/document-request";

const resendMailer = new Resend(ENV.RESEND_API_KEY);

interface MailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

const sendEmail = async ({
  to,
  subject,
  html,
  from = "onboarding@resend.dev",
}: MailOptions) => {
  const email = await resendMailer.emails.send({
    from,
    to: "bhaskar170863@gmail.com",
    subject,
    html,
  });

  console.info("Email sent to", to, email);
};

export const sendDocumentRequestEmail = (
  userEmail: string,
  uploadLink: string,
  businessName: string
) => {
  const { subject, template } = getSendDocumentRequestEmailTemplate(
    uploadLink,
    businessName
  );
  sendEmail({ to: userEmail, subject, html: template });
};
