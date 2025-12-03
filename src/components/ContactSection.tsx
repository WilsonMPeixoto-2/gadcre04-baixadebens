const ContactSection = () => {
  return (
    <section id="contato" className="relative py-32 bg-charcoal overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 border border-gold/10 rounded-full" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 border border-gold/5 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Contato
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
              Vamos Criar Algo
              <br />
              <span className="italic text-gold-light">Extraordinário</span>
            </h2>
            <p className="font-body text-muted-foreground mt-6 max-w-xl mx-auto">
              Pronto para transformar sua visão em realidade? 
              Entre em contato e vamos começar essa jornada criativa juntos.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-8 opacity-0 animate-fade-up delay-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-body text-sm text-muted-foreground tracking-wide">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm text-muted-foreground tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground tracking-wide">
                Tipo de Projeto
              </label>
              <select className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-foreground transition-colors duration-300">
                <option value="" className="bg-charcoal">Selecione uma opção</option>
                <option value="branding" className="bg-charcoal">Branding</option>
                <option value="webdesign" className="bg-charcoal">Web Design</option>
                <option value="uiux" className="bg-charcoal">UI/UX Design</option>
                <option value="motion" className="bg-charcoal">Motion Design</option>
                <option value="other" className="bg-charcoal">Outro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-body text-sm text-muted-foreground tracking-wide">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 font-body text-foreground placeholder:text-muted-foreground/50 transition-colors duration-300 resize-none"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="group relative px-12 py-4 bg-gold text-primary-foreground font-body font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-glow"
              >
                <span className="relative z-10">Enviar Mensagem</span>
                <div className="absolute inset-0 bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mt-16 pt-16 border-t border-border opacity-0 animate-fade-up delay-400">
            {["Instagram", "Dribbble", "Behance", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
