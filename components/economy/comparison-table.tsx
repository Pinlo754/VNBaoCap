"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Figure from "@/components/economy/figure";

// Định nghĩa ảnh cho phần so sánh - bạn có thể thay đổi src tại đây
const COMPARISON_IMAGES = {
  baoCap: {
    main: "/economy/tem1.jpg", // Ảnh chính về kinh tế bao cấp
    store: "/economy/md1.webp", // Cửa hàng mậu dịch
    queue: "/economy/xephang.jpg", // Xếp hàng
  },
  thiTruong: {
    main: "/economy/kttt.jpg", // Ảnh chính về kinh tế thị trường
    supermarket: "/economy/sthd.jpg", // Siêu thị
    business: "/economy/hdkd.jpg", // Hoạt động kinh doanh
  },
};

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState("bao-cap");

 const criteria = [
   {
     k: "Quản Lý",
     a: "Nhà nước tập trung quản lý toàn bộ nền kinh tế thông qua kế hoạch hóa 5 năm. Các doanh nghiệp, hợp tác xã phải hoạt động theo chỉ tiêu pháp lệnh, không có quyền tự chủ hay quyết định sản xuất.",
     m: "Nhà nước giữ vai trò định hướng vĩ mô, còn doanh nghiệp và tư nhân tự do sản xuất – kinh doanh trong khuôn khổ pháp luật. Cơ chế thị trường tạo ra cạnh tranh và linh hoạt trong quản lý.",
   },
   {
     k: "Phân Phối",
     a: "Hàng hóa được cấp phát theo kế hoạch bằng tem phiếu, đảm bảo tối thiểu nhu cầu sinh hoạt nhưng không phản ánh nhu cầu thực tế. Việc khan hiếm vật tư khiến chợ đen và cơ chế 'xin – cho' phát sinh.",
     m: "Hàng hóa lưu thông tự do, giá cả phản ánh cung – cầu. Phân phối dựa vào sức mua, tạo động lực sản xuất và mở rộng lưu thông hàng hóa.",
   },
   {
     k: "Động Lực",
     a: "Thiếu cơ chế khuyến khích cá nhân, người lao động làm việc theo nghĩa vụ, không gắn lợi ích với kết quả. Tâm lý bình quân và ỷ lại phổ biến, làm giảm năng suất và sáng tạo.",
     m: "Cạnh tranh và lợi ích vật chất trở thành động lực chính. Ai làm tốt có thu nhập cao, thúc đẩy đổi mới, sáng tạo và nâng cao hiệu quả kinh tế.",
   },
   {
     k: "Giá Cả",
     a: "Giá cả do Nhà nước ấn định, ổn định giả tạo và tách rời quy luật cung – cầu. Điều này khiến thị trường thiếu hàng, sản xuất không theo nhu cầu thực.",
     m: "Giá cả do thị trường quyết định, phản ánh đúng quan hệ cung – cầu. Cơ chế này giúp phân bổ nguồn lực hiệu quả và kích thích đầu tư, sản xuất.",
   },
   {
     k: "Kết Quả",
     a: "Nền kinh tế trì trệ, thiếu hàng hóa, năng suất thấp, đời sống khó khăn. Các chính sách bao cấp kéo dài gây méo mó thị trường và phụ thuộc vào ngân sách Nhà nước.",
     m: "Kinh tế phát triển năng động, hội nhập quốc tế, đa dạng hóa thành phần kinh tế. Việt Nam trở thành nước xuất khẩu, tăng trưởng nhanh sau Đổi Mới 1986.",
   },
 ];


  return (
    <section id="comparison" className="rounded-xl border border-border/60 p-6 bg-background scroll-mt-24">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-6">
        So Sánh: Bao Cấp vs Thị Trường
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Tabs with content */}
        <div className="w-full">
          <Tabs
            defaultValue="bao-cap"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="bao-cap" className="flex-1">
                Kinh tế Bao Cấp
              </TabsTrigger>
              <TabsTrigger value="thi-truong" className="flex-1">
                Kinh tế Thị Trường
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="bao-cap"
              className="mt-0 animate-in fade-in-50 duration-500"
            >
              <ul className="space-y-3">
                {criteria.map((c) => (
                  <li key={c.k} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{c.k}</p>
                      <p className="text-sm text-foreground/70">{c.a}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent
              value="thi-truong"
              className="mt-0 animate-in fade-in-50 duration-500"
            >
              <ul className="space-y-3">
                {criteria.map((c) => (
                  <li key={c.k} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{c.k}</p>
                      <p className="text-sm text-foreground/70">{c.m}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right: Images gallery */}
        <div className="space-y-4">
          {activeTab === "bao-cap" ? (
            <div
              key="bao-cap-images"
              className="animate-in fade-in-50 duration-500 space-y-4"
            >
              <Figure
                src={COMPARISON_IMAGES.baoCap.main}
                alt="Kinh tế bao cấp - Tem phiếu và phân phối"
                caption="Hệ thống tem phiếu thời bao cấp"
                aspect="video"
              />
              <div className="grid grid-cols-2 gap-3">
                <Figure
                  src={COMPARISON_IMAGES.baoCap.store}
                  alt="Cửa hàng mậu dịch"
                  caption="Cửa hàng mậu dịch"
                  aspect="square"
                />
                <Figure
                  src={COMPARISON_IMAGES.baoCap.queue}
                  alt="Xếp hàng mua hàng"
                  caption="Xếp hàng mua nhu yếu phẩm"
                  aspect="square"
                />
              </div>
            </div>
          ) : (
            <div
              key="thi-truong-images"
              className="animate-in fade-in-50 duration-500 space-y-4"
            >
              <Figure
                src={COMPARISON_IMAGES.thiTruong.main}
                alt="Kinh tế thị trường - Chợ và thương mại"
                caption="Thị trường tự do và phát triển"
                aspect="video"
              />
              <div className="grid grid-cols-2 gap-3">
                <Figure
                  src={COMPARISON_IMAGES.thiTruong.supermarket}
                  alt="Siêu thị hiện đại"
                  caption="Siêu thị và cửa hàng hiện đại"
                  aspect="square"
                />
                <Figure
                  src={COMPARISON_IMAGES.thiTruong.business}
                  alt="Hoạt động kinh doanh"
                  caption="Hoạt động kinh doanh tự do"
                  aspect="square"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
