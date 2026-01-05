import { FileCheck, ArrowRight, CheckCircle2, Info, Send, Archive } from "lucide-react";

const DocumentoBaixa = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                5
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  Documento de Baixa e Encaminhamento
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Emissão do DB e fluxo de tramitação
                </p>
              </div>
            </div>
          </div>

          {/* Fluxo do Processo */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-3">
              <FileCheck className="w-5 h-5 text-primary" />
              Fluxo de Tramitação
            </h3>

            <div className="space-y-4">
              {/* Etapa 1 */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-1">
                    Recebimento pela GAD
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Após receber o processo com o ofício, laudos e fotos, a GAD encaminhará à Comissão Permanente de Avaliação para parecer conclusivo.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>

              {/* Etapa 2 */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-1">
                    Solicitação de Autorização
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Com o parecer, a GAD solicitará ao ordenador da despesa (SME ou autoridade equivalente) a autorização da baixa definitiva.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>

              {/* Etapa 3 */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-1">
                    Emissão do Documento de Baixa
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Autorizada a baixa, a Gerência de Infraestrutura registrará no SISBENS WEB e emitirá o Documento de Baixa (DB) em até 10 dias.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>

              {/* Etapa 4 */}
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-1">
                    Assinatura e Arquivo
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Uma via do DB deverá ser impressa, assinada pela unidade escolar e anexada ao processo. Outra via permanecerá arquivada na GAD.
                  </p>
                </div>
              </div>
            </div>

            {/* Nota sobre doação */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Doação:</span> Caso o bem seja destinado à doação, a Gerência de Infraestrutura colocará o bem em disponibilidade para entidades públicas ou privadas de interesse social, conforme art. 30 da Resolução CGM 1.642/2020.
                </p>
              </div>
            </div>
          </div>

          {/* Encerramento e Arquivamento */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Archive className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">
                  Encerramento e Arquivamento
                </h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Após a emissão e assinatura do Documento de Baixa, o processo será encaminhado à unidade escolar para ciência. Em seguida, retornará à GAD/4ª CRE para arquivamento e ficará à disposição dos controles interno e externo, conforme a NOR-PRO-505.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">
                  Próximos Passos
                </h3>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                A unidade escolar deve aguardar comunicação da GAD para eventual retirada ou destinação do bem. Mantenha o inventário patrimonial atualizado para identificar rapidamente bens em desuso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentoBaixa;
