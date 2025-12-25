import { AlertTriangle, Folder, Lightbulb, ArrowRight, CheckCircle2, Info, FileText, ClipboardList } from "lucide-react";
import page1Image from "@/assets/page-1.jpg";
import page2Image from "@/assets/page-2.jpg";
import page3Image from "@/assets/page-3.jpg";

const PassoAPasso = () => {
  const camposTabela = [
    { 
      campo: "Tipo de Processo", 
      valor: "Baixa de Materiais",
      status: "fixo"
    },
    { 
      campo: "Especificação", 
      valor: "Baixa de Bens - 04.XX.XXX NOME DA ESCOLA",
      status: "variavel"
    },
    { 
      campo: "Classificação por Assuntos", 
      valor: "03.08.01 - Baixa de bem patrimonial",
      status: "fixo"
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
              
              <p className="font-body text-sm text-muted-foreground mb-4">Visualização do menu:</p>
              
              {/* SEI Menu mockup */}
              <div className="glass-card rounded-xl overflow-hidden max-w-md">
                <div className="bg-[#003366] text-white text-xs font-body py-2 px-4">
                  PREFEITURA DA CIDADE DO RIO DE JANEIRO
                </div>
                <div className="bg-white p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#003366] text-lg">sei!</span>
                      <span className="text-gray-600 text-sm">SEI - Prefeitura da Cidade do Rio de Janeiro</span>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-gray-300" />
                  </div>
                </div>
                <div className="bg-white p-3">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <span>🔍</span>
                    <span>Pesquisar no Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1.3 Pesquisar pelo Tipo de Processo */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-300">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.3. Pesquisar pelo Tipo de Processo
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Na tela que se abre, no campo{" "}
                <span className="text-foreground font-semibold">"Escolha o Tipo do Processo"</span>, digite{" "}
                <code className="bg-primary/10 text-primary px-2 py-0.5 rounded font-mono text-sm">"bai"</code>{" "}
                para filtrar a lista. Selecione a opção{" "}
                <span className="text-foreground font-semibold">"Baixa de Materiais"</span>{" "}
                que aparecerá.
              </p>
              
              {/* Search result mockup */}
              <div className="glass-card rounded-xl p-4 max-w-md">
                <p className="font-body text-xs text-muted-foreground mb-2">
                  Campo de pesquisa mostrando o resultado "Baixa de Materiais"
                </p>
                <div className="bg-card border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground">Tipo:</span>
                    <span className="font-body text-sm text-foreground font-medium">Baixa de Materiais</span>
                  </div>
                  <div className="w-full h-1 bg-primary/20 rounded-full">
                    <div className="w-full h-1 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1.4 Preencher os Campos Obrigatórios */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up delay-400">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.4. Preencher os Campos Obrigatórios
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Após selecionar "Baixa de Materiais", o formulário completo será exibido. 
                Preencha os campos conforme as orientações abaixo.
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
                      <tr className="border-b border-border">
                        <th className="text-left font-display font-bold text-foreground py-3 pr-4">
                          Campo
                        </th>
                        <th className="text-left font-display font-bold text-foreground py-3">
                          Valor a ser Preenchido
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {camposTabela.map((item, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="font-body text-foreground py-4 pr-4">
                            {item.campo}
                          </td>
                          <td className="font-body py-4">
                            <code className="bg-card border border-border/50 text-primary px-3 py-1.5 rounded text-sm font-mono">
                              {item.valor}
                            </code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Figura do formulário */}
              <div className="glass-card-hover rounded-xl overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={page2Image} 
                    alt="Formulário completo para iniciar processo de baixa de bens no SEI!RIO"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 border-t border-border/30">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Figura 1</span>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Formulário completo para iniciar processo de baixa de bens no SEI!RIO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Attention Box */}
          <div className="attention-box rounded-2xl mb-8 opacity-0 animate-fade-up delay-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-base font-bold text-foreground mb-4">
                  ⚠️ ATENÇÃO
                </h4>
                <ul className="font-body text-muted-foreground space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      No campo <span className="text-foreground font-semibold">Especificação</span>, substitua{' '}
                      <code className="bg-warning/20 text-warning px-2 py-0.5 rounded font-mono">04.XX.XXX</code>{' '}
                      pela designação numérica da sua unidade escolar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      Substitua{' '}
                      <code className="bg-warning/20 text-warning px-2 py-0.5 rounded font-mono">NOME DA ESCOLA</code>{' '}
                      pelo nome completo da unidade.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      Certifique-se de que o campo <span className="text-foreground font-semibold">Classificação por Assuntos</span>{' '}
                      está preenchido exatamente como:{' '}
                      <code className="bg-primary/10 text-primary px-2 py-0.5 rounded font-mono">03.08.01 - Baixa de bem patrimonial</code>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1.5 Criar o Documento Principal (Ofício) */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.5. Criar o Documento Principal (Ofício)
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Inclua um documento do tipo{" "}
                <span className="text-foreground font-semibold">Ofício</span>{" "}
                (Classificação 00.03.03.01) e utilize o texto padrão de solicitação de baixa. 
                Lembre-se de copiar a tabela de bens (disponível nos modelos) e colar no corpo do Ofício.
              </p>
            </div>
          </div>

          {/* 1.6 Anexar Documentos Obrigatórios */}
          <div className="glass-card rounded-2xl p-8 mb-8 opacity-0 animate-fade-up">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                1.6. Anexar Documentos Obrigatórios
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Inclua como <span className="text-foreground font-semibold">Documento Externo</span> os seguintes itens:
              </p>
              <ul className="space-y-3 font-body text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>
                    Arquivo com as <span className="text-foreground font-medium">Fotos</span> dos bens (utilize o modelo de fotos).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>
                    <span className="text-foreground font-medium">Laudo Técnico de Imprestabilidade</span>{" "}
                    (obrigatório para equipamentos de informática e eletrônicos).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Figure reference */}
          <div className="glass-card-hover rounded-xl overflow-hidden opacity-0 animate-fade-up group">
            <div className="relative overflow-hidden">
              <img 
                src={page3Image} 
                alt="Documentos obrigatórios e campos de atenção especial"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 border-t border-border/30">
              <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Figura 2</span>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Documentos obrigatórios e campos de atenção especial
              </p>
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
