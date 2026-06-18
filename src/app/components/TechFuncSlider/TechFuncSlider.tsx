"use client";

import React, { useState } from "react";
import IconTech from "@/app/components/Icon/Icon";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TechFuncSlider({ technologies, functions }: { technologies: any[], functions: any[] }) {

    const [activeTab, setActiveTab] = useState<"tech" | "func">("tech");

    return (
        <div className="flex gap-2 sm:gap-4 md:gap-8 items-center min-h-[300px] w-full overflow-hidden">

            <button
                onClick={() => setActiveTab("tech")}
                className={`p-2 sm:p-3 shrink-0 rounded-full bg-black/[0.08] dark:bg-white/10 text-gray-700 dark:text-white transition-opacity ${activeTab === "tech" ? 'invisible opacity-0' : 'opacity-100 hover:bg-black/[0.15] dark:hover:bg-white/20'}`}
            >
                <ArrowLeft size={18} className="sm:hidden" />
                <ArrowLeft size={24} className="hidden sm:block" />
            </button>

            <div className="flex-1 overflow-hidden">

                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: activeTab === "tech" ? "translateX(0%)" : "translateX(-100%)" }}
                >

                    <div className="w-full shrink-0">
                        <div className="max-w-6xl space-y-6">
                            <h2 className="font-bold text-2xl sm:text-3xl md:text-6xl text-gray-900 dark:text-white">Technologies utilisées</h2>
                            <div className="flex flex-col gap-8 max-w-3xl">
                                {technologies.map((tech, index) => (
                                    <div className="flex gap-4 sm:gap-6 md:gap-8 items-center" key={index}>
                                        <div className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] justify-center">
                                            <div className="bg-black/[0.08] dark:bg-white/10 p-3 rounded-lg border border-black/15 dark:border-white/10 backdrop-blur-sm text-gray-800 dark:text-white" title={tech.title}>
                                                <IconTech nameKey={tech.icon} size={28} />
                                            </div>
                                        </div>
                                        {/* gray-700 = ~9.5:1 | white/80 = ~6.8:1 */}
                                        <p className="text-sm text-gray-700 dark:text-white/80">{tech.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full shrink-0">
                        <div className="max-w-6xl space-y-8">
                            <h2 className="font-bold text-2xl sm:text-3xl md:text-6xl text-gray-900 dark:text-white">Fonctionnalités principales</h2>
                            <div className="space-y-6 max-w-3xl">
                                {functions.map((funct, index) => (
                                    <div className="border-l-4 border-gray-800 dark:border-white pl-6 space-y-4" key={index}>
                                        <p className="font-bold text-xl text-gray-900 dark:text-white">{funct.title}</p>
                                        {/* gray-700 en light | white/70 en dark */}
                                        <p className="text-sm text-gray-700 dark:text-white/70">{funct.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button
                onClick={() => setActiveTab("func")}
                className={`p-2 sm:p-3 shrink-0 rounded-full bg-black/[0.08] dark:bg-white/10 text-gray-700 dark:text-white transition-opacity ${activeTab === "func" ? 'invisible opacity-0' : 'opacity-100 hover:bg-black/[0.15] dark:hover:bg-white/20'}`}
            >
                <ArrowRight size={18} className="sm:hidden" />
                <ArrowRight size={24} className="hidden sm:block" />
            </button>

        </div>
    );
}
