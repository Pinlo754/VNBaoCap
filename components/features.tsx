"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Features() {
  const features = [
    {
      icon: "🎮",
      title: "Game Tương Tác",
      description:
        "Trải nghiệm cuộc sống thời bao cấp qua game 2D. Di chuyển, giao dịch, trả lời câu hỏi và thu thập hàng hóa.",
      href: "/game",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: "📚",
      title: "Nội Dung Giáo Dục",
      description:
        "Tìm hiểu chi tiết về cơ chế kinh tế bao cấp, dòng thời gian lịch sử, và các chính sách kinh tế quan trọng.",
      href: "/about",
      color: "from-accent/20 to-accent/5",
    },
    {
      icon: "📈",
      title: "Bảng Xếp Hạng",
      description: "Cạnh tranh với người chơi khác, xem điểm số cao nhất và chia sẻ thành tích của bạn.",
      href: "/leaderboard",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      icon: "🕰️",
      title: "Dòng Thời Gian",
      description: "Khám phá các mốc thời gian quan trọng từ 1975 đến 1986 và những sự kiện kinh tế nổi bật.",
      href: "/timeline",
      color: "from-muted/40 to-muted/10",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Khám Phá Nội Dung</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Kết hợp giáo dục và giải trí để hiểu rõ hơn về lịch sử kinh tế Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <Card
                className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 bg-card border-border hover-lift animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 transition-all duration-300 ease-out hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-primary font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 mb-4">{feature.description}</CardDescription>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 p-0 transition-all duration-300 ease-out"
                  >
                    Khám Phá →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
