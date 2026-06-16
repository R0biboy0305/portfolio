"use client";
import React, {useState} from "react";
import Image from "next/image";
import TechStack from "@/app/components/techstack/techStack";
import Parcours from "@/app/components/parcours/parcours";
import Formation from "@/app/components/formation/formation";
import {ArrowLeft, ArrowRight} from "lucide-react";
import Link from "next/link";


export default function About() {

    const [step, setStep] = useState(0);

    const section = [
        <TechStack key="tech"/>,
        <Parcours key="parcours"/>,
        <Formation key="formation"/>
    ]

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const handleNext = () => {
        if (step < section.length - 1) {
            setStep(step + 1)
        }
    }

    return (
        <div className="max-w-5xl m-auto flex flex-col gap-8">
            <Link href={"/"}
                  className="group flex gap-2 items-center px-4 py-2 bg-white/40 w-fit rounded-lg text-white font-light transition-all">
                <div
                    className="w-0 overflow-hidden transition-all duration-200 group-hover:w-5 flex items-center justify-center">
                    <ArrowLeft size={20} className="shrink-0"/>
                </div>
                <span>Retour</span>
            </Link>
            <div className="flex flex-row gap-8 items-center py-4">
                <div>
                    <Image src={"/assets/images/pdp400x400.jpg"} alt={"pdp"} width={200} height={200}
                           className="rounded-full border-1 border-white"/>
                </div>
                <div className="flex flex-col gap-3 max-w-xl text-white">
                    <p className="text-4xl font-bold">Robin BERGMANN</p>
                    <p className="text-xl font-bold">Développeur back-end en alternance</p>
                    <p>Passionné depuis 3 ans par le développement, je souhaite acquérir une vision stratégique ainsi
                        que les compétences en architecture logicielle et d’application en pilotage de projet.</p>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex gap-8 items-center justify-center h-[450px] mt-10">
                        <button
                            onClick={handlePrev}
                            disabled={step === 0}
                            className={`text-xl text-white transition-opacity duration-300 bg-white/10 p-3 rounded-full h-fit w-fit hover:transition hover:duration-200 ${
                                step === 0 ? "opacity-20 cursor-not-allowed" : "hover:text-gray-400 cursor-pointer hover:bg-white/20"
                            }`}>
                            <ArrowLeft size={20}/>
                        </button>
                        <div className="flex-1 w-full relative">
                            <div
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-300 -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-800/50 to-transparent to-70%">
                            </div>
                            {section[step]}
                            <ul className="flex justify-center gap-2 mt-4">
                                {section.map((_, index) => (
                                    <button key={index} onClick={() => setStep(index)}
                                            className={`h-3 rounded-full hover:cursor-default transition-all duration-300 ${index === step ? "w-8 bg-white" : "w-3 bg-white/20 hover:bg-white/40"}`}>
                                    </button>
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={handleNext}
                            disabled={step === section.length - 1}
                            className={`text-xl text-white transition-opacity duration-300 bg-white/10 p-3 rounded-full h-fit w-fit hover:transition hover:duration-200 ${
                                step === section.length - 1 ? "opacity-20 cursor-not-allowed" : "hover:text-gray-400 cursor-pointer hover:bg-white/20"
                            }`}>
                            <ArrowRight size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}