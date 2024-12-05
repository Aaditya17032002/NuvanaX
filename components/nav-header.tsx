"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function NavHeader() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  )
  const textColor = useTransform(scrollY, [0, 100], ["#ffffff", "#000000"])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isClient) return null

  return (
    <motion.header
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div style={{ color: textColor }} className="text-2xl font-bold">
          NuvanaX
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          {["features", "testimonials", "pricing", "contact"].map((item) => (
            <motion.button
              key={item}
              style={{ color: textColor }}
              className="text-sm font-medium capitalize hover:opacity-70 transition-opacity"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </motion.button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}

