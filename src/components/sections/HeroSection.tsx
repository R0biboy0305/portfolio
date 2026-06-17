"use client";

import dynamic from "next/dynamic";
import HomePageLayout from "@/app/components/HomePage/HomePageLayout";

const GlobeDynamic = dynamic(() => import("@/app/components/globe_design/globe"), {
    ssr: false,
});

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto w-full min-h-[calc(100vh-8rem)] gap-8 py-12 px-4">
            <HomePageLayout />
            <GlobeDynamic />
        </div>
    );
}
