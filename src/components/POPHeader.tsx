import { FileText, ChevronDown, Mouse, Sun, Moon, Printer, Download, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

interface POPHeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const POPHeader = ({ isDarkMode, onToggleTheme }: POPHeaderProps) => {
  const scrollToContent = () => {
    const element = document.getElementById("apresentacao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "gradient-hero"
            : "bg-gradient-to-b from-background to-secondary"
        }`}
      />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

      {/* Top bar with action buttons */}
      <div className="relative z-10 border-b border-border bg-card dark:bg-card/50 dark:backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left: Logo and title */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-foreground">
                  Procedimento Operacional Padrão
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  4ª Coordenadoria Regional de Educação | GAD
                </p>
              </div>
            </div>
            
            {/* Right: Action buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onToggleTheme}
                className="header-action-btn"
                title={isDarkMode ? "Modo claro" : "Modo escuro"}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span className="hidden sm:inline">{isDarkMode ? "Claro" : "Escuro"}</span>
              </button>
              
              <button
                onClick={() => window.print()}
                className="header-action-btn"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>
              
              <button className="header-action-btn-primary">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Section number badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-up shadow-glow">
              <FileText className="w-10 h-10 text-primary" />
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 opacity-0 animate-fade-up text-foreground dark:text-white" style={{ animationDelay: '100ms' }}>
              Baixa de Bens Patrimoniais
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground dark:text-white/80 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Acesso ao SEI!RIO, criação do processo, numeração e identificação
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8">
        <button
          onClick={scrollToContent}
          className="mx-auto flex flex-col items-center gap-2 text-muted-foreground dark:text-white/60 hover:text-primary transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Mouse className="w-4 h-4" />
            <span className="font-body text-sm">Role para continuar</span>
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </header>
  );
};

export default POPHeader;
