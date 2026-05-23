"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const testimonials = [
  {
    quote: "Es Kopi Susu Aren di sini beda dari yang lain. Gula arennya asli, rasa karamelnya kerasa, dan nggak bikin enek. Udah jadi minuman wajib kalau mampir.",
    name: "Dian Permata",
    locator: "Pelanggan Setia, Srondol",
    rating: "5.0 ★ RASA",
  },
  {
    quote: "Pertama kali coba V60 Single Origin di sini, langsung jatuh hati. Bersih, aromatik, dan profil buahnya terasa banget. Baristanya jelas paham soal manual brewing.",
    name: "Rizky Ardiansyah",
    locator: "Peracik Kopi, Ngaliyan",
    rating: "5.0 ★ KUALITAS",
  },
  {
    quote: "Cold Brew-nya jadi andalan tiap sore. Manis alami, minim asam, dan teksturnya mulus. Tempatnya juga nyaman buat kerja dengan Wi-Fi cepat dan colokan di setiap sudut.",
    name: "Ahmad Fauzi",
    locator: "Pekerja Lepas, Gombel",
    rating: "4.9 ★ FASILITAS",
  },
  {
    quote: "Kopi Tubruk di sini mengingatkan saya pada seduhan di kampung halaman. Pekat, berkarakter, dan makin nikmat ditemani pisang goreng hangat. Perpaduan yang sempurna.",
    name: "Sari Wulandari",
    locator: "Mahasiswa, Tembalang",
    rating: "4.8 ★ CITA RASA",
  },
  {
    quote: "Cappuccino-nya seimbang — busanya tebal, espresso dengan susunya menyatu tanpa dominan satu sama lain. Suhu penyajiannya juga pas, tidak terlalu panas. Recommended.",
    name: "Fitriani Hasanah",
    locator: "Pelanggan Baru, Tembalang",
    rating: "4.8 ★ PENGALAMAN",
  },
  {
    quote: "Matcha Latte-nya pakai matcha Uji asli, bukan bubuk instan. Warnanya hijau pekat, rasanya autentik, dan manisnya pas di lidah. Alternatif yang pas buat yang tidak minum kopi.",
    name: "Budi Santoso",
    locator: "Kolega Kopi, Pedalangan",
    rating: "4.9 ★ ALTERNATIF",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;

    const startAnimation = async () => {
      await controls.start({
        x: [0, -scrollWidth],
        transition: {
          duration: scrollWidth / 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    startAnimation();
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollWidth = container.scrollWidth / 2;

    controls.start({
      x: [container.getBoundingClientRect().left > 0 ? container.scrollLeft - scrollWidth : container.scrollLeft, -scrollWidth],
      transition: {
        duration: scrollWidth / 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <section id="testimonials" className="overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
          Kata Mereka
        </h2>

        <p className="mb-16 mt-4 max-w-xl font-sans text-base text-mocha/70">
          Dengarkan langsung dari para tamu setia yang telah merasakan
          pengalaman ngopi di tempat kami.
        </p>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full overflow-hidden"
      >
        <motion.div
          animate={controls}
          className="flex gap-8 px-6"
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-95 shrink-0 flex-col justify-between rounded-3xl border border-espresso/5 bg-transparent p-8 shadow-[0_4px_20px_rgba(45,26,14,0.04)]"
            >
              <div>
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className="h-4 w-4 fill-gold"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="mb-6 font-serif text-base font-light italic leading-relaxed text-espresso/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div>
                <p className="font-sans text-sm font-semibold text-espresso">
                  {t.name}
                </p>
                <p className="mt-0.5 font-sans text-xs text-mocha/50">
                  {t.locator}
                </p>
                <p className="mt-2 font-sans text-[10px] font-medium tracking-widest text-gold">
                  {t.rating}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
