"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const inflationDataVerified = [
  { year: 1980, inflation: 25.2, source: "IMF / IndexMundi" },
  { year: 1981, inflation: 69.6, source: "IMF / IndexMundi" },
  {
    year: 1982,
    inflation: 95.4,
    source: "IMF; Bùi Thị Kim Thanh (2007) ghi ~200%",
  },
  { year: 1983, inflation: 49.5, source: "IMF" },
  { year: 1984, inflation: 160, source: "Bùi Thị Kim Thanh (2007)" },
  { year: 1985, inflation: 300, source: "Tổng hợp nhiều nguồn" },
  { year: 1986, inflation: 774, source: "Chính   phủ Việt Nam (vietnam.gov.vn)" },
  { year: 1987, inflation: 223, source: "ĐH Kinh tế Quốc dân" },
  { year: 1988, inflation: 67, source: "IMF / TradingEconomics" },
];


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-md text-sm">
        <p className="font-bold text-primary">Năm {label}</p>
        <p>
          💹 <strong>Lạm phát:</strong> {data.inflation}%
        </p>
        <p className="text-foreground/70">
          📚 <strong>Nguồn:</strong> {data.source}
        </p>
      </div>
    );
  }
  return null;
};

export default function InflationChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-primary font-serif">
          Biểu Đồ: Lạm Phát Việt Nam 1980–1988
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 mb-4">
          Giai đoạn 1980–1988 là thời kỳ lạm phát nghiêm trọng nhất trong lịch
          sử kinh tế Việt Nam. Tỷ lệ lạm phát tăng mạnh từ <strong>~25%</strong>{" "}
          (1980) lên tới <strong>trên 700%</strong> (1986) do cải cách Giá –
          Lương – Tiền, trước khi giảm mạnh sau Đổi Mới 1986.
        </p>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={inflationDataVerified}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              label={{
                value: "Lạm phát (%)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <ReferenceLine
              x={1986}
              stroke="#f43f5e"
              strokeDasharray="4 4"
              label={{
                value: "Đổi Mới 1986",
                position: "top",
                fill: "#f43f5e",
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="inflation"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
              animationDuration={1200}
              name="Lạm phát (%)"
            />
          </LineChart>
        </ResponsiveContainer>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          <strong>Nguồn dữ liệu:</strong> Chính phủ Việt Nam (vietnam.gov.vn)
          [1]; Bùi Thị Kim Thanh (2007) [2]; IndexMundi / IMF [3]; Đại học Kinh
          tế Quốc dân [4]. <br />
          <em>
            Dữ liệu được tổng hợp từ nhiều nguồn học thuật và cơ quan thống kê
            để thể hiện xu hướng lạm phát thực tế của Việt Nam giai đoạn
            1980–1988.
          </em>
        </p>
      </CardContent>
    </Card>
  );
}


