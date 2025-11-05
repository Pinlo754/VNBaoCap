"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Figure from "@/components/economy/figure";

export default function SocialImpact() {
  return (
    <section className="rounded-xl border border-border/60 p-6 bg-background">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Đời Sống & Tác Động Xã Hội</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-foreground/80 space-y-3">
          <p>
            Thời bao cấp là giai đoạn người dân sống trong thiếu thốn nhưng đoàn kết. Mọi thứ đều “xếp hàng”: từ mua gạo, vải, đến xăng dầu. Tư duy “xin – cho” ăn sâu trong đời sống xã hội, hình thành tâm lý trông chờ vào Nhà nước.
          </p>
          <p>
            Tuy vậy, đây cũng là thời kỳ của sự sẻ chia và sáng tạo trong khó khăn: hình thành các “chợ trời”, trao đổi hàng hóa ngoài kế hoạch – tiền đề của kinh tế thị trường tự phát.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Figure alt="Xếp hàng mua hàng" caption="Xếp hàng mua nhu yếu phẩm" aspect="square" />
            <Figure alt="Tem phiếu" caption="Tem phiếu phân phối" aspect="square" />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <Figure alt="Chợ trời" caption="Chợ trời ngoài kế hoạch" aspect="video" />
          <div className="grid grid-cols-2 gap-3">
            <Figure alt="Cửa hàng mậu dịch" aspect="square" />
            <Figure alt="Phiếu mua gạo" aspect="square" />
          </div>
          <Figure alt="Gia đình thời bao cấp" caption="Sinh hoạt gia đình" aspect="video" />
        </div>
      </div>
    </section>
  );
}


