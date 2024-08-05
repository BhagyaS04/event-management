const expressAsyncHandler = require ("express-async-handler")
const dotenv = require ("dotenv")
const nodemailer = require ("nodemailer")
const User = require ('./userData')

dotenv.config();

const sendEmail = async ({ subject, message }) => {

    // Fetch users who want to receive emails
    const users = await User.find({ wantMail: true });

  if (users.length === 0) {
    return { status: 200, message: 'No users opted in for emails' };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Send email to each user
    const emailPromises = users.map(user => {
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: user.email,
        subject: subject,
        text: message
      };
      console.log (user)

      return transporter.sendMail(mailOptions);
    });

    // Wait for all emails to be sent
    await Promise.all(emailPromises);

    console.log('Emails sent successfully to all users');
    return { status: 200, message: 'Emails sent successfully to all users' };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw new Error('Error sending emails: ' + error.message);
  }
};
    

module.exports = {sendEmail}