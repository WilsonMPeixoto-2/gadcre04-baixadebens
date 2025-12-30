import { FileText, FileCheck, Info, Download, FileInput } from "lucide-react";
import tabelaBensImage from "@/assets/tabela-bens.png";

const DocumentosObrigatorios = () => {
  return (
    <section id="documentos" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header - Tópico 2 */}
          <div className="relative rounded-2xl overflow-hidden mb-12 opacity-0 animate-fade-up">
            <div className="bg-gradient-hero p-8 md:p-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow">
                  <span className="font-display text-2xl font-black text-white">2</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Inclusão de Documentos Internos (OFÍCIO)
                    </h2>
                  </div>
                  <p className="font-body text-white/70">
                    Elaboração do Ofício de solicitação de baixa de bens
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2.1 Modelo de Ofício */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                2.1. Modelo de Ofício
              </h3>
              
              {/* Ofício Content */}
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="font-body text-foreground leading-relaxed space-y-6">
                  {/* Cabeçalho do Ofício */}
                  <p className="text-lg font-semibold text-primary">
                    Ofício E/4A.CRE/GAD nº 3/2025
                  </p>
                  
                  {/* Vocativo */}
                  <p>Sra. Coordenadora,</p>
                  
                  {/* Corpo */}
                  <p className="text-justify">
                    Após conferência, foi verificado que existem nesta U.E. bens que não estão em condições de uso, portanto solicitamos a baixa dos mesmos listados abaixo:
                  </p>
                  
                  {/* Tabela de Bens */}
                  <div className="my-6">
                    <div className="bg-background/50 rounded-xl p-4 border border-border/50">
                      <img 
                        src={tabelaBensImage} 
                        alt="Tabela de bens para baixa"
                        className="w-full max-w-lg mx-auto rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Fechamento */}
                  <p className="pt-4">Respeitosamente,</p>
                </div>
              </div>

              {/* Nota informativa */}
              <div className="info-box flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mt-6">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-muted-foreground">
                  Adapte o número do Ofício e a relação de bens conforme a necessidade da sua Unidade Escolar.
                </p>
              </div>
            </div>
          </div>

          {/* Section Header - Tópico 3 */}
          <div className="relative rounded-2xl overflow-hidden mb-12 mt-20 opacity-0 animate-fade-up">
            <div className="bg-gradient-hero p-8 md:p-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow">
                  <span className="font-display text-2xl font-black text-white">3</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileInput className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Inclusão de Documentos Externos
                    </h2>
                  </div>
                  <p className="font-body text-white/70">
                    Documentos obrigatórios e anexos necessários para o processo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3.1 Sobre esta etapa */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="flex items-start gap-4 border-l-4 border-primary pl-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  3.1. Sobre esta etapa
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-justify">
                  Nesta etapa, você irá incluir os documentos externos obrigatórios que compõem o processo 
                  de baixa de bens. Cada documento deve ser anexado corretamente para garantir a 
                  conformidade do processo.
                </p>
              </div>
            </div>
          </div>

          {/* 3.2 Enviar Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                3.2. Enviar Processo à GAD
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
                    <FileCheck className="w-4 h-4" />
                    Modelo de Fotos
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-body font-semibold">
                    <FileInput className="w-4 h-4" />
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
