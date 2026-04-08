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

    useEffect(() => {
        fetch("/assets/countries/label.json")
            .then((r) => r.json())
            .then((data) => setLabels(data))
            .catch((err) => console.error("Erreur de fetch :", err));

    }, []);


    return (
        <div ref={containerRef} className="overflow-hidden w-full h-screen flex justify-center items-center cursor-grab relative" >
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
                   labelsData={labels}
                   labelLat={(d: any) => d.lat}
                   labelLng={(d: any) => d.lng}
                   labelText={(d: any) => d.label || ""}
                   labelSize={2}
                   labelDotRadius={4}
                   labelAltitude={0.04}
                   labelDotOrientation={() => "top"}
                   labelColor={() => "#ffffff"}
                   labelResolution={3}
                    onLabelClick={(d: any) => d?.url && router.push(d.url)}

            />
        </div>
    )
}