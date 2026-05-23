"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-[90vh] w-full bg-cream lg:min-h-screen">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 md:pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-coffee-light"
          >
            <Sparkles className="h-3.5 w-3.5 stroke-[1.5]" />
            Spesialis Kopi Artisan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="mb-8 font-serif text-5xl font-light leading-[1.05] tracking-tight text-espresso md:text-6xl lg:text-7xl"
          >
            Dipilih dengan penuh hormat.{" "}
            <span className="font-normal italic text-coffee-light">
              Diseduh untuk jiwa yang teliti.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="mb-12 max-w-xl font-sans text-base leading-relaxed text-mocha/80 md:text-lg"
          >
            Selamat datang di ruang ngopi yang lambat dan penuh makna. Setiap
            biji dipanggang segar setiap hari, dikalibrasi hingga ke gram
            terakhir, dan diracik untuk mengubah ritual sederhana menjadi
            pengalaman rasa yang tak terlupakan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#menu"
              whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-espresso px-8 py-4 text-sm font-medium tracking-wide text-cream shadow-sm transition-all duration-300 hover:bg-coffee"
            >
              Jelajahi Menu Kami
              <ArrowRight className="h-4 w-4 stroke-[1.5]" />
            </motion.a>

            <motion.a
              href="#contact"
              whileTap={{ scale: 0.98 }}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-espresso/20 px-8 py-4 text-sm font-medium tracking-wide text-espresso transition-all duration-300 hover:bg-cream-dark/40"
            >
              Temukan Slow Bar Kami
              <MapPin className="h-4 w-4 stroke-[1.5]" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-espresso/5 shadow-[0_20px_50px_rgba(45,26,14,0.06)] lg:col-span-5 lg:max-w-none"
        >
          <Image
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"
            alt="Proses penyeduhan kopi pour-over"
            fill
            className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cream/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
