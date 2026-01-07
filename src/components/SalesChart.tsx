"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

type SalesData = {
  month: string;
  amount: number;
};

type Props = {
  data: SalesData[];
  chartType: "bar" | "line" | "pie";
};

const COLORS = [
  "#6366f1", // indigo
  "#22c55e", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#0ea5e9", // sky
];

export default function SalesChart({ data, chartType }: Props) {
  if (!data.length) {
    return (
      <div className="h-80 flex items-center justify-center bg-white rounded-xl shadow-md">
        <p className="text-gray-700 font-medium">
          No data matches the selected threshold
        </p>
      </div>
    );
  }

  return (
    <div className="h-80 bg-white rounded-xl p-4 shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        {/* BAR CHART — different color per month */}
        {chartType === "bar" && (
          <BarChart data={data}>
            <XAxis
              dataKey="month"
              tick={{ fill: "#1f2937", fontSize: 12 }}
              tickLine={{ stroke: "#1f2937" }}
              axisLine={{ stroke: "#1f2937" }}
            />
            <YAxis
              tick={{ fill: "#1f2937", fontSize: 12 }}
              tickLine={{ stroke: "#1f2937" }}
              axisLine={{ stroke: "#1f2937" }}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        )}

        {/* LINE CHART — straight line + colored dots */}
        {chartType === "line" && (
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              tick={{ fill: "#1f2937", fontSize: 12 }}
              tickLine={{ stroke: "#1f2937" }}
              axisLine={{ stroke: "#1f2937" }}
            />
            <YAxis
              tick={{ fill: "#1f2937", fontSize: 12 }}
              tickLine={{ stroke: "#1f2937" }}
              axisLine={{ stroke: "#1f2937" }}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Line
              type="linear"
              dataKey="amount"
              stroke="#111827"
              strokeWidth={3}
              dot={({ cx, cy, index }) => (
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill={COLORS[index % COLORS.length]}
                />
              )}
              activeDot={({ cx, cy, index }) => (
                <circle
                  cx={cx}
                  cy={cy}
                  r={7}
                  fill={COLORS[index % COLORS.length]}
                />
              )}
            />
          </LineChart>
        )}

        {/* PIE CHART — already multi-colored */}
        {chartType === "pie" && (
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                color: "#111827",
              }}
            />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="month"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
