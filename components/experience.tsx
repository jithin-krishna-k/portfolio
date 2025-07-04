"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "TechStart Solutions",
      period: "Jan 2023 - Present",
      description:
        "Developed and maintained multiple web applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Designed and implemented RESTful APIs",
        "Optimized database queries and improved application performance by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Innovations Inc",
      period: "Jun 2022 - Dec 2022",
      description:
        "Started my professional journey as a junior developer, focusing on frontend development and learning backend technologies.",
      responsibilities: [
        "Developed user interfaces using React and modern CSS frameworks",
        "Collaborated with designers to implement pixel-perfect designs",
        "Participated in agile development processes",
        "Contributed to open-source projects and internal tools",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="flex justify-center">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="mt-2 sm:mt-0 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
