export default function Formation(){

    return(
        <div className="flex gap-2 text-white w-5xl mx-auto">
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-3xl hover:transition hover:duration-250 duration-250 hover:bg-white/20 hover:cursor-default">
                    <p className="font-bold text-xl">Formation :</p>
                    <div className="font-light ml-8 flex flex-col gap-2">
                        <ul className="space-y-2">
                            <li className="font-bold">2023 - 2026 (en cours) BUT MMI</li>
                            <li className="ml-4">Développement de dispositifs interactifs</li>
                            <li className="italic ml-4">IUT de Haguenau</li>
                        </ul>
                        <ul className="space-y-1">
                            <li className="font-bold">2021 - 2022  BAC Général :</li>
                            <li className="ml-4">Mathématiques, SES</li>
                            <li className="italic ml-4">Lycée Docteur Koeberlé, Sélestat</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-white/10 p-6 rounded-2xl h-full justify-center backdrop-blur-3xl hover:transition hover:duration-250 duration-250 hover:bg-white/20 hover:cursor-default">
                    <p className="font-bold text-xl">Langues : </p>
                    <ul className="font-light ml-8 space-y-2">
                        <li>Français : Langue maternelle</li>
                        <li>Anglais : Niveau B2</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-3xl hover:transition hover:duration-250 duration-250 hover:bg-white/20 hover:cursor-default">
                    <p className="font-bold text-xl">Qualitées :</p>
                    <ul className="ml-8 space-y-2 font-light">
                        <li>Curieux et enthousiaste</li>
                        <li>Travail d'équipe</li>
                        <li>Autonome et rigoureux</li>
                        <li>Gestion du temps et organisé</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 bg-white/10 p-6 rounded-2xl backdrop-blur-3xl hover:transition hover:duration-250 duration-250 hover:bg-white/20 hover:cursor-default">
                    <p className="font-bold text-xl">Centres d'interets :</p>
                    <ul className="font-light ml-8 space-y-2">
                        <li>Snowboard, Football, VTT, Padle</li>
                        <li>Séries, films, musique</li>
                        <li>Jeux vidéo</li>
                        <li>Apprentissage de nouvelles technologies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}