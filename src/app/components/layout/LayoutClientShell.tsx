"use client";

import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const GlobeDynamic = dynamic(() => import("@/app/components/globe_design/globe"), {
    ssr: false,
});

export default function LayoutClientShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <>
            {children}
            {pathname === "/" && <GlobeDynamic />}
        </>
    );
}
