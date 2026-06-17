import React from "react";
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
        <div className="text-white flex flex-col gap-12 max-w-6xl mx-auto px-6 py-12 relative">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] -z-10 rounded-full bg-radial-[at_50%_20%] from-indigo-900/25 to-transparent to-70% pointer-events-none" />

            <BackButton />

            {/* Titre principal */}
            <AnimatedSection>
                <div className="flex flex-col gap-3">
                    <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Projet</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                        {project.title}
                    </h1>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                </div>
            </AnimatedSection>

            {/* Présentation */}
            <AnimatedSection delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <ImageSlider images={project.images.slice(0, 2)} />
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-4">
                        <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Aperçu</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                            Présentation
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                        <p className="text-white/60 text-sm leading-relaxed">{project.preview}</p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Objectifs */}
            <AnimatedSection delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-4">
                        <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Contexte</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                            Objectifs
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                        <p className="text-white/60 text-sm leading-relaxed">{project.objectif}</p>
                    </div>
                    <ImageSlider images={project.images.slice(2)} />
                </div>
            </AnimatedSection>

            {/* Technologies & Fonctionnalités */}
            <AnimatedSection delay={300}>
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex flex-col gap-3 mb-8">
                        <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Stack</span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                            Technologies & Fonctionnalités
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                    </div>
                    <TechFuncSlider technologies={project.technologies} functions={project.functions} />
                </div>
            </AnimatedSection>

            {/* Bilan */}
            <AnimatedSection delay={400}>
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col gap-4">
                    <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Retour d&apos;expérience</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                        Bilan
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent" />
                    <p className="text-white/60 text-sm leading-relaxed max-w-3xl">{project.bilan}</p>
                </div>
            </AnimatedSection>

        </div>
    );
}
