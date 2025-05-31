import type React from "react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Kristian | Portfolio",
  description: "Web Developer Portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/laracode-logo.png" />
      </head>
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <ScrollProgress />

        <main className="max-w-6xl mx-auto px-4 py-8 pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
