"use client"

import { useEffect, useState, useRef } from "react"

interface TypedTextProps {
  text: string
  speed?: number
  className?: string
}

export default function TypedText({ text, speed = 50, className = "" }: TypedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      intervalRef.current = setInterval(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    } else if (currentIndex >= text.length) {
      setIsTyping(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [currentIndex, isTyping, speed, text])

  return <span className={className}>{displayText}</span>
}
