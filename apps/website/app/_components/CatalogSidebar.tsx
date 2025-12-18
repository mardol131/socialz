"use client";

import PriceFilter from "./filters/PriceFilter";
import CheckboxFilter from "./filters/CheckboxFilter";
import ColorFilter from "./filters/ColorFilter";

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
  onApplyFilters: () => void;
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
  onApplyFilters,
}: CatalogSidebarProps) {
  return (
    <div className="top-24 space-y-6">
      {/* Price Filter */}
      <PriceFilter priceRange={priceRange} onPriceChange={onPriceChange} />

      {/* Categories Filter */}
      <CheckboxFilter
        title="Kategorie"
        items={categories}
        selectedItems={selectedCategories}
        onItemChange={onCategoryChange}
      />

      {/* Themes Filter */}
      <CheckboxFilter
        title="Témata"
        items={themes}
        selectedItems={selectedThemes}
        onItemChange={onThemeChange}
      />

      {/* Colors Filter */}
      <ColorFilter
        colors={colors}
        selectedColors={selectedColors}
        onColorChange={onColorChange}
      />

      {/* Aspect Ratio Filter */}
      <CheckboxFilter
        title="Poměr stran"
        items={ratios}
        selectedItems={selectedRatios}
        onItemChange={onRatioChange}
      />
      <div className="sticky bottom-0 bg-zinc-950 border-t border-zinc-800/50 py-4">
        <button
          onClick={() => {
            onApplyFilters();
          }}
          className="w-full px-6 py-4 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all"
        >
          Zobrazit výsledky
        </button>
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
