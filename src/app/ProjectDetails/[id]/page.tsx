import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import TechFuncSlider from "@/app/components/TechFuncSlider/TechFuncSlider";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/ui/BackButton";
import projects from "@/app/data/projects";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <div className="text-gray-900 dark:text-white flex flex-col gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-6 py-8 sm:py-12 relative">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] -z-10 rounded-full bg-radial-[at_50%_20%] from-indigo-200/50 dark:from-indigo-900/25 to-transparent to-70% pointer-events-none" />

            <BackButton />

            <AnimatedSection>
                <div className="flex flex-col gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Projet</span>
                    <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                        {project.title}
                    </h1>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                    {project.repoUrl && (
                        <Link
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 w-fit"
                        >
                            <Github size={16} />
                            Voir le dépôt
                        </Link>
                    )}
                </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-4">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Aperçu</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                            Présentation
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                        <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">{project.preview}</p>
                    </div>

                    <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-4">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Contexte</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                            Objectifs
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                        <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">{project.objectif}</p>
                    </div>
                </div>
            </AnimatedSection>


            <AnimatedSection delay={100}>
                <ImageSlider images={project.images} />
            </AnimatedSection>

            <AnimatedSection delay={300}>
                <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Stack</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                            Technologies & Fonctionnalités
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                    </div>
                    <TechFuncSlider technologies={project.technologies} functions={project.functions} />
                </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
                <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-4">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Retour d&apos;expérience</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                        Bilan
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                    <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed max-w-3xl">{project.bilan}</p>
                </div>
            </AnimatedSection>

        </div>
    );
}
