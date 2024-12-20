import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { NavHeader } from "@/components/nav-header"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingSpinner } from '@/components/ui/loading-spinner'

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

const TechnologySection = dynamic(() => import("@/components/technology-section"), {
  loading: () => <LoadingSpinner />,
  ssr: false
})

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <NavHeader />
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      <ValueProposition />
      <HowItWorks />
      <FeaturesSection />
      <Suspense fallback={<LoadingSpinner />}>
        <TechnologySection />
      </Suspense>
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

