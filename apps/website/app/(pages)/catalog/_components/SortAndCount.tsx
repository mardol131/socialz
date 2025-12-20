"use client";

export interface SortOption {
  value: string;
  label: string;
}

interface SortAndCountProps {
  itemCount: number;
  itemLabel?: string;
  sortValue: string;
  sortOptions: SortOption[];
  onSortChange: (value: string) => void;
  sortLabel?: string;
}

export default function SortAndCount({
  itemCount,
  itemLabel = "položek",
  sortValue,
  sortOptions,
  onSortChange,
  sortLabel = "Řadit podle:",
}: SortAndCountProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <p className="text-zinc-400">
        Zobrazeno <span className="text-white font-semibold">{itemCount}</span>{" "}
        {itemLabel}
      </p>
      <div className="flex items-center gap-4">
        <label className="text-sm text-zinc-400">{sortLabel}</label>
        <select
          value={sortValue}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 rounded-lg glass border border-zinc-800/50 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
