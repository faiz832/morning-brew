"use client";

import { Camera, MessageCircle, Globe } from "lucide-react";

const footerLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Kontak", href: "#contact" },
];

const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: Globe, href: "#", label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="w-full bg-espresso px-6 py-16 text-cream md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-cream/10 pb-16 mb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 font-serif text-lg tracking-widest text-cream uppercase">
            Morning Brew
          </h3>
          <p className="max-w-xs font-sans text-xs leading-relaxed text-cream-dark/60">
            Kedai kopi artisan yang merayakan ritual, rasa, dan kebersamaan.
            Setiap cangkir diseduh dengan hati untuk kamu yang menghargai
            keindahan dalam kesederhanaan.
          </p>
        </div>

        <div>
          <h4 className="mb-4 block font-sans text-xs font-semibold tracking-widest text-cream-dark/40 uppercase">
            Navigasi
          </h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer font-sans text-xs text-cream-dark/80 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 block font-sans text-xs font-semibold tracking-widest text-cream-dark/40 uppercase">
            Sosial Media
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((social, si) => {
              const Icon = social.icon;
              const ariaLabels = ["Buka Instagram", "Buka Facebook", "Buka X / Twitter"];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={ariaLabels[si]}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-cream/10 text-cream-dark/60 transition-all hover:border-amber hover:bg-amber hover:text-white"
                >
                  <Icon className="h-4 w-4 stroke-[1.5]" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="mb-4 block font-sans text-xs font-semibold tracking-widest text-cream-dark/40 uppercase">
            Jurnal
          </h4>
          <p className="font-sans text-xs leading-relaxed text-cream-dark/60">
            Dapatkan notifikasi tentang seasonal roast terbaru, event
              cupping eksklusif, dan cerita di balik biji kopi pilihan kami.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-[10px] uppercase tracking-widest text-cream-dark/40 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Morning Brew. Hak cipta dilindungi.</p>
        <p className="text-center">Dibuat untuk yang menghargai keindahan dalam setiap tegukan.</p>
      </div>
    </footer>
  );
}
