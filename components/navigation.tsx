"use client"

import { useState, useEffect } from "react"


export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

return (
  <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
    bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg 
    border border-white/30 dark:border-gray-700 
    rounded-full shadow-lg z-50 px-4 py-1">
    <div className="flex items-center space-x-1">
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === item.href.substring(1)
              ? "text-white bg-blue-600 dark:bg-blue-500 shadow-md"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/10 dark:hover:bg-gray-700/30"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </nav>
)

}
