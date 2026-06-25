"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wrapper qui anime l'apparition de son contenu au scroll via IntersectionObserver.
 * @param children — Contenu à animer.
 * @param className — Classes CSS additionnelles.
 * @param delay — Délai d'apparition en ms (utile pour décaler les éléments d'une liste).
 */
export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transitionDelay: `${delay}ms`,
                willChange: visible ? "auto" : "transform, opacity",
            }}
            className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${className}`}
        >
            {children}
        </div>
    );
}
