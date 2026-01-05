import { Users, BookOpen } from "lucide-react";

const Apresentacao = () => {
  return (
    <section id="apresentacao" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Apresentação
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Introdução e propósito deste manual
              </p>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl md:text-2xl text-foreground font-bold">
                Prezados(as) Diretores(as),
              </h3>
            </div>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-justify">
              <p>
                A rotina de gestão patrimonial das unidades escolares exige organização e respeito aos marcos legais. Para auxiliar as direções das escolas no registro e tramitação de processos de baixa de bens patrimoniais no <span className="font-semibold text-foreground">SEI!RIO</span>, a <span className="text-primary font-semibold">Gerência de Administração (GAD)</span> da <span className="text-primary font-semibold">4ª CRE</span> elaborou este Procedimento Operacional Padrão (POP).
              </p>

              <p>
                O documento traduz a legislação municipal aplicável e as resoluções da Controladoria Geral do Município (CGM Rio) em etapas práticas, garantindo <span className="font-semibold text-foreground">transparência</span> e <span className="font-semibold text-foreground">rastreabilidade</span>.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-6">
                <p className="text-sm">
                  Este POP foi desenvolvido com base nas normas que regem o controle, a movimentação e a exclusão de bens móveis do Município, em especial a <span className="font-semibold text-foreground">Resolução CGM nº 1.642/2020</span> – que define a baixa como a exclusão do bem do patrimônio municipal por alienação, obsolescência, imprestabilidade, desuso, extravio, dano ou insubsistência – e na <span className="font-semibold text-foreground">NOR-PRO-505</span> da CGM, que descreve o fluxo administrativo da baixa por desuso, imprestabilidade ou obsolescência.
                </p>
              </div>

              <p>
                Todas as etapas previstas aqui devem ser executadas no <span className="font-semibold text-foreground">SEI!RIO</span> e observar as normas citadas. Conte com a <span className="text-primary font-semibold">4ª CRE/GAD</span>. Seguimos à disposição para orientar, ouvir e aprimorar continuamente esses materiais, em parceria com vocês.
              </p>
            </div>

            {/* Signatures */}
            <div className="mt-10 pt-8 border-t border-border grid md:grid-cols-2 gap-6">
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border">
                <p className="font-display text-lg text-foreground font-bold">
                  Fátima das Graças Lima Barros
                </p>
                <p className="font-body text-sm text-primary mt-2 font-semibold">
                  COORDENADORA
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  E/4ª CRE
                </p>
              </div>
              <div className="text-center p-5 rounded-xl bg-muted/50 border border-border">
                <p className="font-display text-lg text-foreground font-bold">
                  Bianca Barreto da Fonseca Coelho
                </p>
                <p className="font-body text-sm text-primary mt-2 font-semibold">
                  GERENTE
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  E/4ª CRE/GAD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
