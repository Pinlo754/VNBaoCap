"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
  const events = [
    {
      year: 1975,
      title: "Thống Nhất Đất Nước",
      description: "Bắt đầu áp dụng mô hình kinh tế kế hoạch hóa tập trung trên toàn quốc.",
      significance: "Bước đầu xây dựng chủ nghĩa xã hội",
    },
    {
      year: "1976-1980",
      title: "Kế Hoạch 5 Năm Lần Thứ Nhất",
      description: "Tập trung vào phát triển công nghiệp nặng, nhưng kết quả không đạt mục tiêu.",
      significance: "Hàng hóa khan hiếm, kinh tế trì trệ",
    },
    {
      year: 1981,
      title: 'Chính Sách "Khoán 100"',
      description: "Áp dụng trong nông nghiệp, cho phép nông dân giữ lại sản phẩm vượt chỉ tiêu.",
      significance: "Bước chuyển mở đầu cho đổi mới tư duy kinh tế",
    },
    {
      year: 1985,
      title: "Cải Cách Giá - Lương - Tiền",
      description: "Đổi tiền, tăng lương, nhưng dẫn đến lạm phát cao.",
      significance: "Khủng hoảng kinh tế, dân sinh khó khăn",
    },
    {
      year: 1986,
      title: "Đại Hội VI - Khởi Đầu Đổi Mới",
      description: "Quyết định chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa.",
      significance: "Kết thúc cơ chế bao cấp, bước ngoặt lịch sử",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Dòng Thời Gian</h1>
          <p className="text-lg text-foreground/70 mb-12">
            Các mốc thời gian quan trọng trong lịch sử kinh tế bao cấp Việt Nam (1975-1986)
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1.5 md:-translate-x-2"></div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"}`}>
                    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm font-bold text-accent mb-2">{event.year}</div>
                            <CardTitle className="text-primary font-serif">{event.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 mb-3">{event.description}</p>
                        <div className="bg-muted/50 px-3 py-2 rounded text-sm text-foreground/70 border-l-2 border-accent">
                          <strong>Ý nghĩa:</strong> {event.significance}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
