export const getSendDocumentRequestEmailTemplate = (
  uploadLink: string,
  businessName: string
) => {
  return {
    subject: `Action Required: ${businessName} Has Requested Documents from You`,
    template: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; padding: 30px; border: 1px solid #dcd7fb; border-radius: 10px;">
        <h2 style="color: #5038ed; text-align: center; margin: 30px 0">You've Got a Document Request 📄</h2>
        
        <p style="font-size: 16px; color: #4c5563; line-height: 1.6;">
          <strong>${businessName}</strong> has requested you to upload some important documents.
          Please click the button below to securely upload your files.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${uploadLink}" style="background-color: #5038ed; color: #ffffff; padding: 14px 26px; font-size: 16px; border-radius: 6px; text-decoration: none;">
            Upload Documents
          </a>
        </div>

        <p style="font-size: 14px; color: #4c5563; line-height: 1.6; margin: 40px 0">
          If you weren't expecting this request, you can safely ignore this email.
        </p>

        <hr style="margin: 10px 0; border: none; border-top: 1px solid #eee;">

        <p style="font-size: 13px; color: #6c757d; text-align: center;">
          &copy; ${new Date().getFullYear()} SnapDocs. All rights reserved.<br>
          Need help? <a href="mailto:support@snapdocs.com" style="color: #5038ed; text-decoration: none;">Contact Support</a>
        </p>
      </div>
    `,
  };
};
