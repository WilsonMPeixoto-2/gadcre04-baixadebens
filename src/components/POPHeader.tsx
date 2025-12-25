import { FileText, Calendar, Building2, FileCheck, Users, Folder } from "lucide-react";

const POPHeader = () => {
  const quickCards = [
    { icon: Building2, label: "GAD", sublabel: "Gerência de Administração" },
    { icon: FileCheck, label: "POP", sublabel: "Procedimento Operacional" },
    { icon: Users, label: "4ª CRE", sublabel: "Coord. Regional" },
    { icon: Calendar, label: "Nov/2024", sublabel: "Elaboração" },
  ];

  return (
    <header className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-background to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 pb-6 border-b border-border/50">
          <div className="mb-4 md:mb-0">
            <p className="font-display text-lg md:text-xl font-bold tracking-wide text-foreground">
              4ª COORDENADORIA REGIONAL DE EDUCAÇÃO
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Gerência de Administração (GAD)
            </p>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">Guia Atualizado</span>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-8">
            <FileText className="w-4 h-4 text-primary" />
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Procedimento Operacional Padrão
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="gradient-text">BAIXA DE BENS</span>
            <br />
            <span className="text-foreground">PATRIMONIAIS</span>
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Guia operacional para diretores(as) e gestores(as) escolares na instrução do processo de baixa de bens inservíveis/irrecuperáveis no <span className="text-primary font-semibold">SEI!RIO</span>.
          </p>

          {/* Quick Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            {quickCards.map((card, index) => (
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
    </header>
  );
};

export default POPHeader;
