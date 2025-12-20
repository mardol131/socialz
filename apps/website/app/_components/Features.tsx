import { HiOutlinePhotograph } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { IoFlashSharp } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";

export default function Features() {
  const features = [
    {
      icon: <HiOutlinePhotograph className="w-8 h-8" />,
      title: "Profesionální design",
      description:
        "Všechny šablony navrženy profesionálními grafickými designéry s důrazem na moderní trendy a vizuální dopad.",
    },
    {
      icon: <MdEdit className="w-8 h-8" />,
      title: "Plně upravitelné v Canvě",
      description:
        "Okamžitý přístup k šablonám v Canvě. Měňte barvy, fonty, obrázky a text podle vašich potřeb jedním kliknutím.",
    },
    {
      icon: <IoFlashSharp className="w-8 h-8" />,
      title: "Okamžité stažení",
      description:
        "Po nákupu získáte okamžitý přístup ke všem šablonám. Žádné čekání, začněte tvořit hned.",
    },
    {
      icon: <BsPhone className="w-8 h-8" />,
      title: "Optimalizováno pro všechny platformy",
      description:
        "Instagram, Facebook, LinkedIn, Pinterest a další. Správné rozměry a formáty pro každou sociální síť.",
    },
    {
      icon: <BiTime className="w-8 h-8" />,
      title: "Ušetřete čas a peníze",
      description:
        "Namísto hodin strávených designováním nebo placením designéra, vytvořte profesionální obsah za pár minut.",
    },
    {
      icon: <FiRefreshCw className="w-8 h-8" />,
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
