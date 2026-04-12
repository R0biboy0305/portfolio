"use client";

import React, { useState } from "react";
import IconTech from "@/app/components/icon/Icon";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TechFuncSlider({ technologies, functions }: { technologies: any[], functions: any[] }) {

    const [activeTab, setActiveTab] = useState<"tech" | "func">("tech");

    return (
        <div className="flex gap-4 md:gap-8 items-center min-h-[300px] w-full overflow-hidden">

            <button
                onClick={() => setActiveTab("tech")}
                className={`p-3 shrink-0 rounded-full bg-white/10 transition-opacity ${activeTab === "tech" ? 'invisible opacity-0' : 'opacity-100 hover:bg-white/20'}`}
            >
                <ArrowLeft size={24} />
            </button>

            <div className="flex-1 overflow-hidden">

                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: activeTab === "tech" ? "translateX(0%)" : "translateX(-100%)" }}
                >

                    <div className="w-full shrink-0">
                        <div className="max-w-6xl space-y-6">
                            <h2 className="font-bold text-4xl md:text-6xl">Technologies utilisées</h2>
                            <div className="flex flex-col gap-8 max-w-3xl">
                                {technologies.map((tech, index) => (
                                    <div className="flex gap-8 items-center" key={index}>
                                        <div className="flex flex-col items-center min-w-[80px] justify-center">
                                            <div className="bg-white/10 p-3 rounded-lg border border-white/5 backdrop-blur-sm" title={tech.title}>
                                                <IconTech nameKey={tech.icon} size={28} />
                                            </div>
                                        </div>
                                        <p className="text-sm text-white">{tech.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-full shrink-0">
                        <div className="max-w-6xl space-y-8">
                            <h2 className="font-bold text-4xl md:text-6xl">Fonctionnalités principales</h2>
                            <div className="space-y-6 max-w-3xl">
                                {functions.map((funct, index) => (
                                    <div className="border-l-4 border-white pl-6 space-y-4" key={index}>
                                        <p className="font-bold text-xl">{funct.title}</p>
                                        <p className="text-sm text-gray-300">{funct.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button
                onClick={() => setActiveTab("func")}
                className={`p-3 shrink-0 rounded-full bg-white/10 transition-opacity ${activeTab === "func" ? 'invisible opacity-0' : 'opacity-100 hover:bg-white/20'}`}
            >
                <ArrowRight size={24} />
            </button>

        </div>
    );
}