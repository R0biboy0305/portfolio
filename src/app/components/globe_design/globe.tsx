"use client";
import Globe from "react-globe.gl";
import {useEffect, useState, useRef, useMemo} from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";
export default function CustomGlobe() {

    const globeRef = useRef(null);
    const containerRef = useRef<any>(null);
    const [globe, setGlobe] = useState({features: []});
    const [size, setSize] = useState({width: 0});
    const [labels, setLabels] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        fetch("/assets/countries/countries.json")
            .then((res) => res.json())
            .then(data => {
                if (data && data.features && Array.isArray(data.features)) {
                    setGlobe(data);
                } else {
                    setGlobe({ features: [] });
                }
            })
            .catch(() => setGlobe({ features: [] }));
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
            globeRef.current.controls().enableZoom = false;
        }
    }, []);

    useEffect(() => {
        if (!containerRef.current){
            return;
        }
        const el = containerRef.current;

        const updateSize = ()=>{
            const width = Math.floor(el.clientWidth);
            setSize({width});
        }
        updateSize();

        const ro = new ResizeObserver(() =>{
            updateSize();
        })
        ro.observe(el);

        return () => {
            ro.disconnect();
        };

    }, []);

    const customMaterial = useMemo(() => {
        return new THREE.MeshBasicMaterial({
            color: "#0a0a0a",
            transparent: true,
            opacity: 1,
        });
    }, []);

    return (
        <div ref={containerRef} className="overflow-hidden hidden lg:w-1/2 h-screen lg:flex justify-center items-center cursor-grab relative" >
            <Globe
                ref={globeRef}
                   backgroundColor="rgba(255, 255, 255, 0)"
                   globeMaterial={customMaterial}
                   polygonsData={Array.isArray(globe?.features) ? globe.features : []}
                   polygonAltitude={0.03}
                   polygonCapColor={() => "rgba(255, 255, 255, 0.2)"}
                   polygonSideColor={() => "rgba(255, 255, 255, 0.02)"}
                   polygonStrokeColor={() => "rgba(255, 255, 255, 0.6)"}
                   animateIn={true}
            />
        </div>
    )
}