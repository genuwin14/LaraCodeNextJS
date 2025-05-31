"use client"

import { useEffect, useState } from "react"
import { Mail, Coffee, Heart, ArrowUp } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    // Show scroll to top button when user scrolls down
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content - 3 Columns */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Column 1: Brand & Copyright */}
          <div className="space-y-6 text-center">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Kristian Bas
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
            </div>

            <div className="text-gray-400 text-sm">
              <span>© 2025 Kristian Bas. All rights reserved.</span>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div
            className={`space-y-6 text-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <a href="mailto:kristianbas14@gmail.com" className="text-sm hover:underline">
                  kristianbas14@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h5 className="text-base font-medium text-white mb-2">Kristian Bas</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-medium text-blue-400">Collaboration:</span> Let&apos;s work together on exciting
                projects! Feel free to reach out.
              </p>
            </div>
          </div>

          {/* Column 3: Support & Credits */}
          <div
            className={`space-y-6 text-center transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <div className="space-y-4">
                {/* QR Code Image */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative group">
                    <img
                      src="/images/QRGcash.jpg?height=120&width=120"
                      alt="Instant Pay QR Code"
                      className="w-24 h-24 rounded-lg border-2 border-gray-700 hover:border-blue-400 transition-colors duration-300 group-hover:scale-105 transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs text-gray-400">Scan to donate</span>
                </div>

                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors group text-sm"
                >
                  <Coffee className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:translate-x-1 transition-transform">Buy me a coffee ☕</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700/50">
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-blue-400">Designed & Developed by</span>{" "}
                <span className="font-medium text-white">Kristian Bas</span> <span className="text-gray-500">•</span>{" "}
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors hover:underline">
                  Portfolio
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className={`border-t border-gray-700/50 pt-8 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </footer>
  )
}

export default Footer
