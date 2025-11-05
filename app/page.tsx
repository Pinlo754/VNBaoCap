"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import TeamSection from "@/components/team-section"
import TechStackSection from "@/components/tech-stack-section"
import AIPromptsSection from "@/components/ai-prompts-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <TeamSection />
      <TechStackSection />
      <AIPromptsSection />
      <Footer />
    </div>
  )
}
