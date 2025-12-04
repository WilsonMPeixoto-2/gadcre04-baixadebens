import { FileText, Camera, FileCheck, Monitor } from "lucide-react";

const DocumentosObrigatorios = () => {
  const passosFinais = [
    {
      numero: 4,
      titulo: "Criar o Documento Principal (Ofício)",
      descricao: "Inclua um documento do tipo Ofício (Classificação 03.08.01) e utilize o texto padrão de solicitação de baixa.",
      detalhe: "Lembre-se de copiar a tabela de bens (disponível nos modelos) e colar no corpo do Ofício.",
    },
    {
      numero: 5,
      titulo: "Anexar Documentos Obrigatórios",
      descricao: "Inclua como Documento Externo os seguintes itens obrigatórios:",
    },
  ];

  const documentosAnexos = [
    {
      icon: Camera,
      titulo: "Fotos dos Bens",
      descricao: "Arquivo com as fotos dos bens (utilize o modelo de fotos disponibilizado pela GAD)",
    },
    {
      icon: Monitor,
      titulo: "Laudo Técnico de Imprestabilidade",
      descricao: "Obrigatório para equipamentos de informática e eletrônicos",
      obrigatorio: true,
    },
  ];

  return (
    <section id="documentos" className="py-16 md:py-20 bg-background scroll-mt-4">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up">
            <FileCheck className="w-7 h-7 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold">
              2. Documentos Obrigatórios
            </h2>
          </div>

          {/* Final Steps */}
          <div className="space-y-6">
            {passosFinais.map((passo, index) => (
              <div
                key={passo.numero}
                className="bg-card rounded-lg shadow-card border-l-4 border-primary p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-foreground/75 leading-relaxed text-justify">
                      {passo.descricao}
                    </p>
                    {passo.detalhe && (
                      <p className="font-body text-primary text-sm mt-3 font-medium">
                        💡 {passo.detalhe}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Documentos Anexos Cards */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {documentosAnexos.map((doc, index) => (
              <div
                key={doc.titulo}
                className="bg-card rounded-lg border border-border hover:border-primary/40 hover:shadow-soft transition-all p-5 opacity-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <doc.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-display text-base font-semibold text-foreground">
                        {doc.titulo}
                      </h4>
                      {doc.obrigatorio && (
                        <span className="bg-destructive/10 text-destructive text-xs font-body font-semibold px-2 py-0.5 rounded">
                          Obrigatório
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
