"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function RetourButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="group flex gap-2 items-center px-4 py-2 bg-white/40 w-fit rounded-lg text-white font-light transition-all"
        >
            <div className="w-0 overflow-hidden transition-all duration-200 group-hover:w-5 flex items-center justify-center">
                <ArrowLeft size={20} className="shrink-0" />
            </div>
            <span>Retour</span>
        </button>
    );
}