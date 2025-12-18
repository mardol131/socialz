"use client";

import { useState } from "react";
import { FaSlidersH } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import PriceFilter from "./filters/PriceFilter";
import CheckboxFilter from "./filters/CheckboxFilter";
import ColorFilter from "./filters/ColorFilter";

interface MobileFiltersProps {
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

export default function MobileFilters({
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
}: MobileFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeFiltersCount =
    selectedCategories.length +
    selectedThemes.length +
    selectedColors.length +
    selectedRatios.length +
    (priceRange[1] < 2000 ? 1 : 0);

  return (
    <>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-6 py-4 rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all lg:hidden flex items-center gap-2"
      >
        <FaSlidersH className="w-5 h-5" />
        Filtry
        {activeFiltersCount > 0 && (
          <span className="px-2 py-0.5 rounded-full bg-white text-emerald-600 text-xs font-bold">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-zinc-950 rounded-t-3xl overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-zinc-950 border-b border-zinc-800/50 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Filtry</h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      onClearFilters();
                      setIsOpen(false);
                    }}
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Vymazat vše
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full glass-hover flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                  >
                    <IoClose className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] px-6 py-6 space-y-6">
              {/* Price Filter */}
              <PriceFilter
                priceRange={priceRange}
                onPriceChange={onPriceChange}
              />

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

              {/* Ratios Filter */}
              <CheckboxFilter
                title="Poměr stran"
                items={ratios}
                selectedItems={selectedRatios}
                onItemChange={onRatioChange}
              />
            </div>

            {/* Footer - Apply Button */}
            <div className="sticky bottom-0 bg-zinc-950 border-t border-zinc-800/50 px-6 py-4">
              <button
                onClick={() => {
                  onApplyFilters();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-4 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all"
              >
                Zobrazit výsledky
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
