import { Scale, FileText, BookOpen, Gavel, Building2 } from "lucide-react";

const leis = [
  {
    icon: Scale,
    titulo: "Resolução CGM nº 1.642/2020",
    descricao: "Normas para registro, controle e movimentação de bens patrimoniais permanentes. Define baixa como exclusão do bem por alienação, obsolescência, imprestabilidade, desuso, extravio, dano ou insubsistência."
  },
  {
    icon: FileText,
    titulo: "NOR-PRO-505 – CGM",
    descricao: "Procedimentos de baixa por desuso, imprestabilidade ou obsolescência. Descreve o fluxo administrativo completo."
  },
  {
    icon: Gavel,
    titulo: "Lei Municipal nº 207/1980 (CAF)",
    descricao: "Código de Administração Financeira e seu regulamento (Decreto nº 3.221/1981)."
  },
  {
    icon: BookOpen,
    titulo: "Lei Federal nº 14.133/2021",
    descricao: "Nova Lei de Licitações (arts. 75 a 78, alienação de bens)."
  },
  {
    icon: Building2,
    titulo: "Resoluções CGM Complementares",
    descricao: "Resoluções nº 843/2008, 1.271/2017 e 1.697/2021 – Gestão do SISBENS e procedimentos complementares."
  }
];

const BaseLegal = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Base Legal e Normativa
            </h2>
          </div>

          {/* Grid de Leis */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leis.map((lei, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <lei.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground mb-2">
                      {lei.titulo}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      {lei.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseLegal;
