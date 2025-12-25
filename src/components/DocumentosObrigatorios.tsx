import { FileText, Camera, FileCheck, Monitor, Info, Send, ArrowRight, AlertCircle, Download } from "lucide-react";

const DocumentosObrigatorios = () => {
  const passosFinais = [
    {
      numero: 4,
      titulo: "Criar o Documento Principal (Ofício)",
      descricao: "Inclua um documento do tipo Ofício (Classificação 03.08.01) e utilize o texto padrão de solicitação de baixa.",
      detalhe: "Lembre-se de copiar a tabela de bens (disponível nos modelos) e colar no corpo do Ofício, listando todos os bens a serem baixados.",
      icon: FileText,
    },
    {
      numero: 5,
      titulo: "Anexar Documentos Obrigatórios",
      descricao: "Inclua como Documento Externo os seguintes itens obrigatórios para completar o processo:",
      icon: FileCheck,
    },
    {
      numero: 6,
      titulo: "Enviar Processo à GAD",
      descricao: "Após incluir todos os documentos, envie o processo para a unidade E/4ª CRE/GAD para análise e tramitação.",
      detalhe: "Utilize o comando 'Enviar Processo' no SEI!RIO e selecione a unidade de destino.",
      icon: Send,
    },
  ];

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
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-glow">
              <span className="font-display text-2xl font-black text-primary">03</span>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">Seção</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Documentos Obrigatórios
              </h2>
            </div>
          </div>

          {/* Final Steps */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-6">
              {passosFinais.map((passo, index) => (
                <div
                  key={passo.numero}
                  className="glass-card rounded-2xl p-6 md:p-8 opacity-0 animate-fade-up relative md:ml-20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Step number badge - positioned on timeline */}
                  <div className="hidden md:flex absolute -left-20 top-8 items-center justify-center">
                    <div className="step-number">
                      {passo.numero}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    {/* Mobile step number */}
                    <div className="md:hidden step-number shrink-0">
                      {passo.numero}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <passo.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                          {passo.titulo}
                        </h3>
                      </div>
                      
                      <p className="font-body text-muted-foreground leading-relaxed text-justify">
                        {passo.descricao}
                      </p>
                      
                      {passo.detalhe && (
                        <div className="mt-4 info-box flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
          </div>

          {/* Documentos Anexos Cards */}
          <div className="mt-12 mb-8">
            <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up delay-200">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h4 className="font-display text-lg font-bold text-foreground">
                Documentos Necessários
              </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
              {documentosAnexos.map((doc, index) => (
                <div
                  key={doc.titulo}
                  className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-up group"
                  style={{ animationDelay: `${250 + index * 75}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <doc.icon className="w-7 h-7 text-primary" />
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
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-body font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {doc.tipo}
                        </span>
                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs font-body text-muted-foreground">
                          {doc.detalhe}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
