"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Figure from "@/components/economy/figure";

// Định nghĩa các ảnh - bạn có thể thay đổi src tại đây
const SOCIAL_IMAGES = {
  queue: "/economy/xephang2.jpg", // Xếp hàng mua hàng
  stamp: "/economy/tem3.jpg", // Tem phiếu
  blackMarket: "/economy/chotet.jpg", // Chợ trời
  store: "/economy/md2.webp", // Cửa hàng mậu dịch
  riceCoupon: "/economy/muagao.webp", // Phiếu mua gạo
  family: "/economy/giadinh.webp", // Gia đình thời bao cấp
};

export default function SocialImpact() {
  return (
    <section
      id="social"
      className="rounded-xl border border-border/60 p-6 bg-background scroll-mt-24"
    >
      <h2 className="text-2xl font-serif font-semibold text-primary mb-4">
        Đời Sống & Tác Động Xã Hội
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-foreground/80 space-y-3">
          <p>
            Thời bao cấp là giai đoạn người dân sống trong thiếu thốn nhưng đoàn
            kết. Mọi thứ đều "xếp hàng": từ mua gạo, vải, đến xăng dầu. Tư duy
            "xin – cho" ăn sâu trong đời sống xã hội, hình thành tâm lý trông
            chờ vào Nhà nước.
          </p>
          <p>
            Tuy vậy, đây cũng là thời kỳ của sự sẻ chia và sáng tạo trong khó
            khăn: hình thành các "chợ trời", trao đổi hàng hóa ngoài kế hoạch –
            tiền đề của kinh tế thị trường tự phát.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Figure
              src={SOCIAL_IMAGES.queue}
              alt="Xếp hàng mua hàng"
              caption="Xếp hàng mua nhu yếu phẩm"
              aspect="square"
            />
            <Figure
              src={SOCIAL_IMAGES.stamp}
              alt="Tem phiếu"
              caption="Tem phiếu phân phối"
              aspect="square"
            />
          </div>
        </div>
        <div className="grid grid-rows-3 gap-3">
          <Figure
            src={SOCIAL_IMAGES.blackMarket}
            alt="Chợ trời"
            caption="Chợ tết thời bao cấp"
            aspect="video"
          />
          <div className="grid grid-cols-2 gap-3">
            <Figure
              src={SOCIAL_IMAGES.store}
              alt="Cửa hàng mậu dịch"
              aspect="square"
              caption="Cửa hàng mậu dịch"
            />
            <Figure
              src={SOCIAL_IMAGES.riceCoupon}
              alt="Phiếu mua gạo"
              aspect="square"
              caption="Phiếu mua gạo"
            />
          </div>
          <Figure
            src={SOCIAL_IMAGES.family}
            alt="Gia đình thời bao cấp"
            caption="Sinh hoạt gia đình"
            aspect="video"
          />
        </div>
      </div>
    </section>
  );
}


