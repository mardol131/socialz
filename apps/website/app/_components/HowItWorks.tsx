import Link from "next/link";
import { FaSearch, FaShoppingCart, FaDownload, FaEdit } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: FaSearch,
      title: "Vyberte šablonu",
      description:
        "Procházejte naší knihovnu 500+ profesionálních šablon. Filtrujte podle platformy, kategorie nebo stylu.",
      details: [
        "Instagram Stories & Posts",
        "Facebook Cover & Posts",
        "LinkedIn Updates",
        "Pinterest Pins",
      ],
      number: "01",
    },
    {
      icon: FaShoppingCart,
      title: "Přidejte do košíku",
      description:
        "Vložte vybrané šablony do košíku a dokončete rychlou a bezpečnou platbu přes Stripe.",
      details: [
        "Okamžitý přístup",
        "Bezpečná platba",
        "Bez předplatného",
        "Komerční licence",
      ],
      number: "02",
    },
    {
      icon: FaDownload,
      title: "Stáhněte soubory",
      description:
        "Po platbě obdržíte okamžitý odkaz ke stažení. Všechny šablony jsou kompatibilní s Canvou.",
      details: [
        "ZIP archiv",
        "Canva soubory",
        "Návod k použití",
        "Doživotní přístup",
      ],
      number: "03",
    },
    {
      icon: FaEdit,
      title: "Upravte a sdílejte",
      description:
        "Otevřete šablony v Canvě, přizpůsobte si barvy, texty a loga. Exportujte a sdílejte na sociálních sítích.",
      details: [
        "Snadná úprava",
        "Bez designových znalostí",
        "Neomezené exporty",
        "Všechny formáty",
      ],
      number: "04",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent"></div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-400">
              Jak to funguje
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Od výběru k publikování během{" "}
            <span className="gradient-text">několika minut</span>
          </h2>
          <p className="text-lg text-zinc-300">
            Čtyři jednoduché kroky vás dělí od profesionálního obsahu na
            sociálních sítích
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-12 h-px">
                  <div className="w-full h-full bg-linear-to-r from-emerald-500/50 to-transparent"></div>
                </div>
              )}

              <div className="glass rounded-2xl p-8 hover:bg-zinc-900/50 transition-all duration-300 group relative overflow-hidden">
                {/* Step Number Background */}
                <div className="absolute top-4 right-4 text-8xl font-bold text-zinc-800/20 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-xs font-bold text-emerald-400">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/catalog"
              className="px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all inline-flex items-center gap-2 group"
            >
              Začít hned teď
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
            <Link
              href="/catalog"
              className="px-8 py-4 glass rounded-lg font-semibold text-zinc-100 hover:bg-zinc-800/50 transition-all inline-flex items-center gap-2"
            >
              Prohlédnout katalog
            </Link>
          </div>
          <p className="text-sm text-zinc-500 mt-6">
            Žádné předplatné • Okamžitý přístup • Doživotní aktualizace
          </p>
        </div>
      </div>
    </section>
  );
}
