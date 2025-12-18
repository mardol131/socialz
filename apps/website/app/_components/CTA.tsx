export default function CTA() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full glass border border-emerald-500/30">
                <span className="text-sm text-emerald-400 font-medium">
                  Speciální nabídka
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Začněte tvořit
                <span className="gradient-text"> profesionální obsah</span>{" "}
                ještě dnes
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Začněte vytvářet profesionální obsah na sociální sítě. Získejte
                okamžitý přístup ke kompletní knihovně šablon a tvořte ještě
                dnes.
              </p>

              {/* Benefits */}
              <div className="space-y-4 pt-4">
                {[
                  "Okamžitý přístup ke všem šablonám",
                  "Pravidelné měsíční aktualizace zdarma",
                  "Neomezené použití pro komerční účely",
                  "30 dní záruka vrácení peněz",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-emerald-400"
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
                    </div>
                    <span className="text-zinc-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/shop"
                  className="inline-block px-8 py-4 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
                >
                  Získat přístup nyní
                </a>
                <p className="text-sm text-zinc-500 mt-3">
                  Žádná kreditní karta není potřeba pro náhled
                </p>
              </div>
            </div>

            {/* Stats/Social Proof */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  <svg
                    className="w-12 h-12 mx-auto text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="text-sm text-zinc-400 mt-3">
                  Okamžitý přístup
                </div>
              </div>

              <div className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-4xl font-bold gradient-text mb-2">5</div>
                <div className="text-sm text-zinc-400">
                  Podporovaných platforem
                </div>
              </div>

              <div className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-sm text-zinc-400">Prémiových šablon</div>
              </div>

              <div className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  24/7
                </div>
                <div className="text-sm text-zinc-400">Zákaznická podpora</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
