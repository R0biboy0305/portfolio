"use client";

import React from "react";
import dynamic from "next/dynamic";
import {usePathname} from "next/navigation";
import HomePageLayout from "@/app/components/HomePage/HomePageLayout";

const GlobeDynamic = dynamic(() => import("@/app/components/globe_design/globe"), {
    ssr: false,
});

export default function LayoutClientShell({children}: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {children}
            {pathname === "/" &&
                <div className="flex items-center justify-center gap-40">
                    <HomePageLayout/>
                    <GlobeDynamic />
                </div>
            }
        </>
    );
}
