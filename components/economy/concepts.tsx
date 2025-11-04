"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Concepts() {
  return (
    <section className="rounded-xl border border-border/60 bg-card/50 p-4 md:p-6">
      <h2 className="text-2xl font-serif font-semibold text-primary mb-2">Khái Niệm Cốt Lõi</h2>
      <p className="text-sm text-foreground/70 mb-4">Một số khái niệm giúp định vị cơ chế bao cấp và các chuyển đổi chính.</p>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="ke-hoach-hoa">
          <AccordionTrigger> Kinh tế kế hoạch hoá tập trung </AccordionTrigger>
          <AccordionContent>
            Nhà nước đặt chỉ tiêu pháp lệnh cho sản xuất, phân phối và giá cả; đơn vị không có quyền tự chủ rộng rãi.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tem-phieu">
          <AccordionTrigger> Tem phiếu </AccordionTrigger>
          <AccordionContent>
            Cơ chế phân phối hàng hoá theo định mức, góp phần kiểm soát khan hiếm nhưng tạo chợ đen và đầu cơ.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="khoan-100-10">
          <AccordionTrigger> Khoán 100 / Khoán 10 </AccordionTrigger>
          <AccordionContent>
            Trao quyền và gắn trách nhiệm tới hộ gia đình trong nông nghiệp, thúc đẩy năng suất và tự chủ.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="doi-moi">
          <AccordionTrigger> Đổi Mới </AccordionTrigger>
          <AccordionContent>
            Chuyển sang kinh tế thị trường định hướng XHCN, đa thành phần, hội nhập thương mại.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}


