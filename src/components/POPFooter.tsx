import { Headphones, Mail, ExternalLink } from "lucide-react";

const POPFooter = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info Box */}
          <div className="glass-card rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Precisa de apoio?
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Em caso de dúvidas sobre o processo de baixa de bens patrimoniais, entre em contato com a GAD/4ª CRE.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Mail className="w-4 h-4" />
                  <span className="font-body text-sm font-medium">gad.4cre@rioeduca.net</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-base font-bold text-foreground">
                4ª Coordenadoria Regional de Educação
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Gerência de Administração (GAD)
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://rioeduca.rio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-body text-sm">rioeduca.rio</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/30 text-center">
            <p className="font-body text-xs text-muted-foreground">
              © 2024 • Prefeitura da Cidade do Rio de Janeiro • Secretaria Municipal de Educação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default POPFooter;
