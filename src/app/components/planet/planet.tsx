"use client";

import Link from "next/link";
import {ReactNode} from "react";

export default function Planet({link, children}: { link: string, children: React.ReactNode }) {


    return (
        <Link className="flex items-center justify-center w-[80px] h-[80px] -translate-x-[350px] -translate-y-[350px] bg-gray-200 rounded-full absolute z-10 text-center" href={link}>
            {children}
        </Link>
    )
}