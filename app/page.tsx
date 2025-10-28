"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
