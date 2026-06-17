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
        <li className="group text-xs flex items-center justify-center px-4 hover:cursor-pointer">
            <Link className="relative" href={href}>
                {children}
                <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-black group-hover:w-full transition-all duration-400 ${
                        isActive ? "w-full" : "w-0"
                    }`}
                />
            </Link>
        </li>
    );
}
