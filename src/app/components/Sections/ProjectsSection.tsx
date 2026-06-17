import ProjetClient from "@/app/Projets/ProjectClient";
import projects from "@/app/data/projects";

export default function ProjectsSection() {
    const published = projects.filter((p) => p.published);
    return <ProjetClient initialProjects={published} />;
}
