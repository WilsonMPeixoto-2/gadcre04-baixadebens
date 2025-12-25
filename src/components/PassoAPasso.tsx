import { AlertTriangle, Folder, Lightbulb, ArrowRight, CheckCircle2, Info, MousePointer, Search, FileEdit } from "lucide-react";
import page2Image from "@/assets/page-2.jpg";
import page3Image from "@/assets/page-3.jpg";

const PassoAPasso = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Selecionar \"Iniciar Processo\"",
      descricao: "Após acessar o SEI!RIO com seu usuário e senha institucionais, localize, no menu lateral esquerdo, o comando \"Iniciar Processo\". É por meio dessa funcionalidade que será criada a \"capa\" do processo de Baixa de Bens.",
      icon: MousePointer,
      dica: "O menu lateral fica sempre visível após o login",
    },
    {
      numero: 2,
      titulo: "Pesquisar pelo Tipo de Processo",
      descricao: "Na tela que se abre, no campo Escolha o Tipo do Processo, digite \"bai\" para filtrar a lista. Selecione a opção Baixa de Materiais que aparecerá na listagem.",
      icon: Search,
      dica: "Digite apenas as 3 primeiras letras para facilitar a busca",
    },
    {
      numero: 3,
      titulo: "Preencher os Campos Obrigatórios",
      descricao: "Após selecionar \"Baixa de Materiais\", o formulário completo será exibido. Preencha os campos conforme as orientações da tabela abaixo.",
      icon: FileEdit,
      dica: "Atenção especial ao campo Especificação",
    },
  ];

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
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-up">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-glow">
              <span className="font-display text-2xl font-black text-primary">02</span>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">Seção</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Abertura do Processo no SEI!RIO
              </h2>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="space-y-6">
              {passos.map((passo, index) => (
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
                      
                      <p className="font-body text-muted-foreground leading-relaxed text-justify mb-4">
                        {passo.descricao}
                      </p>
                      
                      {/* Dica */}
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span className="font-body font-medium">{passo.dica}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabela de Preenchimento */}
          <div className="mt-12 glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-up delay-300">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-b border-border/50 px-6 md:px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Tabela de Preenchimento
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Preencha exatamente conforme indicado
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left font-display font-bold text-foreground py-4 pr-4 w-1/3">
                        Campo
                      </th>
                      <th className="text-left font-display font-bold text-foreground py-4 pr-4">
                        Valor a ser Preenchido
                      </th>
                      <th className="text-center font-display font-bold text-foreground py-4 w-24">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {camposTabela.map((item, index) => (
                      <tr key={index} className="border-b border-border/30 last:border-0 hover:bg-primary/5 transition-colors">
                        <td className="font-body font-semibold text-foreground py-5 pr-4">
                          {item.campo}
                        </td>
                        <td className="font-body text-foreground py-5 pr-4">
                          <code className="bg-card border border-border/50 text-primary px-4 py-2 rounded-lg text-sm font-mono font-semibold inline-block">
                            {item.valor}
                          </code>
                        </td>
                        <td className="py-5 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-body ${
                            item.status === 'fixo' 
                              ? 'bg-success/10 text-success' 
                              : 'bg-warning/10 text-warning'
                          }`}>
                            {item.status === 'fixo' ? 'Fixo' : 'Variável'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Attention Box */}
          <div className="mt-8 attention-box rounded-2xl opacity-0 animate-fade-up delay-400">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-base font-bold text-foreground mb-4">
                  ⚠️ Atenção às Substituições
                </h4>
                <ul className="font-body text-muted-foreground space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      No campo <span className="text-foreground font-semibold">Especificação</span>, substitua{' '}
                      <code className="bg-warning/20 text-warning px-2 py-1 rounded font-mono font-semibold">04.XX.XXX</code>{' '}
                      pela <span className="text-foreground font-medium">designação numérica da sua unidade escolar</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      Substitua{' '}
                      <code className="bg-warning/20 text-warning px-2 py-1 rounded font-mono font-semibold">NOME DA ESCOLA</code>{' '}
                      pelo <span className="text-foreground font-medium">nome completo oficial</span> da sua unidade.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-background/50">
                    <ArrowRight className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                    <span>
                      O campo <span className="text-foreground font-semibold">Classificação por Assuntos</span> deve estar{' '}
                      <span className="text-foreground font-medium">exatamente</span> como:{' '}
                      <code className="bg-primary/10 text-primary px-2 py-1 rounded font-mono font-semibold">03.08.01 - Baixa de bem patrimonial</code>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Reference */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="glass-card-hover rounded-2xl overflow-hidden opacity-0 animate-fade-up delay-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={page2Image} 
                  alt="Página 2 do POP - Formulário SEI"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 border-t border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Figura 1</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Formulário completo para iniciar processo de baixa de bens no SEI!RIO
                </p>
              </div>
            </div>
            <div className="glass-card-hover rounded-2xl overflow-hidden opacity-0 animate-fade-up delay-400 group">
              <div className="relative overflow-hidden">
                <img 
                  src={page3Image} 
                  alt="Página 3 do POP - Documentos obrigatórios"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 border-t border-border/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">Figura 2</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Documentos obrigatórios e campos de atenção especial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
