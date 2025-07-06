"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function Experience() {
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Inloops Innovations",
    period: "Jan 2024 – Present",
    description:
      "Working at a fast-paced product-based startup, contributing to the development of dynamic booking and scheduling platforms using scalable full-stack technologies.",
    responsibilities: [
      "Architected and developed real-time booking systems supporting multiple services and resource combinations",
      "Built reusable React components and dynamic slot selectors with time-based validation",
      "Integrated authentication, role-based access, and API security in Next.js",
      "Collaborated on HTMX-powered micro frontends for lightweight interactive features",
      "Optimized MongoDB queries and implemented message queues using RabbitMQ for background jobs",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "HTMX", "Tailwind CSS", "RabbitMQ"],
  },
  {
    title: "Junior Full Stack Developer",
    company: "DevHouse",
    period: "Jul 2023 – Dec 2023",
    description:
      "Joined as an intern and transitioned to a junior full-stack role, contributing to the development and maintenance of queue and booking management systems.",
    responsibilities: [
      "Developed REST APIs and backend logic for queue and resource management modules",
      "Implemented user-facing features using React and integrated real-time status updates",
      "Contributed to internal tools for slot validation, availability checks, and admin dashboards",
      "Participated in code reviews, team planning, and agile development cycles",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
  },
];

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
              key={experience.title + experience.company}
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
  );
}

