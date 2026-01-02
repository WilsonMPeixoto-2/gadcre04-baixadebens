import { Folder, FileText, ClipboardList, Copy, Check, Info } from "lucide-react";
import seiMenuIniciar from "@/assets/sei-menu-iniciar.png";
import seiPlusIcon from "@/assets/sei-plus-icon.png";
import seiProcessoCriado from "@/assets/sei-processo-criado.png";
import seiNivelAcesso from "@/assets/sei-nivel-acesso.png";
import { useState } from "react";
import { toast } from "sonner";

const PassoAPasso = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("BAIXA DE BENS: BAIXA DE BENS MÓVEIS");
    setCopied(true);
    toast.success("Texto copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  const camposTabela = [
    { 
      campo: "Tipo de Processo", 
      valor: "Baixa de bens: baixa de bens móveis",
      nota: "(preenchido automaticamente pelo sistema)"
    },
    { 
      campo: "Especificação", 
      valor: "Baixa de Bens - 04.XX.XXX + NOME DA UNIDADE ESCOLAR",
      nota: null
    },
    { 
      campo: "Classificação por Assuntos", 
      valor: "03.08.01 - Baixa de bens móveis",
      nota: "(preenchido automaticamente pelo sistema)"
    },
    { 
      campo: "Interessados", 
      valor: "E/4a.CRE/GAD - 10729 - Gerência de Administração",
      nota: null
    },
  ];

  return (
    <section id="abertura" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with gradient banner */}
          <div className="relative rounded-2xl overflow-hidden mb-12 opacity-0 animate-fade-up">
            <div className="bg-gradient-hero p-8 md:p-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow">
                  <span className="font-display text-2xl font-black text-white">1</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Folder className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Abertura do Processo
                    </h2>
                  </div>
                  <p className="font-body text-white/70">
                    Acesso ao SEI!RIO, criação do processo, numeração e identificação
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 1.1 Sobre esta etapa */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="flex items-start gap-4 border-l-4 border-primary pl-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  1.1. Sobre esta etapa
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-justify">
                  A etapa inicial compreende a autuação do processo administrativo eletrônico, no qual serão 
                  inseridos todos os documentos comprobatórios da solicitação de baixa de bens patrimoniais 
                  inservíveis ou irrecuperáveis.
                </p>
              </div>
            </div>
          </div>

          {/* 1.2 Iniciando o Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-200">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.2. Iniciando o Processo
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Para abrir um novo processo no SEI!RIO, o usuário deve selecionar a opção{" "}
                <span className="text-foreground font-semibold">"INICIAR PROCESSO"</span>, 
                conforme o menu de navegação do sistema.
              </p>
              
              {/* SEI Menu screenshot - Professional presentation */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="bg-background rounded-lg overflow-hidden border border-border/50">
                  <img 
                    src={seiMenuIniciar} 
                    alt="Tela do SEI!RIO mostrando a opção Iniciar Processo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 1.3 Escolha o Tipo do Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                1.3. Escolha o Tipo do Processo
                <img src={seiPlusIcon} alt="Ícone de adicionar" className="w-8 h-8" />
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Na tela que se abre, no campo{" "}
                <span className="text-foreground font-semibold">"Escolha o Tipo do Processo"</span>, digite (ou copie){" "}
                <span className="inline-flex items-center gap-2">
                  <code className="bg-primary/10 text-primary px-2 py-0.5 rounded font-mono text-sm">
                    "BAIXA DE BENS: BAIXA DE BENS MÓVEIS"
                  </code>
                  <button 
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium transition-colors"
                    title="Copiar texto"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </span>
              </p>
            </div>
          </div>

          {/* 1.4 INICIAR PROCESSO */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-400">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.4. INICIAR PROCESSO
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Após a seleção do tipo de processo, a tela "INICIAR PROCESSO" será exibida. 
                Preencha os campos conforme as orientações abaixo:
              </p>
              
              {/* Tabela de Preenchimento */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClipboardList className="w-5 h-5 text-primary" />
                  <span className="font-display text-base font-bold text-foreground">
                    Tabela de Preenchimento:
                  </span>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-primary/30">
                        <th className="text-left font-display font-bold text-foreground py-3 pr-4 text-base">
                          Campo
                        </th>
                        <th className="text-left font-display font-bold text-foreground py-3 text-base">
                          Valor a ser Preenchido
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {camposTabela.map((item, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="font-body text-foreground py-4 pr-4 font-semibold">
                            {item.campo}
                          </td>
                          <td className="font-body py-4">
                            <div className="flex flex-col gap-1">
                              <span className="bg-primary/15 text-foreground font-medium px-3 py-2 rounded-lg text-sm border border-primary/20">
                                {item.valor}
                              </span>
                              {item.nota && (
                                <span className="text-xs text-muted-foreground italic pl-1">
                                  {item.nota}
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 1.5 Nível de Acesso */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                1.5. Nível de Acesso
              </h3>
              
              {/* Screenshot do nível de acesso */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="bg-background rounded-lg overflow-hidden border border-border/50">
                  <img 
                    src={seiNivelAcesso} 
                    alt="Tabela de níveis de acesso do SEI!RIO"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 1.6 Confirmação da criação do Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.6. Confirmação da Criação do Processo
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                A criação do Processo será confirmada com a abertura da tela abaixo:
              </p>
              
              {/* Screenshot do processo criado */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-card mb-6">
                <div className="bg-background rounded-lg overflow-hidden border border-border/50">
                  <img 
                    src={seiProcessoCriado} 
                    alt="Tela de confirmação da criação do processo no SEI!RIO"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3 italic">
                  Tela de confirmação do processo criado
                </p>
              </div>

              {/* Nota informativa */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground mb-2">
                      Nota Importante
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      No sistema SEI!RIO não há "capa" com o mesmo layout do sistema anterior. 
                      A geração da pasta com o número (NUP) será exibida ao lado, conforme exemplo:
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2">
                      <span className="font-mono text-primary font-bold text-base">
                        000704.000769/2025-67
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center opacity-0 animate-fade-up">
            <p className="font-body text-sm text-muted-foreground italic">
              Este é um documento de orientação produzido pela Gerência de Administração da 4ª CRE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
