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

const agricultureDataVerified = [
  {
    year: 1980,
    output: 14.5,
    growth: 1.9,
    source: "Chính phủ Việt Nam (vietnam.gov.vn)",
  },
  {
    year: 1981,
    output: 15.0,
    growth: 4.9,
    source: "Chính phủ Việt Nam (vietnam.gov.vn)",
  },
  {
    year: 1984,
    output: 17.3,
    growth: 5.0,
    source: "Wikipedia / Nghiên cứu kinh tế VN",
  },
  {
    year: 1985,
    output: 18.2,
    growth: 4.9,
    source: "Chính phủ Việt Nam (vietnam.gov.vn)",
  },
  {
    year: 1987,
    output: 16.4,
    growth: 3.0,
    source: "Scirp.org (Nghiên cứu FAO)",
  },
  {
    year: 1990,
    output: 19.0,
    growth: 3.9,
    source: "FAO / Báo cáo kinh tế quốc tế",
  },
];

const CustomTooltipAgri = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-md text-sm">
        <p className="font-bold text-primary">Năm {label}</p>
        <p>
          🌾 <strong>Sản lượng:</strong> {data.output} triệu tấn
        </p>
        <p>
          📈 <strong>Tăng trưởng:</strong> {data.growth}%
        </p>
        <p className="text-foreground/70">
          📚 <strong>Nguồn:</strong> {data.source}
        </p>
      </div>
    );
  }
  return null;
};

export default function AgricultureChart() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-primary font-serif">
          Biểu Đồ: Sản Lượng Nông Nghiệp Việt Nam (1980–1990)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 mb-4">
          Dữ liệu cho thấy nông nghiệp Việt Nam tăng trưởng chậm trong đầu thập
          niên 1980, nhưng đã phục hồi nhanh chóng sau các chính sách{" "}
          <strong>Khoán 100</strong> (1981) và <strong>Khoán 10</strong> (1988).
          Đến năm 1990, sản lượng lương thực đạt khoảng{" "}
          <strong>19 triệu tấn</strong>, đưa Việt Nam thoát khỏi tình trạng
          thiếu đói và trở thành nước xuất khẩu gạo.
        </p>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={agricultureDataVerified}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              yAxisId="left"
              orientation="left"
              label={{
                value: "Sản lượng (triệu tấn)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{
                value: "Tăng trưởng (%)",
                angle: 90,
                position: "insideRight",
                style: { textAnchor: "middle" },
              }}
            />
            <Tooltip content={<CustomTooltipAgri />} />
            <Legend />
            <ReferenceLine
              x={1986}
              yAxisId="left"
              stroke="#f59e0b"
              strokeDasharray="4 4"
              label={{
                value: "Đổi Mới 1986",
                position: "top",
                fill: "#f59e0b",
                fontSize: 12,
              }}
            />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="output"
              stroke="#34d399"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
              name="Sản lượng (triệu tấn)"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              stroke="#60a5fa"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              name="Tăng trưởng (%)"
            />
          </LineChart>
        </ResponsiveContainer>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          <strong>Nguồn dữ liệu:</strong> Chính phủ Việt Nam (vietnam.gov.vn)
          [1]; FAO [4]; Scirp.org (Nghiên cứu về nông nghiệp Việt Nam) [3];
          Wikipedia / Tư liệu lịch sử [2]. <br />
          <em>
            Dữ liệu được tổng hợp từ nhiều nguồn học thuật và cơ quan thống kê
            để minh họa xu hướng phát triển nông nghiệp Việt Nam giai đoạn
            1980–1990.
          </em>
        </p>
      </CardContent>
    </Card>
  );
}
