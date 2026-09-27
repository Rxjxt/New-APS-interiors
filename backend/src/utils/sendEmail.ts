import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: {
    filename: string;
    content: Buffer;
  }[];
}

const sendEmail = async ({
  to,
  subject,
  html,
  attachments = [],
}: EmailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: `"NEW APS Interiors" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    attachments,
  });
};

export default sendEmail;