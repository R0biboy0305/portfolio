"use client";

import React, { useState, useEffect } from "react";
import NavButton from "@/app/components/Header/__components/NavButton/NavButton";
import { HomeIcon } from "lucide-react";

const SECTIONS = ["hero", "projets", "about"] as const;
type SectionId = typeof SECTIONS[number];

export default function Header() {
    const [activeSection, setActiveSection] = useState<SectionId>("hero");

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
            <nav className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
                <NavButton href="#hero" isActive={activeSection === "hero"}>
                    <HomeIcon size={15} />
                </NavButton>
                <NavButton href="#projets" isActive={activeSection === "projets"}>Projets</NavButton>
                <NavButton href="#about" isActive={activeSection === "about"}>À propos</NavButton>
            </nav>
        </header>
    );
}
