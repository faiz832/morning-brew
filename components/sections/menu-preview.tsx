"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

interface Item {
  name: string;
  desc: string;
  price: string;
}

interface SubCategory {
  title: string;
  items: Item[];
}

const coffeeBase: SubCategory[] = [
  {
    title: "Kopi Hitam & Espresso",
    items: [
      { name: "Espresso", desc: "Satu shot murni, pekat, dengan crema sempurna.", price: "Rp25.000" },
      { name: "Kopi Tubruk", desc: "Seduhan tradisional khas Jawa dengan rasa kuat.", price: "Rp22.000" },
      { name: "Americano", desc: "Espresso ditambah air panas, lembut dan ringan.", price: "Rp28.000" },
      { name: "Long Black", desc: "Double shot di atas air panas, crema kaya.", price: "Rp32.000" },
    ],
  },
  {
    title: "Manual Brew / V60",
    items: [
      { name: "V60 Single Origin", desc: "Penyeduhan lambat, hasil bersih dengan aroma bunga.", price: "Rp45.000" },
      { name: "Japanese Iced Coffee", desc: "Seduhan langsung di atas es, segar dan aromatik.", price: "Rp50.000" },
      { name: "Cold Brew", desc: "Rendaman 16 jam, manis alami tanpa rasa asam.", price: "Rp40.000" },
      { name: "Vietnam Drip", desc: "Tetesan lambat dengan susu kental manis.", price: "Rp35.000" },
    ],
  },
];

const milkBase: SubCategory[] = [
  {
    title: "Kopi Susu Spesial",
    items: [
      { name: "Es Kopi Susu Aren", desc: "Espresso dengan gula aren asli dan susu segar.", price: "Rp35.000" },
      { name: "Kafe Latte", desc: "Espresso seimbang dengan susu hangat yang lembut.", price: "Rp38.000" },
      { name: "Cappuccino", desc: "Perpaduan espresso, susu hangat, dan busa tebal.", price: "Rp38.000" },
      { name: "Flat White", desc: "Micro-foam beludru di atas double ristretto.", price: "Rp42.000" },
      { name: "Cortado", desc: "Espresso dengan sedikit susu hangat, gaya Spanyol.", price: "Rp35.000" },
      { name: "Caramel Macchiato", desc: "Lapisan karamel manis di atas latte lembut.", price: "Rp45.000" },
    ],
  },
  {
    title: "Non-Kopi & Alternatif",
    items: [
      { name: "Matcha Latte", desc: "Matcha kualitas Uji dengan susu hangat.", price: "Rp45.000" },
      { name: "Red Velvet Latte", desc: "Minuman lembut dengan cita rasa red velvet.", price: "Rp45.000" },
      { name: "Chocolate Artisanal", desc: "Dark chocolate 70% biji pilihan.", price: "Rp42.000" },
      { name: "Taro Latte", desc: "Taro asli dengan susu hangat, manis alami.", price: "Rp40.000" },
      { name: "Kopi Jahe Susu", desc: "Wedang kopi dengan jahe segar dan susu.", price: "Rp32.000" },
      { name: "Lychee Green Tea", desc: "Teh hijau dengan rasa leci yang segar.", price: "Rp35.000" },
    ],
  },
];

const tabs = [
  { id: "coffee", label: "Kopi Hitam & Manual Brew" },
  { id: "milk", label: "Kopi Susu & Alternatif" },
];

function MenuItemRow({ item }: { item: Item }) {
  return (
    <div className="group flex cursor-pointer items-baseline justify-between py-2">
      <div className="min-w-0 shrink">
        <span className="font-serif text-base font-medium text-espresso transition-colors group-hover:text-coffee-light">
          {item.name}
        </span>
        <span className="mt-0.5 block font-sans text-xs italic text-mocha/60">
          {item.desc}
        </span>
      </div>
      <div className="mx-4 h-px grow border-b border-dotted border-espresso/20" />
      <span className="shrink-0 font-mono text-sm font-semibold text-espresso">
        {item.price}
      </span>
    </div>
  );
}

function SubCategoryGroup({ cat }: { cat: SubCategory }) {
  return (
    <div>
      <h3 className="mb-4 border-b border-espresso/10 pb-2 font-serif text-xl tracking-wide uppercase text-coffee-light">
        {cat.title}
      </h3>
      {cat.items.map((item) => (
        <MenuItemRow key={item.name} item={item} />
      ))}
    </div>
  );
}

export function MenuPreview() {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <BookOpen className="mx-auto mb-4 h-6 w-6 stroke-[1.25] text-coffee-light" />

        <h2 className="text-center font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
          Menu Kami
        </h2>

        <p className="mx-auto mb-16 mt-6 max-w-xl text-center font-sans text-base text-mocha/70">
          Koleksi minuman pilihan dari racikan klasik Nusantara hingga kreasi
          kontemporer — setiap sajian dibuat dengan presisi dan hati.
        </p>

        <div className="mb-14 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? "cursor-pointer rounded-full bg-espresso px-6 py-2 font-sans text-sm font-medium text-cream transition-all"
                  : "cursor-pointer font-sans text-sm font-medium text-espresso/40 transition-colors hover:text-espresso/80"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "coffee" && (
            <motion.div
              key="coffee"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2"
            >
              {coffeeBase.map((cat) => (
                <SubCategoryGroup key={cat.title} cat={cat} />
              ))}
            </motion.div>
          )}

          {activeTab === "milk" && (
            <motion.div
              key="milk"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2"
            >
              {milkBase.map((cat) => (
                <SubCategoryGroup key={cat.title} cat={cat} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
