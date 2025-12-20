"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiShoppingBag,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { useCartStore } from "@/app/_zustand/CartStore";

interface CartItem {
  id: number;
  name: string;
  platform: string;
  price: number;
  quantity: number;
  image: string;
  license: string;
}

export default function CartPage() {
  const { items, removeItem } = useCartStore((state) => state);

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = Math.round(subtotal * 0.21); // 21% DPH

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Nákupní košík
          </h1>
          <p className="text-zinc-400">
            {items.length}{" "}
            {items.length === 1
              ? "položka"
              : items.length < 5
              ? "položky"
              : "položek"}{" "}
            v košíku
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="glass rounded-2xl p-12 text-center">
            <div className="w-24 h-24 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiShoppingBag className="w-12 h-12 text-zinc-500" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-3">
              Váš košík je prázdný
            </h2>
            <p className="text-zinc-400 mb-8">
              Začněte nakupovat a objevte naše úžasné šablony!
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium hover:from-emerald-500 hover:to-emerald-400 transition-all"
            >
              Přejít do katalogu
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="glass rounded-xl p-6 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-24 h-24 bg-zinc-800/50 rounded-lg flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-linear-to-br from-emerald-600/20 to-emerald-400/10"></div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                            {item.name}
                          </h3>
                          {/* <div className="flex items-center gap-3 text-sm text-zinc-400">
                            <span>{item.platform}</span>
                            <span>•</span>
                            <span>{item.license}</span>
                          </div> */}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Odstranit"
                        >
                          <FiX className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className=" p-2 rounded-lg font-semibold text-sm cursor-pointer  bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-red-400/20 transition-colors flex items-center justify-center"
                          >
                            Odebrat
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-xl font-bold text-zinc-100">
                            {item.price.toLocaleString("cs-CZ")} Kč
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link
                href="/catalog"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mt-4"
              >
                <FiArrowLeft className="w-5 h-5" />
                Pokračovat v nákupu
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-zinc-100 mb-6">
                  Souhrn objednávky
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-zinc-300">
                    <span>Mezisoučet</span>
                    <span>{subtotal.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                  <div className="flex justify-between text-zinc-300">
                    <span>DPH (21%)</span>
                    <span>{tax.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                  <div className="h-px bg-zinc-800"></div>
                  <div className="flex justify-between text-lg font-bold text-zinc-100">
                    <span>Celkem</span>
                    <span>{subtotal.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all mb-4 flex items-center justify-center gap-2">
                  Přejít k platbě
                  <FiArrowRight className="w-5 h-5" />
                </button>

                <div className="space-y-3 text-sm text-zinc-400">
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Okamžitý přístup po platbě</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Bezpečná platba přes Stripe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Doživotní aktualizace zdarma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
