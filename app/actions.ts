"use server"

import nodemailer from "nodemailer"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

const mailOptions = {
  from: `"Jithin’s Portfolio" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_RECEIVER_EMAIL,
  replyTo: email,
  subject: `Jithin’s Portfolio: ${subject}`,
  html: `
  <div style="
    font-family: 'Segoe UI', Roboto, sans-serif;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    color: #333;
    line-height: 1.6;
    max-width: 600px;
    margin: auto;
    border: 1px solid #e0e0e0;
  ">
    <h2 style="color: #1e3a8a; margin-top: 0;">📩 New Portfolio Message</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
    <p><strong>Subject:</strong> ${subject}</p>

    <div style="margin-top: 20px;">
      <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
      <div style="background: #fff; padding: 16px; border-radius: 6px; border: 1px solid #ddd; white-space: pre-wrap;">
        ${message.replace(/\n/g, "<br/>")}
      </div>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;" />

    <p style="font-size: 14px; color: #6b7280;">
      Sent from the contact form on <a href="https://jithinkrishna.netlify.app/" style="color: #2563eb;">jithinkrishna portfolio</a>.
    </p>
  </div>
  `,
}


  try {
    await transporter.sendMail(mailOptions)
  } catch (err) {
    console.error("Email sending failed:", err)
    throw new Error("Failed to send email.")
  }

 const telegramMessage = `
📩 *New Contact Form Submission*

👤 *Name:* \`${name}\`
📧 *Email:* \`${email}\`
📝 *Subject:* *${subject}*

💬 *Message:*
────────────────────────
${message}
────────────────────────

🕐 _Sent via Jithin’s Portfolio_
`


  try {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })
  } catch (err) {
    console.error("Telegram notification failed:", err)
  }
}
