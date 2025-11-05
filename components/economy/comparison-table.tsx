"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComparisonTable() {
  const criteria = [
    { k: "Quản Lý", a: "Nhà nước tập trung", m: "Nhiều thành phần, Nhà nước định hướng" },
    { k: "Phân Phối", a: "Theo kế hoạch, tem phiếu", m: "Theo giá cả thị trường" },
    { k: "Động Lực", a: "Bình quân, thiếu sáng tạo", m: "Cạnh tranh, năng suất cao" },
    { k: "Giá Cả", a: "Cố định, không thay đổi", m: "Linh động, theo cung cầu" },
    { k: "Kết Quả", a: "Thiếu hụt, trì trệ", m: "Phát triển nhanh, hội nhập quốc tế" },
  ];

  return (
    <section className="rounded-xl border border-border/60 p-6 bg-background">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-4">So Sánh: Bao Cấp vs Thị Trường</h2>
      <Tabs defaultValue="bao-cap" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="bao-cap">Kinh tế Bao Cấp</TabsTrigger>
          <TabsTrigger value="thi-truong">Kinh tế Thị Trường</TabsTrigger>
        </TabsList>
        <TabsContent value="bao-cap">
          <ul className="space-y-3">
            {criteria.map((c) => (
              <li key={c.k} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <div>
                  <p className="font-semibold">{c.k}</p>
                  <p className="text-sm text-foreground/70">{c.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="thi-truong">
          <ul className="space-y-3">
            {criteria.map((c) => (
              <li key={c.k} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                <div>
                  <p className="font-semibold">{c.k}</p>
                  <p className="text-sm text-foreground/70">{c.m}</p>
                </div>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}


