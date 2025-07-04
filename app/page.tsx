"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import Loader from "@/components/Button/LoadingButton"
import { BackgroundLines } from "@/components/ui/background-lines"
import FooterButton from "@/components/Button/FooterButtons"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)

    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "auto"
    }
  }, [loading])

  if (!isHydrated) return null

  if (loading) return <Loader />

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BackgroundLines svgOptions={{ duration: 12 }}>
      <Hero />
      </BackgroundLines>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <FooterButton />
    </main>
  )
}
