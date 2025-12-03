import { FileText, Building2 } from "lucide-react";

const POPHeader = () => {
  return (
    <header className="gradient-hero text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Building2 className="w-4 h-4" />
            <span className="font-body text-sm tracking-wide">
              Coordenadoria Regional de Educação - GAD
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <FileText className="w-10 h-10 md:w-12 md:h-12 opacity-80" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">
              POP
            </h1>
          </div>

          <p className="font-body text-lg md:text-xl opacity-90 mb-4">
            Procedimento Operacional Padrão
          </p>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium italic">
            Baixa de Bens Patrimoniais
          </h2>

          <p className="font-body text-sm opacity-70 mt-8">
            Controle de Inventário e Gestão Patrimonial • Novembro 2024
          </p>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80V40C240 70 480 20 720 40C960 60 1200 10 1440 40V80H0Z"
            fill="hsl(220, 20%, 97%)"
          />
        </svg>
      </div>
    </header>
  );
};

export default POPHeader;
