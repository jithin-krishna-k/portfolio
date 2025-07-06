"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Terminal, Cpu, Zap, Coffee, Brackets } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import DownloadButton from "./Button/DownloadButton"
import SocialButton from "./Button/SocialButton"
import ThemeToggle from "./Button/ThemeToggle"
import { useMediaQuery } from "@/lib/useMediaQuery"


const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/jithin-krishna-k" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jithin-krishna-k/" },
  { icon: Mail, label: "Email", href: "mailto:jithinkrishan526gmail.com" },
];

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const [typedText, setTypedText] = useState("");
  const fullText = "<MERN Stack Developer />";
  const typingSpeed = 90;
  const pauseAfterTyping = 1200;
  const pauseAfterDeleting = 500;

  useEffect(() => {
    let current = 0;
    let isDeleting = false;
    let interval: NodeJS.Timeout;

    function type() {
      if (!isDeleting) {
        setTypedText(fullText.slice(0, current + 1));
        current++;
        if (current === fullText.length) {
          setTimeout(() => {
            isDeleting = true;
            interval = setInterval(type, typingSpeed);
          }, pauseAfterTyping);
          clearInterval(interval);
          return;
        }
      } else {
        // Preserve the first character "<"
        if (current > 1) {
          setTypedText(fullText.slice(0, current - 1));
          current--;
        } else {
          setTimeout(() => {
            isDeleting = false;
            interval = setInterval(type, typingSpeed);
          }, pauseAfterDeleting);
          clearInterval(interval);
          return;
        }
      }
    }

    interval = setInterval(type, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-1 relative overflow-hidden`}
    >
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-400/30 dark:text-blue-400/30 float-animation">
          <Code className="w-12 h-12" />
        </div>
        <div
          className="absolute top-40 right-20 text-blue-500/30 dark:text-blue-300/30 float-animation"
          style={{ animationDelay: "1s" }}
        >
          <Terminal className="w-8 h-8" />
        </div>
        <div
          className="absolute bottom-40 left-20 text-blue-600/30 dark:text-blue-400/30 float-animation"
          style={{ animationDelay: "2s" }}
        >
          <Cpu className="w-10 h-10" />
        </div>
        {/* Floating Tech Stack Labels */}
        {/* <div className="absolute bottom-10 left-20 text-xs text-white bg-blue-600 px-2 py-1 rounded-full float-animation" style={{ animationDelay: "1.2s" }}>
  2 Years
</div> */}
        <div className="absolute bottom-10 left-20 text-xs text-white bg-yellow-500 px-2 py-1 rounded-full float-animation" style={{ animationDelay: "1.8s" }}>
          JavaScript
        </div>
        <div className={`absolute ${isMobile ? 'top-20 right-10 mt-10' : 'top-24 right-40'
          } text-xs text-white bg-green-500 px-2 py-1 rounded-full float-animation`}
          style={{ animationDelay: "2.6s" }}>
          Node Js
        </div>
        <div className="absolute bottom-28 right-20 text-xs text-white bg-cyan-600 px-2 py-1 rounded-full float-animation" style={{ animationDelay: "2.8s" }}>
          MongoDB
        </div>
        <div className={`absolute ${isMobile ? 'top-20 left-10' : 'top-44 left-40'
          } text-xs text-white bg-sky-500 px-2 py-1 rounded-full float-animation`}
          style={{ animationDelay: "1.6s" }}>
          React
        </div>
        <div className={`absolute ${isMobile ? 'bottom-5 right-2' : 'bottom-10 right-4'
          } text-xs text-white bg-black px-2 py-1 rounded-full float-animation`}
          style={{ animationDelay: "3.2s" }} >
          Next.js
        </div>

        <div
          className="absolute bottom-20 right-10 text-blue-400/30 dark:text-blue-300/30 float-animation"
          style={{ animationDelay: "0.5s" }}
        >
          <Zap className="w-8 h-8" />
        </div>
        <div
          className="absolute top-1/2 left-5 text-blue-500/30 dark:text-blue-400/30 float-animation"
          style={{ animationDelay: "3s" }}
        >
          <Coffee className="w-6 h-6" />
        </div>
        <div
          className="absolute top-1/3 right-5 text-blue-600/30 dark:text-blue-300/30 float-animation"
          style={{ animationDelay: "1.5s" }}
        >
          <Brackets className="w-7 h-7" />
        </div>
      </div>



      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl lg:text-7xl font-sans mb-6 text-gray-900 dark:text-gray-100">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Jithin Krishna K
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold font-mono">
            <span>{typedText}</span>
          </h2>
          <p className="text-md lg:text-3xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-5 leading-relaxed">
            Full-stack web developer focused on creating scalable solutions and intuitive user interfaces 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {/* <Button
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Code className="w-4 h-4 mr-2" />
            View My Work
          </Button> */}
          <DownloadButton name={"Download Resume"} />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-2 mb-12 lg:space-x-8"
        >
          {socialLinks.map((item, idx) => (
            <SocialButton key={idx} icon={item.icon} label={item.label} href={item.href} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            <div className="bg-blue-600 p-2 rounded-full text-white">
              <ArrowDown className="h-6 w-6" />
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
