"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
    // You can add form handling logic here later
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" id="customFeature">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with us to learn more about how NuvanaX can help your
              business grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6" id="customFeature">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center" id="customFeature">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>contact@nuvanax.com</span>
                </div>
                <div className="flex items-center" id="customFeature">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center" id="customFeature">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>123 Innovation Street, Tech City, TC 12345</span>
                </div>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone (optional)"
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white">
                Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

