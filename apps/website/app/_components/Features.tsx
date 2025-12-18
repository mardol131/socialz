export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Profesionální design",
      description:
        "Všechny šablony navrženy profesionálními grafickými designéry s důrazem na moderní trendy a vizuální dopad.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      title: "Plně upravitelné v Canvě",
      description:
        "Okamžitý přístup k šablonám v Canvě. Měňte barvy, fonty, obrázky a text podle vašich potřeb jedním kliknutím.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Okamžité stažení",
      description:
        "Po nákupu získáte okamžitý přístup ke všem šablonám. Žádné čekání, začněte tvořit hned.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Optimalizováno pro všechny platformy",
      description:
        "Instagram, Facebook, LinkedIn, Pinterest a další. Správné rozměry a formáty pro každou sociální síť.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Ušetřete čas a peníze",
      description:
        "Namísto hodin strávených designováním nebo placením designéra, vytvořte profesionální obsah za pár minut.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Pravidelné aktualizace",
      description:
        "Přístup k novým šablonám každý měsíc. Udržujte váš obsah čerstvý a v souladu s nejnovějšími trendy.",
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-2 rounded-full glass border border-emerald-500/30 mb-6">
            <span className="text-sm text-emerald-400 font-medium">
              Proč zvolit Socialz
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vše, co potřebujete pro
            <span className="gradient-text"> úspěch na sociálních sítích</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Naše šablony vám pomohou vytvořit profesionální obsah, který zaujme
            vaše publikum a zvýší engagement.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 glass-hover transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-xl bg-linear-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 text-emerald-400 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 md:p-12 inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Připraveni začít tvořit?
            </h3>
            <p className="text-zinc-400 mb-6 max-w-xl">
              Získejte přístup k naší kompletní knihovně šablon a začněte tvořit
              profesionální obsah ještě dnes.
            </p>
            <a
              href="/shop"
              className="inline-block px-8 py-4 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              Procházet šablony
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
