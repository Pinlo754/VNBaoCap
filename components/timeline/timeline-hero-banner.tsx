"use client"

import Image from "next/image"

export function TimelineHeroBanner() {
  return (
    <div className="relative w-full h-96 md:h-[1000px] mb-16 overflow-hidden rounded-lg shadow-2xl">
      {/* Background Image */}
      <Image
        src="/timeLine/banner.png"
        alt="Đổi Mới 1986 - Timeline Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Gradient - Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="animate-fade-in max-w-2xl">
          <h2 
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
            style={{ 
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            Lịch Sử Kinh Tế Bao Cấp
          </h2>
          <p 
            className="text-lg md:text-xl text-white/95"
            style={{ 
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)"
            }}
          >
            Khám phá những mốc thời gian quan trọng trong hành trình chuyển đổi kinh tế của Việt Nam
          </p>

          {/* Animated scroll indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>
    </div>
  )
}
