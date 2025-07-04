"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FolderOpen } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "ENTOWN",
      description:
        "A full-stack service discovery and booking application. Users can search for organizations, view available services, and book slots in real-time. Includes dynamic calendar integration, user authentication, and admin dashboards.",
      image: "https://inloops.in/wp-content/uploads/2024/10/20240805-155359-768x613.jpg",
      technologies: ["React", "HTMX", "Node.js", "MongoDB", "Express", "JWT", "Prsima"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "QUFIX",
      description:
        "A queue-calling notification system is a technology that helps avoid waiting in lines by allowing customers to be notified when it’s their turn in a queue.",
      image: "https://inloops.in/wp-content/uploads/2024/10/generative-ai-group-individuals-waiting-queue-job-interview-office-personnel-anticipating-invitation-from-their-boss_28914-18876-768x430.jpg",
      technologies: ["React", "TypeScript", "RabbitMQ", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "MY-SUPREME",
      description:
        "An e-commerce storefront built with GraphCommerce and Magento. Includes product listing, filtering, wishlist, secure checkout, and Google Maps API integration for address autocomplete.",
      image: "https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["Next.js", "GraphCommerce", "Magento", "GraphQL", "MUI", "Google Maps API"],
      githubUrl: "#",
      liveUrl: "https://my-supreme-fe.vercel.app",
    },
    {
      title: "PIN-BLOB",
      description:
        "A modern Pinterest-style image gallery app built with Next.js and Tailwind CSS. Supports secure image uploads and management using Vercel Blob Storage with a sleek, responsive UI.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGludGVyZXN0fGVufDB8fDB8fHww",
      technologies: ["Next.js", "Tailwind CSS", "Vercel Blob"],
      githubUrl: "https://github.com/jithin-krishna-k/pinBlob",
      liveUrl: "https://pin-blob.vercel.app",
    },
    {
      title: "MERN-BOOK_STORE",
      description:
        "A simple MERN stack bookstore application built for practicing CRUD operations. Users can add, view, edit, and delete books with basic form validation and responsive UI.",
      image: "https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9vayUyMHN0b3JlfGVufDB8fDB8fHww",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    }
  ]


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="flex justify-center">
              <FolderOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-blue-400 bg-clip-text text-transparent">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                     
                    >
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
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
