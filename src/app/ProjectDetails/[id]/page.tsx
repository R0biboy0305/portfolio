import {prisma} from "@/lib/prisma";
import Image from "next/image";
import IconTech from "@/app/components/icon/Icon";
import React from "react";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

export default async function ProjectDetails({params}: { params: { id: string } }) {

    const resolvedParams = await params;
    const projectId = resolvedParams.id;

    const project = await prisma.post.findUnique({
        where: {
            id: projectId
        },
        include: {
            technologies: true,
            functions: true,
            images: true
        }
    })

    return (
        <div className="max-w-7xl flex flex-col gap-2 justify-center mx-auto">
            <Link href={"/Projets"}
                  className="group flex gap-2 items-center px-4 py-2 bg-white/40 w-fit rounded-lg text-white font-light transition-all">
                <div
                    className="w-0 overflow-hidden transition-all duration-200 group-hover:w-5 flex items-center justify-center">
                    <ArrowLeft size={20} className="shrink-0"/>
                </div>
                <span>Retour</span>
            </Link>
            <div className="max-w-7xl bg-white/10 rounded-lg mx-auto p-8 text-white relative">

                <p className="font-bold text-3xl mb-4">Projet {project.title}</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            {project.images.map((image, index) => {
                                const isFullWidth = index >= 2;
                                return (
                                    <div
                                        key={index}
                                        className={isFullWidth ? "col-span-2" : "col-span-1"}>
                                        <Image
                                            src={`/${image.url}`}
                                            alt={project.title}
                                            width={1920}
                                            height={1080}
                                            className="w-full h-auto object-cover rounded-xl shadow-lg border border-white/10"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 h-[675px] bg-white/20 p-2 rounded-lg">
                        <div className="overflow-y-scroll scrollbar-design px-2">
                            <div>
                                <p className="font-bold text-lg mb-4">Présentation :</p>
                                <p className="text-sm">{project.preview}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-4">Contexte & objectif :</p>
                                <p className="text-sm">{project.objectif}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-4">Technologies & outils :</p>
                                <div className="flex flex-col gap-2">
                                    {project.technologies.map((technology, index) => (
                                        <div className="flex gap-2" key={index}>
                                            <div className="flex flex-col items-center min-w-20 justify-center">
                                                <IconTech nameKey={technology.icon} size={48}/>
                                                <p className="text-center">{technology.title}</p>
                                            </div>
                                            <p className="text-sm">{technology.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-4">Fonctionnalités principales :</p>
                                <div>
                                    {project.functions.map((functions, index) => (
                                        <div className="ml-4 mb-2" key={index}>
                                            <p className="font-bold text-base">{functions.title} :</p>
                                            <p className="ml-6 text-sm">{functions.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="font-bold text-lg mb-4">Bilan :</p>
                                <p className="text-sm">{project.bilan}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}