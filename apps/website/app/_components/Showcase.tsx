"use client";

import { useState } from "react";
import Link from "next/link";
import TemplateCard from "./TemplateCard";
import TemplateDetailModal from "./TemplateDetailModal";
import { useCartStore } from "../_zustand/CartStore";

const categories = [
  { id: "all", label: "Vše" },
  { id: "Instagram", label: "Instagram" },
  { id: "Facebook", label: "Facebook" },
  { id: "LinkedIn", label: "LinkedIn" },
  { id: "Pinterest", label: "Pinterest" },
];

const templates = [
  {
    id: 1,
    category: "Instagram",
    theme: "Modern",
    title: "Instagram Stories Bundle",
    price: 590,
    originalPrice: null,
    image: "/templates/instagram-stories.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#10b981", "#6366f1", "#f59e0b"],
    ratio: "9:16",
    isNew: true,
  },
  {
    id: 2,
    category: "Instagram",
    theme: "Minimalist",
    title: "Instagram Posts Pack",
    price: 690,
    originalPrice: 890,
    image: "/templates/instagram-posts.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#ef4444", "#8b5cf6", "#14b8a6"],
    ratio: "1:1",
    isNew: false,
  },
  {
    id: 3,
    category: "Facebook",
    theme: "Professional",
    title: "Facebook Ads Templates",
    price: 890,
    originalPrice: null,
    image: "/templates/facebook-ads.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#3b82f6", "#10b981", "#f59e0b"],
    ratio: "16:9",
    isNew: false,
  },
  {
    id: 4,
    category: "LinkedIn",
    theme: "Business",
    title: "LinkedIn Carousel Kit",
    price: 990,
    originalPrice: null,
    image: "/templates/linkedin-carousel.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#0077b5", "#10b981", "#64748b"],
    ratio: "1:1",
    isNew: true,
  },
  {
    id: 5,
    category: "Pinterest",
    theme: "Creative",
    title: "Pinterest Pin Bundle",
    price: 690,
    originalPrice: null,
    image: "/templates/pinterest-pins.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#e60023", "#fbbf24", "#8b5cf6"],
    ratio: "2:3",
    isNew: false,
  },
  {
    id: 6,
    category: "Instagram",
    theme: "Trendy",
    title: "Instagram Reels Templates",
    price: 590,
    originalPrice: 790,
    image: "/templates/instagram-reels.jpg",
    rating: 0,
    reviews: 0,
    colors: ["#ec4899", "#8b5cf6", "#f59e0b"],
    ratio: "9:16",
    isNew: true,
  },
];

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTemplate, setSelectedTemplate] = useState<
    (typeof templates)[0] | null
  >(null);
  const { addItem } = useCartStore((state) => state);

  const filteredTemplates =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  const handleViewDetail = (templateId: number) => {
    const template = templates.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplate(template);
    }
  };

  const addToCardHandler = ({
    id,
    name,
    price,
  }: {
    id: number;
    name: string;
    price: number;
  }) => {
    addItem({
      id: id.toString(),
      name: name,
      price: price,
    });
  };

  return (
    <section
      id="templates"
      className="relative py-20 md:py-32 bg-linear-to-b from-transparent via-zinc-900/20 to-transparent"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-emerald-400 font-medium">
              Naše šablony
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Objevte naši kolekci
            <span className="gradient-text"> prémiových šablon</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Stovky profesionálně navržených šablon pro všechny hlavní sociální
            platformy.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "glass glass-hover text-zinc-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Templates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onViewDetail={() => handleViewDetail(template.id)}
              onAddToCart={() =>
                addToCardHandler({
                  id: template.id,
                  name: template.title,
                  price: template.price,
                })
              }
            />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg glass glass-hover font-semibold text-white transition-all group"
          >
            <span>Zobrazit všechny šablony</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <TemplateDetailModal
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          template={selectedTemplate}
          onAddToCart={() => {
            addToCardHandler({
              id: selectedTemplate.id,
              name: selectedTemplate.title,
              price: selectedTemplate.price,
            });
            setSelectedTemplate(null);
          }}
        />
      )}
    </section>
  );
}
