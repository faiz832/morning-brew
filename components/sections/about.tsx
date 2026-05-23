"use client";

import { motion } from "framer-motion";
import { Coffee, Bean, Flame, Timer, Compass } from "lucide-react";

const pillars = [
  {
    icon: Bean,
    title: "Single Origin 100%",
    desc: "Setiap cangkir terlacak langsung dari petani mikro-lot, memastikan biji kopi etis dengan skor SCA minimal 85+.",
  },
  {
    icon: Flame,
    title: "Roasting Batch Kecil",
    desc: "Disangrai dengan tangan dalam batch 5kg untuk mengunci aroma floral, fruity, dan kompleks yang alami.",
  },
  {
    icon: Timer,
    title: "Ekstraksi Presisi",
    desc: "Kami memperlakukan seduhan sebagai ilmu. Suhu air, ukuran gilingan, dan kecepatan tuang dikalibrasi setiap hari hingga ke gram.",
  },
  {
    icon: Compass,
    title: "Ruang Kerja & Ritual",
    desc: "Dirancang sebagai ruang arsitektural yang nyaman. Dilengkapi Wi-Fi kencang, colokan listrik, dan tempat duduk yang nyaman.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const pillarVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
};

export function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <Coffee className="mx-auto h-6 w-6 stroke-[1.25] text-coffee-light" />

          <h2 className="mt-4 mb-6 font-serif text-4xl font-light uppercase tracking-tight text-espresso md:text-5xl">
            Seni Menyeduh dengan Penuh Kesadaran
          </h2>

          <p className="mx-auto max-w-2xl text-center font-sans text-base leading-relaxed text-mocha/80">
            Kami percaya kopi lebih dari sekadar kafein — ia adalah kerajinan,
            ritual, dan jembatan antara manusia. Dari biji yang bersumber secara
            etis hingga cangkir yang diseduh dengan presisi, setiap detail
            memiliki tujuan. Selamat datang di ruang di mana kualitas bertemu
            dengan kehangatan, dan setiap tegukan bercerita.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={pillarVariants}
                className="text-center"
              >
                <Icon className="mx-auto mb-6 h-8 w-8 stroke-[1.25] text-coffee-light" />
                <h3 className="mb-3 font-serif text-lg font-medium tracking-wide uppercase text-espresso">
                  {p.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-mocha/70">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
