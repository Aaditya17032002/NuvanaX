import { NavHeader } from "@/components/nav-header"
import HeroSection from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import TechnologySection from "@/components/technology-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <NavHeader />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <FeaturesSection />
      <TechnologySection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

