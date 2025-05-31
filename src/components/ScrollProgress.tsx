"use client"

import { useEffect, useState } from "react"

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Side Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative">
          {/* Progress Track */}
          <div className="w-1 h-32 bg-white/20 rounded-full backdrop-blur-sm"></div>

          {/* Progress Fill */}
          <div
            className="absolute top-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-150 ease-out"
            style={{ height: `${(scrollProgress / 100) * 128}px` }}
          ></div>

          {/* Progress Dot */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full shadow-lg transition-all duration-150 ease-out"
            style={{ top: `${(scrollProgress / 100) * 120}px` }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
          <span className="text-white/70 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </>
  )
}

export default ScrollProgress
