import React from "react";

const parcoursData = [
    {
        id: 1,
        date: "2024 — 2026",
        title: "Développeur back-end en alternance",
        description: "Maintenance et développement des sites du groupe, développement d'un CMS interne.",
        location: "A2micile — Strasbourg",
        highlight: true,
    },
    {
        id: 2,
        date: "Juin 2023",
        title: "Guide touristique",
        description: "Accueil des clients, présentation du parc et de ses habitants, entretien du parc.",
        location: "Montagne des Singes — Kintzheim",
        highlight: false,
    },
    {
        id: 3,
        date: "Déc. 2022 — Juil. 2023",
        title: "Homme de chambre",
        description: "Entretien des communs et des chambres.",
        location: "Le Verger des Châteaux — Dieffenthal",
        highlight: false,
    },
    {
        id: 4,
        date: "Novembre 2022",
        title: "Livreur de colis",
        description: "Répartition, organisation et livraison des colis.",
        location: "La Poste — Sélestat",
        highlight: false,
    },
    {
        id: 5,
        date: "2020 — 2022",
        title: "Saisonnier",
        description: "Entretien du parc, des cages et des animaux, accueil des clients durant l'été.",
        location: "La Volerie des Aigles — Kintzheim",
        highlight: false,
    },
];

export default function Parcours() {
    return (
        <div className="flex flex-col gap-0">
            <div className="relative pl-6 border-l border-white/10">
                {parcoursData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative pb-8 ${index === parcoursData.length - 1 ? "pb-0" : ""}`}
                    >
                        {/* Timeline dot */}
                        <div
                            className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-colors ${
                                item.highlight
                                    ? "bg-indigo-500 border-indigo-400/50 shadow-sm shadow-indigo-500/50"
                                    : "bg-white/20 border-white/10"
                            }`}
                        />

                        <div className="flex flex-col gap-2 ml-4">
                            <span
                                className={`text-xs font-medium ${
                                    item.highlight ? "text-indigo-400" : "text-white/40"
                                }`}
                            >
                                {item.date}
                            </span>
                            <h4
                                className={`font-semibold text-sm ${
                                    item.highlight ? "text-white" : "text-white/80"
                                }`}
                            >
                                {item.title}
                            </h4>
                            <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
                            <p className={`text-xs italic ${item.highlight ? "text-indigo-400/60" : "text-white/30"}`}>
                                {item.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
