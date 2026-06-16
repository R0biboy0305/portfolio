"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import HomePageLayout from "@/app/components/HomePage/HomePageLayout";

const GlobeDynamic = dynamic(() => import("@/app/components/globe_design/globe"), {
    ssr: false,
});

export default function LayoutClientShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {children}
            {pathname === "/" && (
                <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto w-full min-h-[calc(100vh-8rem)] gap-8 py-12">
                    <HomePageLayout/>
                    <GlobeDynamic/>
                </div>
            )}
        </>
    );
}
