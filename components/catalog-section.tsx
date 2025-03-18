import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Image from "next/image"

const coffeeCatalog = {
  green: [
    {
      id: "speciality",
      name: "Arabika Gayo Speciality",
      type: "Green",
      description: "Our highest grade Gayo Arabica beans with exceptional flavor complexity and clarity.",
      image: "/placeholder.svg?height=400&width=400",
      details: [
        { label: "Altitude", value: "1,500-1,700 meters" },
        { label: "Process", value: "Wet-hulled" },
        { label: "Cupping Score", value: "86+" },
      ],
    },
    {
      id: "premium",
      name: "Arabika Gayo Premium",
      type: "Green",
      description: "Premium grade Gayo Arabica with excellent body and distinctive flavor notes.",
      image: "/placeholder.svg?height=400&width=400",
      details: [
        { label: "Altitude", value: "1,400-1,600 meters" },
        { label: "Process", value: "Wet-hulled" },
        { label: "Cupping Score", value: "84-85" },
      ],
    },
  ],
  roasted: [
    {
      id: "dark-roast",
      name: "Arabika Gayo Dark Roast",
      type: "Roasted",
      description: "A bold and rich dark roast that enhances the deep chocolate and spice notes.",
      image: "/placeholder.svg?height=400&width=400",
      details: [
        { label: "Roast Level", value: "Dark" },
        { label: "Flavor Notes", value: "Chocolate, Spices" },
        { label: "Cupping Score", value: "85+" },
      ],
    },
  ],
}

export default function CatalogSection() {
  return (
    <section id="catalog" className="w-full bg-[#f8f3e9] py-16 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <Badge className="bg-[#104B2B] text-white hover:bg-[#104B2B] mb-4">Our Catalog</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e3a6e] mb-4">ABR COFFEE COLLECTION</h2>
          <p className="text-[#1e3a6e]/80 text-base md:text-lg">
            Explore our selection of premium Gayo coffee beans, available as green (unroasted) or expertly roasted
            to bring out their unique flavor profiles.
          </p>
        </div>

        <Tabs defaultValue="green" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 md:mb-12 bg-[#f5c6c6]/30">
            <TabsTrigger value="green" className="data-[state=active]:bg-[#104B2B] data-[state=active]:text-white">
              Green Beans
            </TabsTrigger>
            <TabsTrigger value="roasted" className="data-[state=active]:bg-[#1e3a6e] data-[state=active]:text-white">
              Roasted Beans
            </TabsTrigger>
          </TabsList>

          {Object.entries(coffeeCatalog).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {items.map((coffee) => (
                  <div
                    key={coffee.id}
                    className="bg-[#fffaf0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-[#e8e3d9]"
                  >
                    <div className="relative h-64 sm:h-56 md:h-64">
                      <Badge className="absolute top-4 left-4 z-10 bg-[#104B2B] text-white hover:bg-[#104B2B]">
                        Premium
                      </Badge>
                      <Image src={coffee.image} alt={coffee.name} fill className="object-cover" />
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg md:text-xl font-bold text-[#1e3a6e]">{coffee.name}</h3>
                        <Badge className="bg-[#104B2B]/10 text-[#104B2B] hover:bg-[#104B2B]/10">{coffee.type}</Badge>
                      </div>
                      <p className="text-[#1e3a6e]/70 mb-4 text-sm md:text-base">{coffee.description}</p>

                      <div className="space-y-2">
                        {coffee.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-[#104B2B]" />
                            <span className="text-xs md:text-sm text-[#1e3a6e]/80">
                              {detail.label}: {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Button className="w-full bg-[#1e3a6e] text-white hover:bg-[#1e3a6e]/90 rounded-full">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

