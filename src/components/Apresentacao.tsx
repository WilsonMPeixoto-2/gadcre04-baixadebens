import { Users, Shield, BookOpen, CheckCircle2 } from "lucide-react";

const Apresentacao = () => {
  return (
    <section id="apresentacao" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Apresentação
            </h2>
          </div>

          {/* Content Card */}
          <div className="glass-card rounded-2xl p-8 md:p-10 opacity-0 animate-fade-up delay-100">
            <h3 className="font-display text-xl md:text-2xl text-primary font-bold mb-6">
              Prezados(as) Diretores(as),
            </h3>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-justify">
              <p>
                A <span className="text-primary font-semibold">4ª Coordenadoria Regional de Educação</span>, 
                por intermédio da <span className="text-primary font-semibold">Gerência de Administração (GAD)</span>, 
                coloca à disposição das unidades escolares este <span className="text-foreground font-medium">Procedimento Operacional 
                Padrão (POP)</span> para formalização do processo de Baixa de Bens Patrimoniais Inservíveis/Irrecuperáveis no SEI!RIO.
              </p>

              <p>
                O objetivo deste material é <span className="text-foreground font-medium">padronizar os passos</span>, 
                reduzir dúvidas e conferir maior segurança jurídica, transparência e rastreabilidade aos processos 
                encaminhados à 4ª CRE, contribuindo para a boa gestão dos recursos públicos sob responsabilidade 
                de cada unidade escolar.
              </p>

              <p>
                Ao seguir as orientações aqui presentes, vocês estarão não apenas cumprindo as exigências da 
                <span className="text-foreground font-medium"> Controladoria Geral do Município (CGM-RJ)</span>, mas também 
                otimizando recursos e fortalecendo a governança de nossas unidades escolares.
              </p>
            </div>

            {/* Signatures */}
            <div className="mt-10 pt-8 border-t border-border/50 grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="font-display text-base text-foreground font-bold">
                  Fátima das Graças Lima Barros
                </p>
                <p className="font-body text-sm text-primary mt-1">
                  COORDENADORA – E/4ª CRE
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-base text-foreground font-bold">
                  Bianca Barreto da Fonseca Coelho
                </p>
                <p className="font-body text-sm text-primary mt-1">
                  GERENTE – E/4ª CRE/GAD
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: BookOpen,
                title: "Clareza",
                description: "Instruções passo a passo para facilitar o entendimento",
              },
              {
                icon: Shield,
                title: "Conformidade",
                description: "Alinhado às normativas da CGM-RJ",
              },
              {
                icon: CheckCircle2,
                title: "Suporte",
                description: "Apoio da GAD/4ª CRE em todas as etapas",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-hover rounded-xl p-5 text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-base font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
