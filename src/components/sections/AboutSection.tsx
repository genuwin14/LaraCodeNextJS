"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Globe,
  Layers,
  Coffee,
  Github,
  Figma,
  Server,
  Smartphone,
  Terminal,
  Zap,
  FileCode,
} from "lucide-react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const techStack = [
    { name: "JavaScript", icon: <Code className="w-5 h-5 text-yellow-400" />, color: "border-yellow-400" },
    { name: "Python", icon: <Terminal className="w-5 h-5 text-blue-500" />, color: "border-blue-500" },
    { name: "React", icon: <Zap className="w-5 h-5 text-blue-400" />, color: "border-blue-400" },
    { name: "Node.js", icon: <Server className="w-5 h-5 text-green-500" />, color: "border-green-500" },
    { name: "Java", icon: <Coffee className="w-5 h-5 text-red-500" />, color: "border-red-500" },
    { name: "Laravel", icon: <Globe className="w-5 h-5 text-red-600" />, color: "border-red-600" },
    { name: "GitHub", icon: <Github className="w-5 h-5 text-gray-700" />, color: "border-gray-700" },
    { name: "Bootstrap", icon: <Layers className="w-5 h-5 text-purple-600" />, color: "border-purple-600" },
    { name: "CodeIgniter", icon: <FileCode className="w-5 h-5 text-orange-500" />, color: "border-orange-500" },
    { name: ".NET", icon: <Smartphone className="w-5 h-5 text-blue-600" />, color: "border-blue-600" },
    { name: "PHP", icon: <Code className="w-5 h-5 text-purple-500" />, color: "border-purple-500" },
    { name: "MySQL", icon: <Database className="w-5 h-5 text-blue-700" />, color: "border-blue-700" },
    { name: "Figma", icon: <Figma className="w-5 h-5 text-pink-500" />, color: "border-pink-500" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.4,
      },
    },
  }

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const dividerVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen w-full py-16 relative overflow-hidden from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>

      {/* Content container with edge-to-edge design */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-12 relative z-10"
        >
          {/* About Me Header */}
          <motion.div variants={itemVariants} className="space-y-3 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[180px] h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Hello! I'm Kristian, a passionate Full Stack Developer who loves building innovative web applications and
              solving complex problems with code. With a strong foundation in both front-end and back-end technologies,
              I strive to create seamless, user-friendly experiences that make a difference.
            </p>
          </motion.div>

          {/* Two-column layout for Tech Stack and Goals */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Left Column - Tech Stack */}
            <div className="w-full lg:w-1/2 lg:pr-8">
              <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
              <motion.div
                variants={techStackVariants}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
              >
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={techItemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className={`flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border-l-4 ${tech.color} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <div className="p-2 rounded-md bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-xs font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Center Divider - Only visible on lg screens and up */}
            <div className="hidden lg:flex items-center justify-center relative">
              <motion.div
                variants={dividerVariants}
                className="h-full w-px bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 transform origin-top"
              ></motion.div>

              {/* Decorative elements on the divider */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/80"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-400"></div>
            </div>

            {/* Right Column - Goals */}
            <div className="w-full lg:w-1/2 lg:pl-8">
              <h3 className="text-2xl font-semibold mb-6">Goals</h3>

              {/* Mobile divider - only visible on smaller screens */}
              <div className="block lg:hidden w-full h-px my-4 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                <p className="text-lg leading-relaxed pl-6 text-slate-300">
                  My goal is to develop web applications that not only contribute to open-source platforms but also
                  serve as a means to refine and advance my programming skills. I aim to collaborate with a global
                  community of developers, gaining valuable insights and experience while creating impactful solutions.
                </p>
                <p className="text-lg leading-relaxed pl-6 mt-4 text-slate-300">
                  Through continuous learning and hands-on practice, I intend to build my technical expertise, improve
                  my problem-solving abilities, and stay updated with the latest industry trends.
                </p>

                {/* Additional decorative element */}
                <div className="mt-8 pl-6">
                  <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border-l-4 border-purple-500">
                    <p className="italic text-lg text-slate-200">
                      {"The only way to do great work is to love what you do."}
                    </p>
                    <p className="text-right mt-2 text-sm opacity-80">— Steve Jobs</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
