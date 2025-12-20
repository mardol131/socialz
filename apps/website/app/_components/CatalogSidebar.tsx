"use client";

import PriceFilter from "./filters/PriceFilter";
import CheckboxFilter, { CheckboxItem } from "./filters/CheckboxFilter";
import ColorFilter, { ColorItem } from "./filters/ColorFilter";
import { Range, useFiltersStore } from "../_zustand/FilterStore";

interface CatalogSidebarProps {
  themes: CheckboxItem[];
  colors: ColorItem[];
  ratios: CheckboxItem[];
  socials: CheckboxItem[];
  onApplyFilters: () => void;
}

export default function CatalogSidebar({
  themes,
  colors,
  ratios,
  socials,
  onApplyFilters,
}: CatalogSidebarProps) {
  const {
    selectedThemes,
    selectedColors,
    selectedRatios,
    selectedSocials,
    priceRange,
    setPriceRange,
    setSelectedThemes,
    setSelectedColors,
    setSelectedRatios,
    setSelectedSocials,
    clearFilters,
  } = useFiltersStore();

  return (
    <div className="top-24 space-y-6">
      {/* Price Filter */}
      <PriceFilter priceRange={priceRange} onPriceChange={setPriceRange} />

      {/* Categories Filter */}
      {/* <CheckboxFilter
        title="Kategorie"
        items={categories}
        selectedItems={selectedCategories}
        onItemChange={onCategoryChange}
      /> */}

      {/* Themes Filter */}
      <CheckboxFilter
        title="Témata"
        items={themes}
        selectedItems={selectedThemes}
        onItemChange={setSelectedThemes}
      />

      {/* Colors Filter */}
      <ColorFilter
        colors={colors}
        selectedColors={selectedColors}
        onColorChange={setSelectedColors}
      />

      {/* Aspect Ratio Filter */}
      <CheckboxFilter
        title="Poměr stran"
        items={ratios}
        selectedItems={selectedRatios}
        onItemChange={setSelectedRatios}
      />

      {/* Aspect Ratio Filter */}
      <CheckboxFilter
        title="Sociální sítě"
        items={socials}
        selectedItems={selectedSocials}
        onItemChange={setSelectedSocials}
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
        onClick={clearFilters}
        className="w-full px-6 py-3 rounded-lg glass glass-hover text-zinc-300 hover:text-white font-medium transition-colors"
      >
        Vymazat filtry
      </button>
    </div>
  );
}
