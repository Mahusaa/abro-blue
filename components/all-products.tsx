"use client"
import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Product } from "@/server/db/schema"

export default function AllProducts({ products }: { products: Product[] }) {
  const [tab] = useState<"roasted" | "green">("green")
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProduct = useMemo(() => {
    if (!products) return []
    let result = [...products]

    // Apply search filter name, desc, items
    if (searchQuery) {
      result = result
        .map((product) => {
          const isProductMatch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase())

          if (isProductMatch) {
            return {
              ...product,
            }
          }

          return {
            ...product,
          }
        })
    }
    return result
  }, [products, searchQuery])


  const filteredByTab = filteredProduct.filter((product) => product.category === tab);



  return (
    <main className="flex-1">
      <section className="w-full bg-[#1e3a6e] text-white py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-4">
                <Link href="/" className="hover:underline text-sm flex items-center">
                  Home <ChevronRight className="h-4 w-4 mt-0.5 ml-3" />
                </Link>
                <span className="text-sm text-[#f5c6c6]">Products</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">All Products</h1>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#1e3a6e]/70" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-white text-[#1e3a6e] rounded-full w-full sm:w-[200px] md:w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-16 bg-[#f8f3e9]">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue={tab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 bg-[#1e3a6e]/10">
              <TabsTrigger value="green" className="data-[state=active]:bg-[#104B2B] data-[state=active]:text-white">
                Green Beans
              </TabsTrigger>
              <TabsTrigger value="roasted" className="data-[state=active]:bg-[#1e3a6e] data-[state=active]:text-white">
                Roasted Beans
              </TabsTrigger>
            </TabsList>

            <TabsContent value="green" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredByTab.length > 0 ? (
                  filteredByTab.map((product) => (
                    <div key={product.id} className="bg-[#fffaf0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#e8e3d9]">
                      <div className="relative h-64 sm:h-56 md:h-64">
                        <Image
                          src={product.imageUrl || "/placeholder.svg?height=400&width=400"}
                          alt={product.name ?? "Product"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg md:text-xl font-bold text-[#1e3a6e]">{product.name}</h3>
                          <Badge className="bg-[#104B2B]/10 text-[#104B2B] hover:bg-[#104B2B]/10">{product.category}</Badge>
                        </div>
                        <p className="text-[#1e3a6e]/70 mb-4 text-sm md:text-base">{product.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Button className="w-full bg-[#1e3a6e] text-white hover:bg-[#1e3a6e]/90 rounded-full shadow-sm">
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No products available.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="roasted" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredByTab.length > 0 ? (
                  filteredByTab.map((product) => (
                    <div key={product.id} className="bg-[#fffaf0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#e8e3d9]">
                      <div className="relative h-64 sm:h-56 md:h-64">
                        <Image
                          src={product.imageUrl || "/placeholder.svg?height=400&width=400"}
                          alt={product.name ?? "Product"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg md:text-xl font-bold text-[#1e3a6e]">{product.name}</h3>
                          <Badge className="bg-[#104B2B]/10 text-[#104B2B] hover:bg-[#104B2B]/10">{product.category}</Badge>
                        </div>
                        <p className="text-[#1e3a6e]/70 mb-4 text-sm md:text-base">{product.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Button className="w-full bg-[#1e3a6e] text-white hover:bg-[#1e3a6e]/90 rounded-full shadow-sm">
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No products available.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}



