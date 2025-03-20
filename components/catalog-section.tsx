import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoffeeCatalogTabs() {
  const coffeeTypes = [
    "Arabika Gayo Speciality",
    "Arabica Gayo Premium",
    "Arabica Gayo Grade 1",
    "Arabika Gayo Asalan",
    "Robusta Gayo",
  ]

  const bgColor = "#f5f2e9"
  const primaryColor = "#2a4178" // Navy blue
  const secondaryColor = "#0a4d2e" // Dark green
  const textColor = "#5d6b8a" // Gray-blue

  return (
    <section className="w-full py-12" style={{ backgroundColor: bgColor }}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-block  rounded-lg px-4 py-1 mb-4" style={{ backgroundColor: secondaryColor }}>
            <span className="text-[#f5f2e9] font-medium">Our Catalog</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2" style={{ color: primaryColor }}>
            AB Roastery Collection
          </h2>
          <p className="max-w-[700px] md:text-xl/relaxed" style={{ color: textColor }}>
            Explore our selection of premium coffee beans, available as green (unroasted) or expertly roasted to bring
            out their unique flavor profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image on the left */}
          <div className="relative overflow-hidden">
            <Image
              src="/3product.png"
              alt="Gayo Coffee Varieties"
              width={900}
              height={600}
              className="object-cover w-full"
            />
          </div>

          {/* Catalog on the right */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col gap-6">
              {/* Coffee Varieties */}
              <Tabs defaultValue="green" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6" style={{ backgroundColor: bgColor }}>
                  <TabsTrigger
                    value="green"
                    className="data-[state=active]:text-white"
                  >
                    <div className=" rounded-full" style={{ backgroundColor: `${secondaryColor}20` }}>
                      <Leaf className="w-4 h-4" style={{ color: secondaryColor }} />
                    </div>
                    <span className="font-medium" style={{ color: secondaryColor }}>
                      Green
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="roasted"
                    className="data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <div className=" rounded-full" style={{ backgroundColor: `${primaryColor}20` }}>
                        <Flame className="w-4 h-4" style={{ color: primaryColor }} />
                      </div>
                      <span className="font-medium" style={{ color: primaryColor }}>
                        Roasted
                      </span>
                    </div>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="green" className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {coffeeTypes.map((coffee, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-lg  flex items-center"
                        style={{ backgroundColor: `${secondaryColor}10` }}
                      >
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: secondaryColor }}></span>
                        <span className="font-medium" style={{ color: textColor }}>
                          {coffee}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="roasted" className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {coffeeTypes.map((coffee, index) => (
                      <div
                        key={index}
                        className="p-2.5 rounded-lg  flex items-center"
                        style={{ backgroundColor: `${primaryColor}10` }}
                      >
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: primaryColor }}></span>
                        <span className="font-medium" style={{ color: primaryColor }}>
                          {coffee}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* View All Button */}
              <div className="mt-2">
                <Link href="/products">
                  <Button
                    className="gap-2 w-full text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    View All Products
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


