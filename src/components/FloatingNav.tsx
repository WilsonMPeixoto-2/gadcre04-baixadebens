import { useState, useEffect } from "react";
import { Users, Folder, FileCheck, ChevronUp, Menu, X, Printer, Download } from "lucide-react";

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
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(progress);
      setShowBackToTop(scrollTop > 400);

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
          className="h-full bg-gradient-to-r from-primary to-cyan-glow transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
              activeSection === section.id
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <section.icon className="w-4 h-4 shrink-0" />
            <span className={`font-body text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              activeSection === section.id ? "opacity-100 max-w-40" : "opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-40"
            }`}>
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Floating Navigation */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary/40 ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 text-primary" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-glow flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="Menu de navegação"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`lg:hidden fixed bottom-24 right-6 z-40 glass-card rounded-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-2">
          <div className="px-3 py-2 mb-1">
            <p className="font-display text-xs font-bold text-muted-foreground uppercase tracking-wider">
              Navegação
            </p>
          </div>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-secondary text-foreground"
              }`}
            >
              <section.icon className="w-4 h-4 shrink-0" />
              <span className="font-body text-sm font-medium">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 glass-card border-t border-border/50 py-3 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-body text-xs text-muted-foreground hidden sm:inline">
              POP - Baixa de Bens Patrimoniais
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-muted-foreground">
              {Math.round(readingProgress)}% lido
            </span>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="font-body text-xs hidden sm:inline">Imprimir</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
