"use client";

import Image from "next/image";
import React, {useState} from "react";
import {ArrowLeft, ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";

export default function ImageSlider({images}: {images:any[]}){

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <Image src={`/${images[currentIndex].url}`} alt={`${images[currentIndex].alt}`} width={1920} height={1080} className="h-[270px] rounded-lg"/>
            <div className="flex items-center gap-4">
                {images.map((img, index)=>(
                    <button key={index} onClick={()=> setCurrentIndex(index)} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-8' : 'bg-white/10'}`}>
                    </button>
                ))}
            </div>
        </div>
    )
}