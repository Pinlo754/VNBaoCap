"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Sources() {
  return (
    <Card className="bg-card border-border/70 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-primary font-serif">
          Nguồn Tham Khảo
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-foreground/80 space-y-3">
        <p>
          Dữ liệu được tổng hợp từ nhiều nguồn học thuật và cơ quan thống kê để
          minh họa xu hướng phát triển kinh tế Việt Nam giai đoạn 1980–1990:
        </p>
        <Separator className="my-3" />

        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              📊 Nguồn dữ liệu Lạm phát (1980-1988):
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                Chính phủ Việt Nam:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.vietnam.gov.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vietnam.gov.vn
                </a>
              </li>
              <li>
                IMF / IndexMundi — Dữ liệu lạm phát quốc tế:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.indexmundi.com/vietnam/inflation_rate_(consumer_prices).html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IndexMundi
                </a>
              </li>
              <li>
                Bùi Thị Kim Thanh (2007) — Nghiên cứu về lạm phát Việt Nam
              </li>
              <li>Đại học Kinh tế Quốc dân — Tư liệu lịch sử kinh tế</li>
              <li>
                TradingEconomics — Dữ liệu kinh tế Việt Nam:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://tradingeconomics.com/vietnam/inflation-cpi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TradingEconomics
                </a>
              </li>
            </ul>
          </div>

          <Separator className="my-2" />

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              🌾 Nguồn dữ liệu Nông nghiệp (1980-1990):
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                Chính phủ Việt Nam:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.vietnam.gov.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vietnam.gov.vn
                </a>
              </li>
              <li>
                FAO (Food and Agriculture Organization) — Báo cáo nông nghiệp
                quốc tế:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.fao.org/faostat/en/#country/237"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAO
                </a>
              </li>
              <li>
                Scirp.org — Nghiên cứu FAO về nông nghiệp Việt Nam:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.scirp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scirp.org
                </a>
              </li>
              <li>
                Wikipedia / Tư liệu lịch sử — Nghiên cứu kinh tế Việt Nam:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://vi.wikipedia.org/wiki/N%C3%B4ng_nghi%E1%BB%87p_Vi%E1%BB%87t_Nam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </a>
              </li>
            </ul>
          </div>

          <Separator className="my-2" />

          <div>
            <h3 className="font-semibold text-foreground mb-2">
              📚 Tài liệu tham khảo khác:
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                Tổng cục Thống kê (GSO) — Niên giám thống kê:{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://www.gso.gov.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gso.gov.vn
                </a>
              </li>
              <li>
                Tư liệu về Đổi Mới và Đại hội VI (1986):{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Đổi Mới
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-3" />

        <p className="text-xs text-muted-foreground italic">
          Lưu ý: Dữ liệu được tổng hợp từ nhiều nguồn học thuật và có thể có sự
          chênh lệch nhỏ giữa các nguồn khác nhau do phương pháp thống kê và
          thời điểm thu thập dữ liệu.
        </p>
      </CardContent>
    </Card>
  );
}
