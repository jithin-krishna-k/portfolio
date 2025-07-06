"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Download, Code2, Database, User } from "lucide-react"
import Image from "next/image"

export function About() {
  const scrollToAbout = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex justify-center">
              <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card id="about" className="border-2 border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="relative w-64 h-90 mx-auto md:mx-0">
                    <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden shadow-xl ring-2 ring-blue-400/30">
                      <Image
                        src="/image/jithinkrishna.jpg"
                        alt="Profile"
                        width={256}
                        height={200}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Floating stats */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-3 shadow-lg pulse-glow">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                      <div className="text-xs text-blue-500 dark:text-blue-400">Years Exp</div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 shadow-lg pulse-glow">
                    <div className="text-center">
                      <div className={`text-2xl font-bold text-gray-800 dark:text-gray-200`}>15+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                      Passionate Full Stack Developer
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      I&apos;m a passionate Full Stack MERN Developer with 2 years of experience creating dynamic and
                      responsive web applications. I specialize in JavaScript, React, Node.js, and MongoDB, with a
                      strong focus on writing clean, efficient code.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* JavaScript Card */}
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-blue-700 dark:text-blue-300">JavaScript</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">Expert</div>
                      </div>
                    </div>

                    {/* React Card */}
                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-300">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                        <Database className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-700 dark:text-gray-300">React</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Advanced</div>
                      </div>
                    </div>
                  </div>


                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    My journey in web development started with a curiosity for how things work behind the scenes. I love
                    solving complex problems and turning ideas into reality through code. I&apos;m always eager to learn new
                    technologies and improve my skills.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={scrollToAbout} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                    <a href="/resume/jithinkrishna.pdf" download>
                      <Button
                        variant="outline"
                        className="flex-1 w-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 bg-transparent"
                      >
                        <Download className={"w-4 h-4 mr-2"} />
                        Download CV
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
