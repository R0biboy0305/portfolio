"use client";
import React from "react";
import NavButton from "@/app/components/header/__components/NavButton/NavButton";
import {HomeIcon, Sun} from "lucide-react";

export default function Header() {

    return (
        <header className="w-full h-32 flex items-center justify-center">
            <nav className="w-sm m-auto px-4 rounded-full shadow-lg bg-gray-200/50">
                <ul className="flex flex-row justify-between p-2">
                    <NavButton href={"/"}><HomeIcon color={"black"} size={18}/></NavButton>
                    <div className="w-[1px] bg-gray-600 h-9 "></div>
                    <NavButton href={"/Projets"}>Projet</NavButton>
                    <div className="w-[1px] bg-gray-600 h-9 "></div>
                    <NavButton href={"/About"}>A propos</NavButton>
                    <div className="w-[1px] bg-gray-600 h-9 "></div>
                    <NavButton href={"/dark"}><Sun color={"black"} size={18}/></NavButton>
                </ul>
            </nav>
        </header>
    )
}