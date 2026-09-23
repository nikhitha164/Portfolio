import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform origin-left z-50"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          open
            ? "bg-background border-b border-border py-4"
            : scrolled
              ? "glass-nav py-4"
              : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#hero" onClick={close} className="text-xl font-mono font-bold tracking-tighter text-primary">
            Nikhitha<span className="text-foreground"> A</span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border border-primary/30 text-primary text-sm font-mono rounded hover:bg-primary/10 transition-colors"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="md:hidden container mx-auto px-6 pt-4 pb-2 flex flex-col"
          >
            {[...navLinks, { name: "Contact", href: "#contact" }].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={close}
                className="py-3 text-base font-mono text-muted-foreground hover:text-primary border-b border-border/40 last:border-b-0 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
