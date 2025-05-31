"use client"

import { useEffect, useRef, useState } from "react"

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  // Remove the cardRefs as we don't need them for the animation

  const expertiseData = [
    {
      title: "Frontend Development",
      description: "Building intuitive user interfaces using HTML, CSS, JavaScript, and modern frameworks.",
      icon: "🎨",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Backend Development",
      description: "Creating scalable and secure backend logic using PHP, Python, or Node.js.",
      icon: "⚙️",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Database Design",
      description: "Designing and optimizing databases using MySQL, PostgreSQL, or SQLite.",
      icon: "🗄️",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "API Development",
      description: "Creating and integrating RESTful APIs to connect applications and services.",
      icon: "🔗",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Responsive Design",
      description: "Ensuring that web applications work well on all devices and screen sizes.",
      icon: "📱",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Clean Code Practices",
      description: "Writing maintainable, readable, and efficient code for long-term scalability.",
      icon: "✨",
      gradient: "from-emerald-500 to-green-600",
    },
  ]

  useEffect(() => {
    // Initialize animated cards state
    setAnimatedCards(new Array(expertiseData.length).fill(false))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Trigger staggered card animations
          expertiseData.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 200) // 200ms delay between each card
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reset animations on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsVisible(false)
      setAnimatedCards(new Array(expertiseData.length).fill(false))
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 py-20 relative overflow-hidden"
    >
      {/* Header */}
      <div
        className={`text-center space-y-6 mb-16 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="inline-block">
          <h2 className="text-4xl font-bold relative inline-block">
            Expertise
            <span
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 delay-500 ${
                isVisible ? "w-[180px] opacity-100" : "w-0 opacity-0"
              }`}
            ></span>
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-slate-300">
          Crafting digital experiences with cutting-edge technologies and best practices
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            // Remove the ref attribute that was causing the TypeScript error
            className={`group relative transition-all duration-800 ease-out ${
              animatedCards[index]
                ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                : `opacity-0 ${
                    index % 3 === 0
                      ? "translate-x-[-100px]"
                      : index % 3 === 1
                        ? "translate-y-[50px]"
                        : "translate-x-[100px]"
                  } scale-95`
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Card */}
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-700/50 h-full group-hover:scale-105 group-hover:-translate-y-2">
              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${expertise.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}
                >
                  {expertise.icon}
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${expertise.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-400 transition-all duration-500">
                  {expertise.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {expertise.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${expertise.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div
        className={`text-center mt-16 transition-all duration-1000 delay-1500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Button commented out as per your code */}
      </div>
    </section>
  )
}

export default ExpertiseSection
