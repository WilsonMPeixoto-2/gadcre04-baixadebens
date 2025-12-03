import { AlertTriangle, Folder } from "lucide-react";
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
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10 opacity-0 animate-fade-up">
            <Folder className="w-7 h-7 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl text-primary font-semibold">
              1. Abertura do Processo no SEI!RIO
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {passos.map((passo, index) => (
              <div
                key={passo.numero}
                className="bg-card rounded-lg shadow-card border-l-4 border-primary p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-foreground/75 leading-relaxed text-justify">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabela de Preenchimento */}
          <div className="mt-10 bg-card rounded-lg shadow-card overflow-hidden opacity-0 animate-fade-up delay-300">
            <div className="bg-primary px-6 py-3">
              <h3 className="font-display text-lg font-semibold text-primary-foreground">
                Tabela de Preenchimento
              </h3>
            </div>
            <div className="p-5">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left font-body font-semibold text-primary py-3 pr-4 w-1/3">
                      Campo
                    </th>
                    <th className="text-left font-body font-semibold text-primary py-3">
                      Valor a ser Preenchido
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camposTabela.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 last:border-0">
                      <td className="font-body font-medium text-foreground py-4 pr-4">
                        {item.campo}
                      </td>
                      <td className="font-body text-foreground/85 py-4">
                        <code className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
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
          <div className="mt-8 bg-amber-light border-l-4 border-amber rounded-r-lg p-5 opacity-0 animate-fade-up delay-400">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-base font-bold text-foreground mb-3 uppercase tracking-wide">
                  Atenção
                </h4>
                <ul className="font-body text-foreground/80 space-y-2 text-sm leading-relaxed">
                  <li>
                    • No campo <strong className="text-foreground">Especificação</strong>, substitua <code className="bg-amber/20 text-foreground px-1.5 py-0.5 rounded font-medium">04.XX.XXX</code> pela 
                    designação numérica da sua unidade escolar.
                  </li>
                  <li>
                    • Substitua <code className="bg-amber/20 text-foreground px-1.5 py-0.5 rounded font-medium">NOME DA ESCOLA</code> pelo nome completo da unidade.
                  </li>
                  <li>
                    • Certifique-se de que o campo <strong className="text-foreground">Classificação por Assuntos</strong> está preenchido 
                    exatamente como <code className="bg-amber/20 text-foreground px-1.5 py-0.5 rounded font-medium">03.08.01 - Baixa de bem patrimonial</code>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Reference */}
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border/50 opacity-0 animate-fade-up delay-300">
              <img 
                src={page2Image} 
                alt="Página 2 do POP - Formulário SEI"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-3 text-center bg-muted/30">
                Formulário completo para iniciar processo de baixa de bens
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border/50 opacity-0 animate-fade-up delay-400">
              <img 
                src={page3Image} 
                alt="Página 3 do POP - Documentos obrigatórios"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-3 text-center bg-muted/30">
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
