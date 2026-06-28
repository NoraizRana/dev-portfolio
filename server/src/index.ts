import express, { Request, Response } from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(express.json())
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://noraiz-rana.vercel.app", // apna Vercel URL yahan daalna deploy ke baad
    ],
    methods: ["POST"],
  })
)

// ── Nodemailer transporter ──────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
})

// ── Health check ────────────────────────────────────────────────────────────
app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "Noraiz Portfolio API running" })
})

// ── Contact endpoint ────────────────────────────────────────────────────────
app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, budget, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: "Name, email and message are required." })
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    res.status(400).json({ success: false, error: "Invalid email address." })
    return
  }

  try {
    // Email to YOU (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 32px; border: 1px solid #39ff14;">
          <h2 style="color: #39ff14; margin: 0 0 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #666; padding: 8px 0; width: 120px;">Name</td>
              <td style="color: #fff; padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="color: #666; padding: 8px 0;">Email</td>
              <td style="color: #39ff14; padding: 8px 0;"><a href="mailto:${email}" style="color: #39ff14;">${email}</a></td>
            </tr>
            ${budget ? `
            <tr>
              <td style="color: #666; padding: 8px 0;">Budget</td>
              <td style="color: #fff; padding: 8px 0;">${budget}</td>
            </tr>` : ""}
            <tr>
              <td style="color: #666; padding: 8px 0; vertical-align: top;">Message</td>
              <td style="color: #fff; padding: 8px 0;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>
          <p style="color: #444; font-size: 11px; margin-top: 32px;">Sent from noraizrana.dev portfolio</p>
        </div>
      `,
    })

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Noraiz Rana" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(" ")[0]}!`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 32px; border: 1px solid #39ff14;">
          <h2 style="color: #39ff14; margin: 0 0 16px;">Hey ${name.split(" ")[0]},</h2>
          <p style="color: #aaa; line-height: 1.7;">
            Thanks for reaching out. I've received your message and will get back to you within <span style="color: #39ff14;">24–48 hours</span>.
          </p>
          <p style="color: #aaa; line-height: 1.7;">
            In the meantime, feel free to check out my work on 
            <a href="https://github.com/NoraizRana" style="color: #39ff14;">GitHub</a>.
          </p>
          <p style="color: #444; margin-top: 32px; font-size: 11px;">— Noraiz Rana · MERN Stack & AI Developer · Sargodha, PK</p>
        </div>
      `,
    })

    res.status(200).json({ success: true, message: "Email sent successfully." })
  } catch (err) {
    console.error("Email error:", err)
    res.status(500).json({ success: false, error: "Failed to send email. Try again later." })
  }
})

// ── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})