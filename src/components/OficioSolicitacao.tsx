import { FileText, Info, Copy, Check } from "lucide-react";
import tabelaBensImage from "@/assets/tabela-bens.png";
import { useState } from "react";
import { toast } from "sonner";

const OficioSolicitacao = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const texto = `Ofício nº [ano/sequencial] – E/4ª CRE/GAD

Assunto: Solicitação de baixa de bens inservíveis

Prezada Coordenadora,

Informamos que, após conferência, foram identificados nesta unidade escolar os seguintes bens móveis que se encontram [obsoletos/imprestáveis/ou em desuso], conforme laudo técnico e registros fotográficos anexos. Solicitamos a baixa definitiva dos referidos bens no sistema de controle patrimonial.

Relação de bens:
[Tabela com: Nº do tombo | Descrição do bem | Estado | Observações]

Atenciosamente,

[Nome do(a) Diretor(a)]
Cargo – Unidade Escolar
[Unidade: código e nome]`;

    navigator.clipboard.writeText(texto);
    setCopied(true);
    toast.success("Modelo copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                2
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Elaboração do Ofício de Solicitação de Baixa
                  </h2>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Documento interno para formalizar a solicitação
                </p>
              </div>
            </div>
          </div>

          {/* Modelo de Ofício */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h3 className="font-display text-lg font-bold text-foreground">
                2.1. Modelo de Ofício
              </h3>
              <button 
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:opacity-90"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar modelo"}
              </button>
            </div>
            
            <div className="bg-white dark:bg-muted rounded-xl p-6 border border-border font-body text-foreground leading-relaxed">
              <p className="text-primary font-semibold mb-4">
                Ofício nº [ano/sequencial] – E/4ª CRE/GAD
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Assunto:</strong> Solicitação de baixa de bens inservíveis
              </p>
              <p className="mb-4">Prezada Coordenadora,</p>
              <p className="mb-4 text-justify">
                Informamos que, após conferência, foram identificados nesta unidade escolar os seguintes bens móveis que se encontram <span className="text-primary">[obsoletos/imprestáveis/ou em desuso]</span>, conforme laudo técnico e registros fotográficos anexos. Solicitamos a baixa definitiva dos referidos bens no sistema de controle patrimonial.
              </p>
              
              <p className="font-semibold mb-3">Relação de bens:</p>
              
              {/* Tabela de exemplo */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left py-2 px-3 border-b border-border font-semibold">Nº do tombo</th>
                      <th className="text-left py-2 px-3 border-b border-border font-semibold">Descrição do bem</th>
                      <th className="text-left py-2 px-3 border-b border-border font-semibold">Estado</th>
                      <th className="text-left py-2 px-3 border-b border-border font-semibold">Observações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">12345</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">Cadeira escolar</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">Imprestável</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">Quebrada, reparo antieconômico</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">...</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">...</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">...</td>
                      <td className="py-2 px-3 border-b border-border text-muted-foreground">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">Atenciosamente,</p>
              <p className="text-muted-foreground italic">[Nome do(a) Diretor(a)]</p>
              <p className="text-muted-foreground italic">Cargo – Unidade Escolar</p>
              <p className="text-muted-foreground italic">[Unidade: código e nome]</p>
            </div>

            {/* Imagem tabela de bens */}
            <div className="mt-6 bg-muted rounded-xl p-4 border border-border">
              <p className="font-body text-sm text-muted-foreground mb-3 text-center">Exemplo de tabela de bens:</p>
              <img 
                src={tabelaBensImage} 
                alt="Tabela de bens para baixa"
                className="w-full max-w-lg mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Assinatura e Inclusão */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              2.2. Assinatura e Inclusão
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <p className="font-body text-muted-foreground">
                  No SEI!RIO, selecione <span className="font-semibold text-foreground">"Incluir Documento Interno"</span> e escolha o tipo <span className="font-semibold text-foreground">"Ofício"</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <p className="font-body text-muted-foreground">
                  Preencha o campo Interessados com <span className="font-semibold text-foreground">E/4ª CRE/GAD – 10729</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
                <p className="font-body text-muted-foreground">
                  Utilize a redação sugerida acima, preenchendo a tabela com os dados dos bens.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</div>
                <p className="font-body text-muted-foreground">
                  Escolha o <span className="font-semibold text-foreground">Nível de Acesso como Público</span> e assine o documento com certificado digital.
                </p>
              </div>
            </div>
          </div>

          {/* Nota */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">
                Adapte o número do ofício (ano/sequencial) e a relação de bens conforme a necessidade. Caso a escola possua comissão de avaliação, pode ser citada no corpo do ofício.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OficioSolicitacao;
