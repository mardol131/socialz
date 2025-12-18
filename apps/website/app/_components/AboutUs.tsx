import { FaRocket, FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-400">O nás</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Věříme, že každý si zaslouží{" "}
            <span className="gradient-text">vypadat profesionálně</span>
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Socialz vznikl z prosté potřeby – ušetřit čas kreativním
            profesionálům a podnikatelům, kteří chtějí vytvářet kvalitní obsah
            na sociální sítě, ale nemají čas ani zdroje na grafické studio.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="glass rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
              <FaRocket className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Naše mise</h3>
            <p className="text-zinc-300 leading-relaxed">
              Demokratizovat profesionální design a zpřístupnit ho každému.
              Chceme, aby každý podnikatel, influencer či marketér mohl vytvářet
              obsah, který vypadá jako od profesionálů, bez nutnosti znát
              Photoshop nebo platit tisíce za grafika.
            </p>
          </div>

          {/* Vision Card */}
          <div className="glass rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
              <FaLightbulb className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">Naše vize</h3>
            <p className="text-zinc-300 leading-relaxed">
              Stát se jedničkou v českém prostoru pro šablony na sociální sítě.
              Chceme vytvořit ekosystém, kde najdete vše potřebné pro
              profesionální prezentaci vaší značky – od šablon přes návody až po
              inspiraci.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FaHeart,
              title: "Kvalita na prvním místě",
              description:
                "Každá šablona je pečlivě navržena profesionálními designéry",
            },
            {
              icon: FaUsers,
              title: "Zákaznický přístup",
              description:
                "Jsme tu pro vás 24/7 s rychlou a vstřícnou podporou",
            },
            {
              icon: FaRocket,
              title: "Neustálý vývoj",
              description: "Každý měsíc přidáváme desítky nových šablon",
            },
            {
              icon: FaLightbulb,
              title: "Jednoduchost",
              description:
                "Vše je navržené tak, aby bylo intuitivní a snadné na použití",
            },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800/50 border border-zinc-700/50 mb-4">
                <value.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-zinc-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
