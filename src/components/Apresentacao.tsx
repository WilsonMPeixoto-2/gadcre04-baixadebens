import { Users, Shield, BookOpen, CheckCircle2, Target, FileText } from "lucide-react";

const Apresentacao = () => {
  return (
    <section id="apresentacao" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-glow">
              <span className="font-display text-2xl font-black text-primary">01</span>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">Seção</p>
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
                  A <span className="text-primary font-semibold">4ª Coordenadoria Regional de Educação</span>, 
                  por intermédio da <span className="text-primary font-semibold">Gerência de Administração (GAD)</span>, 
                  coloca à disposição das unidades escolares este <span className="text-foreground font-medium bg-primary/10 px-2 py-0.5 rounded">Procedimento Operacional 
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
              <div className="mt-12 pt-8 border-t border-border/30 grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border/30">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-primary">FL</span>
                  </div>
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
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-primary">BB</span>
                  </div>
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

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: BookOpen,
                title: "Clareza",
                description: "Instruções passo a passo para facilitar o entendimento do processo",
                color: "primary",
              },
              {
                icon: Shield,
                title: "Conformidade",
                description: "Totalmente alinhado às normativas da CGM-RJ",
                color: "success",
              },
              {
                icon: Target,
                title: "Suporte",
                description: "Apoio da GAD/4ª CRE em todas as etapas do processo",
                color: "warning",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-hover rounded-2xl p-6 text-center opacity-0 animate-fade-up group"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
