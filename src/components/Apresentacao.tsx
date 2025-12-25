import { Users } from "lucide-react";

const Apresentacao = () => {
  return (
    <section id="apresentacao" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-glow">
              <span className="font-display text-2xl font-black text-primary">0</span>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Apresentação
              </h2>
            </div>
          </div>

          {/* Main Content Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 opacity-0 animate-fade-up delay-100 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl md:text-2xl text-foreground font-bold">
                  Prezados(as) Diretores(as),
                </h3>
              </div>

              <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-justify text-base md:text-lg">
                <p>
                  A rotina de uma gestão escolar é intensa. Entre demandas pedagógicas, cuidado com 
                  pessoas e urgências do dia a dia, sabemos que a organização administrativa exige tempo, 
                  atenção e, muitas vezes, decisões rápidas. Por isso, a <span className="text-primary font-semibold">4ª Coordenadoria Regional de 
                  Educação</span>, por meio da <span className="text-primary font-semibold">Gerência de Administração (GAD)</span>, reafirma aqui um compromisso 
                  simples e objetivo: estar ao lado das equipes gestoras, com orientação clara, apoio contínuo 
                  e diálogo.
                </p>

                <p>
                  A chegada do <span className="text-foreground font-semibold">SEI!RIO</span> representa uma mudança importante na forma como registramos, 
                  acompanhamos e formalizamos os processos administrativos. Toda transição traz desafios 
                  — e é exatamente nesse momento que a parceria entre CRE e escolas faz diferença. Este 
                  material foi pensado para facilitar o caminho, reduzir inseguranças, evitar retrabalho e dar 
                  mais previsibilidade às rotinas.
                </p>

                <p>
                  Este é o primeiro de uma série de documentos de orientação que a 4ª CRE está construindo 
                  para apoiar as direções, tanto nos procedimentos de gestão escolar quanto no uso do novo 
                  sistema processual SEI!RIO. A cada novo guia, nossa intenção é a mesma: transformar 
                  regras e etapas em rotinas mais simples, seguras e executáveis, respeitando o contexto real 
                  de cada unidade.
                </p>

                <p>
                  Conte com a 4ª CRE/GAD. Seguimos à disposição para orientar, ouvir e aprimorar 
                  continuamente esses materiais, em parceria com vocês.
                </p>
              </div>

              {/* Signatures */}
              <div className="mt-12 pt-8 border-t border-border/30 grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/30">
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
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/30">
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
      </div>
    </section>
  );
};

export default Apresentacao;
