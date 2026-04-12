"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconTech from "@/app/components/icon/Icon";

export default function ProjetsList({ initialProjects }: { initialProjects: any[] }) {
    return (
        <div className="text-white flex flex-col gap-20 max-w-6xl mx-auto py-12 px-4 relative">
            <div
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-300 -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-800/50 to-transparent to-70%">
            </div>

            <h1 className="text-7xl md:text-8xl font-bold italic text-center text-transparent [-webkit-text-stroke:2px_white] tracking-wide">
                Projets
            </h1>

            <div className="w-full h-[1px] bg-white"></div>

            <div className="flex flex-col gap-20">
                {initialProjects.map((proj, index) => {

                    const isEven = index % 2 === 0;

                    return (
                        <div key={proj.id} className="flex flex-col gap-20">

                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center`}>

                                <div className={`relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ${!isEven ? 'md:order-2' : ''}`}>
                                    {proj.images?.[0] && (
                                        <Image
                                            src={`/${proj.images[0].url}`}
                                            alt={proj.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    )}
                                </div>

                                <div className={`space-y-6 flex flex-col ${!isEven ? 'md:items-end md:text-right' : 'items-start'}`}>

                                    <h2 className="font-bold text-5xl md:text-6xl italic">
                                        {proj.title}
                                    </h2>

                                    <p className="text-sm text-white max-w-md leading-relaxed">
                                        {proj.preview}
                                    </p>

                                    <div className={`flex flex-wrap gap-3 py-4 ${!isEven ? 'justify-end' : 'justify-start'}`}>
                                        {proj.technologies?.map((tech: any, i: number) => (
                                            <div key={i} className="bg-white/10 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                                                <IconTech nameKey={tech.icon} size={28} />
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/ProjectDetails/${proj.id}`}
                                        className="group flex gap-2 items-center px-6 py-3 bg-white text-black rounded-lg font-semibold transition-all hover:bg-gray-200"
                                    >
                                        <span>Découvrir</span>
                                        <div className="w-0 overflow-hidden transition-all duration-300 group-hover:w-5 flex items-center justify-center">
                                            <ArrowRight size={20} className="shrink-0"/>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div className="w-full h-[1px] bg-white/30"></div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}