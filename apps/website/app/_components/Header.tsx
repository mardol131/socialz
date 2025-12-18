"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCartStore } from "../_zustand/CartStore";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCartStore((state) => state);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">Socialz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Funkce
            </Link>
            <Link
              href="#templates"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Šablony
            </Link>
            <Link
              href="#try-it"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Vyzkoušejte
            </Link>
            <Link
              href="#about"
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              O nás
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-semibold">
                {items.length}
              </span>
            </Link>

            <Link
              href="/shop"
              className="px-6 py-2.5 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Procházet šablony
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-hover"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-zinc-300 transition-all ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-zinc-300 transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-zinc-300 transition-all ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              href="#features"
              className="block px-4 py-2 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              Funkce
            </Link>
            <Link
              href="#templates"
              className="block px-4 py-2 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              Šablony
            </Link>
            <Link
              href="#pricing"
              className="block px-4 py-2 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              Ceník
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all"
            >
              O nás
            </Link>
            <Link
              href="/shop"
              className="block mx-4 px-6 py-2.5 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium text-center"
            >
              Procházet šablony
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
