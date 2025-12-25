import { Phone, Mail, MapPin, ExternalLink, Clock, Building2 } from "lucide-react";

const Contatos = () => {
  return (
    <section id="contatos" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              Contatos
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* GAD Contact */}
            <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-up delay-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Gerência de Administração (GAD)
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    4ª Coordenadoria Regional de Educação
                  </p>
                  
                  <div className="space-y-2">
                    <a 
                      href="mailto:gad.4cre@rioeduca.net"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="font-body">gad.4cre@rioeduca.net</span>
                    </a>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="font-body">(21) XXXX-XXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-up delay-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    Endereço
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    4ª CRE - Sede
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-body text-sm text-muted-foreground">
                      Rua XXXXXXX, nº XXX
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Bairro - Rio de Janeiro/RJ
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="font-body">Seg a Sex: 9h às 17h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-up delay-300">
            <h3 className="font-display text-base font-bold text-foreground mb-4">
              Links Úteis
            </h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://sei.rio.rj.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-medium">SEI!RIO</span>
              </a>
              <a 
                href="https://rioeduca.rio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-medium">RioEduca</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-border/30 text-center opacity-0 animate-fade-up delay-400">
            <p className="font-display text-sm font-semibold text-foreground mb-1">
              4ª Coordenadoria Regional de Educação
            </p>
            <p className="font-body text-xs text-muted-foreground">
              © 2024 • Prefeitura da Cidade do Rio de Janeiro • Secretaria Municipal de Educação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
