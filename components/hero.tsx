"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Một Thời Để Nhớ
            </h1>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
              Kinh tế Việt Nam thời bao cấp (1975–1986): Dấu ấn của một thời kỳ lịch sử đầy thách thức và bài học quý
              báu.
            </p>
            <p className="text-base text-foreground/70 mb-8 leading-relaxed">
              Khám phá cơ chế kế hoạch hóa tập trung, hệ thống tem phiếu, và quá trình chuyển đổi sang kinh tế thị
              trường thông qua game tương tác và nội dung giáo dục.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/game">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                >
                  Chơi Game Ngay
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 bg-transparent hover-lift"
                >
                  Tìm Hiểu Thêm
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl animate-pulse-soft"></div>
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover-glow transition-all duration-300 ease-out">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl animate-bounce-soft">
                      📋
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary">Tem Phiếu</h3>
                      <p className="text-sm text-foreground/70">Hệ thống phân phối hàng hóa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <div
                      className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-2xl animate-bounce-soft"
                      style={{ animationDelay: "0.3s" }}
                    >
                      📊
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-accent">Kế Hoạch Hóa</h3>
                      <p className="text-sm text-foreground/70">Quản lý tập trung kinh tế</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    <div
                      className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-2xl animate-bounce-soft"
                      style={{ animationDelay: "0.6s" }}
                    >
                      🎓
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-secondary">Giáo Dục</h3>
                      <p className="text-sm text-foreground/70">Học qua trò chơi tương tác</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
