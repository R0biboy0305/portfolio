"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="group flex gap-2 items-center px-4 py-2 bg-white/5 border border-white/10 w-fit rounded-xl text-white/70 font-light transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
        >
            <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="text-sm">Retour</span>
        </button>
    );
}
