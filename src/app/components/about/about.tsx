"use client";
import {useState, useEffect} from "react";
import Image from "next/image";

export default function About() {

    const [step, setStep] = useState(0);

    return (
        <div className="backdrop-blur-3xl w-[50%] rounded-3xl m-auto p-4 shadow-lg">
            <div className="flex flex-row gap-8 items-start">
                <Image className="rounded-full border-2 border-white" src={"/assets/images/pdp.jpg"}
                       alt={"photo de profil"} width={150} height={150}/>
                <div className="animate-fade-in flex flex-col items-start gap-2 text-white">
                    <h1 className=" text-5xl font-bold text-center">Robin BERGMANN</h1>
                    <h2 className=" text-xl font-bold text-center">Développeur Back-end en alternance</h2>
                    <p className="">Passionné depuis 3 ans par le développement, je souhaite acquérir une vision stratégique ainsi
                        que les compétences en architecture logicielle et d’application en pilotage de projet.</p>
                </div>
            </div>
        </div>
    )

}