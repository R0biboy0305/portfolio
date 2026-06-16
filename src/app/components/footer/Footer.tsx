import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-4 w-full items-center text-white py-6 mt-auto border-t border-white/10">
            <div className="flex flex-row justify-between items-center w-full max-w-lg px-4">
                <div className="flex flex-row gap-6">
                    <Link href="/" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                        Accueil
                    </Link>
                    <Link href="/Projets" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                        Projets
                    </Link>
                    <Link href="/About" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">
                        À propos
                    </Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Link
                        href="https://github.com/R0biboy0305"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                        <Github size={18}/>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                        <Linkedin size={18}/>
                    </Link>
                </div>
            </div>
            <p className="text-xs text-white/30">© 2026 Robin Bergmann. Tous droits réservés.</p>
        </footer>
    );
}