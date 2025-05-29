"use client"

import { useEffect, useState, useRef } from "react"
import AboutSection from "../components/sections/AboutSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import ExpertiseSection from "../components/sections/ExpertiseSection"
import TypedText from "../components/TypedText"
import { Code, Facebook, Github, Instagram, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

const TelegramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 0C5.372 0 0 5.373 0 12.003 0 18.627 5.372 24 12 24c6.628 0 12-5.373 12-11.997C24 5.373 18.628 0 12 0Zm5.748 8.176-1.922 9.078c-.145.655-.532.816-1.078.508l-2.98-2.201-1.437 1.385c-.159.159-.294.294-.602.294l.216-3.063 5.579-5.037c.242-.216-.052-.336-.375-.12l-6.897 4.34-2.963-.924c-.644-.2-.656-.644.135-.955l11.571-4.46c.533-.192 1.002.12.829.949Z" />
  </svg>
)

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  // Handle entrance animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { left, top, width, height } = imageRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      // Calculate distance from center (normalized to -1 to 1)
      const moveX = ((e.clientX - centerX) / (window.innerWidth / 2)) * 15
      const moveY = ((e.clientY - centerY) / (window.innerHeight / 2)) * 15

      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="w-full px-4 md:px-0">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center md:flex-row md:justify-between py-16 md:py-0 text-center md:text-left"
      >
        {/* Left Content */}
        <div
          className={`flex flex-col space-y-8 md:w-3/5 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            The world will not improve without programmers
          </h1>

          <div className="text-lg text-white-600 h-16">
            <TypedText
              text="Hi, I'm Kristian Bas, a passionate Full Stack Developer based in the Philippines."
              speed={40}
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 justify-center md:justify-start">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-colors hover:scale-110 transform duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gray-600 transition-colors hover:scale-110 transform duration-300"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-500 transition-colors hover:scale-110 transform duration-300"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
            <a
              href="#"
              className="hover:text-green-600 transition-colors hover:scale-110 transform duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="#"
              className="hover:text-red-500 transition-colors hover:scale-110 transform duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Explore Button */}
          <div>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white text-white rounded-lg hover:bg-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <span>Explore More</span>
              <Code size={20} />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image with animations */}
        <div
          ref={imageRef}
          className={`relative w-72 h-72 md:w-96 md:h-96 mt-12 md:mt-0 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-12"}`}
          style={{
            transform: isLoaded
              ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              : "",
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 animate-spin-slow"></div>
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-reverse-spin"></div>

          {/* Image container with hover effects */}
          <div className="absolute inset-1 rounded-full overflow-hidden bg-white group transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <Image
              src="/images/profile.JPG?height=384&width=384"
              alt="Kristian Bas"
              width={384}
              height={384}
              className="rounded-full object-cover transition-all duration-500 hover:scale-110"
              priority
              onLoad={() => setIsLoaded(true)}
            />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine"></div>
          </div>

          {/* Floating particles around image */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-4 h-4 rounded-full bg-blue-400 opacity-70 animate-float-slow"></div>
            <div className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-purple-500 opacity-70 animate-float-medium"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-pink-400 opacity-70 animate-float-fast"></div>
          </div>
        </div>
      </section>

      {/* Reusable sections */}
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
    </main>
  )
}
