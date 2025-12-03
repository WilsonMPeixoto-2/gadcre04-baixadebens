import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-2xl text-foreground hover:text-gold transition-colors duration-300">
          <span className="italic">Artista</span>
          <span className="text-gold">.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Portfolio", "Sobre", "Serviços", "Contato"].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block gold-border px-6 py-2 font-body text-sm tracking-wide text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300">
          Iniciar Projeto
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-px bg-foreground" />
          <span className="w-4 h-px bg-gold" />
          <span className="w-6 h-px bg-foreground" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
