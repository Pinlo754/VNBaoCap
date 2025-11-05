"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, TrendingUp, FileText, BarChart3, Calendar, FileCheck, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "concepts", label: "Khái Niệm", icon: BookOpen },
  { id: "flow", label: "Luồng Kinh Tế", icon: TrendingUp },
  { id: "analysis", label: "Phân Tích", icon: FileText },
  { id: "comparison", label: "So Sánh", icon: BarChart3 },
  { id: "timeline", label: "Tiến Trình", icon: Calendar },
  { id: "charts", label: "Biểu Đồ", icon: BarChart3 },
  { id: "policies", label: "Chính Sách", icon: FileCheck },
  { id: "social", label: "Xã Hội", icon: Users },
];

export default function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up ScrollTrigger for each section
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      ScrollTrigger.create({
        trigger: element,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = 100;
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      
      // Sử dụng scroll trực tiếp với requestAnimationFrame để giảm độ trễ
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 600; // 0.6 giây
      let startTime: number | null = null;
      
      const easeOutCubic = (t: number): number => {
        return 1 - Math.pow(1 - t, 3);
      };
      
      const animateScroll = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }
        
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        
        window.scrollTo(0, startY + distance * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      // Bắt đầu ngay lập tức
      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col items-center gap-2 bg-card/80 backdrop-blur-md border border-border/60 rounded-full px-3 py-4 shadow-lg">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative group flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
              }`}
              aria-label={section.label}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium whitespace-nowrap absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card px-2 py-1 rounded border border-border shadow-sm">
                {section.label}
              </span>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
