import React from "react";
import IconTech from "@/app/components/Icon/Icon";

type IconItem = { nameKey: string; label: string };
type Category = { name: string; icons: IconItem[] };

const techStack: Category[] = [
    {
        name: "Frameworks & Bibliothèques",
        icons: [
            { nameKey: "react",    label: "React" },
            { nameKey: "flutter",  label: "Flutter" },
            { nameKey: "Laravel",  label: "Laravel" },
            { nameKey: "Next",     label: "Next.js" },
            { nameKey: "Tailwind", label: "Tailwind" },
            { nameKey: "Vue",      label: "Vue" },
            { nameKey: "Nuxt",     label: "Nuxt" },
            { nameKey: "Symfony",  label: "Symfony" },
        ],
    },
    {
        name: "Langages",
        icons: [
            { nameKey: "Dart",       label: "Dart" },
            { nameKey: "Html",       label: "HTML 5" },
            { nameKey: "Css",        label: "CSS 3" },
            { nameKey: "Javascript", label: "JavaScript" },
            { nameKey: "Typescript", label: "TypeScript" },
            { nameKey: "Mysql",      label: "MySQL" },
            { nameKey: "Php",        label: "PHP" },
        ],
    },
];

const techTools: Category[] = [
    {
        name: "Outils & Environnements",
        icons: [
            { nameKey: "Git",      label: "Git" },
            { nameKey: "Firebase", label: "Firebase" },
            { nameKey: "Docker",   label: "Docker" },
            { nameKey: "Claude",   label: "Claude" },
        ],
    },
];

function CategoryCard({ category }: { category: Category }) {
    return (
        <div className="bg-black/[0.07] dark:bg-white/[0.04] backdrop-blur-sm border border-black/15 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-black/[0.11] dark:hover:bg-white/[0.07] transition-all duration-300">
            <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <p className="text-gray-900 dark:text-white font-semibold text-sm tracking-wide">{category.name}</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {category.icons.map((icon) => (
                    <div
                        key={icon.nameKey}
                        className="flex flex-col items-center gap-2 group cursor-default"
                    >
                        <div className="p-2.5 rounded-xl bg-black/[0.08] dark:bg-white/[0.08] border border-black/15 dark:border-white/10 group-hover:border-indigo-500/40 group-hover:bg-black/[0.13] dark:group-hover:bg-white/[0.13] transition-all duration-200 text-gray-800 dark:text-white">
                            <IconTech nameKey={icon.nameKey} size={32} />
                        </div>
                        <span className="text-[10px] text-gray-600 dark:text-white/55 group-hover:text-gray-900 dark:group-hover:text-white/80 transition-colors text-center leading-tight">
                            {icon.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techStack.map((cat) => (
                    <CategoryCard key={cat.name} category={cat} />
                ))}
            </div>
                {techTools.map((cat) => (
                    <CategoryCard key={cat.name} category={cat} />
                ))}
        </div>
    );
}
