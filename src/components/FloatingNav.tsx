import { useState, useEffect } from "react";
import { FileText, Users, Folder, FileCheck, ChevronUp, Menu, X } from "lucide-react";

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const sections = [
    { id: "apresentacao", label: "Apresentação", icon: Users },
    { id: "abertura", label: "Abertura do Processo", icon: Folder },
    { id: "documentos", label: "Documentos", icon: FileCheck },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Reading progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(progress);

      // Back to top visibility
      setShowBackToTop(scrollTop > 400);

      // Active section detection
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.findIndex((el, index) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const nextEl = sectionElements[index + 1];
        if (nextEl) {
          const nextRect = nextEl.getBoundingClientRect();
          return rect.top <= 150 && nextRect.top > 150;
        }
        return rect.top <= 150;
      });
      
      if (currentSection !== -1) {
        setActiveSection(sections[currentSection].id);
      } else if (scrollTop < 200) {
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
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Navigation Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-elevated flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
          aria-label="Menu de navegação"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Panel */}
      <div 
        className={`fixed bottom-24 right-6 z-40 bg-card rounded-xl shadow-elevated border border-border overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-2">
          <div className="px-3 py-2 mb-1">
            <p className="font-display text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Navegação
            </p>
          </div>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <section.icon className="w-4 h-4 shrink-0" />
              <span className="font-body text-sm font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
