"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

/** Bouton de retour à la page précédente via `router.back()`. */
export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="group flex gap-2 items-center px-4 py-2 bg-black/[0.07] dark:bg-white/[0.06] border border-black/15 dark:border-white/10 w-fit rounded-xl text-gray-700 dark:text-white/75 font-light transition-all duration-300 hover:bg-black/[0.12] dark:hover:bg-white/10 hover:border-black/25 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white"
        >
            <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="text-sm">Retour</span>
        </button>
    );
}
