/** Grille formation, langues, qualités et centres d'intérêt. */
export default function Formation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-900 dark:text-white">

            {/* Formation */}
            <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <p className="text-gray-900 dark:text-white font-semibold text-sm tracking-wide">Formation</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="border-l-2 border-indigo-500/40 dark:border-indigo-500/30 pl-4">
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">BUT MMI</p>
                        {/* gray-700 = ~9.5:1 | white/70 = ~6:1 */}
                        <p className="text-gray-700 dark:text-white/70 text-xs mt-1">Développement de dispositifs interactifs</p>
                        <p className="text-indigo-600/80 dark:text-indigo-400/70 text-xs italic mt-1">IUT de Haguenau · 2023 — 2026 (en cours)</p>
                    </div>
                    <div className="border-l-2 border-black/20 dark:border-white/15 pl-4">
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">BAC Général</p>
                        <p className="text-gray-700 dark:text-white/70 text-xs mt-1">Mathématiques, SES</p>
                        {/* gray-600 = ~6.6:1 | white/55 = ~4.6:1 */}
                        <p className="text-gray-600 dark:text-white/55 text-xs italic mt-1">Lycée Docteur Koeberlé, Sélestat · 2021 — 2022</p>
                    </div>
                </div>
            </div>

            {/* Langues */}
            <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <p className="text-gray-900 dark:text-white font-semibold text-sm tracking-wide">Langues</p>
                </div>
                <div className="flex flex-col gap-3">
                    {[
                        { lang: "Français", level: "Langue maternelle", pct: 100 },
                        { lang: "Anglais",  level: "Niveau B2",         pct: 70  },
                    ].map(({ lang, level, pct }) => (
                        <div key={lang} className="flex flex-col gap-1.5">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-800 dark:text-white/85 font-medium">{lang}</span>
                                <span className="text-gray-600 dark:text-white/55">{level}</span>
                            </div>
                            {/* progress track : black/15 visible en light, white/15 en dark */}
                            <div className="h-1 bg-black/15 dark:bg-white/15 rounded-full overflow-hidden">
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
            <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <p className="text-gray-900 dark:text-white font-semibold text-sm tracking-wide">Qualités</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Curieux", "Enthousiaste", "Travail d'équipe", "Autonome", "Rigoureux", "Organisé"].map((q) => (
                        <span
                            key={q}
                            className="px-3 py-1 text-xs rounded-full bg-black/[0.06] dark:bg-white/5 border border-black/15 dark:border-white/10 text-gray-700 dark:text-white/70 hover:border-indigo-500/40 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        >
                            {q}
                        </span>
                    ))}
                </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center gap-2 mb-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <p className="text-gray-900 dark:text-white font-semibold text-sm tracking-wide">Centres d&apos;intérêt</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["Snowboard", "Football", "VTT", "Paddle", "Séries & Films", "Musique", "Jeux vidéo", "Nouvelles technologies"].map((i) => (
                        <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-black/[0.06] dark:bg-white/5 border border-black/15 dark:border-white/10 text-gray-700 dark:text-white/70 hover:border-indigo-500/40 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                        >
                            {i}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}
