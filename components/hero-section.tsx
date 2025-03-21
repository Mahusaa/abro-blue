import Image from "next/image"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Award } from "lucide-react"
import Link from "next/link"
export default function HeroSection() {
  return (
    <section className="w-full relative text-white">
      {/* Background image for mobile only */}
      <div className="absolute inset-0 w-full h-full md:hidden">
        <Image
          src="/bean-hero.jpg"
          alt="Coffee beans background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1e3a6e]/85"></div>
      </div>

      {/* Regular background for desktop */}
      <div className="hidden md:block absolute inset-0 bg-[#1e3a6e]"></div>

      {/* Content container */}
      <div className="relative py-8 md:py-8 px-4 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#DAABAD] text-[#1e3a6e] hover:bg-[#f5c6c6] flex items-center gap-1">
                  Premium
                </Badge>
                <Badge className="bg-[#DAABAD] text-[#1e3a6e] hover:bg-[#f5c6c6] flex items-center gap-1">
                  Organic
                </Badge>
                <Badge className="bg-[#DAABAD] text-[#1e3a6e] hover:bg-[#f5c6c6] flex items-center gap-1">
                  Fairtrade
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-[#DAABAD]">Roasting Passion,</span>
                <br />
                <span className="text-white">Serving Perfection</span>
              </h1>
            </div>
            <p className="text-gray-200 max-w-[600px] leading-relaxed italic">
              At ABRoastery (ABR), we believe that coffee is more than just a taste—it’s energy, expression, and excitement! We’re here to bring vibrancy to your day with coffee that’sfull of character and positive vibes
            </p>

            {/* Certification section */}
            <div className="flex flex-row gap-4 py-2 bg-[#1e3a6e]/80 rounded p-3">
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-[#f5c6c6]" />
                <div>
                  <p className="font-medium text-sm">Control Union Certified</p>
                  <p className="text-xs text-gray-300">Organic Certification</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-[#f5c6c6]" />
                <div>
                  <p className="font-medium text-sm">Control Union Certified</p>
                  <p className="text-xs text-gray-300">Fairtrade Certification</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-2">
              <Link href="/products">
                <Button className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#e5b6b6] font-medium rounded-full px-6 py-3 md:px-8 md:py-6 w-full sm:w-auto">
                  Explore Our Collection
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop image gallery - hidden on mobile */}
          <div className="md:p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative hidden md:block">
                <div className="relative rounded-lg overflow-hidden h-96">
                  <Image
                    src="/machine-hero.jpeg"
                    alt="Barista pouring latte art"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a6e] to-transparent p-3">
                    <span className="text-sm font-medium text-[#DAABAD]">Specialty Grade Coffee</span>
                  </div>
                </div>
                <div className="mt-2 bg-[#1e3a6e]/80 p-3 rounded">
                  <p className="text-xs sm:text-sm italic text-[#DAABAD] font-serif">
                    {`“We carefully select and expertly roast our beans to bring out their unique flavors and aromas.”`}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex flex-col gap-3">
                <div className="bg-[#1e3a6e]/80 p-3 rounded mb-4">
                  <h3 className="text-[#DAABAD] font-medium">Sustainably Harvested</h3>
                  <p className="text-xs text-gray-300">Supporting 2000+ local farmers</p>
                </div>
                <div className="relative rounded-lg overflow-hidden h-80 w-48">
                  <Image
                    src="/bean-hero.jpg"
                    alt="Pouring cold brew coffee"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e3a6e] to-transparent p-3">
                    <span className="text-xs font-medium text-white">Naturally Processed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}
