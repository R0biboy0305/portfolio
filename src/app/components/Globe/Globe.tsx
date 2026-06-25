"use client";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

/** Globe 3D interactif avec rotation automatique, adapté au thème clair/sombre. Chargé sans SSR. */
export default function CustomGlobe() {
    const globeRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [features, setFeatures] = useState<object[]>([]);
    const [size, setSize] = useState(1000);
    const { resolvedTheme } = useTheme();
    const isLight = resolvedTheme === "light";

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize(Math.min(width, height));
        });
        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const load = () =>
            fetch("/assets/countries/countries.json")
                .then((res) => res.json())
                .then((data) => {
                    if (data?.features && Array.isArray(data.features)) {
                        setFeatures(data.features);
                    }
                })
                .catch(() => {});

        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(load);
        } else {
            setTimeout(load, 200);
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (globeRef.current && typeof globeRef.current.controls === "function") {
                const controls = globeRef.current.controls();
                if (controls) {
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 0.5;
                    controls.enableZoom = false;
                }
            }
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const customMaterial = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: isLight ? "#e8eeff" : "#0a0a0a",
                transparent: true,
                opacity: 1,
            }),
        [isLight]
    );

    return (
        <div ref={containerRef} className="overflow-hidden hidden lg:w-1/2 h-screen lg:flex justify-center items-center cursor-grab relative">
            <Globe
                ref={globeRef}
                width={size}
                height={size}
                backgroundColor="rgba(255, 255, 255, 0)"
                globeMaterial={customMaterial}
                polygonsData={features}
                polygonAltitude={0.03}
                polygonCapColor={() => isLight ? "rgba(79, 70, 229, 0.12)" : "rgba(255, 255, 255, 0.2)"}
                polygonSideColor={() => isLight ? "rgba(79, 70, 229, 0.05)" : "rgba(255, 255, 255, 0.02)"}
                polygonStrokeColor={() => isLight ? "rgba(79, 70, 229, 0.4)" : "rgba(255, 255, 255, 0.6)"}
                animateIn={true}
            />
        </div>
    );
}
