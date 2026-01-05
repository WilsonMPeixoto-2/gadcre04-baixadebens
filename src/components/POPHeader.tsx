import { FileText, ChevronDown, Sun, Moon, Printer, Download } from "lucide-react";

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
    <header className="relative bg-card border-b border-border">
      {/* Action Buttons - Top Bar */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Left: Logo and title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="hidden sm:block">
                <p className="font-display text-sm font-bold text-foreground">
                  POP – Baixa de Bens
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  4ª CRE | GAD
                </p>
              </div>
            </div>

            {/* Right: Action buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border text-foreground hover:bg-muted transition-colors text-sm font-medium"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span className="hidden sm:inline">Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span className="hidden sm:inline">Modo Escuro</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-colors text-sm font-medium"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] dark:from-[#0f1729] dark:to-[#1a2744]">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium">
                <FileText className="w-4 h-4" />
                Procedimento Operacional Padrão
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                GAD / 4ª CRE
              </span>
            </div>
            
            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Baixa de Bens Patrimoniais
            </h1>
            
            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Guia completo para registro e tramitação de processos de baixa de bens no SEI!RIO
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm">
              <span>Secretaria Municipal de Educação</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span>4ª Coordenadoria Regional de Educação</span>
              <span className="w-1 h-1 rounded-full bg-white/40"></span>
              <span>Janeiro 2025</span>
            </div>

            {/* Scroll indicator */}
            <button
              onClick={scrollToContent}
              className="mt-10 flex flex-col items-center gap-2 mx-auto text-white/50 hover:text-white/80 transition-colors"
            >
              <span className="text-sm">Role para continuar</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default POPHeader;
