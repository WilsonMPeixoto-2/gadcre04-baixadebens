import { Phone, Mail, MapPin, ExternalLink, Clock, Building2, Users, Globe, MessageCircle } from "lucide-react";

const Contatos = () => {
  return (
    <section id="contatos" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
              8
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                Contatos Úteis
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Entre em contato com a GAD/4ª CRE
              </p>
            </div>
          </div>

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* GAD Contact */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Setor Responsável</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-1">
                    Gerência de Administração
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    GAD • 4ª Coordenadoria Regional de Educação
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="mailto:GAD.cre04@rioeduca.net"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-body font-medium">GAD.cre04@rioeduca.net</span>
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-body">(21) 2976-2298</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Localização</span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-1">
                    4ª CRE - Sede
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Secretaria Municipal de Educação
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-body">Rua Cândido Benício, nº 3.333</p>
                        <p className="font-body">Praça Seca • Rio de Janeiro/RJ</p>
                        <p className="font-body text-xs text-muted-foreground/70 mt-1">CEP: 21321-630</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-body">Segunda a Sexta: 9h às 17h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Links Úteis
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              <a 
                href="https://sei.rio.rj.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-semibold">SEI!RIO</span>
              </a>
              <a 
                href="https://rioeduca.rio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-semibold">RioEduca</span>
              </a>
              <a 
                href="https://www.rio.rj.gov.br/web/sme"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-semibold">SME-Rio</span>
              </a>
              <a 
                href="https://www.rio.rj.gov.br/web/cgm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all border border-border"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm font-semibold">CGM-RJ</span>
              </a>
            </div>
          </div>

          {/* Support Box */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  Precisa de Ajuda?
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Em caso de dúvidas sobre o processo de Baixa de Bens ou qualquer outro procedimento administrativo, 
                  entre em contato com a <span className="text-primary font-semibold">GAD/4ª CRE</span>. 
                  Nossa equipe está pronta para auxiliar sua unidade escolar.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-border text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
            </div>
            <p className="font-display text-lg font-bold text-foreground mb-1">
              4ª Coordenadoria Regional de Educação
            </p>
            <p className="font-body text-sm text-muted-foreground mb-1">
              Gerência de Administração (GAD)
            </p>
            <p className="font-body text-xs text-muted-foreground/70 mt-4">
              © 2025 • Prefeitura da Cidade do Rio de Janeiro • Secretaria Municipal de Educação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
