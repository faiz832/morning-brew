"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export function LocationCTA() {
  return (
    <section id="contact" className="w-full border-y border-espresso/5 bg-cream-dark/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="lg:col-span-5"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-coffee-light">
            Kunjungi Space Kami
          </p>

          <h2 className="mb-6 font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
            Ruang Ngopi yang Lambat dan Penuh Makna
          </h2>

          <p className="mb-2 font-sans text-base text-mocha/80">
            Jl. Setia Budi, Ngesrep, Kec. Banyumanik, Kota Semarang
          </p>

          <p className="mb-10 font-sans text-sm font-semibold text-espresso">
            Buka Setiap Hari — 07.00 - 24.00 WIB
          </p>

          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-espresso px-8 py-4 text-sm font-medium tracking-wide text-cream shadow-sm transition-all duration-300 hover:bg-coffee sm:w-auto"
          >
            <MessageSquare className="h-5 w-5 stroke-[1.5]" />
            Reservasi via WhatsApp
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-espresso/10 shadow-[0_20px_40px_rgba(45,26,14,0.04)] lg:col-span-7"
        >
          <iframe
            src="https://www.google.com/maps?q=Jl.+Setia+Budi+Ngesrep+Banyumanik+Semarang&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Morning Brew"
            className="h-full w-full rounded-3xl grayscale contrast-115 opacity-85 transition-all duration-1000 ease-out hover:grayscale-0 hover:opacity-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
