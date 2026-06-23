import HeroSection from "@/app/components/Sections/HeroSection";
import ProjectsSection from "@/app/components/Sections/ProjectsSection";
import AboutSection from "@/app/components/Sections/AboutSection";
import ContactSection from "@/app/components/Sections/ContactSection";

export default function Home() {
    return (
        <>
            <section id="hero">
                <HeroSection />
            </section>
            <section id="projets" className="scroll-mt-4">
                <ProjectsSection />
            </section>
            <section id="about" className="scroll-mt-4">
                <AboutSection />
            </section>
            <section id="contact" className="scroll-mt-4">
                <ContactSection />
            </section>
        </>
    );
}
