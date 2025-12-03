import { Users, Shield, BookOpen } from "lucide-react";

const Apresentacao = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Apresentação
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Prezados Diretores e Diretoras
            </h2>
          </div>

          {/* Content Card */}
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 opacity-0 animate-fade-up delay-200">
            <p className="font-body text-foreground/80 leading-relaxed text-lg mb-6">
              É com grande satisfação que a <strong className="text-primary">Coordenadoria Regional de Educação</strong>, 
              por meio de sua <strong className="text-primary">Gerência de Administração (GAD)</strong>, apresenta este 
              Guia Prático de Inventário e Baixa de Bens.
            </p>

            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Sabemos que a gestão patrimonial é uma tarefa complexa e de grande responsabilidade, 
              que exige atenção aos detalhes e conformidade com uma série de normativas.
            </p>

            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              Nosso objetivo com este material é transformar um processo muitas vezes visto como burocrático 
              em uma jornada <strong>clara, objetiva e segura</strong>. A correta administração do patrimônio público 
              é um pilar da gestão escolar eficiente e transparente.
            </p>

            {/* Highlight Box */}
            <div className="bg-sky-light rounded-xl p-6 border-l-4 border-primary">
              <p className="font-body text-foreground/90 leading-relaxed">
                Ao seguir as orientações aqui presentes, vocês estarão não apenas cumprindo as exigências da 
                <strong> Controladoria Geral do Município (CGM-RJ)</strong>, mas também otimizando recursos 
                e fortalecendo a governança de nossas unidades escolares.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                description: "Apoio da GAD em todas as etapas",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl shadow-card p-6 text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
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
