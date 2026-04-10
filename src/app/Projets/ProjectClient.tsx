"use client";

import React, { useState } from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";
import IconTech from "@/app/components/icon/Icon";
import Link from "next/link";

export default function ProjetClient({ initialProjects }: { initialProjects: any[] }) {

    const [step, setStep] = useState(0);

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const handleNext = () => {
        if (step < initialProjects.length - 1) {
            setStep(step + 1)
        }
    }

    const proj = initialProjects[step]

    return (
        <div className="flex gap-8 items-center justify-center h-[450px] mt-10">
            <button
                onClick={handlePrev}
                disabled={step === 0}
                className={`text-xl text-white transition-opacity duration-300 bg-white/10 p-3 rounded-full h-fit w-fit hover:transition hover:duration-200 ${
                    step === 0 ? "opacity-20 cursor-not-allowed" : "hover:text-gray-400 cursor-pointer hover:bg-white/20"
                }`}>
                <ArrowLeft size={20}/>
            </button>

                <div className="bg-white/20 backdrop-blur-3xl flex flex-col flex-1 max-w-5xl w-full text-white p-8 rounded-lg">
                    <div className="flex justify-between">
                        <p className="font-bold text-3xl mb-8">Projet {proj.title}</p>
                        <Link href={`/ProjectDetails/${proj.id}`} className={`font-light text-white hover:underline`}>Voir plus</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-8 items-start">
                            {proj.images && proj.images.length > 0 && (
                                <Image src={`/${proj.images[0].url}`} alt={`${proj.images[0].alt}`} width={500} height={280}/>
                            )}
                            <div className="flex-col gap-8">
                                <p className="font-bold text-lg">Technologies utilisées :</p>
                                <div className="flex gap-8">
                                    {proj.technologies.map((tech, index)=>(
                                        <div className="flex flex-col items-center" key={index}>
                                            <IconTech nameKey={tech.icon} size={48}/>
                                            <p>{tech.title}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div>
                            <p className="font-light ">{proj.preview}</p>
                        </div>
                    </div>
                </div>

            <button
                onClick={handleNext}
                disabled={step === initialProjects.length - 1}
                className={`text-xl text-white transition-opacity duration-300 bg-white/10 p-3 rounded-full h-fit w-fit hover:transition hover:duration-200 ${
                    step === initialProjects.length - 1 ? "opacity-20 cursor-not-allowed" : "hover:text-gray-400 cursor-pointer hover:bg-white/20"
                }`}>
                <ArrowRight size={20}/>
            </button>
        </div>
    );
}