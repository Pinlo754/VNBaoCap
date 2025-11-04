"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analysis() {
  return (
    <div>
      <div className="px-4 py-3">
        <h2 className="text-2xl font-serif font-semibold text-primary mb-6">
          Phân Tích Cơ Chế Bao Cấp
        </h2>
      </div>
      <div className="text-foreground/80 space-y-4 px-4 pb-4">
        <p>
          Cơ chế bao cấp ở Việt Nam hình thành sau năm 1975, khi đất nước thống
          nhất và áp dụng mô hình kinh tế kế hoạch hóa tập trung của khối XHCN.
          Nhà nước nắm toàn bộ tư liệu sản xuất, điều hành nền kinh tế thông qua
          các chỉ tiêu pháp lệnh và kế hoạch 5 năm.
        </p>
        <p>
          Mọi hoạt động sản xuất, phân phối, giá cả, lương bổng đều do cơ quan
          Nhà nước quy định. Các đơn vị sản xuất bị “trói” trong cơ chế xin -
          cho, không có quyền tự chủ, không gắn trách nhiệm với hiệu quả. Kết
          quả là nền kinh tế thiếu động lực, hàng hóa khan hiếm, chất lượng
          thấp, năng suất trì trệ.
        </p>
        <p>
          Cơ chế này ban đầu phù hợp trong giai đoạn khôi phục sau chiến tranh,
          giúp tập trung nguồn lực, nhưng về lâu dài lại làm triệt tiêu sáng
          tạo, bóp nghẹt thị trường và dẫn tới khủng hoảng trầm trọng cuối thập
          niên 1970 – đầu 1980.
        </p>
      </div>
    </div>
  );
}


