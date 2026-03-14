import { useState } from "react";
import { Menu, X, Timer } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Eventos", href: "#eventos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <Timer className="h-6 w-6 text-primary" strokeWidth={2.5} />
          <span className="font-satoshi text-lg font-black uppercase tracking-tight text-foreground">
            Chrono<span className="text-primary">Sport</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contacto"
          className="btn-mechanical hidden bg-primary text-primary-foreground md:inline-flex"
        >
          Cotizar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-card md:hidden">
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-mechanical mt-2 bg-primary text-center text-primary-foreground"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
