import { AlertCircle, Lightbulb, Shield, Search, HelpCircle } from "lucide-react";

const observacoes = [
  {
    icon: Lightbulb,
    texto: "Manter o inventário patrimonial atualizado é obrigação da unidade e permite identificar rapidamente bens em desuso."
  },
  {
    icon: Shield,
    texto: "Os responsáveis pelo uso dos bens devem zelar pela sua conservação e comunicar irregularidades."
  },
  {
    icon: Search,
    texto: "A baixa de bens só deve ser solicitada quando o bem for verdadeiramente inservível. Antes disso, verifique a possibilidade de transferência para outra escola ou órgão."
  },
  {
    icon: AlertCircle,
    texto: "A destinação de bens obsoletos deve priorizar a doação a entidades de interesse social; nos casos de alienação onerosa, deve ser observada a legislação de licitações."
  }
];

const ObservacoesFinais = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
              10
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Observações Finais
            </h2>
          </div>

          {/* Grid de observações */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {observacoes.map((obs, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <obs.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {obs.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Alerta de extravio */}
          <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-900 rounded-xl p-5 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-red-800 dark:text-red-300 mb-2">
                  Importante: Extravio ou Dano
                </h3>
                <p className="font-body text-sm text-red-700 dark:text-red-400">
                  Em caso de extravio ou dano, a unidade deve abrir imediatamente sindicância para apuração de responsabilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Nota final */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  Atenção
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Este POP é um documento de orientação. Em caso de dúvidas ou situações específicas não previstas, consulte a <span className="font-semibold text-foreground">GAD/4ª CRE</span> ou a <span className="font-semibold text-foreground">Controladoria Geral do Município</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservacoesFinais;
