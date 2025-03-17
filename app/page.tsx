import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Check,
  Award,
  Leaf,
  Coffee,
  Heater,
  Sprout,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"

export default function CoffeeBeanShop() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f3e9]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="w-full bg-[#f8f3e9] py-8">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-[#104B2B]/10 p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-[#104B2B]" />
                </div>
                <span className="text-sm font-medium text-[#104B2B]">Green Coffee Beans</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-[#104B2B]/10 p-2 rounded-full">
                  <Heater className="h-5 w-5 text-[#104B2B]" />
                </div>
                <span className="text-sm font-medium text-[#104B2B]">Roasted Coffee Beans</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-[#104B2B]/10 p-2 rounded-full">
                  <Sprout className="h-5 w-5 text-[#104B2B]" />
                </div>
                <span className="text-sm font-medium text-[#104B2B]">Ground Coffee</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-[#104B2B]/10 p-2 rounded-full">
                  <Coffee className="h-5 w-5 text-[#104B2B]" />
                </div>
                <span className="text-sm font-medium text-[#1e3a6e]">Ready to drink coffee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section id="catalog" className="w-full bg-[#DAABAD] py-12">
          <div className="px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
              {/* Left Image */}
              <div className="md:w-1/6 flex justify-center">
                <Image
                  src="/beans.png"
                  alt="Coffee beans"
                  width={150}
                  height={225}
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text Content */}
              <div className="md:w-4/6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#f8f3e9] mb-4">
                  Coffee is more that just a taste
                </h2>
                <p className="text-[#f8f3e9]/80 text-lg leading-relaxed italic">
                  &quot;At ABRoastery (ABR), we believe that coffee is more than just a taste—it’s
                  energy, expression, and excitement! We’re here to bring vibrancy to your
                  day with coffee that’sfull of character and positive vibes&quot;
                </p>
              </div>

              {/* Right Image */}
              <div className="md:w-1/6 flex justify-center">
                <Image
                  src="/example.png"
                  alt="Coffee package"
                  width={150}
                  height={225}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>



        {/* About Us Section */}
        <section id="about" className="w-full bg-[#f8f3e9] py-24">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Coffee plantation in Gayo highlands"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg max-w-[300px]">
                  <p className="text-[#1e3a6e] font-medium italic">
                    &quot;Our mission is to bring the unique flavor of Gayo coffee to the world while supporting local
                    farmers in Aceh, Indonesia.&quot;
                  </p>
                  <p className="text-[#1e3a6e]/70 text-sm mt-2">— Ahmad Rizki, Founder</p>
                </div>
              </div>

              <div className="space-y-8">
                <Badge className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#f5c6c6]">Our Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a6e]">THE GAYO COFFEE HERITAGE</h2>
                <div className="space-y-4 text-[#1e3a6e]/80">
                  <p className="leading-relaxed">
                    Nestled in the highlands of Aceh, Indonesia, the Gayo region is renowned for producing some of the
                    world`s most distinctive coffee. Our journey began in 2012 when we established direct relationships
                    with local farmers to bring these exceptional beans to coffee enthusiasts worldwide.
                  </p>
                  <p className="leading-relaxed">
                    Gayo coffee is known for its unique processing method called wet-hulling or Giling Basah,which
                    contributes to its distinctive earthy, spicy, and sometimes herbal flavor profile. The region`s high
                    altitude, volcanic soil, and ideal climate create perfect conditions for growing exceptional coffee.
                  </p>
                  <p className="leading-relaxed">
                    We work directly with farming cooperatives in the Gayo highlands, ensuring fair compensation and
                    sustainable farming practices. By cutting out middlemen, we`re able to provide higher quality beans
                    at better prices while supporting the local economy.
                  </p>
                </div>
                <Button className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#e5b6b6] rounded-full px-8 py-6">
                  Learn More About Gayo Coffee
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section id="advantages" className="w-full bg-[#1e3a6e] text-white py-24">
          <div className="p-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <Badge className="bg-[#daabad] text-[#1e3a6e] hover:bg-[#f5c6c6] mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Gayo Bean Difference</h2>
              <p className="text-gray-300 text-lg">
                What sets our coffee apart isn`t just the exceptional taste, but our commitment to quality,
                sustainability, and the perfect coffee experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1e3a6e]/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#f5c6c6]/30 transition-all">
                <div className="bg-[#f5c6c6] h-12 w-12 flex items-center justify-center rounded-full mb-6">
                  <Leaf className="h-6 w-6 text-[#1e3a6e]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Direct Trade</h3>
                <p className="text-gray-300 leading-relaxed">
                  We work directly with farmers in the Gayo highlands, ensuring fair wages and sustainable farming
                  practices. Every bean can be traced back to its origin, and we pay premium prices to support farming
                  communities.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Fair compensation for farmers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Sustainable farming practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Community development programs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e3a6e]/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#f5c6c6]/30 transition-all">
                <div className="bg-[#f5c6c6] h-12 w-12 flex items-center justify-center rounded-full mb-6">
                  <Coffee className="h-6 w-6 text-[#1e3a6e]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Traditional Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our beans are processed using the traditional wet-hulling method that gives Gayo coffee its
                  distinctive character. We honor these time-tested techniques while ensuring the highest quality
                  standards.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Traditional wet-hulling process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Small-batch roasting for freshness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Strict quality control standards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e3a6e]/40 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-[#f5c6c6]/30 transition-all">
                <div className="bg-[#f5c6c6] h-12 w-12 flex items-center justify-center rounded-full mb-6">
                  <Award className="h-6 w-6 text-[#1e3a6e]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Unique Flavor Profile</h3>
                <p className="text-gray-300 leading-relaxed">
                  Gayo coffee is known for its distinctive flavor profile that sets it apart from other origins.
                  Experience the unique earthy, herbal, and sometimes spicy notes that make Gayo coffee special.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Distinctive regional characteristics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Multiple varieties and processing methods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#f5c6c6]" />
                    <span className="text-sm text-gray-300">Cupping scores of 80-86+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Map */}
        <section id="contact" className="w-full bg-[#f5c6c6] py-20">
          <div className="container">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <Badge className="bg-[#104B2B] text-white hover:bg-[#104B2B] mb-4">Visit Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a6e] mb-4">Experience Gayo Coffee</h2>
              <p className="text-[#1e3a6e]/80 text-lg">
                Visit our shop to experience the unique flavor of Gayo coffee, meet our team, and learn more about our
                sourcing practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-[#1e3a6e] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#104B2B]/10 p-3 rounded-full">
                      <MapPin className="text-[#104B2B] h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1e3a6e]">Address</p>
                      <p className="text-[#1e3a6e]/80">123 Coffee Street, Bean City, BC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#104B2B]/10 p-3 rounded-full">
                      <Phone className="text-[#104B2B] h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1e3a6e]">Phone</p>
                      <p className="text-[#1e3a6e]/80">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#104B2B]/10 p-3 rounded-full">
                      <Mail className="text-[#104B2B] h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1e3a6e]">Email</p>
                      <p className="text-[#1e3a6e]/80">hello@gayobean.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#104B2B]/10 p-3 rounded-full">
                      <Clock className="text-[#104B2B] h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1e3a6e]">Hours</p>
                      <p className="text-[#1e3a6e]/80">Monday - Friday: 7am - 7pm</p>
                      <p className="text-[#1e3a6e]/80">Saturday - Sunday: 8am - 6pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#1e3a6e] mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg">
                {/* This would be replaced with an actual map component in production */}
                <div className="absolute inset-0 bg-[#104B2B]/10 flex items-center justify-center">
                  <p className="text-[#1e3a6e] bg-white px-4 py-2 rounded-lg shadow">
                    Interactive Map Would Be Displayed Here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e3a6e] text-white py-12 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-[#f5c6c6]" />
                <span className="text-xl font-bold">GAYO BEAN</span>
              </div>
              <p className="text-sm text-gray-300">
                Premium Gayo coffee beans from Aceh, Indonesia. Ethically sourced, traditionally processed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/products?type=green" className="hover:text-[#f5c6c6] transition-colors">
                    Green Beans
                  </Link>
                </li>
                <li>
                  <Link href="/products?type=roasted" className="hover:text-[#f5c6c6] transition-colors">
                    Roasted Beans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Brewing Equipment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Gift Cards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Subscriptions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#about" className="hover:text-[#f5c6c6] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#f5c6c6] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Gayo Bean Coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


