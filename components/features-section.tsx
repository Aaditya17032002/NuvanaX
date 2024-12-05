"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Cloud,
  Shield,
  Zap,
  BarChart,
  RefreshCw,
  Lock,
} from "lucide-react"

const features = [
  {
    icon: Cloud,
    title: "Cloud-Native",
    description:
      "Built for the modern cloud, ensuring scalability and reliability.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with end-to-end encryption and compliance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with sub-second response times.",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description:
      "Real-time insights and detailed analytics for informed decisions.",
  },
  {
    icon: RefreshCw,
    title: "Automation",
    description:
      "Streamline workflows with intelligent automation capabilities.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Granular permissions and role-based access management.",
  },
]

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4" id="customFeature"
          >
            Built for Efficiency. Designed for You.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover powerful features that help you work smarter, not harder.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

