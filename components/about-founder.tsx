import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Coffee, Target, Compass, Globe, DollarSign, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutFounder() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="w-full bg-[#1e3a6e] text-white py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 px-4 md:px-0">
            <div className="w-full">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1 md:gap-3 text-sm">
                <Link href="/" className="hover:underline flex items-center text-white/80">
                  Home
                  <ChevronRight className="h-4 w-4 ml-1 mt-0.5" />
                </Link>
                <span className="text-sm text-[#f5c6c6]">About us</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-white">
                Abroastery
              </h1>
            </div>
          </div>


        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-16 md:py-24 bg-[#f8f3e9]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#f5c6c6]">Our Vision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a6e]">COFFEE FOR EVERYONE</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#104B2B] p-3 rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xl md:text-2xl leading-relaxed text-[#1e3a6e]">
                  To make great coffee accessible to everyone, ensuring that every cup delivers both quality and joy,
                  no matter where you are.
                </p>
              </div>
            </div>
            <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
              <p className="text-[#1e3a6e] font-medium italic">
                &quot;Great coffee shouldnt be a luxury. It should be an everyday joy accessible to everyone.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#104B2B] text-white hover:bg-[#104B2B] mb-4">Our Mission</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a6e] mb-6">HOW WE MAKE IT HAPPEN</h2>
            <p className="text-[#1e3a6e]/80 text-lg max-w-3xl mx-auto">
              Our mission guides every decision we make, from sourcing to distribution, ensuring we stay true to our
              vision of making great coffee accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#f8f3e9] p-8 rounded-xl shadow-md">
              <div className="bg-[#104B2B] h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-4">Source the Best, for Everyone</h3>
              <p className="text-[#1e3a6e]/80">
                Select and roast high-quality coffee beans to ensure that great coffee is accessible to all around the
                world.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1e3a6e]/10">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#104B2B]" />
                  <span className="text-sm font-medium text-[#1e3a6e]">Global Sourcing Network</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f3e9] p-8 rounded-xl shadow-md">
              <div className="bg-[#104B2B] h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-4">Make Quality Affordable</h3>
              <p className="text-[#1e3a6e]/80">
                Provide premium coffee at fair prices so everyone can enjoy a great cup without compromise.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1e3a6e]/10">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#104B2B]" />
                  <span className="text-sm font-medium text-[#1e3a6e]">Fair Trade Partnerships</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f3e9] p-8 rounded-xl shadow-md">
              <div className="bg-[#104B2B] h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-4">Expand Reach, Share the Passion</h3>
              <p className="text-[#1e3a6e]/80">
                Bring our coffee to more people through various channels, making quality coffee available anywhere.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1e3a6e]/10">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#104B2B]" />
                  <span className="text-sm font-medium text-[#1e3a6e]">Worldwide Distribution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-[#f8f3e9]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#f5c6c6] mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a6e] mb-6">THE FOUNDERS</h2>
            <p className="text-[#1e3a6e]/80 text-lg max-w-3xl mx-auto">
              Gayo Bean was founded by three passionate individuals with deep connections to the coffee industry and a
              shared vision for making quality coffee accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Founder 1 */}
            <div className="text-center">
              <div className="mx-auto mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-[#104B2B]">
                  <Image
                    src="/abdulghany.png"
                    alt="Ahmad Rizki"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-1">Abdul Ghany Kusumah</h3>
              <p className="text-[#104B2B] font-medium mb-6">President Comissioner</p>

              <div className="space-y-3 mb-6 text-left">
                <ul className="text-[#1e3a6e]/80 text-sm space-y-1">
                  <li>• Business Director at PT Bentala Visus Nagari (IT Holding Company)</li>
                  <li>• Owner & President of AB&Co Consulting</li>
                  <li>• Owner & President of ABR Coffee</li>
                  <li>• Business Owner in the F&B Industry</li>
                  <li>• Senior Management Consultant at Altha</li>
                  <li>• Junior Management Consultant at Boston Consulting Group</li>
                </ul>
              </div>
            </div>


            {/* Founder 3 */}
            <div className="text-center">
              <div className="mx-auto mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-[#104B2B]">
                  <Image
                    src="/billal.png"
                    alt="Budi Santoso"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-1"> Muhammad Pizzaro A</h3>
              <p className="text-[#104B2B] font-medium mb-6">CEO</p>

              <div className="space-y-3 mb-6 text-left">
                <ul className="text-[#1e3a6e]/80 text-sm space-y-1">
                  <li>• CPO at Khas Studio</li>
                  <li>• Founder & CEO of PT Lamoenan Diraya Rasamulya</li>
                  <li>• COO of PT Catur Elang Pancarasa</li>
                  <li>• Co-Founder & CEO of Kioto Japanese Food</li>
                  <li>• Co-Founder & CEO of Japanizu</li>
                  <li>• Co-Founder & CEO of PT Anugrah Bisnis Consulting</li>
                  <li>• Researcher at PT Segara Evlogia Nusantara</li>
                </ul>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="text-center">
              <div className="mx-auto mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-[#104B2B]">
                  <Image
                    src="/rizkyputra.png"
                    alt="Siti Aminah"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a6e] mb-1"> Muhammad Rizky Pradeza</h3>
              <p className="text-[#104B2B] font-medium mb-6">Co - CEO</p>

              <div className="space-y-3 mb-6 text-left">
                <ul className="text-[#1e3a6e]/80 text-sm space-y-1">
                  <li>• Business Consultant at Plantations Internationals</li>
                  <li>• Senior Sales & Marketing at PT. Multiviscomindo</li>
                  <li>• Founder of KOPINDO</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}


