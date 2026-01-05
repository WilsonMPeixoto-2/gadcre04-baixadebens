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
      nota: "(preenchido automaticamente)"
    },
    { 
      campo: "Especificação", 
      valor: 'Baixa de Bens – 04.XX.XXX – Nome da Unidade Escolar',
      nota: null
    },
    { 
      campo: "Classificação por Assuntos", 
      valor: "03.08.01 – Baixa de bens móveis",
      nota: "(preenchido automaticamente)"
    },
    { 
      campo: "Interessados", 
      valor: "E/4ª CRE/GAD – Gerência de Administração",
      nota: null
    },
    { 
      campo: "Nível de Acesso", 
      valor: "Público",
      nota: "Para permitir consulta pelas unidades envolvidas"
    },
  ];

  return (
    <section id="abertura" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                1
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Autuação do Processo no SEI!RIO
                  </h2>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Abertura do processo administrativo eletrônico
                </p>
              </div>
            </div>
          </div>

          {/* 1.1 Objetivo */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  1.1. Objetivo da Etapa
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Esta etapa compreende a abertura do processo administrativo eletrônico no SEI!RIO, que instruirá a solicitação de baixa de bens patrimoniais da unidade escolar.
                </p>
              </div>
            </div>
          </div>

          {/* 1.2 Iniciando o Processo */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              1.2. Iniciando o Processo
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <p className="font-body text-muted-foreground">Acessar o SEI!RIO com seu login institucional.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <p className="font-body text-muted-foreground">No menu principal, clicar em <span className="font-semibold text-foreground">"Iniciar Processo"</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
                <p className="font-body text-muted-foreground">No campo "Tipo de Processo", digitar <span className="font-semibold text-foreground">"Baixa de bens: Baixa de bens móveis"</span> e selecionar a opção correspondente.</p>
              </div>
            </div>
            
            {/* SEI Menu screenshot */}
            <div className="bg-muted rounded-xl p-4 border border-border">
              <img 
                src={seiMenuIniciar} 
                alt="Tela do SEI!RIO mostrando a opção Iniciar Processo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* 1.3 Tipo do Processo */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-3">
              1.3. Escolha o Tipo do Processo
              <img src={seiPlusIcon} alt="Ícone de adicionar" className="w-7 h-7" />
            </h3>
            <p className="font-body text-muted-foreground mb-4">
              No campo "Escolha o Tipo do Processo", digite ou copie:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <code className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-mono text-sm border border-primary/20">
                BAIXA DE BENS: BAIXA DE BENS MÓVEIS
              </code>
              <button 
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:opacity-90"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* 1.4 Tabela de Preenchimento */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">
                1.4. Preencher os Campos
              </h3>
            </div>
            
            <p className="font-body text-muted-foreground mb-6">
              Após a seleção do tipo de processo, preencha os campos conforme a tabela:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left font-display font-bold py-3 px-4 rounded-tl-lg text-sm">
                      Campo
                    </th>
                    <th className="text-left font-display font-bold py-3 px-4 rounded-tr-lg text-sm">
                      Valor a Preencher
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camposTabela.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                      <td className="font-body text-foreground py-3 px-4 font-semibold text-sm border-b border-border">
                        {item.campo}
                      </td>
                      <td className="font-body py-3 px-4 border-b border-border">
                        <span className="text-foreground text-sm">{item.valor}</span>
                        {item.nota && (
                          <span className="block text-xs text-muted-foreground italic mt-1">
                            {item.nota}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 1.5 Nível de Acesso Screenshot */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              1.5. Nível de Acesso
            </h3>
            <div className="bg-muted rounded-xl p-4 border border-border">
              <img 
                src={seiNivelAcesso} 
                alt="Tabela de níveis de acesso do SEI!RIO"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* 1.6 Confirmação */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              1.6. Confirmação da Criação
            </h3>
            <p className="font-body text-muted-foreground mb-4">
              Após preencher todos os campos, clique em <span className="font-semibold text-foreground">"Salvar"</span> para gerar o número único de processo (NUP).
            </p>
            
            <div className="bg-muted rounded-xl p-4 border border-border mb-6">
              <img 
                src={seiProcessoCriado} 
                alt="Tela de confirmação da criação do processo no SEI!RIO"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-xs text-muted-foreground text-center mt-3">
                Tela de confirmação do processo criado
              </p>
            </div>

            {/* Nota sobre NUP */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Info className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-2">
                    Nota Importante
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    No SEI!RIO não há "capa" com o mesmo layout do sistema anterior. A geração da pasta com o número (NUP) será exibida na lateral direita. Exemplo:
                  </p>
                  <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                    <span className="font-mono text-primary font-bold">
                      000704.000769/2025-67
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    Esse número deve constar nos documentos elaborados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
