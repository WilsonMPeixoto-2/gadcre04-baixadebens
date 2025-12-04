import { FileText, Calendar } from "lucide-react";

const POPHeader = () => {
  return (
    <header className="gradient-hero text-primary-foreground py-12 md:py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 pb-6 border-b border-primary-foreground/20">
          <div className="mb-4 md:mb-0">
            <p className="font-display text-xl md:text-2xl font-semibold tracking-wide">
              4ª COORDENADORIA REGIONAL DE EDUCAÇÃO
            </p>
            <p className="font-body text-sm opacity-80 mt-1">
              Gerência de Administração (GAD)
            </p>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span className="font-body text-sm">Elaboração: Nov/2024</span>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl opacity-0 animate-fade-up">
          {/* Badge */}
          <div className="inline-block bg-primary-foreground/15 backdrop-blur-sm px-4 py-1.5 rounded mb-6">
            <span className="font-body text-xs font-semibold tracking-widest uppercase">
              Procedimento Operacional Padrão
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="inline-block animate-fade-in">BAIXA DE BENS</span>
            <br />
            <span className="inline-block animate-fade-in text-primary-foreground/90" style={{ animationDelay: '150ms' }}>PATRIMONIAIS</span>
          </h1>

          <p className="font-body text-base md:text-lg opacity-90 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '300ms' }}>
            Guia operacional para diretores(as) e gestores(as) escolares na instrução do processo de baixa de bens inservíveis/irrecuperáveis no SEI!RIO.
          </p>
        </div>
      </div>
    </header>
  );
};

export default POPHeader;
