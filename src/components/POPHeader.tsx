import { FileText, Building2, FileCheck, Calendar, ChevronDown, Mouse } from "lucide-react";

const POPHeader = () => {
  const quickCards = [
    { icon: Building2, label: "GAD", sublabel: "Gerência de Administração" },
    { icon: FileCheck, label: "POP", sublabel: "Baixa de Bens" },
    { icon: FileText, label: "SEI!RIO", sublabel: "Sistema Eletrônico" },
    { icon: Calendar, label: "V. 1.0", sublabel: "Nov/2024" },
  ];

  const scrollToContent = () => {
    const element = document.getElementById("apresentacao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-background to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

      {/* Top bar */}
      <div className="relative z-10 border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-sm font-semibold tracking-widest text-primary uppercase">
                4ª Coordenadoria Regional de Educação
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
              <span className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Procedimento Operacional Padrão
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <span className="text-foreground">Baixa de Bens</span>
              <br />
              <span className="gradient-text">Patrimoniais</span>
              <span className="text-primary ml-2">no SEI!RIO</span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Guia operacional para diretores(as) e gestores(as) escolares na instrução do processo de baixa de bens inservíveis/irrecuperáveis diretamente no <span className="text-primary font-semibold">SEI!RIO</span>.
            </p>

            {/* Quick Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
              {quickCards.map((card) => (
                <div
                  key={card.label}
                  className="glass-card-hover p-4 rounded-xl text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-display text-sm font-bold text-foreground">{card.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{card.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8">
        <button
          onClick={scrollToContent}
          className="mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
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
