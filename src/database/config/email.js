const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const ordenCliente =(fullname)=> `<h1>Hello ${fullname},</h1>
      <h2>Thank you for join us on our platform. We are excited to have you as a Medic!</h2>
      
      Best regards,
      Klinika Mercharcovz`;

const pedidoComercio =(fullname)=> `<h1>Hello ${fullname},</h1>
      <h2>Thank you for join us on our platform. We are excited to have you as a Patient!</h2>
      
      Best regards,
      Klinika Mercharcovz`;

const cancelarPedido =(invoiceId,status,fullname)=> `<h1>Hello ${fullname},</h1>
      <h2>We want inform you that your invoice #${invoiceId} has been status updated to ${status}!</h2>
      
      Best regards,
      Klinika Mercharcovz`;

const contactenos =(invoiceId,status,fullname)=> `<h1>Hello ${fullname},</h1>
      <h2>We want inform you that your invoice #${invoiceId} has been status updated to ${status}!</h2>
      
      Best regards,
      Klinika Mercharcovz`;

module.exports = { transporter, cancelarPedido, ordenCliente, pedidoComercio, contactenos }