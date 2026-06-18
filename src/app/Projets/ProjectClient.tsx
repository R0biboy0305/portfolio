"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTech from "@/app/components/Icon/Icon";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { Project } from "@/app/data/projects";

export default function ProjetsList({ initialProjects }: { initialProjects: Project[] }) {
    return (
        <div className="text-gray-900 dark:text-white flex flex-col gap-10 sm:gap-12 md:gap-16 max-w-6xl mx-auto py-24 px-6 relative">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-200/50 dark:from-indigo-900/30 to-transparent to-70% pointer-events-none" />

            <AnimatedSection>
                <div className="flex flex-col gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-medium tracking-widest uppercase">Portfolio</span>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900/60 dark:from-white dark:via-white dark:to-white/30">
                        Projets
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initialProjects.map((proj, index) => (
                    <AnimatedSection key={proj.id} delay={index * 80}>
                        <Link
                            href={`/ProjectDetails/${proj.id}`}
                            className="group flex flex-col bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 h-full"
                        >
                            <div className="relative w-full aspect-video overflow-hidden">
                                {proj.images?.[0] ? (
                                    <Image
                                        src={`/${proj.images[0].url}`}
                                        alt={proj.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-black/[0.08] dark:bg-white/[0.05]" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                <span className="absolute bottom-3 left-3 text-white/70 text-[10px] font-medium tracking-widest uppercase">
                                    Projet {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="flex flex-col gap-4 p-5 flex-1">
                                <h3 className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-white/70">
                                    {proj.title}
                                </h3>

                                <p className="text-sm text-gray-700 dark:text-white/65 leading-relaxed line-clamp-3 flex-1">
                                    {proj.preview}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {proj.technologies?.slice(0, 4).map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1 px-2 py-1 bg-black/[0.06] dark:bg-white/5 rounded-full border border-black/15 dark:border-white/10 text-[10px] text-gray-600 dark:text-white/55"
                                        >
                                            <IconTech nameKey={tech.icon} size={11} />
                                            <span>{tech.title}</span>
                                        </div>
                                    ))}
                                    {proj.technologies?.length > 4 && (
                                        <span className="flex items-center px-2 py-1 text-[10px] text-gray-500 dark:text-white/35">
                                            +{proj.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                                    <span>Découvrir</span>
                                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}
