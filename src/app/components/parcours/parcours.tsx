import React from "react";

export default function Parcours() {

    const parcoursData: { id: number; date: string, title: string; description: string; location: string; }[] = [
        {
            id: 1,
            date: "2024 - 2026",
            title: "Développeur back-end en alternance",
            description: "Maintenance et développement des sites du groupe, développement d’un CMS interne",
            location: "A2micile, Strasbourg"

        },
        {
            id: 2,
            date: "Juin 2023",
            title: "Guide touristique",
            description: "Accueil des clients, présentation du parc et de ses habitants, entretien du parc",
            location: "Montagne des Singes, Kintzheim"

        },
        {
            id: 3,
            date: "Décembre 2022 - Mai 2023, Juillet 2023",
            title: "Homme de chambre",
            description: "Entretien des communs et des chambres",
            location: "Le Verger des Châteaux, Dieffenthal"

        },
        {
            id: 4,
            date: "Novembre 2022",
            title: "Livreur de colis ",
            description: "Répartition des colis, organisation et livraison des colis",
            location: "La Poste, Selestat"
        },
        {
            id: 5,
            date: "2020 - 2021 - 2022",
            title: " Saisonnier",
            description: "Entretien du parc, des cages et des animaux, accueil et aide au parquage des clients durant l'été",
            location: "La Volerie des Aigles, Kintzheim"
        },
    ]

    return (
        <div className="w-5xl mx-auto bg-white/10 rounded-2xl py-15 px-10">
            <p className="font-bold text-xl text-white mb-8">Expériences professionnelles :</p>
            <div className="flex flex-row w-full overflow-x-scroll p-4 pb-10 scrollbar-design">
                {parcoursData.map((data, index) => (
                    <div key={data.id} className="shrink-0">
                        {index !== parcoursData.length && (
                            <div className="w-full h-[1px] bg-white relative flex items-center">
                                <div className="w-3 h-3 rounded-full bg-white absolute ml-4"></div>
                            </div>
                        )}
                        <div className="text-white max-w-sm ml-5 mt-4 flex flex-col gap-2 font-light">
                            <p className="font-semibold text-lg">{data.date}</p>
                            <p className="font-semibold">{data.title}</p>
                            <p>{data.description}</p>
                            <p className="italic">{data.location}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}