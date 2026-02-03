import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

// Dynamic imports for heavy below-the-fold sections
const About = dynamic(() => import("@/components/About"));
const Education = dynamic(() => import("@/components/Education"));
const Experience = dynamic(() => import("@/components/Experience"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Contact = dynamic(() => import("@/components/Contact"));

import SectionWrapper from "@/components/ui/SectionWrapper";
import ParallaxSection from "@/components/ui/ParallaxSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-obsidian selection:bg-gold selection:text-obsidian">

        {/* Hero Section */}
        <section id="hero" className="h-screen w-full relative overflow-hidden">
          <Hero />
        </section>

        {/* About Section */}
        <ParallaxSection id="about" backgroundImage="/backgrounds/about.png">
          <SectionWrapper>
            <About />
          </SectionWrapper>
        </ParallaxSection>

        {/* Education Section */}
        <ParallaxSection id="education" backgroundImage="/backgrounds/education.png">
          <SectionWrapper>
            <Education />
          </SectionWrapper>
        </ParallaxSection>

        {/* Skills Section */}
        <ParallaxSection id="skills" backgroundImage="/backgrounds/skills.png">
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
        </ParallaxSection>

        {/* Experience Section */}
        <ParallaxSection id="experience" backgroundImage="/backgrounds/experience.png">
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
        </ParallaxSection>

        {/* Projects Section */}
        <ParallaxSection id="projects" backgroundImage="/backgrounds/projects_new.png">
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
        </ParallaxSection>

        {/* Certifications Section */}
        <ParallaxSection id="certifications" backgroundImage="/backgrounds/certifications.png">
          <SectionWrapper>
            <Certifications />
          </SectionWrapper>
        </ParallaxSection>

        {/* Contact Section */}
        <ParallaxSection id="contact" backgroundImage="/backgrounds/contact.png">
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
        </ParallaxSection>

      </main>
      <Footer />
    </>
  );
}
