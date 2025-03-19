"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] sm:w-[350px] bg-[#1e3a6e] text-white border-l border-white/10 p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image src="/logoo.jpg" alt="abr logo" width={50} height={50} />
            </div>
          </div>

          <nav className="flex-1 overflow-auto py-6 px-4">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="flex items-center justify-between text-lg font-medium hover:text-[#f5c6c6] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                  <ChevronRight className="h-5 w-5 text-[#f5c6c6]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center justify-between text-lg font-medium hover:text-[#f5c6c6] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Products
                  <ChevronRight className="h-5 w-5 text-[#f5c6c6]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center justify-between text-lg font-medium hover:text-[#f5c6c6] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  About Us
                  <ChevronRight className="h-5 w-5 text-[#f5c6c6]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#advantages"
                  className="flex items-center justify-between text-lg font-medium hover:text-[#f5c6c6] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Why Choose Us
                  <ChevronRight className="h-5 w-5 text-[#f5c6c6]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="flex items-center justify-between text-lg font-medium hover:text-[#f5c6c6] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Visit Us
                  <ChevronRight className="h-5 w-5 text-[#f5c6c6]" />
                </Link>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-lg font-bold mb-4">Shop By Category</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/products?type=green"
                    className="flex items-center text-base hover:text-[#f5c6c6] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Green Beans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products?type=roasted"
                    className="flex items-center text-base hover:text-[#f5c6c6] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Roasted Beans
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="p-4 border-t border-white/10">
            <Button className="w-full bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#e5b6b6] font-medium rounded-full">
              Shop Now
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}


