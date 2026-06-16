"use client";
import Link from "next/link";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import IconTech from "@/app/components/icon/Icon";

const mainTech = [
    { nameKey: "react", label: "React" },
    { nameKey: "Next", label: "Next.js" },
    { nameKey: "Typescript", label: "TypeScript" },
    { nameKey: "Php", label: "PHP" },
    { nameKey: "Mysql", label: "MySQL" },
    { nameKey: "Git", label: "Git" },
];

export default function HomePageLayout() {
    return (
        <div className="flex flex-col gap-8 max-w-xl px-6 lg:px-0">
            <div className="flex flex-col gap-3">
                <p className="text-indigo-400 font-medium tracking-widest text-sm uppercase">
                    Développeur back-end en alternance
                </p>
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                    Robin
                    <br/>
                    <span className="italic text-transparent [-webkit-text-stroke:2px_white]">
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
                    href="/Projets"
                    className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors duration-200"
                >
                    Voir mes projets <ArrowRight size={16}/>
                </Link>
                <Link
                    href="https://github.com/R0biboy0305"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors duration-200"
                >
                    <Github size={16}/> GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors duration-200"
                >
                    <Linkedin size={16}/> LinkedIn
                </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                {mainTech.map((tech) => (
                    <div
                        key={tech.nameKey}
                        title={tech.label}
                        className="text-white/40 hover:text-white transition-colors duration-200"
                    >
                        <IconTech nameKey={tech.nameKey} size={26}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
