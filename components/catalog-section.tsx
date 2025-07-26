import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Flame } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProducts } from "@/server/db/queries"

export default async function CoffeeCatalogTabs() {
  const allProduct = await getProducts()

  const greenCoffees = allProduct.filter(product =>
    product.category.toLowerCase().includes('green')
  )

  const roastedCoffees = allProduct.filter(product =>
    product.category.toLowerCase().includes('roasted')
  )


  const bgColor = "#FFFFFF"
  const primaryColor = "#9DC183" // Main green
  const secondaryColor = "#893F26" // Brown
  const textColor = "#000000" // Black

  return (
    <section id="catalog" className="w-full py-12" style={{ backgroundColor: bgColor }}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2" style={{ color: primaryColor }}>
            Kayana Collection
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
                    <div className="flex items-center gap-2">
                      <div className="rounded-full" style={{ backgroundColor: `${secondaryColor}20` }}>
                        <Leaf className="w-4 h-4" style={{ color: secondaryColor }} />
                      </div>
                      <span className="font-medium" style={{ color: secondaryColor }}>
                        Green
                      </span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger
                    value="roasted"
                    className="data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <div className="rounded-full" style={{ backgroundColor: `${primaryColor}20` }}>
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
                    {greenCoffees.map((coffee) => (
                      <div
                        key={coffee.id}
                        className="p-2.5 rounded-lg flex items-center"
                        style={{ backgroundColor: `${secondaryColor}10` }}
                      >
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: secondaryColor }}></span>
                        <span className="font-medium" style={{ color: textColor }}>
                          {coffee.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="roasted" className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {roastedCoffees.map((coffee) => (
                      <div
                        key={coffee.id}
                        className="p-2.5 rounded-lg flex items-center"
                        style={{ backgroundColor: `${primaryColor}10` }}
                      >
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: primaryColor }}></span>
                        <span className="font-medium" style={{ color: primaryColor }}>
                          {coffee.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <p className="text-gray-400 text-sm">*Contact us for pricing details (negotiable)</p>
              </Tabs>

              {/* View All Button */}
              <div>
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
