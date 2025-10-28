"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Giới Thiệu Chung</h1>

          <div className="prose prose-lg max-w-none mb-12">
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Bối Cảnh Lịch Sử</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Sau khi đất nước thống nhất vào năm 1975, Việt Nam bước vào giai đoạn xây dựng chủ nghĩa xã hội. Dưới
                ảnh hưởng của tư tưởng Mác-Lênin, Nhà nước áp dụng mô hình kinh tế kế hoạch hóa tập trung, tương tự như
                Liên Xô và các nước xã hội chủ nghĩa khác.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Giai đoạn này (1975-1986) được gọi là thời kỳ "bao cấp", khi Nhà nước quản lý toàn bộ nền kinh tế, phân
                phối hàng hóa bằng kế hoạch và tem phiếu, thay vì dựa vào cơ chế thị trường.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Khái Niệm Kinh Tế Bao Cấp</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Kế Hoạch Hóa Tập Trung</CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80">
                    Nhà nước lập kế hoạch chi tiết cho toàn bộ nền kinh tế, quyết định sản xuất cái gì, bao nhiêu, bán
                    cho ai.
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Hệ Thống Tem Phiếu</CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80">
                    Hàng hóa được phân phối theo định mức thông qua tem phiếu, không phải dựa vào giá cả thị trường.
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Giá Cố Định</CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80">
                    Giá cả được Nhà nước quy định, không thay đổi theo cung cầu, dẫn đến thiếu hụt hàng hóa.
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Quốc Doanh & Tập Thể</CardTitle>
                  </CardHeader>
                  <CardContent className="text-foreground/80">
                    Chủ yếu là doanh nghiệp nhà nước và hợp tác xã, không có kinh tế tư nhân.
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Ưu Điểm & Nhược Điểm</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-serif font-bold text-accent mb-4">Ưu Điểm</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>Đảm bảo nhu cầu cơ bản cho toàn dân (lương, lương thực)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>Không có thất nghiệp, mọi người đều có việc làm</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>Tập trung nguồn lực vào các dự án chiến lược</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-bold text-destructive mb-4">Nhược Điểm</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex gap-3">
                      <span className="text-destructive font-bold">✗</span>
                      <span>Thiếu hụt hàng hóa, chất lượng sản phẩm kém</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-destructive font-bold">✗</span>
                      <span>Thiếu động lực sáng tạo, năng suất thấp</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-destructive font-bold">✗</span>
                      <span>Lạc hậu so với các nước phát triển</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Kết Luận</h2>
              <p className="text-foreground/80 leading-relaxed">
                Kinh tế bao cấp là một giai đoạn tất yếu trong quá trình xây dựng chủ nghĩa xã hội theo tư tưởng
                Mác-Lênin. Tuy nhiên, những hạn chế của nó đã dẫn đến sự đổi mới vào năm 1986, khi Đảng Cộng Sản Việt
                Nam quyết định chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
