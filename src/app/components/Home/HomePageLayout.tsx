"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import IconTech from "@/app/components/Icon/Icon";

const mainTech = [
    { nameKey: "react",      label: "React" },
    { nameKey: "Next",       label: "Next.js" },
    { nameKey: "Typescript", label: "TypeScript" },
    { nameKey: "Php",        label: "PHP" },
    { nameKey: "Mysql",      label: "MySQL" },
    { nameKey: "Git",        label: "Git" },
    { nameKey: "Vue",        label: "Vue" },
    { nameKey: "Laravel",    label: "Laravel" },
];

export default function HomePageLayout() {
    return (
        <div className="flex flex-col gap-10 max-w-xl px-6 lg:px-0 animate-[fadeIn_1s_ease-out_forwards]">

            <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">
                    Développeur back-end en alternance
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05]">
                    Robin
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400 dark:from-white dark:via-indigo-200 dark:to-indigo-400">
                        Bergmann
                    </span>
                </h1>
            </div>

            {/* gray-700 = #374151, contraste ~9.5:1 sur #f8f9ff | white/70 = ~6:1 sur #111 */}
            <p className="text-gray-700 dark:text-white/70 font-light leading-relaxed text-lg max-w-md">
                Passionné depuis 3 ans par le développement, je souhaite acquérir
                une vision stratégique ainsi que les compétences en architecture
                logicielle et pilotage de projet.
            </p>

            <div className="flex gap-3 flex-wrap">
                <Link
                    href="#projets"
                    className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                >
                    Voir mes projets
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                    href="https://github.com/R0biboy0305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/15 dark:border-white/10 hover:border-black/25 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Github size={16} /> GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/15 dark:border-white/10 hover:border-black/25 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Linkedin size={16} /> LinkedIn
                </Link>
                <a
                    href="/assets/CV/CV_BERGMANN_Robin.pdf"
                    download
                    className="group flex items-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/15 dark:border-white/10 hover:border-black/25 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" /> CV
                </a>
            </div>

            {/* gray-500 = #6b7280, contraste ~4.4:1 — hover gray-800 ~11:1 */}
            <div className="flex items-center gap-3 sm:gap-5 pt-4 border-t border-black/15 dark:border-white/10 flex-wrap">
                {mainTech.map((tech) => (
                    <div
                        key={tech.nameKey}
                        title={tech.label}
                        className="text-gray-500 dark:text-white/40 hover:text-gray-800 dark:hover:text-white transition-all duration-300 hover:-translate-y-1"
                    >
                        <IconTech nameKey={tech.nameKey} size={24} />
                    </div>
                ))}
            </div>
        </div>
    );
}
