import { useState, useEffect } from "react";
import { ClipboardCheck, RotateCcw, CheckCircle2, Circle, Sparkles } from "lucide-react";

const checklistItems = [
  { id: 1, label: "Processo iniciado no SEI!RIO como \"Baixa de Materiais\"" },
  { id: 2, label: "Campo Especificação preenchido com código e nome da escola" },
  { id: 3, label: "Classificação por Assuntos: 03.08.01 - Baixa de bem patrimonial" },
  { id: 4, label: "Ofício de solicitação de Baixa de Bens incluído" },
  { id: 5, label: "Relação dos bens (tabela) inserida no corpo do Ofício" },
  { id: 6, label: "Fotos dos bens anexadas (modelo GAD)" },
  { id: 7, label: "Laudo Técnico de Imprestabilidade (se aplicável)" },
  { id: 8, label: "Termo de Responsabilidade assinado anexado" },
  { id: 9, label: "Processo enviado para E/4ª CRE/GAD" },
];

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pop-baixa-checklist');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on change
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
    <section id="checklist" className="py-20 md:py-28 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-4 opacity-0 animate-fade-up">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-glow">
                <span className="font-display text-2xl font-black text-primary">04</span>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-primary mb-1">Seção</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Checklist de Documentos
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Marque os itens já incluídos no processo
                </p>
              </div>
            </div>
            
            <button
              onClick={clearAll}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all opacity-0 animate-fade-up border border-border/30"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Reiniciar</span>
            </button>
          </div>

          {/* Progress Card */}
          <div className={`glass-card rounded-2xl p-6 mb-8 opacity-0 animate-fade-up delay-100 transition-all duration-500 ${
            isComplete ? 'border-success/50 bg-success/5' : ''
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {isComplete ? (
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-success" />
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
              <span className={`font-display text-3xl font-black ${isComplete ? 'text-success' : 'text-primary'}`}>
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out rounded-full ${
                  isComplete 
                    ? 'bg-gradient-to-r from-success to-success/70' 
                    : 'bg-gradient-to-r from-primary to-cyan-glow'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`w-full glass-card rounded-xl p-5 flex items-center gap-4 text-left transition-all duration-300 opacity-0 animate-fade-up group ${
                  checkedItems.includes(item.id) 
                    ? "border-success/40 bg-success/5" 
                    : "hover:border-primary/40 hover:bg-primary/5"
                }`}
                style={{ animationDelay: `${150 + index * 40}ms` }}
              >
                <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                  checkedItems.includes(item.id)
                    ? "border-success bg-success text-primary-foreground scale-110"
                    : "border-border group-hover:border-primary group-hover:scale-105"
                }`}>
                  {checkedItems.includes(item.id) ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <span className={`font-display text-sm font-bold w-8 shrink-0 ${
                    checkedItems.includes(item.id) ? 'text-success' : 'text-primary'
                  }`}>
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <span className={`font-body text-base transition-all duration-300 ${
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
            <div className="mt-8 glass-card rounded-2xl p-8 text-center border-2 border-success/30 bg-gradient-to-br from-success/10 to-transparent animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-success" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
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
