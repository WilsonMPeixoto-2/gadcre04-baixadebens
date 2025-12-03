import { AlertTriangle, FileText, Camera, ClipboardCheck } from "lucide-react";
import page2Image from "@/assets/page-2.jpg";
import page3Image from "@/assets/page-3.jpg";

const PassoAPasso = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Iniciar o Processo no SEI! RIO",
      descricao: "No menu lateral esquerdo do sistema SEI! RIO, localize e clique em Iniciar Processo.",
      icon: FileText,
    },
    {
      numero: 2,
      titulo: "Pesquisar pelo Tipo de Processo",
      descricao: "Na tela que se abre, no campo Escolha o Tipo do Processo, digite 'bai' para filtrar a lista. Selecione a opção Baixa de Materiais que aparecerá.",
      icon: ClipboardCheck,
    },
    {
      numero: 3,
      titulo: "Preencher os Campos Obrigatórios",
      descricao: "Após selecionar 'Baixa de Materiais', o formulário completo será exibido. Preencha os campos conforme as orientações da tabela.",
      icon: FileText,
    },
  ];

  const camposTabela = [
    { campo: "Tipo de Processo", valor: "Baixa de Materiais" },
    { campo: "Especificação", valor: "Baixa de Bens - 04.XX.XXX NOME DA ESCOLA" },
    { campo: "Classificação por Assuntos", valor: "03.08.01 - Baixa de bem patrimonial" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <span className="inline-block font-body text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Procedimento
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Baixa de Bens
            </h2>
            <p className="font-body text-muted-foreground">
              Inservíveis / Irrecuperáveis
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {passos.map((passo, index) => (
              <div
                key={passo.numero}
                className="bg-card rounded-2xl shadow-soft p-6 md:p-8 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="step-number shrink-0">
                    {passo.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {passo.titulo}
                    </h3>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabela de Preenchimento */}
          <div className="mt-12 bg-card rounded-2xl shadow-soft overflow-hidden opacity-0 animate-fade-up delay-500">
            <div className="bg-primary px-6 py-4">
              <h3 className="font-display text-xl font-semibold text-primary-foreground">
                Tabela de Preenchimento
              </h3>
            </div>
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-body font-semibold text-foreground py-3 pr-4">
                      Campo
                    </th>
                    <th className="text-left font-body font-semibold text-foreground py-3">
                      Valor a ser Preenchido
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {camposTabela.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 last:border-0">
                      <td className="font-body text-foreground/80 py-4 pr-4">
                        {item.campo}
                      </td>
                      <td className="font-body text-foreground py-4">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
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
          <div className="mt-8 attention-box opacity-0 animate-fade-up delay-500">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  ATENÇÃO
                </h4>
                <ul className="font-body text-foreground/80 space-y-2 text-sm">
                  <li>
                    • No campo <strong>Especificação</strong>, substitua <code className="bg-accent/20 px-1 rounded">.XX.XXX</code> pela 
                    designação numérica da sua unidade escolar.
                  </li>
                  <li>
                    • Substitua <code className="bg-accent/20 px-1 rounded">NOME DA ESCOLA</code> pelo nome completo da unidade.
                  </li>
                  <li>
                    • Certifique-se de que o campo <strong>Classificação por Assuntos</strong> está preenchido 
                    exatamente como <code className="bg-accent/20 px-1 rounded">03.08.01 - Baixa de bem patrimonial</code>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Reference */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl shadow-card overflow-hidden opacity-0 animate-fade-up delay-300">
              <img 
                src={page2Image} 
                alt="Página 2 do POP - Formulário SEI"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-3 text-center">
                Figura: Formulário completo para iniciar processo de baixa de bens
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-card overflow-hidden opacity-0 animate-fade-up delay-400">
              <img 
                src={page3Image} 
                alt="Página 3 do POP - Documentos obrigatórios"
                className="w-full h-auto"
              />
              <p className="font-body text-xs text-muted-foreground p-3 text-center">
                Figura: Documentos obrigatórios e atenções
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassoAPasso;
