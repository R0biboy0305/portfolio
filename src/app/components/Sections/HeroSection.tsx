"use client";

import dynamic from "next/dynamic";
import HomePageLayout from "@/app/components/Home/HomePageLayout";

const GlobeDynamic = dynamic(() => import("@/app/components/Globe/Globe"), {
    ssr: false,
    loading: () => (
        <div className="hidden lg:flex lg:w-1/2 h-screen items-center justify-center">
            <div className="w-80 h-80 rounded-full border border-black/5 dark:border-white/5 animate-pulse bg-black/[0.02] dark:bg-white/[0.02]" />
        </div>
    ),
});

/** Section hero de la page d'accueil : présentation + globe 3D (chargé dynamiquement). */
export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto w-full min-h-[calc(100vh-8rem)] gap-8 py-16 sm:py-12 px-5 sm:px-6">
            <HomePageLayout />
            <GlobeDynamic />
        </div>
    );
}
