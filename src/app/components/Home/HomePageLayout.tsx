"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import IconTech from "@/app/components/Icon/Icon";

const mainTech = [
    { nameKey: "react",      label: "React" },
    { nameKey: "Next",       label: "Next.js" },
    { nameKey: "Typescript", label: "TypeScript" },
    { nameKey: "Php",        label: "PHP" },
    { nameKey: "Mysql",      label: "MySQL" },
    { nameKey: "Git",        label: "Git" },
];

export default function HomePageLayout() {
    return (
        <div className="flex flex-col gap-10 max-w-xl px-6 lg:px-0 animate-[fadeIn_1s_ease-out_forwards]">

            <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-widest uppercase">
                    Développeur back-end en alternance
                </span>

                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                    Robin
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                        Bergmann
                    </span>
                </h1>
            </div>

            <p className="text-white/50 font-light leading-relaxed text-lg max-w-md">
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
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Github size={16} /> GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                >
                    <Linkedin size={16} /> LinkedIn
                </Link>
            </div>

            <div className="flex items-center gap-5 pt-4 border-t border-white/10">
                {mainTech.map((tech) => (
                    <div
                        key={tech.nameKey}
                        title={tech.label}
                        className="text-white/30 hover:text-white transition-all duration-300 hover:-translate-y-1"
                    >
                        <IconTech nameKey={tech.nameKey} size={24} />
                    </div>
                ))}
            </div>
        </div>
    );
}
