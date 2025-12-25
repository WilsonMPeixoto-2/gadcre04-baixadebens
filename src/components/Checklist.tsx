import { useState } from "react";
import { FileCheck, RotateCcw, CheckCircle2 } from "lucide-react";

const checklistItems = [
  { id: 1, label: "Ofício de solicitação de Baixa de Bens - 04.XX.XXX NOME DA ESCOLA" },
  { id: 2, label: "Relação dos bens a serem baixados (tabela no corpo do Ofício)" },
  { id: 3, label: "Fotos dos bens (modelo disponibilizado pela GAD)" },
  { id: 4, label: "Laudo Técnico de Imprestabilidade (para equipamentos de TI)" },
  { id: 5, label: "Termo de Responsabilidade assinado" },
];

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

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

  return (
    <section id="checklist" className="py-16 md:py-20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3 opacity-0 animate-fade-up">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  Checklist de Documentos
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  Marque os documentos já incluídos no processo
                </p>
              </div>
            </div>
            
            <button
              onClick={clearAll}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors opacity-0 animate-fade-up"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="font-body text-sm hidden sm:inline">Limpar</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="glass-card rounded-xl p-4 mb-6 opacity-0 animate-fade-up delay-100">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-muted-foreground">Progresso</span>
              <span className="font-display text-sm font-bold text-primary">
                {checkedItems.length} de {checklistItems.length} ({Math.round(progress)}%)
              </span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-cyan-glow transition-all duration-500 ease-out"
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
                className={`w-full glass-card rounded-xl p-4 flex items-start gap-4 text-left transition-all duration-200 opacity-0 animate-fade-up ${
                  checkedItems.includes(item.id) 
                    ? "border-success/30 bg-success/5" 
                    : "hover:border-primary/30"
                }`}
                style={{ animationDelay: `${150 + index * 50}ms` }}
              >
                <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                  checkedItems.includes(item.id)
                    ? "border-success bg-success text-primary-foreground"
                    : "border-border hover:border-primary"
                }`}>
                  {checkedItems.includes(item.id) && (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                </div>
                <div className="flex-1">
                  <span className="font-display text-sm font-bold text-muted-foreground mr-2">
                    {String(item.id).padStart(2, '0')}º
                  </span>
                  <span className={`font-body text-sm transition-colors ${
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
        </div>
      </div>
    </section>
  );
};

export default Checklist;
