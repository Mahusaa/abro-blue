import Image from "next/image"
import {
  Leaf,
  Coffee,
  Heater,
  Sprout,
} from "lucide-react"
import HeroSection from "@/components/hero-section"
import CatalogSection from "@/components/catalog-section"
import AboutSection from "@/components/about"
import AdvantagesSection from "@/components/advantage"
import Contact from "@/components/contact"

export default function CoffeeBeanShop() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <main className="flex-1">
        <HeroSection />
        <section className="w-full bg-[#FFFFFF] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Fixed categories with consistent height and alignment */}
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-[#9DC183]/10 p-2 rounded-full mb-2">
                  <Leaf className="h-5 w-5 text-[#9DC183]" />
                </div>
                <span className="text-sm font-medium text-[#000000]">Green Coffee Beans</span>
              </div>
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-[#9DC183]/10 p-2 rounded-full mb-2">
                  <Heater className="h-5 w-5 text-[#9DC183]" />
                </div>
                <span className="text-sm font-medium text-[#000000]">Roasted Coffee Beans</span>
              </div>
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-[#9DC183]/10 p-2 rounded-full mb-2">
                  <Sprout className="h-5 w-5 text-[#9DC183]" />
                </div>
                <span className="text-sm font-medium text-[#000000]">Ground Coffee</span>
              </div>
              <div className="flex flex-col items-center text-center h-full">
                <div className="bg-[#9DC183]/10 p-2 rounded-full mb-2">
                  <Coffee className="h-5 w-5 text-[#9DC183]" />
                </div>
                <span className="text-sm font-medium text-[#000000]">Ready to drink coffee</span>
              </div>
            </div>
          </div>
        </section>
        {/* Catalog Section */}
        <section id="motto" className="w-full bg-[#9DC183] py-12">
          <div className="px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
              <div className="md:w-1/6 flex justify-center">
                <Image
                  src="/3prod.png"
                  alt="Coffee beans"
                  width={150}
                  height={225}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-4/6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Coffee is more than just a taste
                </h2>
                <p className="text-white/90 text-lg leading-relaxed italic">
                  &quot;At Kayana, we believe that coffee is more than just a taste—it’s
                  energy, expression, and excitement! We’re here to bring vibrancy to your
                  day with coffee that’sfull of character and positive vibes&quot;
                </p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/6 flex justify-center">
                <Image
                  src="/kaleng.png"
                  alt="Coffee package"
                  width={150}
                  height={225}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <CatalogSection />
        <AdvantagesSection />
        <AboutSection />
        <Contact />
      </main>
    </div>
  )
}


