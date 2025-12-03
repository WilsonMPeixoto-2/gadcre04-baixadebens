const AboutSection = () => {
  const skills = [
    { name: "Design UI/UX", level: 95 },
    { name: "Branding", level: 90 },
    { name: "Motion Design", level: 85 },
    { name: "Direção de Arte", level: 92 },
  ];

  return (
    <section id="sobre" className="relative py-32 bg-charcoal">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative opacity-0 animate-slide-in">
            <div className="aspect-[4/5] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-lg" />
              <div className="absolute inset-4 border border-gold/30 rounded-lg" />
              <div className="absolute inset-8 bg-charcoal-light rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-display text-8xl text-gold/20">10+</span>
                    <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mt-4">
                      Anos de Experiência
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -right-4 top-1/4 glass px-6 py-4 animate-float">
              <span className="font-display text-3xl text-gold">200+</span>
              <p className="font-body text-xs text-muted-foreground">Projetos</p>
            </div>
            
            <div className="absolute -left-4 bottom-1/4 glass px-6 py-4 animate-float delay-300">
              <span className="font-display text-3xl text-gold">50+</span>
              <p className="font-body text-xs text-muted-foreground">Prêmios</p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="opacity-0 animate-fade-up">
              <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                Sobre
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                A Arte de
                <br />
                <span className="italic text-gold-light">Criar com Propósito</span>
              </h2>
            </div>

            <p className="opacity-0 animate-fade-up delay-200 font-body text-muted-foreground leading-relaxed">
              Como designer e artista digital, acredito que cada pixel conta uma história. 
              Meu trabalho é encontrar a interseção perfeita entre estética e funcionalidade, 
              criando experiências que não apenas impressionam visualmente, mas também 
              ressoam emocionalmente com o público.
            </p>

            <p className="opacity-0 animate-fade-up delay-300 font-body text-muted-foreground leading-relaxed">
              Com mais de uma década de experiência em design digital, colaborei com marcas 
              globais, startups inovadoras e projetos artísticos independentes. Cada projeto 
              é uma nova oportunidade de ultrapassar limites e redefinir o que é possível.
            </p>

            {/* Skills */}
            <div className="space-y-6 pt-6 opacity-0 animate-fade-up delay-400">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-gold">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full transition-all duration-1000"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
