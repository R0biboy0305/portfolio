import React from "react";
import Link from "next/link";

export default function NavButton({
    children,
    href,
    isActive,
}: {
    children: React.ReactNode;
    href: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-white/50 hover:text-white hover:bg-white/5"
            }`}
        >
            {children}
        </Link>
    );
}
