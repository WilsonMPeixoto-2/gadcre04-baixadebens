const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="font-display text-xl text-foreground">
            <span className="italic">Artista</span>
            <span className="text-gold">.</span>
          </a>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Todos os direitos reservados. Feito com paixão.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
