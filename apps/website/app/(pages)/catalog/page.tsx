"use client";

import { useCartStore } from "@/app/_zustand/CartStore";
import { useState } from "react";

import Footer from "../../_components/Footer";
import TemplateCard from "../../_components/TemplateCard";
import TemplateDetailModal from "../../_components/TemplateDetailModal";
import CatalogSidebar from "@/app/_components/CatalogSidebar";
import MobileFilters from "@/app/_components/MobileFilters";
const categories = [
  { id: "instagram", label: "Instagram", count: 245 },
  { id: "facebook", label: "Facebook", count: 156 },
  { id: "linkedin", label: "LinkedIn", count: 98 },
  { id: "pinterest", label: "Pinterest", count: 134 },
  { id: "twitter", label: "Twitter", count: 87 },
];

const themes = [
  { id: "business", label: "Business", count: 167 },
  { id: "creative", label: "Kreativní", count: 203 },
  { id: "minimal", label: "Minimalistické", count: 145 },
  { id: "bold", label: "Výrazné", count: 112 },
  { id: "elegant", label: "Elegantní", count: 98 },
];

const colors = [
  { id: "blue", label: "Modrá", hex: "#3B82F6" },
  { id: "red", label: "Červená", hex: "#EF4444" },
  { id: "green", label: "Zelená", hex: "#10B981" },
  { id: "purple", label: "Fialová", hex: "#8B5CF6" },
  { id: "pink", label: "Růžová", hex: "#EC4899" },
  { id: "orange", label: "Oranžová", hex: "#F59E0B" },
];

const ratios = [
  { id: "1:1", label: "1:1 (Post)", count: 234 },
  { id: "9:16", label: "9:16 (Story)", count: 189 },
  { id: "16:9", label: "16:9 (YouTube)", count: 145 },
  { id: "4:5", label: "4:5 (Portrait)", count: 123 },
];

const templates = [
  {
    id: 1,
    title: "Modern Instagram Stories Pack",
    category: "Instagram",
    theme: "Kreativní",
    price: 590,
    originalPrice: 790,
    image: "/templates/instagram-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#3B82F6", "#10B981"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 2,
    title: "Professional LinkedIn Templates",
    category: "LinkedIn",
    theme: "Business",
    price: 890,
    originalPrice: null,
    image: "/templates/linkedin-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#3B82F6", "#8B5CF6"],
    ratio: "1:1",
    isNew: false,
  },
  {
    id: 3,
    title: "Minimalist Instagram Posts",
    category: "Instagram",
    theme: "Minimalistické",
    price: 690,
    originalPrice: 890,
    image: "/templates/instagram-2.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#EF4444", "#F59E0B"],
    ratio: "1:1",
    isNew: false,
  },
  {
    id: 4,
    title: "Pinterest Pin Bundle",
    category: "Pinterest",
    theme: "Kreativní",
    price: 790,
    originalPrice: null,
    image: "/templates/pinterest-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#EC4899", "#8B5CF6"],
    ratio: "4:5",
    isNew: true,
  },
  {
    id: 5,
    title: "Bold Facebook Ads Templates",
    category: "Facebook",
    theme: "Výrazné",
    price: 990,
    originalPrice: 1290,
    image: "/templates/facebook-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#EF4444", "#3B82F6"],
    ratio: "1:1",
    isNew: false,
  },
  {
    id: 6,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 7,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 8,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 9,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 10,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 11,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 12,
    title: "Elegant Social Media Bundle",
    category: "Instagram",
    theme: "Elegantní",
    price: 1190,
    originalPrice: null,
    image: "/templates/bundle-1.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#8B5CF6", "#EC4899"],
    ratio: "9:16",
    isNew: true,
  },
];

export default function CatalogPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedRatios, setSelectedRatios] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const { addItem } = useCartStore((state) => state);

  const addToCardHandler = (item: {
    id: string;
    name: string;
    price: number;
  }) => {
    addItem(item);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <main className="pt-24 pb-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Katalog <span className="gradient-text">šablon</span>
            </h1>
            <p className="text-lg text-zinc-400">
              Prohlédněte si naši kompletní kolekci profesionálních šablon pro
              sociální sítě
            </p>
          </div>

          {/* Sort and View Options */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-zinc-400">
              Zobrazeno{" "}
              <span className="text-white font-semibold">
                {templates.length}
              </span>{" "}
              šablon
            </p>
            <div className="flex items-center gap-4">
              <label className="text-sm text-zinc-400">Řadit podle:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg glass border border-zinc-800/50 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
              >
                <option value="newest">Nejnovější</option>
                <option value="popular">Nejoblíbenější</option>
                <option value="price-low">Cena: Nízká → Vysoká</option>
                <option value="price-high">Cena: Vysoká → Nízká</option>
                <option value="rating">Nejlépe hodnocené</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop Sidebar - Filters */}
            <div className="hidden lg:block">
              <CatalogSidebar
                categories={categories}
                themes={themes}
                colors={colors}
                ratios={ratios}
                selectedCategories={selectedCategories}
                selectedThemes={selectedThemes}
                selectedColors={selectedColors}
                selectedRatios={selectedRatios}
                priceRange={priceRange}
                onCategoryChange={setSelectedCategories}
                onThemeChange={setSelectedThemes}
                onColorChange={setSelectedColors}
                onRatioChange={setSelectedRatios}
                onPriceChange={setPriceRange}
                onClearFilters={() => {
                  setSelectedCategories([]);
                  setSelectedThemes([]);
                  setSelectedColors([]);
                  setSelectedRatios([]);
                  setPriceRange([0, 2000]);
                }}
                onApplyFilters={() => {}}
              />
            </div>

            {/* Mobile Filters Modal */}
            <MobileFilters
              categories={categories}
              themes={themes}
              colors={colors}
              ratios={ratios}
              selectedCategories={selectedCategories}
              selectedThemes={selectedThemes}
              selectedColors={selectedColors}
              selectedRatios={selectedRatios}
              priceRange={priceRange}
              onCategoryChange={setSelectedCategories}
              onThemeChange={setSelectedThemes}
              onColorChange={setSelectedColors}
              onRatioChange={setSelectedRatios}
              onPriceChange={setPriceRange}
              onClearFilters={() => {
                setSelectedCategories([]);
                setSelectedThemes([]);
                setSelectedColors([]);
                setSelectedRatios([]);
                setPriceRange([0, 2000]);
              }}
              onApplyFilters={() => {}}
            />

            {/* Main Content - Templates Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onViewDetail={() => setSelectedTemplate(template.id)}
                    onAddToCart={() => {
                      addToCardHandler({
                        id: template.id.toString(),
                        name: template.title,
                        price: template.price,
                      });
                    }}
                  />
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mt-12">
                <button className="px-8 py-4 rounded-lg glass glass-hover text-white font-medium transition-all hover:scale-105 group">
                  <span className="flex items-center gap-2">
                    Načíst další šablony
                    <svg
                      className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Template Detail Modal */}
      {selectedTemplate !== null && (
        <TemplateDetailModal
          isOpen={selectedTemplate !== null}
          onClose={() => setSelectedTemplate(null)}
          template={templates.find((t) => t.id === selectedTemplate)!}
          onAddToCart={() => {
            setCartCount(cartCount + 1);
            setSelectedTemplate(null);
            // Zde může být logika pro přidání do košíku
          }}
        />
      )}

      <Footer />
    </div>
  );
}
