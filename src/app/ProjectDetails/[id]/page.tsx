import Image from "next/image";
import React from "react";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import TechFuncSlider from "@/app/components/TechFuncSlider/TechFuncSlider";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/ui/BackButton";
import projects from "@/app/data/projects";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <div className="text-white flex flex-col gap-20 max-w-6xl mx-auto px-6 py-12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-900/30 to-transparent to-70% pointer-events-none" />

            <BackButton />

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30 text-center">
                {project.title}
            </h1>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <ImageSlider images={project.images.slice(0, 2)} />
                <div className="space-y-4">
                    <h2 className="font-bold text-4xl md:text-5xl tracking-tight">Présentation</h2>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm">{project.preview}</p>
                </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="font-bold text-4xl md:text-5xl tracking-tight">Objectifs</h2>
                    <p className="text-white/60 text-sm leading-relaxed max-w-sm">{project.objectif}</p>
                </div>
                <div className="justify-self-end w-full">
                    <ImageSlider images={project.images.slice(2)} />
                </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <TechFuncSlider technologies={project.technologies} functions={project.functions} />

            <div className="w-full h-[1px] bg-white/10" />

            <div className="space-y-4">
                <h2 className="font-bold text-4xl md:text-5xl tracking-tight">Bilan</h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl">{project.bilan}</p>
            </div>

            <div className="w-full h-[1px] bg-white/10" />
        </div>
    );
}
