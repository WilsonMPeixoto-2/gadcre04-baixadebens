import { Headphones } from "lucide-react";

const POPFooter = () => {
  return (
    <footer className="gradient-hero text-primary-foreground py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info Box */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-primary-foreground/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  Precisa de apoio?
                </h3>
                <p className="font-body text-sm opacity-85 leading-relaxed">
                  Em caso de dúvidas, contate a GAD/4ª CRE.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-primary-foreground/20">
            <div className="text-center md:text-left">
              <p className="font-display text-base font-semibold">
                4ª Coordenadoria Regional de Educação
              </p>
              <p className="font-body text-sm opacity-75">
                Gerência de Administração (GAD)
              </p>
            </div>

            <p className="font-body text-xs opacity-60 text-center md:text-right">
              © 2024 • Prefeitura da Cidade do Rio de Janeiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default POPFooter;
