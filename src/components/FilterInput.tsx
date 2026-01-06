"use client";

type Props = {
  threshold: number;
  setThreshold: (value: number) => void;
};

export default function FilterInput({ threshold, setThreshold }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Minimum Sales Threshold
      </label>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="w-full rounded-md border px-3 py-2"
      />
    </div>
  );
}
