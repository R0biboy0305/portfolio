import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 w-full items-center text-white py-8 border-t border-white/5">
            <div className="flex flex-row justify-between items-center w-full max-w-lg px-6">
                <div className="flex flex-row gap-6">
                    <Link href="#hero"   className="text-white/40 hover:text-white transition-colors duration-200 text-sm">Accueil</Link>
                    <Link href="#projets" className="text-white/40 hover:text-white transition-colors duration-200 text-sm">Projets</Link>
                    <Link href="#about"  className="text-white/40 hover:text-white transition-colors duration-200 text-sm">À propos</Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Link
                        href="https://github.com/R0biboy0305"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </Link>
                </div>
            </div>
            <p className="text-xs text-white/20">© 2026 Robin Bergmann. Tous droits réservés.</p>
        </footer>
    );
}
