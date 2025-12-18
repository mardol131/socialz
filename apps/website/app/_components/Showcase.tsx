"use client";

import { useState } from "react";

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Vše" },
    { id: "instagram", label: "Instagram" },
    { id: "facebook", label: "Facebook" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "pinterest", label: "Pinterest" },
  ];

  const templates = [
    {
      id: 1,
      category: "instagram",
      title: "Instagram Stories Bundle",
      description: "50+ moderních šablon pro Instagram Stories",
      price: "590 Kč",
      image: "/templates/instagram-stories.jpg",
      tags: ["Stories", "Instagram", "Modern"],
    },
    {
      id: 2,
      category: "instagram",
      title: "Instagram Posts Pack",
      description: "Profesionální šablony pro feed příspěvky",
      price: "790 Kč",
      image: "/templates/instagram-posts.jpg",
      tags: ["Posts", "Instagram", "Professional"],
    },
    {
      id: 3,
      category: "facebook",
      title: "Facebook Ads Templates",
      description: "Šablony pro úspěšné Facebook reklamy",
      price: "890 Kč",
      image: "/templates/facebook-ads.jpg",
      tags: ["Ads", "Facebook", "Marketing"],
    },
    {
      id: 4,
      category: "linkedin",
      title: "LinkedIn Carousel Kit",
      description: "Profesionální carousel posty pro LinkedIn",
      price: "990 Kč",
      image: "/templates/linkedin-carousel.jpg",
      tags: ["Carousel", "LinkedIn", "Business"],
    },
    {
      id: 5,
      category: "pinterest",
      title: "Pinterest Pin Bundle",
      description: "Optimalizované piny pro maximální reach",
      price: "690 Kč",
      image: "/templates/pinterest-pins.jpg",
      tags: ["Pins", "Pinterest", "Visual"],
    },
    {
      id: 6,
      category: "instagram",
      title: "Instagram Reels Templates",
      description: "Trendy šablony pro Instagram Reels",
      price: "690 Kč",
      image: "/templates/instagram-reels.jpg",
      tags: ["Reels", "Instagram", "Video"],
    },
  ];

  const filteredTemplates =
    activeCategory === "all"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section
      id="templates"
      className="relative py-20 md:py-32 bg-linear-to-b from-transparent via-zinc-900/20 to-transparent"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass border border-emerald-500/30 mb-6">
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
            <div
              key={template.id}
              className="group glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 hover:scale-105"
            >
              {/* Image placeholder */}
              <div className="relative h-64 bg-linear-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-zinc-700/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-zinc-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass border border-emerald-500/30 text-sm font-semibold text-emerald-400">
                  {template.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {template.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-zinc-400 mb-4">{template.description}</p>
                <button className="w-full px-6 py-3 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40">
                  Zobrazit detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="/shop"
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
          </a>
        </div>
      </div>
    </section>
  );
}
