import { FileText, Camera, FileCheck, Monitor, Info } from "lucide-react";

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
      tag: "Arquivo",
    },
    {
      icon: Monitor,
      titulo: "Laudo Técnico de Imprestabilidade",
      descricao: "Obrigatório para equipamentos de informática e eletrônicos",
      obrigatorio: true,
      tag: "Obrigatório",
    },
  ];

  return (
    <section id="documentos" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              2. Documentos Obrigatórios
            </h2>
          </div>

          {/* Final Steps */}
          <div className="space-y-4">
            {passosFinais.map((passo, index) => (
              <div
                key={passo.numero}
                className="glass-card rounded-xl p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-justify">
                      {passo.descricao}
                    </p>
                    {passo.detalhe && (
                      <div className="mt-4 info-box flex items-start gap-3">
                        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="font-body text-sm text-muted-foreground">
                          {passo.detalhe}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Documentos Anexos Cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {documentosAnexos.map((doc, index) => (
              <div
                key={doc.titulo}
                className="glass-card-hover rounded-xl p-5 opacity-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <doc.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h4 className="font-display text-base font-bold text-foreground">
                        {doc.titulo}
                      </h4>
                      {doc.obrigatorio && (
                        <span className="bg-destructive/20 text-destructive text-xs font-body font-bold px-2 py-0.5 rounded-full">
                          {doc.tag}
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
