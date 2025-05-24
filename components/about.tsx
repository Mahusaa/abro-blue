"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const carouselSlides = [
  {
    src: '/petani1.png',
    alt: 'Coffee farmer harvesting beans in Gayo highlands',
    title: 'Production and Geographic Condition',
    description: (
      <>
        <p>
          Nestled in the highlands at <span className='font-bold'>1,200-1,500 meters</span> above sea level, our <span className='font-bold'>70-hectare</ span>Arabica coffee farm thrives
          in a cool tropical climate ideal for specialty cultivation.
        </p>
        <p>
          We cultivate Sigararutang, Lini S-795, Ateng Super, and yellow Kopi varietals-known for their vibrant
          acidity and complex flavor profiles.
        </p>
      </>
    ),

  },
  {
    src: '/indo-coffee.png',
    alt: 'Coffee farmer harvesting beans in Gayo highlands',
    title: 'Production and Geographic Condition',
    description: (
      <>
        <p>
          Supported by a team of  <span className='font-bold'>50 local farmers</span>, our farm produces between  <span className='font-bold'>30-40 tons </span>of green beans per
          year, with volume variations depending on seasonal harvest conditions.
        </p>
        <p>
          Every bean reflects the integrity of our land, the precision of our process, and the passion of our people.
        </p>
      </>
    ),

  },
  {
    src: '/newimage2.jpg',
    alt: 'Coffee drying process in Aceh',
    title: 'AB-Roastery is your truly patner of indonesiam coffee',
    description: (
      <>
        Since 2019, grown on our own land in the highlands of West Java Island, Indonesia, our Arabica coffee is
        cultivated directly by us - the landowners and farmers - with a deep commitment to sustainability,
        transparency, and traceability.
        <div className="flex items-center gap-4 py-2">
          <div className="hidden md:block h-10 w-1 bg-[#1e3a6e]"></div>
          <p className="text-sm font-medium text-[#1e3a6e]">
            We dont just grow the beans - we also serve them. As coffee shop owners, we understand every stage of
            the journey from crop to cup, ensuring quality at the farm and the finish.
          </p>
        </div>
      </>
    ),
  },
  {
    src: '/newimage.jpg',
    alt: 'Close-up of Arabica coffee beans',
    title: 'Founder Says',
    description: (


      <>
        <div className="py-6 px-4 bg-white/50 rounded-lg">
          <p className="italic text-base md:text-lg text-[#1e3a6e] text-center">
            &quot;To make great coffee accessible to everyone, ensuring that every cup delivers quality and joy, no matter where you are.”
          </p>
        </div>
      </>


    ),
  },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);
  const total = carouselSlides.length;

  const prevImage = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Helper to get slide index with wrap-around
  const getIndex = (idx: number) => (idx + total) % total;

  return (
    <section id="about" className="w-full bg-[#f8f3e9] py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Layered Carousel */}
          <div className="relative mx-auto w-full max-w-md md:max-w-full mb-12 md:mb-0 flex flex-col items-center">
            <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center">
              {/* Previous image (left, behind, rotated) */}
              <div
                className="absolute left-6 md:left-16 top-6 md:top-10 w-[80%] h-[80%] md:w-[70%] md:h-[80%] rounded-2xl overflow-hidden shadow-lg"
                style={{
                  zIndex: 1,
                  transform: 'rotate(-7deg) scale(0.92)',
                  opacity: 0.5,
                  filter: 'grayscale(60%)',
                }}
              >
                <Image
                  src={carouselSlides[getIndex(current - 1)].src}
                  alt={carouselSlides[getIndex(current - 1)].alt}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
              {/* Next image (right, behind, rotated) */}
              <div
                className="absolute right-6 md:right-16 bottom-6 md:bottom-10 w-[80%] h-[80%] md:w-[70%] md:h-[80%] rounded-2xl overflow-hidden shadow-lg"
                style={{
                  zIndex: 1,
                  transform: 'rotate(7deg) scale(0.92)',
                  opacity: 0.5,
                  filter: 'grayscale(60%)',
                }}
              >
                <Image
                  src={carouselSlides[getIndex(current + 1)].src}
                  alt={carouselSlides[getIndex(current + 1)].alt}
                  fill
                  className="object-cover"
                  draggable={false}
                />
              </div>
              {/* Main image (center, on top) */}
              <div className="relative w-[90%] h-[90%] md:w-[85%] md:h-[90%] rounded-2xl overflow-hidden shadow-2xl z-10">
                <Image
                  src={carouselSlides[current].src}
                  alt={carouselSlides[current].alt}
                  fill
                  className="object-cover"
                  priority
                  draggable={false}
                />
              </div>
            </div>
            {/* Controls and indicators below image */}
            <div className="flex flex-col items-center gap-2 mt-4 z-10 relative">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevImage}
                  className="bg-[#f5c6c6]/80 hover:bg-[#f5c6c6] text-[#1e3a6e] rounded-full p-2 shadow-md"
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <div className="flex gap-2">
                  {carouselSlides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-2 w-2 rounded-full ${idx === current ? 'bg-[#1e3a6e]' : 'bg-[#f5c6c6]'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  className="bg-[#f5c6c6]/80 hover:bg-[#f5c6c6] text-[#1e3a6e] rounded-full p-2 shadow-md"
                  aria-label="Next image"
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Content section */}
          <div className="space-y-6 md:space-y-8">
            <div className="md:hidden">
              <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a6e]">
                {carouselSlides[current].title}
              </h2>
            </div>
            <div className="space-y-4 text-[#1e3a6e]/80">
              <h3 className="hidden md:block text-2xl md:text-3xl font-bold text-[#1e3a6e] mb-2">
                {carouselSlides[current].title}
              </h3>
              <div className="leading-relaxed lg:mt-8">
                {carouselSlides[current].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
