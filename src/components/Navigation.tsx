import { useState, useEffect } from "react";
import { 
  Users, Folder, FileCheck, ChevronDown, Menu, X, 
  Sun, Moon, Printer, Download, FileText, Phone
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const sections = [
  { id: "apresentacao", label: "Apresentação", icon: Users },
  { id: "abertura", label: "Abertura do Processo", icon: Folder },
  { id: "documentos", label: "Documentos", icon: FileCheck },
  { id: "checklist", label: "Checklist", icon: FileText },
  { id: "contatos", label: "Contatos", icon: Phone },
];

export const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside 
      className="hidden lg:flex fixed left-0 top-0 bottom-16 z-40 flex-col bg-card/50 backdrop-blur-xl border-r border-border/30 transition-all duration-300"
      style={{ width: isExpanded ? '240px' : '64px' }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo area */}
      <div className="p-4 border-b border-border/30">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
              activeSection === section.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <section.icon className="w-5 h-5 shrink-0" />
            <span 
              className={`font-body text-sm font-medium whitespace-nowrap transition-all duration-300 overflow-hidden ${
                isExpanded ? "opacity-100 max-w-40" : "opacity-0 max-w-0"
              }`}
            >
              {section.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Menu label */}
      <div className="p-4 border-t border-border/30">
        <span className={`font-body text-xs text-muted-foreground uppercase tracking-wider transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}>
          Menu
        </span>
      </div>
    </aside>
  );
};

interface BottomBarProps {
  readingProgress: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const BottomBar = ({ readingProgress, isDarkMode, onToggleTheme }: BottomBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border/30">
      {/* Progress bar */}
      <div className="h-1 bg-border/30">
        <div 
          className="h-full bg-gradient-to-r from-primary to-cyan-glow transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 lg:pl-20">
        <div className="flex items-center justify-between h-14">
          {/* Document info */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-body text-xs text-muted-foreground hidden sm:inline">
              POP - Baixa de Bens Patrimoniais
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-body text-xs text-muted-foreground">
              {Math.round(readingProgress)}% lido
            </span>
            
            <div className="h-4 w-px bg-border/50 hidden sm:block" />
            
            <button 
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              title={isDarkMode ? "Modo claro" : "Modo escuro"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span className="font-body text-xs hidden sm:inline">Imprimir</span>
            </button>

            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="font-body text-xs hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileNav = ({ isOpen, onToggle, activeSection, onNavigate }: MobileNavProps) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Mobile menu panel */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 pt-20 pb-24">
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-body text-base font-medium">{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};
