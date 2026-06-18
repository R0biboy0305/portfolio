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
            {/* border-black/20 = trait de timeline visible en light */}
            <div className="relative pl-6 border-l border-black/20 dark:border-white/15">
                {parcoursData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative pb-8 ${index === parcoursData.length - 1 ? "pb-0" : ""}`}
                    >
                        <div
                            className={`absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-colors ${
                                item.highlight
                                    ? "bg-indigo-500 border-indigo-400/50 shadow-sm shadow-indigo-500/50"
                                    : "bg-gray-400 dark:bg-white/30 border-black/20 dark:border-white/15"
                            }`}
                        />

                        <div className="flex flex-col gap-2 ml-4">
                            {/* date : gray-600 = ~6.6:1 | white/60 = ~5.1:1 */}
                            <span className={`text-xs font-medium ${
                                item.highlight
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-gray-600 dark:text-white/60"
                            }`}>
                                {item.date}
                            </span>
                            {/* titre : gray-800 = ~11:1 | white/85 = ~7:1 */}
                            <h4 className={`font-semibold text-sm ${
                                item.highlight
                                    ? "text-gray-900 dark:text-white"
                                    : "text-gray-800 dark:text-white/85"
                            }`}>
                                {item.title}
                            </h4>
                            {/* description : gray-700 = ~9.5:1 | white/70 = ~6:1 */}
                            <p className="text-gray-700 dark:text-white/70 text-xs leading-relaxed">{item.description}</p>
                            {/* localisation : gray-600 = ~6.6:1 | white/55 = ~4.6:1 */}
                            <p className={`text-xs italic ${
                                item.highlight
                                    ? "text-indigo-600/70 dark:text-indigo-400/60"
                                    : "text-gray-600 dark:text-white/55"
                            }`}>
                                {item.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
