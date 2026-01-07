"use client";

type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function FilterInput({ threshold, setThreshold }: Props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-semibold text-gray-800">
        Minimum Sales Threshold
      </label>

      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        placeholder="Enter minimum sales amount"
        className="w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}
