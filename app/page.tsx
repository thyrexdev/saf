import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";
import ProjectsSection from "@/sections/ProjectsSection";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
