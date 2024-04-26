const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const ordenCliente =(fullname)=> `<h1>Hola ${fullname},</h1>
      <h2>Gracias por realizar una comprar en FlashFood! Te adjuntmos el recibo de tu comprar</h2>
      
      Buen dia,
      FlashFood`;

const pedidoComercio =(fullname)=> `<h1>Hola ${fullname},</h1>
      <h2>Recibiste una orden de:</h2>
      
      Buen dia,
      FlashFood`;

const cancelarPedido =(invoiceId,status,fullname)=> `<h1>Hola ${fullname},</h1>
      <h2>La orden codigo fue cancelada</h2>
      
      Buen dia,
      FlashFood`;

const contactenos =(invoiceId,status,fullname)=> `<h1>Hola ${fullname},</h1>
      <h2>We want inform you that your invoice #${invoiceId} has been status updated to ${status}!</h2>
      
      Buen dia,
      FlashFood`;

module.exports = { transporter, cancelarPedido, ordenCliente, pedidoComercio, contactenos }