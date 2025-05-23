import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#f8f3e9] py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex flex-col items-center justify-center text-center ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a6e]">
            SUSTAINABLE COFFEE CULTIVATION
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative mx-auto w-full max-w-md md:max-w-full mb-12 md:mb-0">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/petani1.png" // Replace with your first farmer image
                alt="Coffee farmer harvesting beans in Gayo highlands"
                fill
                className="object-cover"
              />
            </div>

            {/* Secondary floating image - positioned differently on mobile */}
            <div className="absolute -bottom-6 right-4 md:-top-8 md:-right-8 h-[140px] w-[140px] md:h-[180px] md:w-[180px] rounded-2xl overflow-hidden shadow-lg border-4 border-white rotate-6">
              <Image
                src="/petani2.png" // Replace with your second farmer image
                alt="Coffee drying process in Aceh"
                fill
                className="object-cover"
              />
            </div>

            {/* Quote card - adjusted for better mobile positioning */}
            <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-lg max-w-[260px] md:max-w-[280px]">
              <div className="text-[#1e3a6e] text-3xl md:text-4xl font-serif mb-1">&quot;</div>
              <p className="text-[#1e3a6e] text-sm md:text-base font-medium italic">
                To make great coffee accessible to everyone, ensuring that every cup delivers quality and joy, no matter where you are.
              </p>
              <p className="text-[#1e3a6e]/70 text-xs md:text-sm mt-2">— Founder</p>
            </div>
          </div>

          {/* Content section - improved for mobile */}
          <div className="space-y-6 md:space-y-8">
            <div className="md:hidden">
              <Badge className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#f5c6c6]">Our Story</Badge>
              <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a6e]">
                SUSTAINABLE COFFEE CULTIVATION
              </h2>
            </div>

            <div className="space-y-4 text-[#1e3a6e]/80">
              <p className="leading-relaxed lg:mt-8">
                AB Roastery (ABR) is dedicated to empowering farmers by enhancing their economic stability and business growth. Through continuous support, training, and facility development, ABR helps farmers improve their skills, leading to increased coffee production and quality.
              </p>

              <div className="flex items-center gap-4 py-2">
                <div className="hidden md:block h-10 w-1 bg-[#1e3a6e]"></div>
                <p className="text-base md:text-lg font-medium text-[#1e3a6e]">
                  Supporting over 2,000 coffee farmers across 35 villages in Central Aceh
                </p>
              </div>

              <p className="leading-relaxed">
                ABR promotes environmental conservation by educating members on sustainable farming. Prioritizing biodiversity and responsible land use, it ensures ecological balance while maintaining high-quality coffee cultivation. Overseeing extensive Arabica plantations, ABR produces world-renowned Gayo Arabica Coffee, cultivating premium Typica and Catimor varieties while preserving tradition and innovation.
              </p>

              {/* Statistics row - made responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-4">
                <div className="text-center p-3 md:p-4 rounded-lg bg-white/50">
                  <p className="text-xl md:text-2xl font-bold text-[#1e3a6e]">48,300</p>
                  <p className="text-xs md:text-sm text-[#1e3a6e]/70">Hectares Cultivated</p>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg bg-white/50">
                  <p className="text-xl md:text-2xl font-bold text-[#1e3a6e]">1.2M+</p>
                  <p className="text-xs md:text-sm text-[#1e3a6e]/70">Kg Exported Annually</p>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg bg-white/50">
                  <p className="text-xl md:text-2xl font-bold text-[#1e3a6e]">100%</p>
                  <p className="text-xs md:text-sm text-[#1e3a6e]/70">Certified Sustainable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
