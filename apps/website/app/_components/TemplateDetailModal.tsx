"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiShoppingCart, FiCheck } from "react-icons/fi";

interface TemplateDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    id: number;
    title: string;
    category: string;
    theme: string;
    price: number;
    originalPrice: number | null;
    rating: number;
    reviews: number;
    colors: string[];
    ratio: string;
    isNew: boolean;
  };
  onAddToCart: () => void;
}

export default function TemplateDetailModal({
  isOpen,
  onClose,
  template,
  onAddToCart,
}: TemplateDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock obrázky - 15 náhledů
  const images = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    alt: `Preview ${i + 1}`,
  }));

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 max-md:p-0 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute max-md:top-6 max-md:right-6 top-9 right-9 lg:top-6 lg:right-6 z-10 w-10 h-10 rounded-full glass-hover flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
        >
          <IoMdClose className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-md:p-4">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl bg-linear-to-br from-zinc-800 to-zinc-900 overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-zinc-700/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <HiOutlinePhotograph className="w-32 h-32 text-zinc-700" />
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass border border-emerald-500/30 text-sm font-semibold text-emerald-400">
                {selectedImageIndex + 1} / {images.length}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-hover flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
              >
                <MdNavigateBefore className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-hover flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
              >
                <MdNavigateNext className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails - Scrollable Grid */}
            <div className="relative">
              <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg bg-linear-to-br from-zinc-800 to-zinc-900 overflow-hidden transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-emerald-500 scale-105"
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-zinc-700/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-zinc-500 font-semibold">
                        {index + 1}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col">
            <div className="flex-1 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {template.isNew && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold border border-emerald-500/30">
                    Nové
                  </span>
                )}
                {template.originalPrice && (
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold border border-red-500/30">
                    Sleva{" "}
                    {Math.round(
                      ((template.originalPrice - template.price) /
                        template.originalPrice) *
                        100
                    )}
                    %
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 text-sm">
                  {template.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 text-sm">
                  {template.ratio}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {template.title}
                </h2>
                <p className="text-zinc-400">
                  Profesionální šablona pro {template.category}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => {
                    const Icon =
                      i < Math.floor(template.rating)
                        ? AiFillStar
                        : AiOutlineStar;
                    return (
                      <Icon
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(template.rating)
                            ? "text-emerald-400"
                            : "text-zinc-700"
                        }`}
                      />
                    );
                  })}
                </div>
                <span className="text-zinc-400">
                  {template.rating} ({template.reviews} hodnocení)
                </span>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Co obsahuje:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Plně editovatelné v Canvě",
                    "Více než 50 různých layoutů",
                    "Optimalizováno pro mobilní zařízení",
                    "Profesionální typografie",
                    "Snadná customizace barev",
                    "Okamžité stažení po nákupu",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="glass rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Tématika:</span>
                  <span className="text-white font-medium">
                    {template.theme}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Poměr stran:</span>
                  <span className="text-white font-medium">
                    {template.ratio}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Licence:</span>
                  <span className="text-white font-medium">
                    Komerční použití
                  </span>
                </div>
              </div>
            </div>

            {/* Price and CTA */}
            <div className=" glass rounded-xl p-4 bottom-0 pt-6 border-t border-zinc-800/50 mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  {template.originalPrice && (
                    <span className="text-zinc-500 line-through text-lg block">
                      {template.originalPrice} Kč
                    </span>
                  )}
                  <span className="text-3xl font-bold text-white">
                    {template.price} Kč
                  </span>
                </div>
              </div>
              <button
                onClick={onAddToCart}
                className="w-full px-8 py-4 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
              >
                <FiShoppingCart className="w-5 h-5" />
                Přidat do košíku
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
