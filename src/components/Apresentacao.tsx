import { Users, Shield, BookOpen } from "lucide-react";

const Apresentacao = () => {
  return (
    <section id="apresentacao" className="py-16 md:py-20 bg-background scroll-mt-4">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-card rounded-xl shadow-elevated border-l-4 border-primary p-8 md:p-10 opacity-0 animate-fade-up">
            <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold mb-6">
              Prezados(as) Diretores(as),
            </h2>

            <div className="space-y-5 font-body text-foreground/85 leading-relaxed text-justify">
              <p>
                A <strong className="text-primary font-semibold">4ª Coordenadoria Regional de Educação</strong>, 
                por intermédio da <strong className="text-primary font-semibold">Gerência de Administração (GAD)</strong>, 
                coloca à disposição das unidades escolares este <strong className="text-foreground">Procedimento Operacional 
                Padrão (POP)</strong> para formalização do processo de Baixa de Bens Patrimoniais Inservíveis/Irrecuperáveis no SEI!RIO.
              </p>

              <p>
                O objetivo deste material é <strong className="text-foreground">padronizar os passos</strong>, 
                reduzir dúvidas e conferir maior segurança jurídica, transparência e rastreabilidade aos processos 
                encaminhados à 4ª CRE, contribuindo para a boa gestão dos recursos públicos sob responsabilidade 
                de cada unidade escolar.
              </p>

              <p>
                Ao seguir as orientações aqui presentes, vocês estarão não apenas cumprindo as exigências da 
                <strong className="text-foreground"> Controladoria Geral do Município (CGM-RJ)</strong>, mas também 
                otimizando recursos e fortalecendo a governança de nossas unidades escolares.
              </p>
            </div>

            {/* Signatures */}
            <div className="mt-10 pt-8 border-t border-border grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="font-display text-lg text-primary font-semibold">
                  Fátima das Graças Lima Barros
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  COORDENADORA – E/4ª CRE
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-lg text-primary font-semibold">
                  Bianca Barreto da Fonseca Coelho
                </p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  GERENTE – E/4ª CRE/GAD
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-10">
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
                icon: Users,
                title: "Suporte",
                description: "Apoio da GAD/4ª CRE em todas as etapas",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-lg shadow-card p-5 text-center border border-border/50 opacity-0 animate-fade-up hover:shadow-soft transition-shadow"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
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
