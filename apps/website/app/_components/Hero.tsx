import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-emerald-500/30 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-zinc-300">
              Nově: Balíčky šablon se slevou až 40%
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Profesionální šablony</span>
            <br />
            <span className="gradient-text">pro sociální sítě</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
            Vytvářejte úžasný obsah pro Instagram, Facebook, LinkedIn a další
            platformy. Všechny šablony plně upravitelné v Canvě. Žádné grafické
            dovednosti nejsou potřeba.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105"
            >
              Prohlédnout šablony
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-lg glass glass-hover font-semibold text-white transition-all"
            >
              Jak to funguje
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 glass-hover">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                200+
              </div>
              <div className="text-sm text-zinc-400">
                Profesionálních šablon
              </div>
            </div>
            <div className="glass rounded-2xl p-6 glass-hover">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                10+
              </div>
              <div className="text-sm text-zinc-400">Nových šablon měsíčně</div>
            </div>
            <div className="glass rounded-2xl p-6 glass-hover">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                100%
              </div>
              <div className="text-sm text-zinc-400">Editovatelné v Canvě</div>
            </div>
            <div className="glass rounded-2xl p-6 glass-hover">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-sm text-zinc-400">Zákaznická podpora</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 opacity-60">
            <div className="text-zinc-500 text-sm">Důvěřují nám:</div>
            <div className="text-zinc-500 font-semibold">Forbes</div>
            <div className="text-zinc-500 font-semibold">TechCrunch</div>
            <div className="text-zinc-500 font-semibold">Entrepreneur</div>
            <div className="text-zinc-500 font-semibold">Business Insider</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-emerald-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
