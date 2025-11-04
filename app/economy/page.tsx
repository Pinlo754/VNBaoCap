"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import EconomyFlow from "@/components/economy/economy-flow";
import Analysis from "@/components/economy/analysis";
import ComparisonTable from "@/components/economy/comparison-table";
import ReformTimeline from "@/components/economy/reform-timeline";
import InflationChart from "@/components/economy/inflation-chart";
import AgricultureChart from "@/components/economy/agriculture-chart";
import PolicyGrid from "@/components/economy/policy-grid";
import SocialImpact from "@/components/economy/social-impact";
import Sources from "@/components/economy/sources";
import IntroHero from "@/components/economy/intro-hero";
import Concepts from "@/components/economy/concepts";
import ImageGallery from "@/components/economy/image-gallery";

export default function Economy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in space-y-8">
          <IntroHero />
          <Concepts />
          <EconomyFlow />
          <Analysis />
          <ComparisonTable />
          <ReformTimeline />
          <InflationChart />
          <AgricultureChart />
          <PolicyGrid />
          <SocialImpact />
          <ImageGallery />
          <Sources />
        </div>
      </main>

      <Footer />
    </div>
  );
}
