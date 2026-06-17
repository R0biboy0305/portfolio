import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
    return (
        <>
            <section id="hero">
                <HeroSection />
            </section>
            <section id="projets" className="scroll-mt-32">
                <ProjectsSection />
            </section>
            <section id="about" className="scroll-mt-32">
                <AboutSection />
            </section>
        </>
    );
}
