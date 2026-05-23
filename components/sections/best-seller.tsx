"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

interface CardData {
  title: string;
  price: string;
  unit: string;
  rating: string;
  reviews: string;
  src: string;
  alt: string;
}

const cards: CardData[] = [
  {
    title: "Es Kopi Susu Aren",
    price: "Rp35.000",
    unit: "/ gelas",
    rating: "4.9",
    reviews: "1,2k",
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    alt: "Es Kopi Susu Aren",
  },
  {
    title: "Kopi Tubruk Asli",
    price: "Rp25.000",
    unit: "/ gelas",
    rating: "4.8",
    reviews: "856",
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    alt: "Kopi Tubruk Asli",
  },
  {
    title: "Vietnam Drip",
    price: "Rp30.000",
    unit: "/ gelas",
    rating: "4.7",
    reviews: "634",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Vietnam Drip",
  },
  {
    title: "Cappuccino Klasik",
    price: "Rp40.000",
    unit: "/ gelas",
    rating: "4.8",
    reviews: "978",
    src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
    alt: "Cappuccino Klasik",
  },
];

function BestSellerCard({ data, index }: { data: CardData; index: number }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] as const }}
      whileHover={{ y: -6 }}
      className="group block cursor-pointer"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber/10 to-coffee/20" />
        <Image
          src={data.src}
          alt={data.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute right-3 top-3 z-10 inline-flex cursor-pointer items-center gap-1 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-cream backdrop-blur-sm">
          <Star className="h-3 w-3 fill-amber text-amber" />
          {data.rating}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <h3 className="font-serif text-xl font-medium text-cream">
            {data.title}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between px-1 pt-5">
        <div>
          <span className="font-sans text-sm font-medium text-coffee-light">Rp</span>
          <span className="ml-0.5 font-serif text-xl font-bold text-espresso">
            {data.price.replace("Rp", "")}
          </span>
          <span className="ml-1 font-sans text-sm text-coffee-light/70">
            {data.unit}
          </span>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-espresso text-cream shadow-md transition-colors hover:bg-coffee"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.a>
  );
}

export function BestSeller() {
  return (
    <section id="best-seller" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
          Favorit Pelanggan
        </h2>

        <p className="mb-16 mt-4 max-w-xl font-sans text-base text-mocha/70">
          Pilihan terpopuler yang selalu menjadi favorit para tamu setia kami.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8">
          {cards.map((card, i) => (
            <BestSellerCard key={card.title} data={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
