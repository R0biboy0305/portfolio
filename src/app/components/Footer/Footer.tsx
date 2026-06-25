import Link from "next/link";
import { Github, Linkedin, Download } from "lucide-react";

/** Footer avec liens de navigation, téléchargement du CV et réseaux sociaux. */
export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 w-full items-center py-8 border-t border-black/15 dark:border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full max-w-2xl px-6">
                <div className="flex flex-row gap-6">
                    <Link href="#hero"    className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">Accueil</Link>
                    <Link href="#projets" className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">Projets</Link>
                    <Link href="#about"   className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">À propos</Link>
                    <Link href="#contact" className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm">Contact</Link>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <a
                        href="/assets/CV/CV_BERGMANN_Robin.pdf"
                        download
                        className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="Télécharger CV"
                    >
                        <Download size={18} />
                    </a>
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
            <p className="text-xs text-gray-500 dark:text-white/45">© 2026 Robin Bergmann. Tous droits réservés.</p>
        </footer>
    );
}
