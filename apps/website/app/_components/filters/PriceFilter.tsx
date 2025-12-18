interface PriceFilterProps {
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export default function PriceFilter({
  priceRange,
  onPriceChange,
}: PriceFilterProps) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Cena</h3>
      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="2000"
          value={priceRange[1]}
          onChange={(e) =>
            onPriceChange([priceRange[0], parseInt(e.target.value)])
          }
          className="w-full accent-emerald-500"
        />
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">0 Kč</span>
          <span className="text-emerald-400 font-semibold">
            {priceRange[1]} Kč
          </span>
        </div>
      </div>
    </div>
  );
}
