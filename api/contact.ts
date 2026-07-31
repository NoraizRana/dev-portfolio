import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, budget, message, website } = req.body ?? {};

  // Honeypot: bots fill hidden fields, real users never do
  if (website) {
    console.log(`[honeypot] trip — name="${name}" email="${email}" website="${website}"`);
    return res.status(200).json({ success: true });
  }

  // All user-supplied fields must be strings
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (budget !== undefined && typeof budget !== "string")
  ) {
    return res.status(400).json({ success: false, error: "Invalid request." });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ success: false, error: "Invalid request." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid request." });
  }

  if (name.length > 100) {
    return res.status(400).json({ success: false, error: "Invalid request." });
  }

  if (message.length > 5000) {
    return res.status(400).json({ success: false, error: "Invalid request." });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeBudget = budget ? escapeHtml(budget.trim()) : "Not provided";
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Portfolio Message from ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Budget:</strong> ${safeBudget}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Failed to send email." });
  }
}
