"use client";

import { Separator } from "@/components/ui/separator";

const TIMELINE = [
  { period: "1976–1980", text: "Thực hiện kế hoạch 5 năm lần thứ nhất, tập trung vào công nghiệp nặng, nhưng năng suất thấp và thiếu hụt hàng hóa." },
  { period: "1981", text: "Ban hành Chỉ thị 100 (Khoán 100), cho phép nông dân giữ lại phần vượt khoán." },
  { period: "1985", text: "Cải cách Giá - Lương - Tiền: đổi tiền, tăng lương → lạm phát vượt 700%." },
  { period: "1986", text: "Đại hội VI: công bố đường lối Đổi Mới, chuyển sang kinh tế thị trường định hướng XHCN." },
  { period: "Sau 1989", text: "Bỏ cơ chế tem phiếu, mở cửa thương mại, hình thành kinh tế nhiều thành phần." },
];

export default function ReformTimeline() {
  return (
    <section id="timeline" className="rounded-xl border-l-4 border-primary/60 bg-card/40 p-6 scroll-mt-24">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Tiến Trình Cải Tổ & Đổi Mới</h2>
      <div className="space-y-4 text-foreground/80">
        <ul className="space-y-3">
          {TIMELINE.map((item, idx) => (
            <li key={item.period} className="group pl-1">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                <p>
                  <strong>{item.period}:</strong> {item.text}
                </p>
              </div>
              {idx < TIMELINE.length - 1 && <Separator className="my-2 opacity-40" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


