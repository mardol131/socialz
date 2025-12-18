"use client";

interface CatalogSidebarProps {
  categories: Array<{ id: string; label: string; count: number }>;
  themes: Array<{ id: string; label: string; count: number }>;
  colors: Array<{ id: string; label: string; hex: string }>;
  ratios: Array<{ id: string; label: string; count: number }>;
  selectedCategories: string[];
  selectedThemes: string[];
  selectedColors: string[];
  selectedRatios: string[];
  priceRange: [number, number];
  onCategoryChange: (categories: string[]) => void;
  onThemeChange: (themes: string[]) => void;
  onColorChange: (colors: string[]) => void;
  onRatioChange: (ratios: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

export default function CatalogSidebar({
  categories,
  themes,
  colors,
  ratios,
  selectedCategories,
  selectedThemes,
  selectedColors,
  selectedRatios,
  priceRange,
  onCategoryChange,
  onThemeChange,
  onColorChange,
  onRatioChange,
  onPriceChange,
  onClearFilters,
}: CatalogSidebarProps) {
  const toggleFilter = (
    selected: string[],
    setSelected: (value: string[]) => void,
    value: string
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="sticky top-24 space-y-6">
      {/* Price Filter */}
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

      {/* Categories Filter */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Kategorie</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() =>
                    toggleFilter(
                      selectedCategories,
                      onCategoryChange,
                      category.id
                    )
                  }
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50"
                />
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {category.label}
                </span>
              </div>
              <span className="text-sm text-zinc-500">{category.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Theme Filter */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Tématika</h3>
        <div className="space-y-3">
          {themes.map((theme) => (
            <label
              key={theme.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedThemes.includes(theme.id)}
                  onChange={() =>
                    toggleFilter(selectedThemes, onThemeChange, theme.id)
                  }
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50"
                />
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {theme.label}
                </span>
              </div>
              <span className="text-sm text-zinc-500">{theme.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Barvy</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() =>
                toggleFilter(selectedColors, onColorChange, color.id)
              }
              className={`relative w-8 h-8 rounded-md transition-all ${
                selectedColors.includes(color.id)
                  ? "ring-2 ring-emerald-500 scale-110"
                  : "hover:scale-105"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.label}
            >
              {selectedColors.includes(color.id) && (
                <svg
                  className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Aspect Ratio Filter */}
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Poměr stran</h3>
        <div className="space-y-3">
          {ratios.map((ratio) => (
            <label
              key={ratio.id}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedRatios.includes(ratio.id)}
                  onChange={() =>
                    toggleFilter(selectedRatios, onRatioChange, ratio.id)
                  }
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50"
                />
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {ratio.label}
                </span>
              </div>
              <span className="text-sm text-zinc-500">{ratio.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={onClearFilters}
        className="w-full px-6 py-3 rounded-lg glass glass-hover text-zinc-300 hover:text-white font-medium transition-colors"
      >
        Vymazat filtry
      </button>
    </div>
  );
}
