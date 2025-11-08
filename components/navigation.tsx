"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Trang Chủ", href: "/" },
    { label: "Giới Thiệu", href: "/about" },
    { label: "Dòng Thời Gian", href: "/timeline" },
    { label: "Cơ Chế Kinh Tế", href: "/economy" },
    { label: "Game", href: "/game" },
    { label: "Bảng Xếp Hạng", href: "/leaderboard" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm transition-all duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover-lift">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 ease-out hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">🇻🇳</span>
            </div>
            <span className="font-serif font-bold text-lg text-primary hidden sm:inline transition-all duration-300 ease-out hover:text-primary/80">
              Bao Cấp
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 ease-out text-sm font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 ease-out"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-300 ease-out hover:text-primary"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
