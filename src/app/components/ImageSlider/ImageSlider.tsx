"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/app/data/projects";

export default function ImageSlider({ images }: { images: ProjectImage[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrentIndex((i) => (i + 1) % images.length);

    const closeLightbox = useCallback(() => setLightboxOpen(false), []);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [lightboxOpen, closeLightbox]);

    if (!images.length) return null;

    return (
        <>
            <div className="flex flex-col items-center gap-3 w-full">
                <div className="relative w-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
                    <div
                        className="relative aspect-[8/3] cursor-pointer"
                        onClick={() => setLightboxOpen(true)}
                    >
                        <Image
                            src={`/${images[currentIndex].url}`}
                            alt={`Capture d'écran ${currentIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1080px"
                            priority={currentIndex === 0}
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
                                        ? "bg-gray-900 dark:bg-white w-6 h-2"
                                        : "bg-black/20 dark:bg-white/20 w-2 h-2 hover:bg-black/40 dark:hover:bg-white/40"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {lightboxOpen && createPortal(
                <div
                    style={{ zIndex: 99999 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xl"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        aria-label="Fermer"
                        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                    >
                        <X size={24} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                aria-label="Image précédente"
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                aria-label="Image suivante"
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}

                    <div
                        className="relative w-[90vw] h-[85vh] max-w-6xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/${images[currentIndex].url}`}
                            alt={`Capture d'écran ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="90vw"
                        />
                    </div>

                    {images.length > 1 && (
                        <div className="absolute bottom-6 flex items-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                                    aria-label={`Aller à l'image ${index + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        currentIndex === index
                                            ? "bg-white w-6 h-2"
                                            : "bg-white/30 w-2 h-2 hover:bg-white/60"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </div>,
                document.body
            )}
        </>
    );
}
