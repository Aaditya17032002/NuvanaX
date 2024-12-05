"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Brain, Rocket, Shield, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Harness the power of artificial intelligence to make smarter business decisions.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "Get up and running quickly with our streamlined implementation process.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security measures to protect your sensitive data.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "Stay ahead of the curve with cutting-edge technology solutions.",
  },
]

export function ValueProposition() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Simplifying{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Complexity
              </span>
              <br />
              One Solution at a Time
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We transform complex business challenges into elegant, efficient
              solutions that drive growth and innovation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-blue-950/50 border-blue-900/50 backdrop-blur-sm hover:bg-blue-900/50 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Value Proposition"
                width={600}
                height={600}
                className="relative z-10 rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

