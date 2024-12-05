"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import {
  Cpu,
  Workflow,
  Zap,
  BarChart,
} from "lucide-react"

const steps = [
  {
    icon: Cpu,
    title: "AI-Powered Analysis",
    description:
      "Our advanced AI algorithms analyze your business needs and provide tailored solutions.",
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description:
      "Integrate our solutions effortlessly into your existing workflow with zero downtime.",
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description:
      "Experience immediate improvements in efficiency and productivity.",
  },
  {
    icon: BarChart,
    title: "Real-Time Analytics",
    description:
      "Monitor and optimize performance with comprehensive real-time analytics.",
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Works
              </span>
            </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our streamlined process that transforms your business
            operations
          </p>
        </motion.div>
        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-blue-950/50 border-blue-900/50 backdrop-blur-sm hover:bg-blue-900/50 transition-colors duration-300">
                <div className="mb-4">
                  <step.icon className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

