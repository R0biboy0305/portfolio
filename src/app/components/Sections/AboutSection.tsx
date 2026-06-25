"use client";

import React, { useState } from "react";
import Image from "next/image";
import TechStack from "@/app/components/TechStack/TechStack";
import Parcours from "@/app/components/Parcours/Parcours";
import Formation from "@/app/components/Formation/Formation";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

const TABS = [
    { label: "Compétences", key: "stack" },
    { label: "Parcours",    key: "parcours" },
    { label: "Formation & plus",    key: "formation" },
] as const;

/** Section "À propos" avec onglets Compétences / Parcours / Formation. */
export default function AboutSection() {
    const [step, setStep] = useState(0);

    const sections = [<TechStack key="tech" />, <Parcours key="parcours" />, <Formation key="formation" />];

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-16 px-6 py-24 relative">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] -z-10 rounded-full bg-radial-[at_80%_20%] from-indigo-200/50 dark:from-indigo-900/20 to-transparent to-70% pointer-events-none" />

            <AnimatedSection>
                <div className="flex flex-col gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">À propos</span>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                        Profil
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
                <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-5 sm:p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="shrink-0">
                        <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-black/15 dark:ring-white/10 ring-offset-2 ring-offset-transparent">
                            <Image
                                src="/assets/images/pdp400x400.jpg"
                                alt="Photo de profil de Robin Bergmann"
                                fill
                                sizes="144px"
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-gray-900 dark:text-white text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-bold tracking-tight">Robin BERGMANN</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">Développeur back-end en alternance</p>
                        </div>
                        <p className="text-gray-700 dark:text-white/70 leading-relaxed max-w-lg text-sm">
                            Passionné depuis 3 ans par le développement, je souhaite acquérir une vision
                            stratégique ainsi que les compétences en architecture logicielle et pilotage de projet.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-2 flex-wrap">
                        {TABS.map((tab, i) => (
                            <button
                                key={tab.key}
                                onClick={() => setStep(i)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                    step === i
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                                        : "bg-black/[0.06] dark:bg-white/5 border border-black/15 dark:border-white/10 text-gray-700 dark:text-white/65 hover:bg-black/[0.11] dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-black/25 dark:hover:border-white/20"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="min-h-0 sm:min-h-[400px]">
                        {sections[step]}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}
