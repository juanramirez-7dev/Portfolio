import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StackSection } from "./components/StackSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <StackSection />

        <ProjectsSection />

        <EducationSection />

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
