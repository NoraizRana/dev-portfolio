import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const { name, email, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email and message are required.",
    });
  }

  try {
    // Email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Budget:</strong> ${budget || "Not provided"}</p>

          <p><strong>Message:</strong></p>

          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    // Auto Reply
    await transporter.sendMail({
      from: `"Noraiz Rana" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px">
          <h2>Hi ${name},</h2>

          <p>Thank you for contacting me.</p>

          <p>I have received your message and I'll get back to you within 24–48 hours.</p>

          <br>

          <p>
            Regards,<br>
            <strong>Noraiz Rana</strong>
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: "Failed to send email.",
    });
  }
}