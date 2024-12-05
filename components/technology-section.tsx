"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const technologies = [
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    description: "Building interactive UIs with the power of components",
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    description: "The React framework for production-grade applications",
  },
  {
    name: "Node.js",
    icon: "📦",
    color: "#339933",
    description: "JavaScript runtime built on Chrome's V8 engine",
  },
  {
    name: "C#",
    icon: "#",
    color: "#512BD4",
    description: "Powerful backend development with .NET ecosystem",
  },
  {
    name: "SQL",
    icon: "🗄️",
    color: "#336791",
    description: "Robust database management and querying",
  },
]

export default function TechnologySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-black to-blue-950 relative overflow-hidden"
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
            Technologies We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Master
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge technologies that power our innovative solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TooltipProvider key={tech.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <Card
                        className={`p-6 cursor-pointer transition-all duration-300 ${
                          hoveredTech === tech.name
                            ? "bg-blue-900/50 scale-105"
                            : "bg-blue-950/50"
                        } border-blue-900/50 backdrop-blur-sm hover:bg-blue-900/50`}
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">{tech.icon}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {tech.name}
                            </h3>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl bg-blue-950/30 backdrop-blur-sm border border-blue-900/50 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Full-Stack Excellence
                  </h3>
                  <p className="text-gray-300">
                    From front-end to back-end, we deliver comprehensive solutions
                    using cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

