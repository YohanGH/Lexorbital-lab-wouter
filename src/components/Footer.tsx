function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-white mt-16 py-8 border-t-2 border-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-1">LexOrbital-Lab</p>
            <p className="text-sm text-white/80">
              © {currentYear} Tous droits réservés
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold text-[var(--color-primary)] mb-1">
              ⚠️ Accessibilité
            </p>
            <p className="text-xs text-white/70">
              NON CONFORME
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
