"use client";

import React, { useState, useEffect } from "react";
import NavButton from "@/app/components/Header/__components/NavButton/NavButton";
import { HomeIcon, Sun } from "lucide-react";

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
        <header className="w-full h-32 flex items-center justify-center">
            <nav className="w-sm m-auto px-4 rounded-full shadow-lg bg-gray-200/50">
                <ul className="flex flex-row justify-between p-2">
                    <NavButton href="#hero" isActive={activeSection === "hero"}>
                        <HomeIcon color="black" size={18} />
                    </NavButton>
                    <div className="w-[1px] bg-gray-600 h-9" />
                    <NavButton href="#projets" isActive={activeSection === "projets"}>Projet</NavButton>
                    <div className="w-[1px] bg-gray-600 h-9" />
                    <NavButton href="#about" isActive={activeSection === "about"}>A propos</NavButton>
                    <div className="w-[1px] bg-gray-600 h-9" />
                    <NavButton href="#hero" isActive={false}>
                        <Sun color="black" size={18} />
                    </NavButton>
                </ul>
            </nav>
        </header>
    );
}
