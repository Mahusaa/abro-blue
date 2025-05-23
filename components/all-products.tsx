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
  const [tab, setTab] = useState<"roasted" | "green">("green")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProduct = useMemo(() => {
    if (!products) return []
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [products, searchQuery])

  const filteredByTab = useMemo(() => {
    return filteredProduct.filter((product) => product.category === tab)
  }, [filteredProduct, tab])

  return (
    <main className="flex-1">
      <section className="w-full bg-[#1e3a6e] text-white py-10 md:py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 px-4 md:px-0">
            <div className="w-full">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="hover:underline flex items-center text-white/80">
                  Home
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
                <span className="text-sm text-[#f5c6c6]">Products</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-white">
                All Products
              </h1>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2 md:gap-3">
              <div className="relative w-full sm:w-[200px] md:w-[250px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1e3a6e]/70" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-white text-[#1e3a6e] rounded-full w-full"
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
          <Tabs value={tab} onValueChange={(value) => setTab(value as "roasted" | "green")} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 bg-[#1e3a6e]/10">
              <TabsTrigger value="green" className="data-[state=active]:bg-[#104B2B] data-[state=active]:text-white">
                Green Beans
              </TabsTrigger>
              <TabsTrigger value="roasted" className="data-[state=active]:bg-[#1e3a6e] data-[state=active]:text-white">
                Roasted Beans
              </TabsTrigger>
            </TabsList>

            <TabsContent value={tab} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                {filteredByTab.length > 0 ? (
                  filteredByTab.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-[#e8e3d9] flex flex-col h-full group"
                      aria-label={`Product card for ${product.name}`}
                    >
                      <div className="relative aspect-[4/3] w-full bg-gray-100">
                        <Image
                          src={product.imageUrl || "/placeholder.svg?height=400&width=400"}
                          alt={product.name ? `Image of ${product.name}` : "Product image"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex-1 flex flex-col p-5 md:p-6">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h3
                            className="text-lg md:text-xl font-bold text-[#1e3a6e] break-words leading-tight"
                            title={product.name}
                          >
                            {product.name}
                          </h3>
                          <Badge className="bg-[#104B2B]/10 text-[#104B2B] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                            {product.category}
                          </Badge>
                        </div>

                        {product.description ? (
                          <ul className="text-[#1e3a6e]/70 mb-4 text-sm md:text-base list-disc pl-5 space-y-1">
                            {product.description
                              .split(/\r?\n/)
                              .filter((line) => line.trim() !== "")
                              .map((line, index) => (
                                <li key={index}>{line}</li>
                              ))}
                          </ul>
                        ) : (
                          <p className="text-[#1e3a6e]/70 mb-4 text-sm md:text-base italic">No description available.</p>
                        )}

                        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col">
                          <Button className="w-full bg-[#1e3a6e] text-white hover:bg-[#104B2B] rounded-full shadow-sm font-semibold text-base py-2" aria-label={`Contact us about ${product.name}`}>Contact Us</Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2m-4-4a4 4 0 100-8 4 4 0 000 8zm-6 8a6 6 0 0112 0H3z" />
                    </svg>
                    <p className="text-center text-lg">No products found. Try a different search or check back later!</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

