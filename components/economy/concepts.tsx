"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Concepts() {
  return (
    <section
      id="concepts"
      className="rounded-xl border border-border/60 bg-card/50 p-4 md:p-6 scroll-mt-24"
    >
      <h2 className="text-2xl font-serif font-semibold text-primary mb-2">
        Khái Niệm Cốt Lõi
      </h2>
      <p className="text-sm text-foreground/70 mb-4">
        Các khái niệm này phản ánh cơ chế bao cấp với nền kinh tế tập trung quan
        liêu, hạn chế thị trường và tự do kinh doanh, dẫn đến khan hiếm hàng
        hóa, phân phối không hiệu quả, và tạo động lực để đổi mới kinh tế sau
        này.
      </p>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="ke-hoach-hoa">
          <AccordionTrigger> Kinh tế kế hoạch hoá tập trung </AccordionTrigger>
          <AccordionContent>
            Nhà nước quyết định toàn bộ kế hoạch sản xuất, phân phối và giá cả;
            các đơn vị sản xuất làm theo chỉ tiêu pháp lệnh, không có quyền tự
            chủ. Cơ chế này giúp tập trung nguồn lực sau chiến tranh nhưng sớm
            bộc lộ hạn chế: năng suất thấp, hàng hoá khan hiếm, đời sống khó
            khăn.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tem-phieu">
          <AccordionTrigger> Tem phiếu </AccordionTrigger>
          <AccordionContent>
            Hàng hóa thiết yếu được phân phối theo định mức qua tem phiếu, giúp
            kiểm soát tiêu dùng nhưng làm méo mó thị trường, sinh ra chợ đen và
            đầu cơ.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="khoan-100-10">
          <AccordionTrigger> Khoán 100 / Khoán 10 </AccordionTrigger>
          <AccordionContent>
            Các chính sách giao quyền sản xuất cho hộ gia đình đã thí điểm thành
            công, tạo động lực và hiệu quả kinh tế mới trong nông nghiệp.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="doi-moi">
          <AccordionTrigger> Đổi Mới (1986) </AccordionTrigger>
          <AccordionContent>
            Đánh dấu bước ngoặt lịch sử khi Việt Nam chuyển sang kinh tế thị
            trường định hướng xã hội chủ nghĩa — mở cửa, đa thành phần, thúc đẩy
            hội nhập và tăng trưởng.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}


