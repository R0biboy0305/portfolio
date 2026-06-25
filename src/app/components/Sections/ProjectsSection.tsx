import ProjetClient from "@/app/Projets/ProjectClient";
import projects from "@/app/data/projects";

/** Section projets : filtre les projets publiés et délègue l'affichage à ProjetClient. */
export default function ProjectsSection() {
    const published = projects.filter((p) => p.published);
    return <ProjetClient initialProjects={published} />;
}
