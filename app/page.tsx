import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { BestSeller } from "@/components/sections/best-seller";
import { MenuPreview } from "@/components/sections/menu-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationCTA } from "@/components/sections/location-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-cream text-espresso selection:bg-amber selection:text-white">
        <Hero />
        <About />
        <BestSeller />
        <MenuPreview />
        <Testimonials />
        <LocationCTA />
      </main>
      <Footer />
    </>
  );
}
