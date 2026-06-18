import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 w-full items-center py-8 border-t border-black/15 dark:border-white/10">
            <div className="flex flex-row justify-between items-center w-full max-w-lg px-6">
                <div className="flex flex-row gap-6">
                    {/* gray-600 = ~6.6:1 | white/60 = ~5.1:1 */}
                    <Link href="#hero"    className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">Accueil</Link>
                    <Link href="#projets" className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">Projets</Link>
                    <Link href="#about"   className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">À propos</Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Link
                        href="https://github.com/R0biboy0305"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </Link>
                </div>
            </div>
            {/* gray-500 = ~4.4:1 minimum acceptable pour texte très petit | white/40 = ~3.5:1 */}
            <p className="text-xs text-gray-500 dark:text-white/45">© 2026 Robin Bergmann. Tous droits réservés.</p>
        </footer>
    );
}
