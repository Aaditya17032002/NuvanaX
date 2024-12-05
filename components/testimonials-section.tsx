"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "NuvanaX has transformed how we handle our software development process. The efficiency gains are remarkable.",
  },
  {
    name: "Michael Chen",
    role: "CEO at InnovateCo",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The level of innovation and support we've received from NuvanaX is unmatched. They're truly partners in our success.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at StartupX",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Implementing NuvanaX's solutions has led to a 300% increase in our team's productivity.",
  },
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" id="customFeature">
            Trusted by Leading Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about their experience with NuvanaX.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

