import type { Metadata } from "next";
import { Playfair_Display, Quicksand, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/lenis";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://morningbrew.example.com";

export const metadata: Metadata = {
  title: {
    default: "Morning Brew | Kopi Artisan Premium",
    template: "%s — Morning Brew",
  },
  description:
    "Bangun & hirup aroma kopi di Morning Brew — kedai kopi lokal dengan minuman buatan tangan sejak 2024.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Morning Brew",
    title: "Morning Brew | Kopi Artisan Premium",
    description:
      "Kedai kopi artisan yang merayakan ritual, rasa, dan kebersamaan. Setiap cangkir diseduh dengan hati.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Brew | Kopi Artisan Premium",
    description:
      "Kedai kopi artisan yang merayakan ritual, rasa, dan kebersamaan. Setiap cangkir diseduh dengan hati.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${quicksand.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
