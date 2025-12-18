import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function PlatformShowcase() {
  const platforms = [
    {
      icon: FaInstagram,
      name: "Instagram",
      color: "from-purple-600 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      formats: ["Stories", "Posts", "Reels", "Carousel"],
      templates: 200,
      description: "Vynikněte na nejpopulárnější vizuální platformě",
    },
    {
      icon: FaFacebookF,
      name: "Facebook",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      formats: ["Cover", "Posts", "Stories", "Events"],
      templates: 150,
      description: "Profesionální obsah pro největší sociální síť",
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      color: "from-blue-700 to-blue-600",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-600/30",
      textColor: "text-blue-500",
      formats: ["Posts", "Carousel", "Cover", "Articles"],
      templates: 100,
      description: "Budujte profesionální osobní brand",
    },
    {
      icon: FaPinterestP,
      name: "Pinterest",
      color: "from-red-600 to-red-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
      formats: ["Pins", "Idea Pins", "Story Pins", "Video Pins"],
      templates: 80,
      description: "Inspirujte a získávejte organický reach",
    },
    {
      icon: BsTwitterX,
      name: "X (Twitter)",
      color: "from-zinc-700 to-zinc-600",
      bgColor: "bg-zinc-600/20",
      borderColor: "border-zinc-600/30",
      textColor: "text-zinc-300",
      formats: ["Posts", "Headers", "Banners", "Cards"],
      templates: 50,
      description: "Zapojte se do konverzace stylem",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-400">
              Všechny platformy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Šablony pro{" "}
            <span className="gradient-text">každou sociální síť</span>
          </h2>
          <p className="text-lg text-zinc-300">
            Pokrýváme všechny hlavní platformy s šablonami optimalizovanými pro
            nejlepší výsledky
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:bg-zinc-900/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              ></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 rounded-xl ${platform.bgColor} border ${platform.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <platform.icon className={`w-8 h-8 ${platform.textColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                {platform.name}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                {platform.description}
              </p>

              {/* Templates Count */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-3xl font-bold ${platform.textColor}`}>
                  {platform.templates}+
                </span>
                <span className="text-zinc-500 text-sm">šablon</span>
              </div>

              {/* Formats */}
              <div className="flex flex-wrap gap-2">
                {platform.formats.map((format, formatIndex) => (
                  <span
                    key={formatIndex}
                    className="px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-300"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden border-2 border-dashed border-zinc-800">
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                BRZY
              </div>
            </div>

            <div className="mb-6">
              <div className="w-16 h-16 rounded-xl bg-zinc-800/30 border border-zinc-700/50 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-zinc-100 mb-2">
              Další platformy
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Pracujeme na šablonách pro YouTube, TikTok, Snapchat a další
            </p>

            <div className="space-y-2 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                <span>YouTube Thumbnails</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                <span>TikTok Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                <span>Snapchat Geofilters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="glass rounded-2xl p-8">
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                580+
              </div>
              <p className="text-zinc-400">Celkem šablon</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">5</div>
              <p className="text-zinc-400">Podporovaných platforem</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                20+
              </div>
              <p className="text-zinc-400">Formátů obsahu</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                50+
              </div>
              <p className="text-zinc-400">Nových každý měsíc</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all group"
          >
            Prohlédnout všechny šablony
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
        </div>
      </div>
    </section>
  );
}
