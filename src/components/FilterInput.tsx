"use client";

import { useState } from "react";

type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function FilterInput({ threshold, setThreshold }: Props) {
  const [inputValue, setInputValue] = useState<number>(threshold);

  const handleApply = () => {
    setThreshold(inputValue);
  };

  const handleReset = () => {
    setInputValue(0);
    setThreshold(0);
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-semibold text-gray-800">
        Minimum Sales Threshold
      </label>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter minimum sales amount"
        className="w-full rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleApply}
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Apply Filter
        </button>

        <button
          onClick={handleReset}
          className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
