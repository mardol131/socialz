"use client";

import { create } from "zustand";
import { CheckboxItem } from "../_components/filters/CheckboxFilter";
import { ColorItem } from "../_components/filters/ColorFilter";

export type Range = [number, number];

type FiltersStore = {
  priceRange: Range;
  selectedColors: ColorItem[];
  selectedThemes: CheckboxItem[];
  selectedRatios: CheckboxItem[];
  selectedSocials: CheckboxItem[];
  setPriceRange: (range: Range) => void;
  setSelectedColors: (colors: ColorItem[]) => void;
  setSelectedThemes: (themes: CheckboxItem[]) => void;
  setSelectedRatios: (ratios: CheckboxItem[]) => void;
  setSelectedSocials: (socials: CheckboxItem[]) => void;
  clearFilters: () => void;
};

export const useFiltersStore = create<FiltersStore>()((set) => {
  return {
    selectedColors: [],
    selectedThemes: [],
    selectedRatios: [],
    selectedSocials: [],
    priceRange: [0, 2000],
    setPriceRange: (range) => set({ priceRange: range }),
    setSelectedColors: (colors) => set({ selectedColors: colors }),
    setSelectedThemes: (themes) => set({ selectedThemes: themes }),
    setSelectedRatios: (ratios) => set({ selectedRatios: ratios }),
    setSelectedSocials: (socials) => set({ selectedSocials: socials }),
    clearFilters: () => {
      set({
        selectedColors: [],
        selectedThemes: [],
        selectedRatios: [],
        selectedSocials: [],
        priceRange: [0, 2000],
      });
    },
  };
});
