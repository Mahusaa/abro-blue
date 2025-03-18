"use client"

import { useState } from "react"
import Link from "next/link"
import { Edit, Eye, Plus, Search, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock product data
const mockProducts = [
  {
    id: "1",
    name: "Arabika Gayo Speciality",
    type: "green",
    category: "Green Beans",
    price: 24.99,
    stock: 150,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Arabika Gayo Premium",
    type: "green",
    category: "Green Beans",
    price: 19.99,
    stock: 120,
    status: "In Stock",
  },
  {
    id: "3",
    name: "Arabika Gayo Grade 1",
    type: "green",
    category: "Green Beans",
    price: 16.99,
    stock: 200,
    status: "In Stock",
  },
  {
    id: "4",
    name: "Arabika Gayo Asalan",
    type: "green",
    category: "Green Beans",
    price: 14.99,
    stock: 180,
    status: "In Stock",
  },
  {
    id: "5",
    name: "Robusta Gayo",
    type: "green",
    category: "Green Beans",
    price: 15.99,
    stock: 90,
    status: "In Stock",
  },
  {
    id: "6",
    name: "Gayo Peaberry",
    type: "green",
    category: "Green Beans",
    price: 29.99,
    stock: 45,
    status: "Low Stock",
  },
  {
    id: "7",
    name: "Arabika Gayo Speciality",
    type: "roasted",
    category: "Medium Roast",
    price: 29.99,
    stock: 100,
    status: "In Stock",
  },
  {
    id: "8",
    name: "Arabika Gayo Premium",
    type: "roasted",
    category: "Medium-Dark Roast",
    price: 24.99,
    stock: 85,
    status: "In Stock",
  },
  {
    id: "9",
    name: "Arabika Gayo Grade 1",
    type: "roasted",
    category: "Light-Medium Roast",
    price: 21.99,
    stock: 110,
    status: "In Stock",
  },
  {
    id: "10",
    name: "Arabika Gayo Asalan",
    type: "roasted",
    category: "Dark Roast",
    price: 19.99,
    stock: 75,
    status: "In Stock",
  },
  {
    id: "11",
    name: "Robusta Gayo",
    type: "roasted",
    category: "Dark Roast",
    price: 18.99,
    stock: 60,
    status: "In Stock",
  },
  {
    id: "12",
    name: "Gayo Espresso Blend",
    type: "roasted",
    category: "Dark Roast",
    price: 22.99,
    stock: 95,
    status: "In Stock",
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(mockProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<string | null>(null)

  // Filter products based on search query and selected type
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "all" || product.type === selectedType
    return matchesSearch && matchesType
  })

  // Handle product deletion
  const handleDeleteClick = (productId: string) => {
    setProductToDelete(productId)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (productToDelete) {
      try {
        // In a real app, this would call a server action to delete from the database
        //await deleteProduct(productToDelete)
        // Update local state
        setProducts(products.filter((p) => p.id !== productToDelete))
        setDeleteDialogOpen(false)
      } catch (error) {
        console.error("Error deleting product:", error)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage your coffee product catalog.</p>
        </div>
        <Link href="/products/new">
          <Button className="bg-[#104B2B] hover:bg-[#104B2B]/90">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>View and manage all your coffee products.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="green">Green Beans</SelectItem>
                <SelectItem value="roasted">Roasted Beans</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                      No products found. Try adjusting your search or filters.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        {product.type === "green" ? (
                          <Badge
                            variant="outline"
                            className="bg-[#104B2B]/10 text-[#104B2B] hover:bg-[#104B2B]/10 border-[#104B2B]/20"
                          >
                            {product.category}
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="bg-[#1e3a6e]/10 text-[#1e3a6e] hover:bg-[#1e3a6e]/10 border-[#1e3a6e]/20"
                          >
                            {product.category}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">{product.stock}</TableCell>
                      <TableCell>
                        {product.status === "In Stock" ? (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Stock</Badge>
                        ) : (
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Low Stock</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/products/view/${product.id}`}>
                            <Button variant="outline" size="icon" className="h-8 w-8 text-[#1e3a6e]">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                          </Link>
                          <Link href={`/admin/products/edit/${product.id}`}>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600"
                            onClick={() => handleDeleteClick(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


