import React from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function NavButton({children, href}: { children: React.ReactNode, href: string }) {

    const pathanme = usePathname();

    const isActive = href === pathanme;

    return (
        <li className={`group text-xs flex items-center justify-center px-4 hover:cursor-pointer`}>
            <Link className="relative" href={href}>
                {children}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-400 ${isActive ? 'w-full' : 'w-0'}`}></span>
            </Link>
        </li>

    );
}