// email.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', // Substitua pelo seu host SMTP
  port: 587, // Porta do servidor SMTP
  secure: false, // true para 465, false para outras portas
  auth: {
    user: 'diocontato.website@gmail.com', // Seu email
    pass: `${process.env.APP_PASS_GMAIL}`, // Sua senha
  },
});

// jajm cwyd tijh ekxk

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: to,
    to: 'diocontato.website@gmail.com',
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
};

export default sendEmail;
