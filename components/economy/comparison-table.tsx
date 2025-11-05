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
      a: "Nhà nước tập trung",
      m: "Nhiều thành phần, Nhà nước định hướng",
    },
    {
      k: "Phân Phối",
      a: "Theo kế hoạch, tem phiếu",
      m: "Theo giá cả thị trường",
    },
    {
      k: "Động Lực",
      a: "Bình quân, thiếu sáng tạo",
      m: "Cạnh tranh, năng suất cao",
    },
    {
      k: "Giá Cả",
      a: "Cố định, không thay đổi",
      m: "Linh động, theo cung cầu",
    },
    {
      k: "Kết Quả",
      a: "Thiếu hụt, trì trệ",
      m: "Phát triển nhanh, hội nhập quốc tế",
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
