import { useState, useEffect } from "react";
import { ClipboardCheck, RotateCcw, CheckCircle2, Circle, Sparkles } from "lucide-react";

const checklistItems = [
  { id: 1, label: 'Processo iniciado no SEI!RIO como "Baixa de bens: baixa de bens móveis"' },
  { id: 2, label: "Campo Especificação preenchido com código e nome da escola" },
  { id: 3, label: "Classificação por Assuntos escolhida: 03.08.01 – Baixa de bens móveis" },
  { id: 4, label: "Ofício de solicitação de baixa incluído, com tabela de bens" },
  { id: 5, label: "Laudo(s) técnico(s) de imprestabilidade/obsolescência assinado(s)" },
  { id: 6, label: "Registros fotográficos anexados" },
  { id: 7, label: "Documento de Baixa (DB) emitido pela GAD (será incluso após a autorização)" },
  { id: 8, label: "Processo encaminhado para E/4ª CRE/GAD" },
];

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('pop-baixa-checklist');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pop-baixa-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: number) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const clearAll = () => {
    setCheckedItems([]);
  };

  const progress = (checkedItems.length / checklistItems.length) * 100;
  const isComplete = progress === 100;

  return (
    <section id="checklist" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground font-display text-2xl font-bold">
                6
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  Checklist de Documentos
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Verifique os itens antes de encaminhar o processo
                </p>
              </div>
            </div>
            
            <button
              onClick={clearAll}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all border border-border"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Reiniciar</span>
            </button>
          </div>

          {/* Progress Card */}
          <div className={`bg-card border rounded-2xl p-6 mb-6 transition-all duration-500 ${
            isComplete ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 'border-border'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {isComplete ? (
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div>
                  <span className="font-display text-sm font-bold text-foreground block">
                    {isComplete ? 'Processo Completo!' : 'Progresso'}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {checkedItems.length} de {checklistItems.length} itens
                  </span>
                </div>
              </div>
              <span className={`font-display text-3xl font-black ${isComplete ? 'text-green-600 dark:text-green-400' : 'text-primary'}`}>
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out rounded-full ${
                  isComplete 
                    ? 'bg-green-500' 
                    : 'bg-primary'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {checklistItems.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`w-full bg-card border rounded-xl p-4 flex items-center gap-4 text-left transition-all duration-200 ${
                  checkedItems.includes(item.id) 
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20" 
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                  checkedItems.includes(item.id)
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-border"
                }`}>
                  {checkedItems.includes(item.id) ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Circle className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <span className={`font-display text-sm font-bold w-6 shrink-0 ${
                    checkedItems.includes(item.id) ? 'text-green-600 dark:text-green-400' : 'text-primary'
                  }`}>
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span className={`font-body text-sm transition-all ${
                    checkedItems.includes(item.id) 
                      ? "text-muted-foreground line-through" 
                      : "text-foreground"
                  }`}>
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Completion Message */}
          {isComplete && (
            <div className="mt-8 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Parabéns! 🎉
              </h3>
              <p className="font-body text-muted-foreground max-w-md mx-auto">
                Todos os documentos foram verificados. Seu processo de Baixa de Bens está pronto para análise pela GAD.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Checklist;
