"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Economy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Cơ Chế Kinh Tế Thời Bao Cấp</h1>

          <div className="space-y-8">
            {/* Mechanism Diagram */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary font-serif">Luồng Kinh Tế Bao Cấp</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-primary/20 p-4 rounded-lg text-center font-bold text-primary">
                      Kế Hoạch Nhà Nước
                    </div>
                    <div className="text-2xl text-primary">→</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-accent/20 p-4 rounded-lg text-center font-bold text-accent">
                      Phân Bổ Vật Tư
                    </div>
                    <div className="text-2xl text-primary">→</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-secondary/20 p-4 rounded-lg text-center font-bold text-secondary">
                      Sản Xuất
                    </div>
                    <div className="text-2xl text-primary">→</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-muted/40 p-4 rounded-lg text-center font-bold text-foreground">
                      Phân Phối (Tem Phiếu)
                    </div>
                    <div className="text-2xl text-primary">→</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-primary/20 p-4 rounded-lg text-center font-bold text-primary">
                      Tiêu Dùng
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-primary font-serif">So Sánh: Bao Cấp vs Thị Trường</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-bold text-primary">Tiêu Chí</th>
                        <th className="text-left py-3 px-4 font-bold text-accent">Kinh Tế Bao Cấp</th>
                        <th className="text-left py-3 px-4 font-bold text-secondary">Kinh Tế Thị Trường</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold">Quản Lý</td>
                        <td className="py-3 px-4">Nhà nước tập trung</td>
                        <td className="py-3 px-4">Nhiều thành phần, Nhà nước định hướng</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold">Phân Phối</td>
                        <td className="py-3 px-4">Theo kế hoạch, tem phiếu</td>
                        <td className="py-3 px-4">Theo giá cả thị trường</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold">Động Lực</td>
                        <td className="py-3 px-4">Bình quân, thiếu sáng tạo</td>
                        <td className="py-3 px-4">Cạnh tranh, năng suất cao</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold">Giá Cả</td>
                        <td className="py-3 px-4">Cố định, không thay đổi</td>
                        <td className="py-3 px-4">Linh động, theo cung cầu</td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold">Kết Quả</td>
                        <td className="py-3 px-4">Thiếu hụt, trì trệ</td>
                        <td className="py-3 px-4">Phát triển nhanh, hội nhập quốc tế</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Key Policies */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-serif">Tem Phiếu</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Chứng chỉ phân phối hàng hóa theo định mức. Mỗi gia đình nhận tem phiếu để mua hàng hóa thiết yếu như
                  gạo, dầu, muối, v.v. Giúp Nhà nước kiểm soát tiêu dùng.
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-serif">Khoán 100</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Chính sách cho phép nông dân giữ lại sản phẩm vượt chỉ tiêu. Đây là bước đầu tiên của đổi mới, tạo
                  động lực cho sản xuất nông nghiệp.
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-serif">Cải Cách Giá-Lương-Tiền</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Năm 1985, Nhà nước đổi tiền, tăng lương, nhưng dẫn đến lạm phát cao. Giá cả tăng vọt, tiền mất giá,
                  dân sinh khó khăn.
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary font-serif">Đại Hội VI (1986)</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground/80">
                  Quyết định chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa. Kết thúc cơ chế bao cấp, mở đầu
                  thời kỳ đổi mới.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
