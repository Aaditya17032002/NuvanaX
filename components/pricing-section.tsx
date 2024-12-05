"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1 project",
    ],
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing companies",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "5 projects",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "249",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited projects",
      "Custom development",
      "SLA guarantee",
    ],
  },
]

export function PricingSection() {
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
      id="pricing"
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
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>
        <motion.div
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-9 left-0 right-0 flex justify-center">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`p-8 h-full ${
                plan.popular
                  ? "bg-blue-900/50 border-blue-500/50"
                  : "bg-blue-950/50 border-blue-900/50"
              } backdrop-blur-sm hover:bg-blue-900/50 transition-colors duration-300`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white mx-1">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-950 hover:bg-blue-900"
                  } text-white`}
                >
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

