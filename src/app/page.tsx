import { Navigation } from "@/components/layout/navigation"
import { ContactSection } from "@/components/sections/contact-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { SummarySection } from "@/components/sections/summary-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"
import { TestimonySection } from "@/components/sections/testimony-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SummarySection />
        <TechStackSection />
        <ExperienceSection />
        <PortfolioSection />
        <TestimonySection />
        <ContactSection />
      </main>
    </div>
  )
}
