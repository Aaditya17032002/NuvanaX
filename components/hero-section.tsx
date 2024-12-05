"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const GlobeCanvas = dynamic(() => import('@/components/globe/GlobeCanvas'), {
  ssr: false,
  loading: () => null
})

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 200], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#000212] to-[#000B3C]">
      <Suspense fallback={null}>
      <GlobeCanvas />
      </Suspense>
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20" />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 relative">
                Escape
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Mediocrity
                </span>
              </h1>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transform your business with solutions that break the mold and are as unique as your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-blue-500"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
              <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-white hover:bg-blue-950 text-lg px-8 py-3 rounded-full"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000B3C] to-transparent" />
    </section>
  )
}

