"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface SubEvent {
  year: number | string
  title: string
  description: string
  significance: string
}

interface TimelineEvent {
  year: number | string
  title: string
  description: string
  significance: string
  image?: string
  subEvents?: SubEvent[]
}

interface TimelineBannerProps {
  event: TimelineEvent
  index: number
}

export function TimelineBanner({ event, index }: TimelineBannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Determine direction: even index comes from left, odd from right
  const isFromLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative mb-8 transform transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : isFromLeft
            ? "-translate-x-32 opacity-0"
            : "translate-x-32 opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
      }}
    >
      <div
        className={`bg-linear-to-r ${
          isFromLeft
            ? "from-blue-500/10 to-transparent border-l-4 border-blue-500"
            : "from-transparent to-blue-500/10 border-r-4 border-blue-500"
        } rounded-lg p-6 backdrop-blur-sm overflow-hidden`}
      >
        <div className={`flex items-start gap-4 ${isFromLeft ? "flex-row" : "flex-row-reverse"}`}>
          {/* Year Badge & Image */}
          <div className="shrink-0 flex flex-col gap-3 items-center">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="font-bold text-white text-sm text-center">{event.year}</span>
            </div>
            {event.image && (
              <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-blue-500/50 hover:border-blue-500 transition-all">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
            <p className="text-sm text-foreground/70 mb-2 line-clamp-2">{event.description}</p>
            <p className="text-xs text-accent font-semibold mb-3">📌 {event.significance}</p>

            {/* Toggle Sub-Events Button */}
            {event.subEvents && event.subEvents.length > 0 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all hover:shadow-lg"
              >
                <span>
                  {isExpanded ? "−" : "+"}
                </span>
                <span>{isExpanded ? "Ẩn" : "Xem"} chi tiết ({event.subEvents.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Sub-Events Section */}
        {event.subEvents && isExpanded && (
          <div className="mt-6 pl-4 border-l-2 border-blue-400/50 space-y-4 animate-fade-in">
            {event.subEvents.map((subEvent, subIndex) => (
              <div
                key={subIndex}
                className="bg-blue-500/5 rounded-lg p-4 hover:bg-blue-500/10 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-blue-600 mb-1">{subEvent.year}</div>
                    <h4 className="text-sm font-semibold text-primary mb-1">{subEvent.title}</h4>
                    <p className="text-xs text-foreground/70 mb-2">{subEvent.description}</p>
                    <p className="text-xs text-accent">
                      <strong>Ý nghĩa:</strong> {subEvent.significance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Animated accent line */}
        <div
          className={`absolute bottom-0 h-1 bg-linear-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: isVisible ? "100%" : "0%",
            left: isFromLeft ? "0" : "auto",
            right: isFromLeft ? "auto" : "0",
          }}
        ></div>
      </div>
    </div>
  )
}
