import { prisma } from "@/lib/prisma";
import ProjetClient from "@/app/Projets/ProjectClient";

export default async function Projet() {

    const projects = await prisma.post.findMany({
        where: {
            published: true,
        },
        include: {
            technologies: true,
            images: true
        }
    });

    return (
        <div>
            <ProjetClient initialProjects={projects} />
        </div>
    );
}