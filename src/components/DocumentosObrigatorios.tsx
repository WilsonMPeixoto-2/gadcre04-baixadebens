import { FileText, Camera, FileCheck, Monitor, Info, Send, ArrowRight, AlertCircle, Download, Folder } from "lucide-react";

const DocumentosObrigatorios = () => {
  const documentosAnexos = [
    {
      icon: Camera,
      titulo: "Fotos dos Bens",
      descricao: "Arquivo com as fotos de todos os bens a serem baixados",
      detalhe: "Utilize o modelo de fotos disponibilizado pela GAD",
      obrigatorio: true,
      tipo: "Arquivo",
    },
    {
      icon: Monitor,
      titulo: "Laudo Técnico",
      descricao: "Laudo Técnico de Imprestabilidade para equipamentos",
      detalhe: "Obrigatório para equipamentos de informática e eletrônicos",
      obrigatorio: true,
      tipo: "Documento",
    },
    {
      icon: FileText,
      titulo: "Termo de Responsabilidade",
      descricao: "Termo assinado pelo diretor da unidade escolar",
      detalhe: "Declarando ciência do processo de baixa",
      obrigatorio: true,
      tipo: "Documento",
    },
    {
      icon: Download,
      titulo: "Relação de Bens",
      descricao: "Tabela com a relação completa dos bens patrimoniais",
      detalhe: "Inserida no corpo do Ofício",
      obrigatorio: true,
      tipo: "Tabela",
    },
  ];

  return (
    <section id="documentos" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with gradient banner */}
          <div className="relative rounded-2xl overflow-hidden mb-12 opacity-0 animate-fade-up">
            <div className="bg-gradient-hero p-8 md:p-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow">
                  <span className="font-display text-2xl font-black text-white">2</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileCheck className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Inclusão de Documentos
                    </h2>
                  </div>
                  <p className="font-body text-white/70">
                    Documentos obrigatórios e anexos necessários para o processo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2.1 Sobre esta etapa */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="flex items-start gap-4 border-l-4 border-primary pl-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  2.1. Sobre esta etapa
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-justify">
                  Nesta etapa, você irá incluir os documentos obrigatórios que compõem o processo 
                  de baixa de bens. Cada documento deve ser anexado corretamente para garantir a 
                  conformidade do processo.
                </p>
              </div>
            </div>
          </div>

          {/* 2.2 Documentos Necessários */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-200">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                2.2. Documentos Necessários
              </h3>
              
              <div className="grid md:grid-cols-2 gap-5">
                {documentosAnexos.map((doc, index) => (
                  <div
                    key={doc.titulo}
                    className="glass-card-hover rounded-2xl p-5 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <doc.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h4 className="font-display text-base font-bold text-foreground">
                            {doc.titulo}
                          </h4>
                          <span className={`text-xs font-bold font-body px-2.5 py-1 rounded-full ${
                            doc.obrigatorio 
                              ? 'bg-destructive/10 text-destructive' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {doc.obrigatorio ? 'Obrigatório' : 'Opcional'}
                          </span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">
                          {doc.descricao}
                        </p>
                        <p className="text-xs font-body text-muted-foreground">
                          {doc.detalhe}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2.3 Enviar Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                2.3. Enviar Processo à GAD
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Após incluir todos os documentos, envie o processo para a unidade{" "}
                <span className="text-foreground font-semibold">E/4ª CRE/GAD</span>{" "}
                para análise e tramitação.
              </p>
              
              <div className="info-box flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Utilize o comando "Enviar Processo" no SEI!RIO e selecione a unidade de destino.
                </p>
              </div>
            </div>
          </div>

          {/* Modelo de Download */}
          <div className="glass-card rounded-2xl p-6 md:p-8 opacity-0 animate-fade-up delay-400 border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Download className="w-10 h-10 text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Modelos e Templates
                </h4>
                <p className="font-body text-muted-foreground mb-4">
                  A GAD disponibiliza modelos padronizados para todos os documentos necessários. 
                  Entre em contato para solicitar os templates atualizados.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-body font-semibold">
                    <FileText className="w-4 h-4" />
                    Modelo de Ofício
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-body font-semibold">
                    <Camera className="w-4 h-4" />
                    Modelo de Fotos
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-body font-semibold">
                    <Monitor className="w-4 h-4" />
                    Modelo de Laudo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentosObrigatorios;
