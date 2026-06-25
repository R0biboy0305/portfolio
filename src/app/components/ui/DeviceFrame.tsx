/**
 * Cadre type écran de laptop pour présenter des captures de projet en contexte.
 * @param children — Contenu à afficher à l'intérieur du cadre (généralement une image).
 */
export default function DeviceFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full rounded-t-xl border-t border-x border-black/20 dark:border-white/15 bg-black/[0.08] dark:bg-white/[0.06] px-3 pt-2.5 pb-0">
                <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    <div className="flex-1 mx-8">
                        <div className="h-5 rounded-md bg-black/[0.06] dark:bg-white/[0.06] border border-black/10 dark:border-white/10" />
                    </div>
                </div>
                <div className="rounded-t-lg overflow-hidden">
                    {children}
                </div>
            </div>
            <div className="w-[104%] h-3 rounded-b-lg bg-gradient-to-b from-black/10 dark:from-white/10 to-transparent border-x border-b border-black/15 dark:border-white/10" />
        </div>
    );
}
