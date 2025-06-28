import { NextResponse } from 'next/server';
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const subject = formData.get("subject") as string;
  const firstname = formData.get("firstname") as string;
  const email = formData.get("email") as string;
  const location = formData.get("location") as string;
  const type = formData.get("type") as string;
  const resume = formData.get("resume") as File | null;

  const message = `
    Department: ${subject}
    Name: ${name}
    Firstname: ${firstname}
    Email: ${email}
    Location: ${location}
    Type: ${type}
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GODADDY_USER,
      pass: process.env.GODADDY_PASS,
    },
  });

  let attachments = [];
if (resume && typeof resume === "object") {
  const file = resume as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  attachments.push({
    filename: file.name,
    content: buffer,
    contentType: file.type,
  });
}

  const mailToMe = {
    from: process.env.GODADDY_USER,
    to: process.env.GODADDY_USER,
    subject: ` New Application from ${name} for job`,
    text: message,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background: #f2f4f6; padding: 20px;">
        <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          <div style="padding: 20px; color: #333;">
            <h2 style="font-size:18px; margin-bottom:10px;">Application Details</h2>
            <p><strong>Department:</strong> ${subject}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Firstname:</strong> ${firstname}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#0b1f84; text-decoration:none;">${email}</a></p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Type:</strong> ${type}</p>
          </div>
          <div style="background:#fafafa; text-align:center; padding:10px; font-size:12px; color:#888;">
            MKDynamics | Your Digital Partner<br/>
            <a href="https://www.mkdynamics.be" style="color:#051654; text-decoration:none;">www.mkdynamics.be</a>
          </div>
        </div>
      </div>
    `,
    attachments,
  };

  const mailToSender = {
    from: `"MKDynamics for applying" <${process.env.GODADDY_USER}>`,
    to: email,
    subject: "Thanks for applying !",
    html: `
      <div style="font-family: 'Poppins', sans-serif; padding: 40px 20px; background: #f2f4f6;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <div style="padding: 30px 20px; color: #333;">
            <p style="font-size: 16px;">Hello <strong>${name}</strong>,</p>
            <p>Thank you for applying to <strong>MKDynamics</strong>. We have received your application and our team will review your request as soon as possible.</p>
            <p>If your inquiry requires immediate attention, please feel free to call us. We will get back to you shortly with the information or assistance you need.</p>
            <p>Thank you for your trust. We look forward to working with you soon.</p>
            <p style="margin-top: 30px;">Sincerely,<br /><strong>The MKDynamics Team</strong></p>
            <div style="margin: 30px 0;">
              <h3 style="color: #051654;">📝 Application Summary:</h3>
              <div style="background: #f0f4ff; padding: 15px 20px; border-left: 4px solid #051654; border-radius: 8px; font-size: 15px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br />")}
              </div>
            </div>
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