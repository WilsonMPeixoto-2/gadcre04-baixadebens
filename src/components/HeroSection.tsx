import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abstract artistic background with golden light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-gold/10 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold rounded-full animate-pulse-slow delay-300" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gold-light rounded-full animate-pulse-slow delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-up">
          <span className="inline-block text-gold font-body text-sm tracking-[0.3em] uppercase mb-6">
            Design • Arte • Visão
          </span>
        </div>
        
        <h1 className="opacity-0 animate-fade-up delay-200 font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8">
          <span className="text-gradient">Criando</span>
          <br />
          <span className="text-foreground">Experiências</span>
          <br />
          <span className="italic text-gold-light">Memoráveis</span>
        </h1>

        <p className="opacity-0 animate-fade-up delay-400 font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Onde a arte encontra a tecnologia. Transformamos visões em realidades 
          digitais que inspiram, engajam e transcendem o ordinário.
        </p>

        <div className="opacity-0 animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gold text-primary-foreground font-body font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-glow">
            <span className="relative z-10">Explorar Portfolio</span>
            <div className="absolute inset-0 bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          
          <button className="glass px-8 py-4 font-body font-medium tracking-wide text-foreground hover:text-gold transition-colors duration-300">
            Sobre o Artista
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-1000">
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
