"use client";

import React, { useState, useEffect } from "react";
import NavButton from "@/app/components/Header/__components/NavButton/NavButton";
import { HomeIcon, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const SECTIONS = ["hero", "projets", "about"] as const;
type SectionId = typeof SECTIONS[number];

export default function Header() {
    const [activeSection, setActiveSection] = useState<SectionId>("hero");
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const handleScroll = () => {
            let current: SectionId = "hero";
            for (const id of SECTIONS) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.getBoundingClientRect().top <= window.innerHeight / 2) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 px-3 py-2 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/20">
                <NavButton href="#hero" isActive={activeSection === "hero"}>
                    <HomeIcon size={15} />
                </NavButton>
                <NavButton href="#projets" isActive={activeSection === "projets"}>Projets</NavButton>
                <NavButton href="#about" isActive={activeSection === "about"}>À propos</NavButton>

                <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

                <button
                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    className="flex items-center justify-center p-1.5 rounded-full text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                    aria-label="Changer le thème"
                    suppressHydrationWarning
                >
                    {mounted ? (resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />) : <Moon size={15} />}
                </button>
            </nav>
        </header>
    );
}
