import { FileText, Camera, FileCheck, Monitor } from "lucide-react";

const DocumentosObrigatorios = () => {
  const passosFinais = [
    {
      numero: 4,
      titulo: "Criar o Documento Principal (Ofício)",
      descricao: "Inclua um documento do tipo Ofício (Classificação 03.08.01) e utilize o texto padrão de solicitação de baixa.",
      detalhe: "Lembre-se de copiar a tabela de bens (disponível nos modelos) e colar no corpo do Ofício.",
      icon: FileText,
    },
    {
      numero: 5,
      titulo: "Anexar Documentos Obrigatórios",
      descricao: "Inclua como Documento Externo os seguintes itens obrigatórios:",
      icon: FileCheck,
    },
  ];

  const documentosAnexos = [
    {
      icon: Camera,
      titulo: "Fotos dos Bens",
      descricao: "Arquivo com as fotos dos bens (utilize o modelo de fotos disponibilizado)",
    },
    {
      icon: Monitor,
      titulo: "Laudo Técnico de Imprestabilidade",
      descricao: "Obrigatório para equipamentos de informática e eletrônicos",
      obrigatorio: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Etapas Finais
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Documentos Obrigatórios
            </h2>
          </div>

          {/* Final Steps */}
          <div className="space-y-8">
            {passosFinais.map((passo, index) => (
              <div
                key={passo.numero}
                className="bg-card rounded-2xl shadow-soft p-6 md:p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {passo.descricao}
                    </p>
                    {passo.detalhe && (
                      <p className="font-body text-primary text-sm mt-3 italic">
                        {passo.detalhe}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Documentos Anexos Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {documentosAnexos.map((doc, index) => (
              <div
                key={doc.titulo}
                className="bg-card rounded-xl border-2 border-border hover:border-primary/30 transition-colors p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {doc.titulo}
                      </h4>
                      {doc.obrigatorio && (
                        <span className="bg-accent/20 text-accent-foreground text-xs font-body font-medium px-2 py-0.5 rounded">
                          Obrigatório
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {doc.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentosObrigatorios;
