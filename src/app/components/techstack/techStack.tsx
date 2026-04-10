import React from "react";
import IconTech from "@/app/components/icon/Icon";

type IconItem = {
    nameKey: string,
    label:string
}

type Category = {
    name: string;
    icons: IconItem[];
    colorClass: string;
}
export default function TechStack() {


    const techStack: Category[] = [
        {
            name: "Frameworks et bibiliothèques",
            colorClass: "text-white",
            icons: [
                {nameKey: "react", label: "React"},
                {nameKey: "flutter", label: "Flutter"},
                {nameKey: "Laravel", label: "Laravel"},
                {nameKey: "Next", label: "Next"},
                {nameKey: "Tailwind", label: "Tailwind"},
                {nameKey: "Vue", label: "Vue"},
                {nameKey: "Nuxt", label: "Nuxt"},
                {nameKey: "Symfony", label: "Symfony"},
            ]
        },
        {
            name: "Langages de programation",
            colorClass: "text-white",
            icons: [
                {nameKey: "Dart", label: "Dart"},
                {nameKey: "Html", label: "Html 5"},
                {nameKey: "Css", label: "Css 3"},
                {nameKey: "Javascript", label: "Javascript"},
                {nameKey: "Typescript", label: "Typescript"},
                {nameKey: "Mysql", label: "Mysql"},
                {nameKey: "Php", label: "Php"},
            ]
        }
    ];

    const techTools: Category[] = [
        {
            name: "Outils et environnements",
            colorClass: "text-white",
            icons: [
                {nameKey: "Git", label: "Git"},
                {nameKey: "Firebase", label: "Firebase"},
                {nameKey: "Docker", label: "Docker"},
            ]
        }
    ]

    return (
        <div className="flex flex-col gap-2 w-5xl m-auto">
            <div className="flex gap-2">
                {techStack.map((category, index) => (
                    <div
                        className="flex flex-col gap-2 backdrop-blur-3xl rounded-2xl bg-white/10 p-5 w-6xl hover:cursor-default hover:transition hover:duration-250 duration-250 hover:bg-white/20"
                        key={index}>
                        <p className="font-semibold text-white text-xl">{category.name}</p>
                        <div className="grid grid-cols-4 gap-8 items-center justify-center p-4">
                            {category.icons.map((icon, idx) => (
                                <div key={idx} className={`flex flex-col items-center ${category.colorClass}`}>
                                    <IconTech nameKey={icon.nameKey} size={48}/>
                                    <span>{icon.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="p-4 backdrop-blur-3xl rounded-2xl bg-white/10 hover:transition hover:duration-250 duration-250 hover:bg-white/20 hover:cursor-default">
                {techTools.map((category, index) => (
                    <div className="w-full flex flex-col gap-2" key={index}>
                        <p className="font-bold text-xl text-white">{category.name}</p>
                        <div className="flex flex-1 items-center gap-16 ml-4">
                            {category.icons.map((icon, idx) => (
                                <div key={idx} className={`flex flex-col items-center ${category.colorClass}`}>
                                    <IconTech nameKey={icon.nameKey} size={48}/>
                                    <span>{icon.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}