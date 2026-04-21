import {prisma} from "@/lib/prisma";
import Image from "next/image";
import IconTech from "@/app/components/icon/Icon";
import React from "react";
import ImageSlider from "@/app/components/ImageSlider/ImageSlider";
import TechFuncSlider from "@/app/components/TechFuncSlider/TechFuncSlider";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import { notFound } from "next/navigation";

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

    if(!project){
        notFound();
    }

    return (
       <div className="text-white flex flex-col gap-20 max-w-6xl mx-auto relative">
           <div
               className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-300 -z-10 rounded-full bg-radial-[at_50%_50%] from-indigo-800/50 to-transparent to-70%">
           </div>
           <Link href={"/Projets"}
                 className="group flex gap-2 items-center px-4 py-2 bg-white/40 w-fit rounded-lg text-white font-light transition-all">
           <div
               className="w-0 overflow-hidden transition-all duration-200 group-hover:w-5 flex items-center justify-center">
               <ArrowLeft size={20} className="shrink-0"/>
           </div>
           <span>Retour</span>
       </Link>
           <h1 className="text-8xl font-bold italic text-center text-transparent [-webkit-text-stroke:2px_white]">{project.title}</h1>
           <div className="w-full h-[1px] bg-white"></div>
           <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto max-h-fit">
               <div className="justify-self-start">
                    <ImageSlider images={project.images.slice(0,2)}/>
               </div>
               <div className="space-y-4 justify-self-end">
                   <h2 className="font-bold text-6xl">Présentation</h2>
                   <p className="text-sm w-sm">{project.preview}</p>
               </div>
           </div>
           <div className="w-full h-[1px] bg-white"></div>
           <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
               <div className="space-y-4">
                   <h2 className="font-bold text-6xl">Objectifs</h2>
                   <p className="text-sm w-sm">{project.objectif}</p>
               </div>
               <div className="justify-self-end h-fit">
                   <ImageSlider images={project.images.slice(2)}/>
               </div>
           </div>
           <div className="w-full h-[1px] bg-white"></div>
           <TechFuncSlider technologies={project.technologies} functions={project.functions}/>
           <div className="w-full h-[1px] bg-white"></div>
           <div className="space-y-4">
               <h2 className="font-bold text-6xl">Bilan</h2>
               <p className="text-sm w-sm">{project.bilan}</p>
           </div>
           <div className="w-full h-[1px] bg-white"></div>
       </div>
    )
}