// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailToMe = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `📬 Nouveau message de ${name}`,
    text: `
      Nom: ${name}
      Email: ${email}
      Message:
      ${message}
    `,
    html: `
    <div style="font-family: 'Segoe UI', sans-serif; background: #f2f4f6; padding: 20px;">
      <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #051654, #0b1f84); padding: 20px; text-align: center;">
          <img src="https://mkdynamics.be/wp-content/uploads/2024/03/2.png"
               alt="MKDynamics Logo"
               style="height: 50px; margin-bottom: 10px;" />
          
        </div>

        <!-- Body -->
        <div style="padding: 20px; color: #333;">
          <h2 style="font-size:18px; margin-bottom:10px;">Contact Details</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#0b1f84; text-decoration:none;">${email}</a></p>

          <h2 style="font-size:18px; margin:20px 0 10px;">Message</h2>
          <div style="background:#f0f4ff; padding:15px; border-left:4px solid #051654; border-radius:4px; line-height:1.5;">
            ${message.replace(/\n/g, '<br />')}
          </div>

        
        </div>

        <!-- Footer -->
        <div style="background:#fafafa; text-align:center; padding:10px; font-size:12px; color:#888;">
          MKDynamics | Your Digital Partner<br/>
          <a href="https://www.mkdynamics.be" style="color:#051654; text-decoration:none;">www.mkdynamics.be</a>
        </div>
      </div>
    </div>
  `,
  };

  // Mail de confirmation pour l'expéditeur (le visiteur)
  const mailToSender = {
  from: process.env.GMAIL_USER,
  to: email,
  subject: "MKDynamics – Acknowledgment of Receipt",
  html: `
    <div style="font-family: 'Poppins', sans-serif; padding: 40px 20px; background: #f2f4f6;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">

        <!-- Header with gradient and logo -->
        <div style="text-align: center; background: linear-gradient(135deg, #051654, #0b1f84); padding: 30px 20px;">
          <img src="https://mkdynamics.be/wp-content/uploads/2024/03/2.png"
               alt="MKDynamics"
               style="width: 120px; margin-bottom: 10px;" />
          <h2 style="margin: 0; color: #fff;">Acknowledgment of Receipt</h2>
        </div>

        <!-- Body -->
        <div style="padding: 30px 20px; color: #333;">
          <p style="font-size: 16px;">Hello <strong>${name}</strong>,</p>

          <p>Thank you for contacting <strong>MKDynamics</strong>. We have received your message and our team will review your request as soon as possible.</p>

          <p>If your inquiry requires immediate attention, please feel free to call us. We will get back to you shortly with the information or assistance you need.</p>

          <p>Thank you for your trust. We look forward to working with you soon.</p>

          <p style="margin-top: 30px;">Sincerely,<br /><strong>The MKDynamics Team</strong></p>

          <!-- Message summary -->
          <div style="margin: 30px 0;">
            <h3 style="color: #051654;">📝 Message Summary:</h3>
            <div style="background: #f0f4ff; padding: 15px 20px; border-left: 4px solid #051654; border-radius: 8px; font-size: 15px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>

          <!-- Website link -->
          <div style="background:#fafafa; text-align:center; padding:10px; font-size:12px; color:#888;">
            MKDynamics | Your Digital Partner<br/>
            <a href="https://www.mkdynamics.be" style="color:#051654; text-decoration:none;">www.mkdynamics.be</a>
          </div>
        </div>
      </div>
    </div>
  `,
};

  try {
    // Envoie les 2 mails en parallèle
    await Promise.all([
      transporter.sendMail(mailToMe),
      transporter.sendMail(mailToSender),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur d'envoi d'email :", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
