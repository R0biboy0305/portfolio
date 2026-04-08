"use client";
import Link from "next/link";
import {ChevronRight} from "lucide-react";
import { ComponentProps} from "react";

type ButtonProps = {
    href?: string;
    className?: string;
    children: React.ReactNode;
} & ComponentProps<"button"> & ComponentProps<"a">;

export default function Button({href, children, className ="", ...props }: ButtonProps) {

    const baseClasses = "mx-auto my-3 group relative flex w-fit items-center px-6 py-2 rounded-full shadow-2xl bg-gray-100/10 text-white hover:text-gray-200 hover:bg-gray-100/5 transition-all duration-300";

    const combinedClasses = `${baseClasses} ${className}`.trim();

    const Icon = <ChevronRight className="ml-0 w-0 overflow-hidden transition-all duration-300 group-hover:ml-2 group-hover:w-5"/>;

    if (href) {
        return (
            <Link className={combinedClasses} href={href} {...props}>
                {children}
                {Icon}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {children}
            {Icon}
        </button>
    );
}

