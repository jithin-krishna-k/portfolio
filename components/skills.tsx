"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Palette, Server, Database, Wrench, Users, Layers } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "blue",
      skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "gray",
      skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap", "Sass"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "blue",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Socket.io"],
    },
    {
      title: "Database",
      icon: Database,
      color: "gray",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "blue",
      skills: ["Git", "Docker", "AWS", "Vercel", "Postman", "Jest"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "gray",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
    },
  ]

  const getColorClasses = (color: string) => {
    if (color === "blue") {
      return {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700",
        text: "text-blue-600 dark:text-blue-400",
        gradient: "from-blue-500 to-blue-600",
        badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      }
    } else {
      return {
        bg: "bg-gray-50 dark:bg-gray-800",
        border: "border-gray-200 dark:border-gray-700",
        text: "text-gray-600 dark:text-gray-400",
        gradient: "from-gray-600 to-gray-700",
        badge: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700",
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="flex justify-center">
              <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full group hover:shadow-xl transition-all duration-300 border-2 ${colors.border} hover:scale-105 bg-white dark:bg-gray-900`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <category.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <CardTitle
                          className={`text-xl bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                        >
                          {category.title}
                        </CardTitle>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className={`${colors.text} font-bold text-sm`}>{category.skills.length}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`text-sm hover:scale-105 transition-all duration-300 cursor-default ${colors.badge}`}
                          style={{
                            animationDelay: `${skillIndex * 0.1}s`,
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${Math.min(90, category.skills.length * 15)}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
