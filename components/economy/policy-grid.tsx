"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Figure from "@/components/economy/figure";

// Định nghĩa ảnh cho từng chính sách
const POLICY_IMAGES = {
  khoan10: "/economy/khoan10.jpg",
  khoan100: "/economy/khoan100.jpg",
  priceReform: "/economy/caicach.jpg",
  congress6: "/economy/daihoi.webp",
};

const POLICIES = [
  {
    title: "Khoán 100 (1981)",
    body: "Ban hành theo Chỉ thị 100 của Ban Bí thư (1981), chính sách Khoán 100 cho phép khoán sản phẩm đến nhóm và người lao động trong nông nghiệp. Hộ nông dân được giữ lại phần vượt chỉ tiêu sau khi nộp nghĩa vụ cho Nhà nước và hợp tác xã. Chính sách này khuyến khích sản xuất, tăng năng suất, cải thiện đời sống nông dân và là tiền đề cho Khoán 10 (1988).",
    image: POLICY_IMAGES.khoan100,
  },
  {
    title: "Khoán 10 (1988)",
    body: "Ban hành theo Nghị quyết 10 (4/1988) của Bộ Chính trị, Khoán 10 mở rộng quyền tự chủ cho hộ nông dân, coi họ là đơn vị sản xuất kinh tế tự chủ. Nông dân được quyền quyết định sản xuất, tiêu thụ sản phẩm, thực hiện nghĩa vụ với Nhà nước theo hợp đồng. Chính sách này đã chấm dứt cơ chế tập trung quan liêu bao cấp trong nông nghiệp, đưa sản xuất nông nghiệp Việt Nam thoát khỏi khủng hoảng, biến Việt Nam từ nước thiếu lương thực thành nước xuất khẩu gạo.",
    image: POLICY_IMAGES.khoan10,
  },
  {
    title: "Cải Cách Giá – Lương – Tiền (1985–1986)",
    body: "Diễn ra trong bối cảnh kinh tế bao cấp trì trệ, Nhà nước thực hiện cải cách nhằm thống nhất giá cả, điều chỉnh tiền lương và phát hành tiền mới (1985). Mục tiêu là xoá bỏ bao cấp qua giá và lương, đưa giá hàng hóa tiệm cận giá thị trường, bảo đảm đời sống người lao động. Tuy nhiên, do cung hàng hóa thấp, quản lý yếu kém và in tiền quá nhiều, cải cách dẫn đến siêu lạm phát, đồng tiền mất giá nhanh. Dù thất bại ngắn hạn, đây là bước thử nghiệm quan trọng, đặt nền cho Đổi mới toàn diện năm 1986.",
    image: POLICY_IMAGES.priceReform,
  },
  {
    title: "Đại Hội VI (1986)",
    body: "Đại hội VI của Đảng Cộng sản Việt Nam (12/1986) là cột mốc đổi mới toàn diện đất nước. Đại hội xác định chuyển từ cơ chế tập trung quan liêu bao cấp sang nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước theo định hướng xã hội chủ nghĩa. Đây là bước ngoặt lịch sử đưa kinh tế Việt Nam thoát khỏi khủng hoảng và hội nhập với thế giới.",
    image: POLICY_IMAGES.congress6,
  },
];

export default function PolicyGrid() {
  return (
    <section id="policies" className="scroll-mt-24">
      <div className="grid md:grid-cols-2 gap-6">
        {POLICIES.map((p) => (
          <Card
            key={p.title}
            className="bg-card border-border/70 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <CardHeader>
              <div className="mb-3">
                <Figure
                  src={p.image}
                  alt={p.title}
                  caption={undefined}
                  aspect="video"
                />
              </div>
              <CardTitle className="text-lg text-primary font-serif">
                {p.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">{p.body}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
