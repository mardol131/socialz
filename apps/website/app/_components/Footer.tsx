import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-zinc-800/50 mt-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold gradient-text">Socialz</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Profesionální šablony pro sociální sítě. Vytvořte úžasný obsah v
              Canvě snadno a rychle.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-hover flex items-center justify-center text-zinc-400 hover:text-emerald-400"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-hover flex items-center justify-center text-zinc-400 hover:text-emerald-400"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-hover flex items-center justify-center text-zinc-400 hover:text-emerald-400"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Produkty */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produkty</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/templates/instagram"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Instagram šablony
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/facebook"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Facebook šablony
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/linkedin"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  LinkedIn šablony
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/pinterest"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Pinterest šablony
                </Link>
              </li>
              <li>
                <Link
                  href="/bundles"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Balíčky šablon
                </Link>
              </li>
            </ul>
          </div>

          {/* Společnost */}
          <div>
            <h3 className="text-white font-semibold mb-4">Společnost</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Kariéra
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Affiliate program
                </Link>
              </li>
            </ul>
          </div>

          {/* Podpora */}
          <div>
            <h3 className="text-white font-semibold mb-4">Podpora</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Centrum nápovědy
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Tutoriály
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Ochrana soukromí
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Socialz. Všechna práva vyhrazena.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Podmínky použití
              </Link>
              <Link
                href="/privacy"
                className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Soukromí
              </Link>
              <Link
                href="/cookies"
                className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
