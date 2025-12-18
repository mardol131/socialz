import { FaDownload, FaCheckCircle, FaFileArchive } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

export default function TryDemo() {
  const demoFeatures = [
    {
      icon: FaCheckCircle,
      title: "5 bezplatných šablon",
      description: "Instagram Stories, Facebook Post a další",
    },
    {
      icon: FaCheckCircle,
      title: "Plně editovatelné v Canvě",
      description: "Otevřete a začněte upravovat během minuty",
    },
    {
      icon: FaCheckCircle,
      title: "Včetně návodu",
      description: "Krok za krokem jak šablony použít",
    },
    {
      icon: FaCheckCircle,
      title: "Bez registrace",
      description: "Stáhněte hned bez vytváření účtu",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <IoSparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                Vyzkoušejte zdarma
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
              Otestujte naše šablony{" "}
              <span className="gradient-text">ještě před nákupem</span>
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Stáhněte si demo balíček s 5 šablonami zdarma a zkuste jak
              fungují. Žádné závazky, žádná registrace.
            </p>
          </div>

          {/* Main Card */}
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Features */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <FaFileArchive className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100">
                      Demo balíček
                    </h3>
                    <p className="text-sm text-zinc-400">ZIP soubor · 12 MB</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-zinc-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
                  <p className="text-sm text-zinc-400">
                    <span className="font-semibold text-emerald-400">Tip:</span>{" "}
                    Po otevření šablon v Canvě si je můžete uložit do vlastní
                    knihovny a používat opakovaně.
                  </p>
                </div>
              </div>

              {/* Right Side - CTA */}
              <div className="text-center md:text-left">
                <div className="glass rounded-2xl p-8 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 mb-4">
                      <FaDownload className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">
                      Připraveno ke stažení
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      Jeden klik a máte demo šablony ve svém počítači
                    </p>
                  </div>

                  <a
                    href="/downloads/socialz-demo-templates.zip"
                    download
                    className="block w-full px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 group mb-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                      Stáhnout demo zdarma
                    </span>
                  </a>

                  <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Bezpečné stažení</span>
                    <span>•</span>
                    <span>Bez virů</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">5</div>
                    <div className="text-xs text-zinc-500">šablon</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      12 MB
                    </div>
                    <div className="text-xs text-zinc-500">velikost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      ZIP
                    </div>
                    <div className="text-xs text-zinc-500">formát</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-8 text-center">
            <p className="text-zinc-400 text-sm">
              Líbí se vám demo?{" "}
              <a
                href="/catalog"
                className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                Prohlédněte si celou kolekci →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
