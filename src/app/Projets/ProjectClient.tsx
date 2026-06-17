"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTech from "@/app/components/Icon/Icon";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

export default function ProjetsList({ initialProjects }: { initialProjects: any[] }) {
    return (
        <div className="text-white flex flex-col gap-24 max-w-6xl mx-auto py-24 px-6 relative">

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-900/30 to-transparent to-70% pointer-events-none" />

            <AnimatedSection>
                <div className="flex flex-col gap-3">
                    <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Portfolio</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                        Projets
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                </div>
            </AnimatedSection>

            <div className="flex flex-col gap-8">
                {initialProjects.map((proj, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <AnimatedSection key={proj.id} delay={index * 80}>
                            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/5">

                                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center`}>

                                    {/* Image */}
                                    <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden ${!isEven ? "md:order-2" : ""}`}>
                                        {proj.images?.[0] && (
                                            <Image
                                                src={`/${proj.images[0].url}`}
                                                alt={proj.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className={`flex flex-col gap-6 ${!isEven ? "md:items-end md:text-right" : "items-start"}`}>

                                        <div className="flex flex-col gap-2">
                                            <span className="text-indigo-400/70 text-xs font-medium tracking-widest uppercase">
                                                Projet {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <h3 className="font-bold text-4xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                                                {proj.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-white/60 max-w-sm leading-relaxed">
                                            {proj.preview}
                                        </p>

                                        {/* Tech badges */}
                                        <div className={`flex flex-wrap gap-2 ${!isEven ? "justify-end" : "justify-start"}`}>
                                            {proj.technologies?.map((tech: any, i: number) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm text-xs text-white/60 hover:border-indigo-500/30 hover:text-white/90 transition-all duration-200"
                                                >
                                                    <IconTech nameKey={tech.icon} size={14} />
                                                    <span>{tech.title}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/ProjectDetails/${proj.id}`}
                                            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5"
                                        >
                                            <span>Découvrir</span>
                                            <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    );
                })}
            </div>
        </div>
    );
}
