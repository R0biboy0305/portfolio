"use client";

import React, {useState} from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";
import IconTech from "@/app/components/icon/Icon";
import Link from "next/link";

export default function ProjetClient({initialProjects}: { initialProjects: any[] }) {

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
        <div className="flex flex-col gap-8">
            <h2 className="text-black [-webkit-text-stroke:1px_white] text-center font-bold text-6xl uppercase">Mes projets</h2>
            <div className="flex gap-6 flex-wrap">
                <div className="bg-radial from-blue-700 to-gray-900 to-70% rounded-lg p-4 flex flex-col w-fit relative mx-auto hover:scale-105 transition duration-400">
                    <Link href={`/ProjectDetails/${proj.id}`} className="absolute top-4 left-4 hover:underline text-white text-sm">
                        Voir plus
                    </Link>
                    <div className="w-full flex flex-col items-end">
                        {proj.images.slice(0, 1).map((image, index) => (
                            <div key={index}>
                                <Image src={`/${image.url}`} alt={`${image.alt}`} width={400} height={200}/>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 max-w-xl p-4">
                        <p className="text-lg mb-4">{proj.title}</p>
                        <p className="text-sm">{proj.preview}</p>
                    </div>
                    <div>
                        {proj.images.slice(2,3).map((image, index) => (
                            <div key={index}>
                                <Image src={`/${image.url}`} alt={`${image.alt}`} width={400} height={200}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}