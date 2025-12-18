import { FaClock, FaPalette, FaEdit, FaRocket } from "react-icons/fa";
import { IoClose, IoCheckmark } from "react-icons/io5";

export default function TimeComparison() {
  return (
    <section className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <FaClock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Ušetřete čas
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Kolik času vám{" "}
            <span className="gradient-text">skutečně ušetříme?</span>
          </h2>
          <p className="text-lg text-zinc-300">
            Podívejte se na reálné srovnání času potřebného na vytvoření
            profesionálního obsahu
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Without Templates */}
          <div className="glass rounded-2xl p-8 border-2 border-zinc-800/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <IoClose className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-100">Bez šablon</h3>
                <p className="text-zinc-400">Tradiční přístup</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPalette className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Hledání inspirace
                    </h4>
                    <span className="text-zinc-300 font-bold">30-60 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Procházení Pinterestу, Instagram, Behance...
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEdit className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Návrh designu
                    </h4>
                    <span className="text-zinc-300 font-bold">45-90 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Tvorba layoutu, výběr barev, fontů...
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPalette className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Grafická úprava
                    </h4>
                    <span className="text-zinc-300 font-bold">60-120 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Práce v Photoshopu, Illustratoru...
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEdit className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Revize a úpravy
                    </h4>
                    <span className="text-zinc-300 font-bold">30-60 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Opravy, ladění detailů...
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-800 my-6"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-zinc-100">
                  Celkový čas:
                </span>
                <span className="text-3xl font-bold text-red-400">
                  3-5 hodin
                </span>
              </div>
            </div>
          </div>

          {/* With Templates */}
          <div className="glass rounded-2xl p-8 border-2 border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                DOPORUČENO
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <IoCheckmark className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-zinc-100">
                  Se šablonami
                </h3>
                <p className="text-emerald-400 font-medium">Chytrý přístup</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPalette className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Výběr šablony
                    </h4>
                    <span className="text-emerald-400 font-bold">5-10 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Procházení naší knihovny šablon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEdit className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Úprava textu a barev
                    </h4>
                    <span className="text-emerald-400 font-bold">
                      10-15 min
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Jednoduché úpravy přímo v Canvě
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaRocket className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-zinc-100">
                      Export a publikování
                    </h4>
                    <span className="text-emerald-400 font-bold">2-5 min</span>
                  </div>
                  <p className="text-sm text-zinc-400">
                    Stažení a nahrání na sociální sítě
                  </p>
                </div>
              </div>

              <div className="h-px bg-zinc-800 my-6"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-zinc-100">
                  Celkový čas:
                </span>
                <span className="text-3xl font-bold text-emerald-400">
                  15-30 minut
                </span>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-1">
                  <FaRocket className="w-5 h-5" />
                  <span>Ušetříte 90% času!</span>
                </div>
                <p className="text-sm text-zinc-300">
                  To je o 2,5-4,5 hodiny rychleji na každý příspěvek
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center glass rounded-xl p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2">10×</div>
            <p className="text-zinc-300">rychlejší tvorba</p>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0 Kč</div>
            <p className="text-zinc-300">za grafika měsíčně</p>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <p className="text-zinc-300">profesionální vzhled</p>
          </div>
        </div>
      </div>
    </section>
  );
}
