"use client";

import { useEffect, useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EconomyFlow from "@/components/economy/economy-flow";
import Analysis from "@/components/economy/analysis";
import ComparisonTable from "@/components/economy/comparison-table";
import ReformTimeline from "@/components/economy/reform-timeline";
import InflationChart from "@/components/economy/inflation-chart";
import AgricultureChart from "@/components/economy/agriculture-chart";
import PolicyGrid from "@/components/economy/policy-grid";
import SocialImpact from "@/components/economy/social-impact";
import Sources from "@/components/economy/sources";
import HeroScene from "@/components/economy/hero-scene";
import Concepts from "@/components/economy/concepts";
import ScrollSpyNav from "@/components/economy/scrollspy-nav";

gsap.registerPlugin(ScrollTrigger);

export default function Economy() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollSpyNav />

      {/* Full-screen Hero */}
      <HeroScene />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={sectionsRef} className="space-y-8">
          <Concepts />
          <EconomyFlow />
          <ComparisonTable />
          <Analysis />
          <section id="charts" className="space-y-8 scroll-mt-24">
            <InflationChart />
          </section>

          <ReformTimeline />

          {/* Charts Section */}
          <section id="charts" className="space-y-8 scroll-mt-24">
            <AgricultureChart />
          </section>

          <PolicyGrid />
          <SocialImpact />
  
          <Sources />
        </div>
      </main>

      <Footer />
    </div>
  );
}