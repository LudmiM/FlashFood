const {transporter} = require('../../config/email')

async function sendEmail(res, toRecipient, emailSubject, emailBody) {
  try {

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toRecipient,
      subject: emailSubject,
      html: emailBody,
    };
    return await transporter.sendMail(mailOptions);
    
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Error al generar el email" });
  }
}

module.exports = {
  sendEmail
};
