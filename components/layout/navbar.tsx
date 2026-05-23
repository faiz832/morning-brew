"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-espresso/5 bg-cream/80 py-4 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="cursor-pointer font-serif text-xl font-medium tracking-widest text-espresso uppercase"
        >
          Morning Brew
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative cursor-pointer font-sans text-xs uppercase tracking-widest text-espresso/70 transition-colors hover:text-espresso after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-coffee-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden cursor-pointer rounded-lg border border-espresso/20 px-4 py-2 text-xs uppercase tracking-widest text-espresso transition-all hover:bg-espresso hover:text-cream md:block"
        >
          Reservasi
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 cursor-pointer text-espresso md:hidden"
          aria-label="Buka menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-espresso/5 bg-cream/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block cursor-pointer rounded-lg px-4 py-3 font-sans text-sm font-medium text-espresso/70 transition-colors hover:bg-cream-dark/40 hover:text-espresso"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full cursor-pointer rounded-lg border border-espresso/20 px-4 py-3 text-center font-sans text-xs uppercase tracking-widest text-espresso transition-all hover:bg-espresso hover:text-cream"
                >
                  Reservasi
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
