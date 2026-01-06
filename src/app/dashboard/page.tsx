"use client";

import { useEffect, useState } from "react";
import SalesChart from "@/components/SalesChart";
import FilterInput from "@/components/FilterInput";
import ChartSwitcher from "@/components/ChartSwitcher";

type SalesData = {
  month: string;
  amount: number;
};

export default function DashboardPage() {
  const [sales, setSales] = useState<SalesData[]>([]);
  const [threshold, setThreshold] = useState(0);
  const [chartType, setChartType] =
    useState<"bar" | "line" | "pie">("bar");

  // ✅ MOCK DATA (IMPORTANT)
  useEffect(() => {
    const mockData: SalesData[] = [
      { month: "Jan", amount: 1200 },
      { month: "Feb", amount: 800 },
      { month: "Mar", amount: 1500 },
      { month: "Apr", amount: 900 },
      { month: "May", amount: 1700 },
    ];
    setSales(mockData);
  }, []);

  const filteredSales = sales.filter(
    (item) => item.amount > threshold
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Sales Dashboard
      </h1>

      <FilterInput
        threshold={threshold}
        setThreshold={setThreshold}
      />

      <ChartSwitcher
        chartType={chartType}
        setChartType={setChartType}
      />

      <SalesChart
        data={filteredSales}
        chartType={chartType}
      />
    </div>
  );
}
