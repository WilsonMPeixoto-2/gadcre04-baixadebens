import { Camera, FileText, CheckCircle2, Info, AlertTriangle } from "lucide-react";

const LaudoFotografico = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                3
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  Laudo Técnico e Registro Fotográfico
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Documentos comprobatórios obrigatórios
                </p>
              </div>
            </div>
          </div>

          {/* Importância */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  3.1. Importância dos Documentos
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  De acordo com a <span className="font-semibold text-foreground">Resolução CGM 1.642/2020</span>, a baixa por obsolescência, imprestabilidade ou desuso somente pode ser efetivada após a elaboração de laudo conclusivo por comissão permanente de avaliação, com posterior decisão do ordenador da despesa.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-4 border border-border">
              <p className="font-body text-sm text-muted-foreground">
                O laudo deve identificar o estado do bem e justificar a baixa. <span className="font-semibold text-foreground">Fotos comprovam a condição do item e são indispensáveis para transparência.</span>
              </p>
            </div>
          </div>

          {/* Grid: Laudo e Fotos */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Produção do Laudo */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">
                  3.2. Produção do Laudo
                </h3>
              </div>
              
              <p className="font-body text-sm text-muted-foreground mb-4">
                A escola poderá solicitar à GAD a designação de comissão ou, quando houver comissão interna, elaborará o Laudo de Imprestabilidade/Obsolescência.
              </p>

              <div className="space-y-2">
                <p className="font-display text-sm font-bold text-foreground">O documento deve conter:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Identificação do bem (nº tombo, descrição, marca/modelo)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Data da vistoria</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Avaliação do estado com justificativa</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Conclusão recomendando baixa</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg">
                <p className="font-body text-xs text-amber-700 dark:text-amber-400">
                  O laudo deve ser assinado pela comissão avaliadora e digitalizado para inclusão no processo.
                </p>
              </div>
            </div>

            {/* Registro Fotográfico */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">
                  3.3. Registro Fotográfico
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Realizar fotografias claras dos bens, evidenciando o estado de conservação.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      Nomear cada arquivo de forma descritiva para facilitar a identificação no SEI!RIO.
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3 border border-border">
                      <p className="font-mono text-xs text-primary">
                        Ex: "Registro_fotográfico_Cadeira_01"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </div>
                  <p className="font-body text-sm text-muted-foreground">
                    Anexar as fotos como documentos externos individuais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaudoFotografico;
