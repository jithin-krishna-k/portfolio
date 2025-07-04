"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { submitContactForm } from "@/app/actions"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="flex justify-center">
              <Send className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Feel free to reach out to me for any inquiries or collaboration opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">jithinkrishna526@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300">+919744829035</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Palakkad,Kerala</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                  Send Message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {submitted
                    ? "Thank you for your message! I'll get back to you soon."
                    : "I'd love to hear from you. Send me a message and I'll respond as soon as possible."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form action={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="border-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="border-gray-300 dark:border-gray-600"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        className="border-gray-300 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        className="min-h-[120px] border-gray-300 dark:border-gray-600"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600"
                    >
                      Send Another Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
