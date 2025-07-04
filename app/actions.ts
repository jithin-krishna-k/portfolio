"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Here you would typically send the email using a service like:
  // - Resend
  // - SendGrid
  // - Nodemailer
  // - Or save to a database

  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  })

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}
