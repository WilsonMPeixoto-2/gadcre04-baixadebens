import { FileText, FileCheck, Info, Download, FileInput, Upload, Lightbulb, AlertTriangle, Camera, ClipboardList } from "lucide-react";
import tabelaBensImage from "@/assets/tabela-bens.png";

const DocumentosObrigatorios = () => {
  const camposNF = [
    { campo: "TIPO DO DOCUMENTO", valor: 'Selecione "Nota Fiscal" (ou Recibo/Fatura)' },
    { campo: "DATA DO DOCUMENTO", valor: "Data de emissão da Nota" },
    { campo: "NÚMERO", valor: "Número da NF" },
    { campo: "NOME NA ÁRVORE", valor: "Nome da empresa emissora" },
    { campo: "FORMATO", valor: "Digitalizado nesta unidade" },
    { campo: "TIPO DE CONFERÊNCIA", valor: '"Cópia Simples" ou "Original"' },
    { campo: "NÍVEL DE ACESSO", valor: "Público" },
  ];

  const camposLaudo = [
    { campo: "TIPO DO DOCUMENTO", valor: 'Selecione "Laudo Técnico" ou "Registro Fotográfico"' },
    { campo: "DATA DO DOCUMENTO", valor: "Data de emissão do laudo, ou, no caso de fotos, data em que o registro foi feito" },
    { campo: "NÚMERO", valor: 'Caso não haja numeração oficial, gere sequência numérica (ex: "Registro fotográfico 01", "Registro fotográfico 02")' },
    { campo: "NOME NA ÁRVORE", valor: 'Ex: "Registro fotográfico_Cadeira_01" ou "Laudo de Imprestabilidade + designação + nome da UE"' },
    { campo: "FORMATO", valor: "Digitalizado nesta unidade" },
    { campo: "TIPO DE CONFERÊNCIA", valor: '"Cópia Simples" ou "Original"' },
    { campo: "NÍVEL DE ACESSO", valor: "Público" },
  ];

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

          {/* 3.1 Resumo do Preenchimento - Tabela NF */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                3.1. Resumo do Preenchimento
              </h3>
              
              {/* Tabela de campos */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-hero">
                      <th className="text-left font-display font-bold text-white py-3 px-4 rounded-tl-lg">
                        Campo
                      </th>
                      <th className="text-left font-display font-bold text-white py-3 px-4 rounded-tr-lg">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {camposNF.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                        <td className="font-body text-primary py-4 px-4 font-semibold uppercase text-sm">
                          {item.campo}
                        </td>
                        <td className="font-body text-foreground py-4 px-4">
                          {item.valor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3.2 Preencher Metadados */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-200">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="font-display text-lg font-black text-primary">3</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Preencher Metadados
                </h3>
              </div>

              <div className="space-y-6">
                {/* A - Tipo de Documento */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <span className="font-display text-sm font-bold text-primary">A</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Tipo de Documento</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Em "Tipo de Documento", selecione na barra de pesquisa o tipo que mais se adequar ao documento (extrato, nota de empenho, nota fiscal, etc.)
                    </p>
                  </div>
                </div>

                {/* B - Número */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <span className="font-display text-sm font-bold text-primary">B</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Número</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-2">
                      Em "Número", preencha, se houver, o número da Nota, o número da ata, ou, se possível, outra forma de identificação numérica do documento.
                    </p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed italic">
                      Se não houver nenhuma forma de identificar numericamente o documento, não preencher este campo.
                    </p>
                  </div>
                </div>

                {/* C - Data do Documento */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <span className="font-display text-sm font-bold text-primary">C</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Data do Documento</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Informe a data de emissão do documento (quando disponível no documento).
                    </p>
                  </div>
                </div>

                {/* D - Nome na Árvore */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <span className="font-display text-sm font-bold text-primary">D</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Nome na Árvore</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">
                      Este campo é fundamental para identificação singular do documento e pesquisas futuras para encontrá-lo.
                    </p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                      Cada documento deve ser cuidadosamente nomeado de forma que este seja único e não se confunda com outros similares.
                    </p>
                    
                    <div className="bg-muted/30 rounded-xl p-4 border border-border/50">
                      <p className="font-display text-sm font-bold text-foreground mb-2">Exemplos de nomenclatura:</p>
                      <ul className="space-y-1">
                        <li className="font-mono text-sm text-primary">NE- 1ª parcela/Janeiro - 2025</li>
                        <li className="font-mono text-sm text-primary">Nota de Empenho 2025NE001043 - GAD 4ª CRE</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Observação importante */}
              <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground mb-2">Observação importante</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      Na data de elaboração deste documento orientador, não há nomenclatura única oficial estipulada para cada documento.
                    </p>
                    <p className="font-body text-sm text-foreground font-semibold mb-3">
                      Regra de ouro: Nomeie cada documento de forma que a escolha seja tanto informativa quanto identificadora.
                    </p>
                    
                    <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                      <p className="font-display text-xs font-bold text-foreground mb-2">Estrutura sugerida:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Função do documento</span>
                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Dados relevantes</span>
                      </div>
                      <p className="font-body text-xs text-muted-foreground mt-2 italic">
                        Ex: Tipo (Ofício, NE, Extrato) → Mês de referência, objetivo, especificação
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3.3 Anexar Arquivo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="font-display text-lg font-black text-primary">4</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Anexar Arquivo
                </h3>
              </div>

              <div className="flex items-start gap-4">
                <Upload className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p className="font-body text-muted-foreground leading-relaxed">
                  Clique em <span className="font-semibold text-foreground">"Escolher arquivo"</span>, selecione o documento no seu computador e clique em <span className="font-semibold text-foreground">"Confirmar Dados"</span>.
                </p>
              </div>
            </div>
          </div>

          {/* 3.4 Orientações Importantes */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-400">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                3.5. Orientações Importantes e Dicas de Digitalização
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Para garantir a integridade e a correta indexação dos documentos no SEI, observe as seguintes práticas:
              </p>

              <div className="space-y-6">
                {/* Qualidade da Digitalização */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                  <div className="flex items-start gap-4">
                    <Camera className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">Qualidade da Digitalização</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        Certifique-se de que o documento físico esteja legível antes de digitalizá-lo. Configure o scanner para uma resolução de qualidade (recomenda-se 600 dpi ou superior) para garantir nitidez.
                      </p>
                    </div>
                  </div>
                </div>

                {/* O Preenchimento dos Dados */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                  <div className="flex items-start gap-4">
                    <ClipboardList className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">O Preenchimento dos Dados define o Nome do Arquivo</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">
                        Não é necessário renomear o arquivo no seu computador antes de anexá-lo (ex: scan001.pdf). O SEI ignora o nome original e gera automaticamente um novo nome na árvore de processos baseado nos campos que você preencher na tela de cadastro (Tipo de Documento, Número, Data, etc.).
                      </p>
                      <p className="font-body text-sm text-primary font-semibold">
                        Atenção: Por isso, preencha esses campos com exatidão para facilitar a busca futura.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gerenciamento de Tamanho */}
                <div className="bg-muted/30 rounded-xl p-5 border border-border/50">
                  <div className="flex items-start gap-4">
                    <FileCheck className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">Gerenciamento de Tamanho de Arquivo</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                        Caso o sistema bloqueie o anexo por exceder o limite de tamanho permitido, adote uma das seguintes soluções:
                      </p>
                      <ul className="space-y-2 mb-3">
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
                          Divida documentos muito longos em blocos menores (Partes 1, 2, etc.)
                        </li>
                      </ul>
                      <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2 inline-flex">
                        <Lightbulb className="w-4 h-4 text-primary" />
                        <span className="font-body text-sm text-foreground">
                          <span className="font-semibold">Ferramenta útil:</span> Para compactar ou dividir arquivos, você pode utilizar ferramentas gratuitas como o <a href="https://www.ilovepdf.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">iLovePDF</a>.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Header - Tópico 4: Autenticação de Documentos Externos */}
          <div className="relative rounded-2xl overflow-hidden mb-12 mt-20 opacity-0 animate-fade-up">
            <div className="bg-gradient-hero p-8 md:p-12">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 shadow-glow">
                  <span className="font-display text-2xl font-black text-white">4</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FileCheck className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
                      Autenticação de Documentos Externos
                    </h2>
                  </div>
                  <p className="font-body text-white/70">
                    Procedimento para validar documentos externos incluídos no SEI!RIO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4.1 Considerações Gerais */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-100">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                4.1. Considerações Gerais
              </h3>
              
              <div className="mb-6">
                <h4 className="font-display font-bold text-foreground mb-3">Entenda a diferença</h4>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Os documentos externos compreendem todos os arquivos (digitalizados ou nato digitais) que não são produzidos diretamente no sistema SEI!RIO, mas que integram o processo administrativo como elementos comprobatórios essenciais.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  No contexto da prestação de contas do PDDE, os documentos externos mais comuns incluem:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">Notas fiscais</span>
                  <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">Recibos</span>
                  <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">Comprovantes de pagamento</span>
                  <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">Extratos bancários</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4.2 Procedimento para Inclusão */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-200">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                4.2. Procedimento para Inclusão
              </h3>

              <div className="space-y-6">
                {/* Passo 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-display font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Iniciando a Inclusão</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      Localize e clique no ícone <span className="font-semibold text-foreground">"Incluir Documento"</span> na barra de ferramentas. No menu, selecione a opção <span className="font-semibold text-foreground">"EXTERNO"</span>.
                    </p>
                  </div>
                </div>

                {/* Passo 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-display font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Preenchimento dos Campos</h4>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      O sistema abrirá a tela <span className="font-semibold text-foreground">"Registrar Documento Externo"</span> com campos obrigatórios para identificação e catalogação do documento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4.3 Tabela para Laudo/Registro Fotográfico */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                4.3. Resumo do Preenchimento - Laudo e Registro Fotográfico
              </h3>
              
              {/* Tabela de campos */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-hero">
                      <th className="text-left font-display font-bold text-white py-3 px-4 rounded-tl-lg">
                        Campo
                      </th>
                      <th className="text-left font-display font-bold text-white py-3 px-4 rounded-tr-lg">
                        Valor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {camposLaudo.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                        <td className="font-body text-primary py-4 px-4 font-semibold uppercase text-sm">
                          {item.campo}
                        </td>
                        <td className="font-body text-foreground py-4 px-4 text-sm">
                          {item.valor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Nome na Árvore - Detalhamento */}
              <div className="bg-muted/30 rounded-xl p-5 border border-border/50 mb-6">
                <h4 className="font-display font-bold text-foreground mb-3">Nome na Árvore</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                  Este campo é fundamental para identificação singular do documento e pesquisas futuras para encontrá-lo.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Cada documento deve ser cuidadosamente nomeado de forma que este seja único e não se confunda com outros similares.
                </p>
                
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="font-display text-sm font-bold text-foreground mb-2">Exemplos de nomenclatura:</p>
                  <ul className="space-y-1">
                    <li className="font-mono text-sm text-primary">"Registro fotográfico_Cadeira_01"</li>
                    <li className="font-mono text-sm text-primary">"Laudo de Imprestabilidade + designação + nome da unidade escolar"</li>
                  </ul>
                </div>
              </div>

              {/* Observação importante */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground mb-2">Observação importante</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      Na data de elaboração deste documento orientador, não há nomenclatura única oficial estipulada para cada documento.
                    </p>
                    <p className="font-body text-sm text-foreground font-semibold mb-3">
                      Regra de ouro: Nomeie cada documento de forma que a escolha seja tanto informativa quanto identificadora.
                    </p>
                    
                    <div className="bg-background/50 rounded-lg p-3 border border-border/50">
                      <p className="font-display text-xs font-bold text-foreground mb-2">Estrutura sugerida:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Função do documento</span>
                        <span className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium">Dados relevantes</span>
                      </div>
                      <p className="font-body text-xs text-muted-foreground mt-2 italic">
                        Ex: Tipo (Ofício, NE, Extrato) → Mês de referência, objetivo, especificação
                      </p>
                    </div>
                  </div>
                </div>
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