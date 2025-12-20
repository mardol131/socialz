import Link from "next/link";
import { FiCheck, FiInfo, FiArrowRight } from "react-icons/fi";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 mb-6">
              <FiCheck className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
              Děkujeme za Vaši objednávku!
            </h1>
            <p className="text-xl text-zinc-300">
              Platba byla úspěšně zpracována
            </p>
          </div>

          {/* Main Content Card */}
          <div className="glass rounded-2xl p-8 md:p-10 mb-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-zinc-100 mb-4">Co dál?</h2>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Vaše šablony jsou připraveny k použití! Na email, který jste
                uvedli při objednávce, jsme Vám odeslali potvrzení s odkazy ke
                stažení.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Zkontrolujte email
                  </h3>
                  <p className="text-zinc-400">
                    Otevřete email s potvrzením objednávky. Pokud ho nevidíte,
                    zkontrolujte složku spam.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Stáhněte si šablony
                  </h3>
                  <p className="text-zinc-400">
                    Klikněte na tlačítko Stáhnout šablony v emailu. Soubory se
                    stáhnou ve formátu ZIP.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Otevřete v Canvě
                  </h3>
                  <p className="text-zinc-400">
                    Rozbalte ZIP soubor a nahrajte šablony do Canvy. Návod
                    najdete v přiloženém PDF.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    Začněte tvořit!
                  </h3>
                  <p className="text-zinc-400">
                    Upravte si šablony podle svých představ a sdílejte je na
                    sociálních sítích.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <FiInfo className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-zinc-100 mb-2">
                    Důležité informace
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Odkaz ke stažení je platný 30 dní. Doporučujeme si
                        soubory zálohovat.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        Máte nárok na doživotní aktualizace všech zakoupených
                        šablon zdarma.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>
                        V případě problémů nás kontaktujte na podpora@socialz.cz
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all"
            >
              Prohlédnout další šablony
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold text-zinc-100 hover:bg-zinc-800/50 transition-all"
            >
              Zpět na hlavní stránku
            </Link>
          </div>

          {/* Support */}
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm mb-2">Potřebujete pomoc?</p>
            <a
              href="mailto:podpora@socialz.cz"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              podpora@socialz.cz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
