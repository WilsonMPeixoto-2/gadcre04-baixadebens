import { Building2, Mail, HelpCircle } from "lucide-react";

const POPFooter = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info Box */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Precisa de Ajuda?
                </h3>
                <p className="font-body text-sm opacity-90 leading-relaxed">
                  Este é um documento de orientação produzido pela Gerência de Administração da 4ª CRE.
                  Em caso de dúvidas sobre o procedimento, entre em contato com a GAD.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              <div>
                <p className="font-display text-lg font-semibold">
                  Coordenadoria Regional de Educação
                </p>
                <p className="font-body text-sm opacity-80">
                  Gerência de Administração (GAD)
                </p>
              </div>
            </div>

            <p className="font-body text-sm opacity-70 text-center md:text-right">
              © 2024 • Todos os direitos reservados
              <br />
              Prefeitura da Cidade do Rio de Janeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default POPFooter;
