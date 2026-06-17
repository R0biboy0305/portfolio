"use client";
import Globe from "react-globe.gl";
import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";

export default function CustomGlobe() {
    const globeRef = useRef<any>(null);
    const [features, setFeatures] = useState<object[]>([]);

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
                color: "#0a0a0a",
                transparent: true,
                opacity: 1,
            }),
        []
    );

    return (
        <div className="overflow-hidden hidden lg:w-1/2 h-screen lg:flex justify-center items-center cursor-grab relative">
            <Globe
                ref={globeRef}
                backgroundColor="rgba(255, 255, 255, 0)"
                globeMaterial={customMaterial}
                polygonsData={features}
                polygonAltitude={0.03}
                polygonCapColor={() => "rgba(255, 255, 255, 0.2)"}
                polygonSideColor={() => "rgba(255, 255, 255, 0.02)"}
                polygonStrokeColor={() => "rgba(255, 255, 255, 0.6)"}
                animateIn={true}
            />
        </div>
    );
}
