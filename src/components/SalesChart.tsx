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
} from "recharts";

type SalesData = {
  month: string;
  amount: number;
};

type Props = {
  data: SalesData[];
  chartType: "bar" | "line" | "pie";
};

export default function SalesChart({ data, chartType }: Props) {
  if (!data.length) {
    return (
      <div className="h-80 flex items-center justify-center text-gray-500">
        No data matches the selected threshold
      </div>
    );
  }

  return (
    <div className="h-80 bg-white rounded-lg p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "bar" && (
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" />
          </BarChart>
        )}

        {chartType === "line" && (
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line dataKey="amount" />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Tooltip />
            <Pie data={data} dataKey="amount" nameKey="month" />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
