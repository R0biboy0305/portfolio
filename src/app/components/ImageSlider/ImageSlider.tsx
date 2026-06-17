"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/app/data/projects";

export default function ImageSlider({ images }: { images: ProjectImage[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrentIndex((i) => (i + 1) % images.length);

    if (!images.length) return null;

    return (
        <div className="flex flex-col items-center gap-3 w-full">
            <div className="relative w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="relative aspect-[16/9]">
                    <Image
                        src={`/${images[currentIndex].url}`}
                        alt={`Capture d'écran ${currentIndex + 1}`}
                        fill
                        className="object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Image précédente"
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm hover:bg-black/60 hover:border-white/20 transition-all duration-200 hover:-translate-y-1/2 hover:scale-110"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Image suivante"
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-sm hover:bg-black/60 hover:border-white/20 transition-all duration-200 hover:-translate-y-1/2 hover:scale-110"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="flex items-center gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Aller à l'image ${index + 1}`}
                            className={`rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? "bg-white w-6 h-2"
                                    : "bg-white/20 w-2 h-2 hover:bg-white/40"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
