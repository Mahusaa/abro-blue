"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewProductPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    type: "green",
    category: "",
    price: "",
    stock: "",
    description: "",
    longDescription: "",
    altitude: "",
    process: "",
    cuppingScore: "",
    variety: "",
    region: "",
    harvestPeriod: "",
    greenSpecifications: "",
    roastLevel: "",
    tastingNotes: "",
    body: "",
    acidity: "",
    roastDate: "",
    brewingMethods: "",
    roastedSpecifications: "",
    imageUrl: "",
  })

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would call a server action to save to the database
      //await createProduct(formData)
      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error("Error creating product:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link href="/admin/products">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your coffee product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Arabika Gayo Speciality"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Bean Type</Label>
                <Select name="type" value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select bean type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="green">Green Beans</SelectItem>
                    <SelectItem value="roasted">Roasted Beans</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  placeholder="e.g. Medium Roast, Green Beans"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    name="stock"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Brief description for product cards..."
                  className="min-h-[80px]"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  name="longDescription"
                  placeholder="Comprehensive product description with details about flavor profile, origin, etc..."
                  className="min-h-[150px]"
                  value={formData.longDescription || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
              <CardDescription>Enter the detailed specifications of your coffee.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs
                defaultValue={formData.type}
                value={formData.type}
                onValueChange={(value) => handleSelectChange("type", value)}
              >
                <TabsList className="w-full bg-[#1e3a6e]/10">
                  <TabsTrigger
                    value="green"
                    className="flex-1 data-[state=active]:bg-[#104B2B] data-[state=active]:text-white"
                  >
                    Green Beans
                  </TabsTrigger>
                  <TabsTrigger
                    value="roasted"
                    className="flex-1 data-[state=active]:bg-[#1e3a6e] data-[state=active]:text-white"
                  >
                    Roasted Beans
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="green" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="altitude">Altitude</Label>
                    <Input
                      id="altitude"
                      name="altitude"
                      placeholder="e.g. 1,500-1,700 meters"
                      value={formData.altitude}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="process">Process</Label>
                    <Input
                      id="process"
                      name="process"
                      placeholder="e.g. Wet-hulled"
                      value={formData.process}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cuppingScore">Cupping Score</Label>
                    <Input
                      id="cuppingScore"
                      name="cuppingScore"
                      placeholder="e.g. 86+"
                      value={formData.cuppingScore}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variety">Variety</Label>
                    <Input
                      id="variety"
                      name="variety"
                      placeholder="e.g. Arabica, Typica, Bourbon"
                      value={formData.variety || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Input
                      id="region"
                      name="region"
                      placeholder="e.g. Gayo Highlands, Aceh"
                      value={formData.region || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="harvestPeriod">Harvest Period</Label>
                    <Input
                      id="harvestPeriod"
                      name="harvestPeriod"
                      placeholder="e.g. October-January"
                      value={formData.harvestPeriod || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="greenSpecifications">Additional Specifications</Label>
                    <Textarea
                      id="greenSpecifications"
                      name="greenSpecifications"
                      placeholder="Any additional specifications or details..."
                      className="min-h-[100px]"
                      value={formData.greenSpecifications || ""}
                      onChange={handleChange}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="roasted" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="roastLevel">Roast Level</Label>
                    <Input
                      id="roastLevel"
                      name="roastLevel"
                      placeholder="e.g. Medium, Dark"
                      value={formData.roastLevel}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tastingNotes">Tasting Notes</Label>
                    <Input
                      id="tastingNotes"
                      name="tastingNotes"
                      placeholder="e.g. Chocolate, Caramel, Spice"
                      value={formData.tastingNotes}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="body">Body</Label>
                    <Input
                      id="body"
                      name="body"
                      placeholder="e.g. Medium, Full"
                      value={formData.body}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="acidity">Acidity</Label>
                    <Input
                      id="acidity"
                      name="acidity"
                      placeholder="e.g. Bright, Mild, Low"
                      value={formData.acidity || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roastDate">Roast Date</Label>
                    <Input
                      id="roastDate"
                      name="roastDate"
                      type="date"
                      value={formData.roastDate || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brewingMethods">Recommended Brewing Methods</Label>
                    <Input
                      id="brewingMethods"
                      name="brewingMethods"
                      placeholder="e.g. Espresso, Pour Over, French Press"
                      value={formData.brewingMethods || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roastedSpecifications">Additional Specifications</Label>
                    <Textarea
                      id="roastedSpecifications"
                      name="roastedSpecifications"
                      placeholder="Any additional specifications or details..."
                      className="min-h-[100px]"
                      value={formData.roastedSpecifications || ""}
                      onChange={handleChange}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link href="/admin/products">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" className="bg-[#104B2B] hover:bg-[#104B2B]/90" disabled={isSubmitting}>
            {isSubmitting ? (
              "Saving..."
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" /> Save Product
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}


