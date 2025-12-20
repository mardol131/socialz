"use client";

import { useCartStore } from "@/app/_zustand/CartStore";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import TemplateCard from "@/app/_components/TemplateCard";
import TemplateDetailModal from "@/app/_components/TemplateDetailModal";
import CatalogSidebar from "@/app/_components/CatalogSidebar";
import MobileFilters from "@/app/_components/MobileFilters";
import { Template } from "../_fixtures/templates";
import SortAndCount from "./SortAndCount";
import { templateSortOptions } from "../_fixtures/sortOptions";
import { CheckboxItem } from "@/app/_components/filters/CheckboxFilter";
import { ColorItem } from "@/app/_components/filters/ColorFilter";
import { useFiltersStore } from "@/app/_zustand/FilterStore";

interface CatalogClientProps {
  templates: Template[];
  categories: CheckboxItem[];
  themes: CheckboxItem[];
  colors: ColorItem[];
  ratios: CheckboxItem[];
  socials: CheckboxItem[];
}

export default function CatalogClient({
  templates,
  categories,
  themes,
  colors,
  ratios,
  socials,
}: CatalogClientProps) {
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
    <>
      {/* Sort and View Options */}
      <SortAndCount
        itemCount={templates.length}
        itemLabel="šablon"
        sortValue={sortBy}
        sortOptions={templateSortOptions}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar - Filters */}
        <div className="hidden lg:block">
          <CatalogSidebar
            themes={themes}
            colors={colors}
            ratios={ratios}
            socials={socials}
            onApplyFilters={() => {}}
          />
        </div>

        {/* Mobile Filters Modal */}
        <MobileFilters
          themes={themes}
          colors={colors}
          ratios={ratios}
          socials={socials}
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
                <FiChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Template Detail Modal */}
      {selectedTemplate !== null && (
        <TemplateDetailModal
          isOpen={selectedTemplate !== null}
          onClose={() => setSelectedTemplate(null)}
          template={templates.find((t) => t.id === selectedTemplate)!}
          onAddToCart={() => {
            setCartCount(cartCount + 1);
            setSelectedTemplate(null);
          }}
        />
      )}
    </>
  );
}
