"use client";

type ChartType = "bar" | "line" | "pie";

type Props = {
  chartType: ChartType;
  setChartType: (type: ChartType) => void;
};

export default function ChartSwitcher({
  chartType,
  setChartType,
}: Props) {
  return (
    <div className="flex gap-3 mb-6">
      {(["bar", "line", "pie"] as ChartType[]).map((type) => {
        const isActive = chartType === type;

        return (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`
              px-5 py-2 rounded-lg font-medium transition-all duration-200
              ${
                isActive
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }
            `}
          >
            {type.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
