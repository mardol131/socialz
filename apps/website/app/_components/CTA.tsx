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
                Přidejte se k tisícům spokojených zákazníků, kteří používají
                naše šablony k růstu svého online podnikání. Získejte okamžitý
                přístup ke kompletní knihovně.
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
                  4.9/5
                </div>
                <div className="text-sm text-zinc-400 mb-3">
                  Hodnocení zákazníků
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="glass rounded-2xl p-6 text-center glass-hover">
                <div className="text-4xl font-bold gradient-text mb-2">
                  10K+
                </div>
                <div className="text-sm text-zinc-400">
                  Spokojených zákazníků
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

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Co říkají naši zákazníci
            </h3>
            <p className="text-zinc-400">
              Přečtěte si zkušenosti spokojených uživatelů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie Nováková",
                role: "Social Media Manager",
                content:
                  "Tyto šablony mi ušetřily desítky hodin práce. Obsah vypadá profesionálně a náš engagement vzrostl o 150%!",
                rating: 5,
              },
              {
                name: "Petr Svoboda",
                role: "Podnikatel",
                content:
                  "Konečně mohu tvořit kvalitní obsah bez nutnosti najímat designéra. Návratnost investice byla okamžitá.",
                rating: 5,
              },
              {
                name: "Jana Dvořáková",
                role: "Influencer",
                content:
                  "Nejlepší investice do mého podnikání. Šablony jsou krásné a snadné na úpravu. Určitě doporučuji!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass rounded-2xl p-6 glass-hover">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600" />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
