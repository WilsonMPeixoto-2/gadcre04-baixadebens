import { useState, useEffect } from "react";
import POPHeader from "@/components/POPHeader";
import Apresentacao from "@/components/Apresentacao";
import BaseLegal from "@/components/BaseLegal";
import PassoAPasso from "@/components/PassoAPasso";
import OficioSolicitacao from "@/components/OficioSolicitacao";
import LaudoFotografico from "@/components/LaudoFotografico";
import DocumentosExternos from "@/components/DocumentosExternos";
import DocumentoBaixa from "@/components/DocumentoBaixa";
import Checklist from "@/components/Checklist";
import Contatos from "@/components/Contatos";
import ObservacoesFinais from "@/components/ObservacoesFinais";
import { Sidebar, BottomBar, MobileNav } from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Initialize theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";
    
    setIsDarkMode(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(progress);

      // Active section detection
      const sections = ["apresentacao", "abertura", "documentos", "checklist", "contatos"];
      const sectionElements = sections.map(s => document.getElementById(s));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      if (scrollTop < 400) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileNavOpen(false);
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
      />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onToggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="lg:pl-16 pb-20">
        <POPHeader isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <Apresentacao />
        <BaseLegal />
        <PassoAPasso />
        <OficioSolicitacao />
        <LaudoFotografico />
        <DocumentosExternos />
        <DocumentoBaixa />
        <Checklist />
        <ObservacoesFinais />
        <Contatos />
      </main>

      {/* Bottom Bar */}
      <BottomBar 
        readingProgress={readingProgress}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
};

export default Index;
