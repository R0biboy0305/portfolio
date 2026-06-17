export default function Formation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">

            {/* Formation */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <p className="text-white font-semibold text-sm tracking-wide">Formation</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="border-l-2 border-indigo-500/30 pl-4">
                        <p className="font-semibold text-sm text-white">BUT MMI</p>
                        <p className="text-white/50 text-xs mt-1">Développement de dispositifs interactifs</p>
                        <p className="text-indigo-400/70 text-xs italic mt-1">IUT de Haguenau · 2023 — 2026 (en cours)</p>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4">
                        <p className="font-semibold text-sm text-white">BAC Général</p>
                        <p className="text-white/50 text-xs mt-1">Mathématiques, SES</p>
                        <p className="text-white/30 text-xs italic mt-1">Lycée Docteur Koeberlé, Sélestat · 2021 — 2022</p>
                    </div>
                </div>
            </div>

            {/* Langues */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <p className="text-white font-semibold text-sm tracking-wide">Langues</p>
                </div>
                <div className="flex flex-col gap-3">
                    {[
                        { lang: "Français", level: "Langue maternelle", pct: 100 },
                        { lang: "Anglais",  level: "Niveau B2",         pct: 70  },
                    ].map(({ lang, level, pct }) => (
                        <div key={lang} className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                                <span className="text-white/80 font-medium">{lang}</span>
                                <span className="text-white/40">{level}</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Qualités */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <p className="text-white font-semibold text-sm tracking-wide">Qualités</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Curieux", "Enthousiaste", "Travail d'équipe", "Autonome", "Rigoureux", "Organisé"].map((q) => (
                        <span
                            key={q}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-indigo-500/30 hover:text-white transition-all duration-200"
                        >
                            {q}
                        </span>
                    ))}
                </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <p className="text-white font-semibold text-sm tracking-wide">Centres d&apos;intérêt</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Snowboard", "Football", "VTT", "Paddle", "Séries & Films", "Musique", "Jeux vidéo", "Nouvelles technologies"].map((i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-indigo-500/30 hover:text-white transition-all duration-200"
                        >
                            {i}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}
