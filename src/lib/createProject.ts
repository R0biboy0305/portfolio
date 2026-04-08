"use server";
import {prisma} from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export default async function CreateProject(formData: FormData) {

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const preview = formData.get("preview") as string;
    const bilan = formData.get("bilan") as string;
    const objectif = formData.get("objectif") as string;
    const imageArray = formData.getAll("ProjectImages") as  File[];
    const published = formData.get("published") === "on";

    const techString = formData.get("technologies") as string;
    const functionString = formData.get("functions") as string;

    const technologies = techString ? JSON.parse(techString) : [];
    const functions = functionString ? JSON.parse(functionString) : [];

    const prismaImage = [];

    for (const file of imageArray){

        if(file.size === 0){
            continue;
        }

        const fileName = `${file.name.replaceAll(" ", "_")}`
        const filePath = path.join(process.cwd(), "public/assets/images", fileName)

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        await writeFile(filePath, buffer);

        prismaImage.push({
            url: `assets/images/${fileName}`
        });
    }

    const createProject = await prisma.post.create({
        data: {
            description,
            preview,
            published,
            title,
            bilan,
            objectif,
            images: {
                createMany: {
                    data: prismaImage
                }
            },
            technologies: {
                createMany: {
                    data: technologies
                }
            },
            functions: {
                createMany: {
                    data: functions
                }
            }
        }
    })
    console.log(CreateProject);
}