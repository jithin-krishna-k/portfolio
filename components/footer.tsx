import { Github, Linkedin, Mail, Download } from "lucide-react"
import FooterButton from "./Button/FooterButtons"


const footerButtons = [
  {
    icon: <Github className="h-6 w-6" />,
    name: "GitHub",
    link: "https://github.com/",
    socialKey: "github",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    name: "LinkedIn",
    link: "https://linkedin.com/",
    socialKey: "linkedin",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    name: "Email",
    link: "mailto:you@example.com",
    socialKey: "mail",
  },
  {
    icon: <Download className="h-6 w-6" />,
    name: "Resume",
    link: "/resume.pdf",
    socialKey: "resume",
  },
]


export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {footerButtons.map((btn) => (
              <FooterButton
                key={btn.name}
                {...btn}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-10 dark:text-gray-400">
              © {new Date().getFullYear()} Jithin Krishna K. All rights reserved.
            </p>
            {/* <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Built with Next.js, Tailwind CSS, and deployed on Vercel
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
