"use client";

import { useState } from "react";
import Link from "next/link";

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
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Instagram Stories Pack - Premium",
      platform: "Instagram",
      price: 499,
      quantity: 1,
      image: "/placeholder.jpg",
      license: "Komerční licence",
    },
    {
      id: 2,
      name: "Facebook Post Templates",
      platform: "Facebook",
      price: 299,
      quantity: 2,
      image: "/placeholder.jpg",
      license: "Komerční licence",
    },
    {
      id: 3,
      name: "LinkedIn Carousel Set",
      platform: "LinkedIn",
      price: 399,
      quantity: 1,
      image: "/placeholder.jpg",
      license: "Rozšířená licence",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.21); // 21% DPH
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Nákupní košík
          </h1>
          <p className="text-zinc-400">
            {cartItems.length}{" "}
            {cartItems.length === 1
              ? "položka"
              : cartItems.length < 5
              ? "položky"
              : "položek"}{" "}
            v košíku
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="glass rounded-2xl p-12 text-center">
            <div className="w-24 h-24 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
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
              <svg
                className="w-5 h-5"
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
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
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
                          <div className="flex items-center gap-3 text-sm text-zinc-400">
                            <span>{item.platform}</span>
                            <span>•</span>
                            <span>{item.license}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Odstranit"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="text-zinc-100 font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-xl font-bold text-zinc-100">
                            {(item.price * item.quantity).toLocaleString(
                              "cs-CZ"
                            )}{" "}
                            Kč
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-zinc-500">
                              {item.price.toLocaleString("cs-CZ")} Kč / ks
                            </div>
                          )}
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
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
                    <span>{total.toLocaleString("cs-CZ")} Kč</span>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all mb-4 flex items-center justify-center gap-2">
                  Přejít k platbě
                  <svg
                    className="w-5 h-5"
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
                </button>

                <div className="space-y-3 text-sm text-zinc-400">
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Okamžitý přístup po platbě</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Bezpečná platba přes Stripe</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
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
