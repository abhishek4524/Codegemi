const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send confirmation email to user
exports.sendConfirmationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Company Name" <${process.env.EMAIL_USER}>`,
      to: contactData.email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Thank you for contacting us!</h2>
          <p>Dear ${contactData.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong> ${contactData.message}</p>
          </div>
          <p>If you have any urgent inquiries, please don't hesitate to contact us directly.</p>
          <br>
          <p>Best regards,<br>Company Team</p>
        </div>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to:', contactData.email);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

// Send notification email to admin
exports.sendNotificationEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong> ${contactData.message}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent to admin');
  } catch (error) {
    console.error('Error sending notification email:', error);
  }
};