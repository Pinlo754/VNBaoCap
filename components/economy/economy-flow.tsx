"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ClipboardList,
  Package,
  Factory,
  Ticket,
  ShoppingCart,
} from "lucide-react";

const STEPS = [
  {
    key: "plan",
    label: "Kế Hoạch Nhà Nước",
    desc: "Nhà nước giữ vai trò trung tâm, lập kế hoạch 5 năm và giao chỉ tiêu pháp lệnh cho từng ngành, địa phương. Mọi hoạt động sản xuất đều phải tuân theo mệnh lệnh hành chính, không dựa vào quy luật thị trường.",
    icon: ClipboardList,
  },
  {
    key: "alloc",
    label: "Phân Bổ Vật Tư",
    desc: "Nguyên vật liệu, máy móc, năng lượng... được Nhà nước cấp phát theo kế hoạch, không theo nhu cầu thực tế. Hệ thống phân bổ này dẫn đến thiếu hụt, chậm trễ và kém hiệu quả trong sản xuất.",
    icon: Package,
  },
  {
    key: "produce",
    label: "Sản Xuất",
    desc: "Các xí nghiệp, hợp tác xã sản xuất theo chỉ tiêu Nhà nước giao, không có quyền tự chủ kinh doanh. Hiệu quả thấp, năng suất trì trệ vì thiếu động lực vật chất và cơ chế khuyến khích sáng tạo.",
    icon: Factory,
  },
  {
    key: "distribute",
    label: "Phân Phối (Tem Phiếu)",
    desc: "Hàng hóa khan hiếm được phân phối theo định mức qua hệ thống tem phiếu. Cơ chế này giúp kiểm soát tiêu dùng nhưng làm nảy sinh chợ đen, đầu cơ và tình trạng 'xin – cho' phổ biến.",
    icon: Ticket,
  },
  {
    key: "consume",
    label: "Tiêu Dùng",
    desc: "Người dân mua hàng theo định mức, thường phải xếp hàng dài. Thiếu hụt kéo dài làm giảm chất lượng cuộc sống và kìm hãm nhu cầu, khiến nền kinh tế rơi vào vòng luẩn quẩn của khan hiếm và kém năng suất.",
    icon: ShoppingCart,
  },
];

export default function EconomyFlow() {
  return (
    <section
      id="flow"
      className="rounded-xl border border-border/60 p-6 bg-gradient-to-br from-background to-muted/20 scroll-mt-24"
    >
      <h2 className="text-2xl font-serif font-semibold text-primary mb-6">
        Luồng Kinh Tế Bao Cấp
      </h2>
      <TooltipProvider>
        <div className="relative">
          {/* line connector */}
          <div className="absolute left-0 right-0 top-7 h-0.5 bg-border" />
          <div className="grid grid-cols-5 gap-4">
            {STEPS.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div
                  key={s.key}
                  className="relative flex flex-col items-center"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button
                            className={
                              "relative z-10 h-14 w-14 rounded-full ring-1 ring-border bg-card text-foreground " +
                              "shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
                            }
                            aria-label={s.label}
                          >
                            <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary/20 text-primary grid place-items-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            <IconComponent className="h-6 w-6" />
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent
                          align="center"
                          className="text-sm max-w-xs"
                        >
                          <p className="font-semibold text-primary mb-1">
                            {s.label}
                          </p>
                          <p className="text-foreground/70">{s.desc}</p>
                        </HoverCardContent>
                      </HoverCard>
                    </TooltipTrigger>
                    <TooltipContent>{s.label}</TooltipContent>
                  </Tooltip>
                  <p className="mt-3 text-center text-xs text-foreground/80 max-w-[10rem]">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
}
