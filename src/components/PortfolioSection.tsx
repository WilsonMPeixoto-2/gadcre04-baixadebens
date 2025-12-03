const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Lumière",
      category: "Branding",
      year: "2024",
      size: "large",
    },
    {
      id: 2,
      title: "Nova Era",
      category: "Web Design",
      year: "2024",
      size: "small",
    },
    {
      id: 3,
      title: "Essence",
      category: "UI/UX",
      year: "2023",
      size: "small",
    },
    {
      id: 4,
      title: "Horizonte",
      category: "Motion",
      year: "2023",
      size: "medium",
    },
    {
      id: 5,
      title: "Noir Collection",
      category: "Art Direction",
      year: "2024",
      size: "medium",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="opacity-0 animate-fade-up">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4">
              Trabalhos
              <br />
              <span className="italic text-gold-light">Selecionados</span>
            </h2>
          </div>
          
          <p className="opacity-0 animate-fade-up delay-200 font-body text-muted-foreground max-w-md mt-6 md:mt-0 md:text-right">
            Uma curadoria dos projetos mais significativos que definem minha jornada criativa.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg opacity-0 animate-scale-in cursor-pointer
                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "medium" ? "md:col-span-1 md:row-span-2" : ""}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative bg-charcoal-light ${
                project.size === "large" ? "aspect-[16/10]" : 
                project.size === "medium" ? "aspect-[9/16]" : "aspect-square"
              }`}>
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
                
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-gold/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold font-body text-xs tracking-widest uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display text-3xl text-foreground mt-2">
                      {project.title}
                    </h3>
                    <span className="font-body text-muted-foreground text-sm mt-2 block">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project info (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-gold/60 font-body text-xs tracking-widest uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-body text-muted-foreground text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 opacity-0 animate-fade-up delay-500">
          <button className="group inline-flex items-center gap-4 font-body text-foreground hover:text-gold transition-colors duration-300">
            <span className="tracking-wide">Ver todos os projetos</span>
            <span className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
