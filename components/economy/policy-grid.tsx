"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Figure from "@/components/economy/figure";

// Định nghĩa ảnh cho từng chính sách - bạn có thể thay đổi src tại đây
const POLICY_IMAGES = {
  stamp: "/economy/tem2.jpg", // Tem Phiếu
  khoan100: "/economy/khoan.jpg", // Khoán 100
  priceReform: "/economy/caicach.jpg", // Cải Cách Giá-Lương-Tiền
  congress6: "/economy/daihoi.webp", // Đại Hội VI
};

const POLICIES = [
  {
    title: "Tem Phiếu",
    body:
      "Là công cụ phân phối hàng hóa theo định mức. Người dân chỉ được mua lượng gạo, vải, dầu, muối... theo tem phiếu được cấp. Hệ thống này giúp kiểm soát nguồn cung nhưng cũng tạo ra chợ đen và nạn đầu cơ, tích trữ.",
    image: POLICY_IMAGES.stamp,
  },
  {
    title: "Khoán 100",
    body:
      "Áp dụng trong nông nghiệp, Khoán 100 cho phép hộ nông dân giữ lại sản phẩm vượt chỉ tiêu. Chính sách này làm tăng năng suất và đặt nền móng cho Khoán 10 (1988).",
    image: POLICY_IMAGES.khoan100,
  },
  {
    title: "Cải Cách Giá-Lương-Tiền",
    body:
      "Mục tiêu là thống nhất giá cả, cải thiện thu nhập. Tuy nhiên, do thiếu hàng hóa và cơ chế kiểm soát, giá cả tăng vọt, đồng tiền mất giá nhanh.",
    image: POLICY_IMAGES.priceReform,
  },
  {
    title: "Đại Hội VI (1986)",
    body:
      "Cột mốc đánh dấu chuyển đổi tư duy: từ kinh tế bao cấp sang kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước.",
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
              <Figure src={p.image} alt={p.title} caption={undefined} aspect="video" />
            </div>
            <CardTitle className="text-lg text-primary font-serif">{p.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/80">{p.body}</CardContent>
        </Card>
      ))}
      </div>
    </section>
  );
}


