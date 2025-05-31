"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft, Construction, Wrench, Clock } from "lucide-react"

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedElements, setAnimatedElements] = useState<boolean[]>([])

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true)

    // Stagger element animations
    const elements = [0, 1, 2, 3, 4] // Number of animated elements
    elements.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedElements((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, index * 200)
    })
  }, [])

  return (
    <div className="min-h-screen rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            animatedElements[0] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/images/laracode-logo.png"
              alt="LaraCode Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              LaraCode
            </span>
          </div>
        </div>

        {/* 404 Number */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-200 ${
            animatedElements[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 leading-none">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        {/* Construction Icon */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-400 ${
            animatedElements[2] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Construction className="w-12 h-12 text-white animate-bounce" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-20 animate-ping mx-auto"></div>
          </div>
        </div>

        {/* Main Message */}
        <div
          className={`mb-12 transition-all duration-1000 ease-out delay-600 ${
            animatedElements[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Service Under Construction</h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            The service you&apos;re looking for is currently being built with care and attention to detail.
          </p>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <Wrench className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">In Development</h3>
              <p className="text-gray-400 text-sm">Building amazing features</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-gray-400 text-sm">Expected launch Q2 2025</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <Construction className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Quality Focus</h3>
              <p className="text-gray-400 text-sm">Ensuring the best experience</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center transition-all duration-1000 ease-out delay-800 ${
            animatedElements[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-700/50 transform hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Contact Info */}
        <div
          className={`mt-16 transition-all duration-1000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-sm mb-4">Need immediate assistance? Feel free to reach out!</p>
          <a
            href="mailto:kristianbas14@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:underline"
          >
            kristianbas14@gmail.com
          </a>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-80 delay-2000"></div>
      </div>
    </div>
  )
}

export default NotFound
