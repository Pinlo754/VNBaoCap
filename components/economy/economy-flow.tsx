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
    desc: "Chỉ tiêu pháp lệnh, kế hoạch 5 năm",
    icon: ClipboardList,
  },
  {
    key: "alloc",
    label: "Phân Bổ Vật Tư",
    desc: "Cấp phát vật tư theo chỉ tiêu",
    icon: Package,
  },
  {
    key: "produce",
    label: "Sản Xuất",
    desc: "Đơn vị bị ràng buộc, thiếu tự chủ",
    icon: Factory,
  },
  {
    key: "distribute",
    label: "Phân Phối (Tem Phiếu)",
    desc: "Phân phối định mức, chợ đen xuất hiện",
    icon: Ticket,
  },
  {
    key: "consume",
    label: "Tiêu Dùng",
    desc: "Thiếu hụt hàng hoá kéo dài",
    icon: ShoppingCart,
  },
];

export default function EconomyFlow() {
  return (
    <section id="flow" className="rounded-xl border border-border/60 p-6 bg-gradient-to-br from-background to-muted/20 scroll-mt-24">
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
