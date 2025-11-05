"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!hero || !bg || !content) return;

    // Create scene transition animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    // Fade out background and content
    tl.to(bg, {
      opacity: 0,
      scale: 1.2,
      duration: 1,
    })
      .to(
        content,
        {
          y: -100,
          opacity: 0,
          duration: 0.8,
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/economy/hr.jpg"
          alt="Kinh tế bao cấp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary mb-6 tracking-tight whitespace-nowrap">
            Cơ Chế Kinh Tế Thời Bao Cấp
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Nhìn lại cơ chế kế hoạch hoá, tem phiếu, các chính sách trọng điểm
            và tiến trình Đổi Mới
          </p>
        </div>
      </div>
    </div>
  );
}
