import { AlertTriangle, Folder, Lightbulb } from "lucide-react";
import page2Image from "@/assets/page-2.jpg";
import page3Image from "@/assets/page-3.jpg";

const PassoAPasso = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Selecionar \"Iniciar Processo\"",
      descricao: "Após acessar o SEI!RIO com seu usuário e senha institucionais, localize, no menu lateral esquerdo, o comando \"Iniciar Processo\". É por meio dessa funcionalidade que será criada a \"capa\" do processo de Baixa de Bens.",
    },
    {
      numero: 2,
      titulo: "Pesquisar pelo Tipo de Processo",
      descricao: "Na tela que se abre, no campo Escolha o Tipo do Processo, digite \"bai\" para filtrar a lista. Selecione a opção Baixa de Materiais que aparecerá na listagem.",
    },
    {
      numero: 3,
      titulo: "Preencher os Campos Obrigatórios",
      descricao: "Após selecionar \"Baixa de Materiais\", o formulário completo será exibido. Preencha os campos conforme as orientações da tabela abaixo.",
    },
  ];

  const camposTabela = [
    { campo: "Tipo de Processo", valor: "Baixa de Materiais" },
    { campo: "Especificação", valor: "Baixa de Bens - 04.XX.XXX NOME DA ESCOLA" },
    { campo: "Classificação por Assuntos", valor: "03.08.01 - Baixa de bem patrimonial" },
  ];

  return (
    <section id="abertura" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
              1. Abertura do Processo no SEI!RIO
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {passos.map((passo, index) => (
              <div
                key={passo.numero}
                className="glass-card rounded-xl p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-justify">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabela de Preenchimento */}
          <div className="mt-8 glass-card rounded-xl overflow-hidden opacity-0 animate-fade-up delay-300">
            <div className="bg-primary/10 border-b border-border/50 px-6 py-4">
              <h3 className="font-display text-base font-bold text-primary flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Tabela de Preenchimento
              </h3>
            </div>
            <div className="p-5">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left font-body font-bold text-foreground py-3 pr-4 w-1/3">
                      Campo
                    </th>
                    <th className="text-left font-body font-bold text-foreground py-3">
                      Valor a ser Preenchido
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camposTabela.map((item, index) => (
                    <tr key={index} className="border-b border-border/30 last:border-0">
                      <td className="font-body font-medium text-muted-foreground py-4 pr-4">
                        {item.campo}
                      </td>
                      <td className="font-body text-foreground py-4">
                        <code className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-semibold">
                          {item.valor}
                        </code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attention Box */}
          <div className="mt-6 attention-box opacity-0 animate-fade-up delay-400">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                  Atenção
                </h4>
                <ul className="font-body text-muted-foreground space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>No campo <span className="text-foreground font-medium">Especificação</span>, substitua <code className="bg-warning/20 text-warning px-1.5 py-0.5 rounded font-medium">04.XX.XXX</code> pela designação numérica da sua unidade escolar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>Substitua <code className="bg-warning/20 text-warning px-1.5 py-0.5 rounded font-medium">NOME DA ESCOLA</code> pelo nome completo da unidade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>Certifique-se de que o campo <span className="text-foreground font-medium">Classificação por Assuntos</span> está preenchido exatamente como <code className="bg-warning/20 text-warning px-1.5 py-0.5 rounded font-medium">03.08.01 - Baixa de bem patrimonial</code>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Reference */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-up delay-300">
              <img 
                src={page2Image} 
                alt="Página 2 do POP - Formulário SEI"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-4 text-center border-t border-border/50">
                Formulário completo para iniciar processo de baixa de bens
              </p>
            </div>
            <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-up delay-400">
              <img 
                src={page3Image} 
                alt="Página 3 do POP - Documentos obrigatórios"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-4 text-center border-t border-border/50">
                Documentos obrigatórios e atenções
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
