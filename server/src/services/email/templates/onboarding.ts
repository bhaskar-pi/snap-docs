export const getOnboardingEmailTemplate = (
  userName: string,
  businessName: string
) => {
  return {
    subject: `Welcome to SnapDocs, ${userName}! Your ${businessName} workspace is ready 🎉`,
    template: `<div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #dcd7fb;">
  <h1 style="color: #5038ed; text-align: center;">Welcome to SnapDocs 👋</h1>

  <p style="font-size: 16px; color: #4c5563; line-height: 1.6;">
    Hi ${userName},<br><br>
    We're excited to have you onboard! 🎉<br>
    You've successfully registered <strong>${businessName}</strong> on SnapDocs — your workspace is now set up and ready to go.
  </p>

  <div style="text-align: center; margin: 30px 0;">
    <a href="http://localhost:5173/dashboard" style="background-color: #5038ed; color: #ffffff; padding: 14px 26px; font-size: 16px; border-radius: 6px; text-decoration: none;">
      Go to Your Dashboard
    </a>
  </div>

  <p style="font-size: 15px; color: #4c5563; line-height: 1.6;">
    Need help getting started? You can explore our quick guides or reach out to our support team any time. We’re always here to help.
  </p>

  <ul style="color: #4c5563; font-size: 15px; padding-left: 20px; line-height: 1.6;">
    <li>📄 Upload & manage documents</li>
    <li>🔐 Share files securely with clients</li>
    <li>📬 Request documents in one click</li>
    <li>📊 Track document status in real-time</li>
  </ul>

  <p style="font-size: 14px; color: #6c757d;">
    If you didn’t sign up for SnapDocs, you can safely ignore this email.
  </p>

  <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;">

  <p style="text-align: center; font-size: 13px; color: #6c757d;">
    &copy; ${new Date().getFullYear()} SnapDocs. All rights reserved.<br>
    Need help? <a href="mailto:support@snapdocs.com" style="color: #5038ed; text-decoration: none;">Contact Support</a>
  </p>
</div>`,
  };
};
