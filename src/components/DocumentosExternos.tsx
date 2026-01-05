import { FileInput, Upload, Camera, ClipboardList, Lightbulb, FileCheck, AlertTriangle, Info } from "lucide-react";

const camposTabela = [
  { campo: "Tipo de Documento", valor: 'Selecione "Laudo Técnico" ou "Registro Fotográfico"' },
  { campo: "Número", valor: 'Sequência numérica se não houver oficial (ex: "Laudo 01", "Registro fotográfico 01")' },
  { campo: "Data do Documento", valor: "Data de elaboração do laudo ou data das fotos" },
  { campo: "Nome na Árvore", valor: 'Ex: "Laudo_Imprestabilidade_Cadeiras" ou "Registro_fotográfico_Mesa_02"' },
  { campo: "Formato", valor: "Digitalizado nesta unidade" },
  { campo: "Tipo de Conferência", valor: "Cópia Simples" },
  { campo: "Nível de Acesso", valor: "Público" },
];

const DocumentosExternos = () => {
  return (
    <section id="documentos" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                4
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <FileInput className="w-5 h-5 text-primary" />
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                    Inclusão de Documentos Externos no SEI!RIO
                  </h2>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Anexar laudos, fotos e demais documentos digitalizados
                </p>
              </div>
            </div>
          </div>

          {/* 4.1 Procedimento Geral */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              4.1. Procedimento Geral
            </h3>
            
            <p className="font-body text-muted-foreground mb-6">
              Para cada laudo ou registro fotográfico, siga os passos:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <p className="font-body text-muted-foreground">
                  No processo aberto, clique em <span className="font-semibold text-foreground">"Incluir Documento"</span> e selecione <span className="font-semibold text-foreground">"Externo"</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <p className="font-body text-muted-foreground">
                  Preencha os campos conforme a tabela abaixo.
                </p>
              </div>
            </div>

            {/* Tabela de campos */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left font-display font-bold py-3 px-4 rounded-tl-lg text-sm">
                      Campo
                    </th>
                    <th className="text-left font-display font-bold py-3 px-4 rounded-tr-lg text-sm">
                      Orientação
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camposTabela.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-card"}>
                      <td className="font-body text-primary py-3 px-4 font-semibold text-sm border-b border-border">
                        {item.campo}
                      </td>
                      <td className="font-body text-foreground py-3 px-4 text-sm border-b border-border">
                        {item.valor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Anexar Arquivo */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Upload className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">
                Anexar Arquivo
              </h3>
            </div>
            <p className="font-body text-muted-foreground">
              Clique em <span className="font-semibold text-foreground">"Escolher arquivo"</span>, selecione o documento digitalizado (PDF ou JPEG) no seu computador e clique em <span className="font-semibold text-foreground">"Confirmar Dados"</span>.
            </p>
          </div>

          {/* 4.2 Digitalização e Qualidade */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-6">
              4.2. Digitalização e Qualidade
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Qualidade */}
              <div className="bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-2">Qualidade da Digitalização</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Garanta que o documento físico esteja legível. Utilize resolução de <span className="font-semibold text-foreground">300 ou 600 dpi</span> para assegurar nitidez.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nome do arquivo */}
              <div className="bg-muted/50 rounded-xl p-5 border border-border">
                <div className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-2">Nome do Arquivo</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      O nome que aparece na árvore do processo é definido pelos metadados preenchidos, não sendo necessário renomear o arquivo antes do upload.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tamanho */}
              <div className="bg-muted/50 rounded-xl p-5 border border-border md:col-span-2">
                <div className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-2">Gerenciamento de Tamanho</h4>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      Se o sistema bloquear o anexo por exceder o limite de tamanho:
                    </p>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        Reduza a resolução no momento da digitalização
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        Compacte o arquivo PDF
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        Divida documentos muito longos em blocos menores
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2 inline-flex">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <span className="font-body text-sm text-foreground">
                        <span className="font-semibold">Ferramenta útil:</span> <a href="https://www.ilovepdf.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">iLovePDF</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nome na Árvore */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              Orientação para "Nome na Árvore"
            </h3>
            
            <p className="font-body text-muted-foreground mb-4">
              Este campo é fundamental para identificação singular do documento e pesquisas futuras. Cada documento deve ser cuidadosamente nomeado de forma única.
            </p>

            <div className="bg-muted/50 rounded-xl p-4 border border-border mb-4">
              <p className="font-display text-sm font-bold text-foreground mb-2">Exemplos de nomenclatura:</p>
              <ul className="space-y-1">
                <li className="font-mono text-sm text-primary">"Registro_fotográfico_Cadeira_01"</li>
                <li className="font-mono text-sm text-primary">"Laudo_Imprestabilidade_Mesa_Escola_XYZ"</li>
                <li className="font-mono text-sm text-primary">"Nota_Fiscal_2025NE001043_GAD"</li>
              </ul>
            </div>

            {/* Observação importante */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-2">Regra de Ouro</h4>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    Nomeie cada documento de forma que a escolha seja tanto <span className="font-semibold text-foreground">informativa</span> quanto <span className="font-semibold text-foreground">identificadora</span>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Função do documento</span>
                    <span className="text-muted-foreground">+</span>
                    <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Dados relevantes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nota informativa */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">
                Na data de elaboração deste documento orientador, não há nomenclatura única oficial estipulada para cada documento. Use critérios claros e consistentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentosExternos;
