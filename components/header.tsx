import Link from "next/link"
import { Button } from "./ui/button"
import MobileNav from "./mobile-nav"
import Image from "next/image"
export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#1e3a6e] text-white shadow-md px-2">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logoo.jpg" alt="abr logo" width={100} height={100} />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-[#f5c6c6] transition-colors">
            Home
          </Link>
          <Link href="#catalog" className="text-sm font-medium hover:text-[#f5c6c6] transition-colors">
            Catalog
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-[#f5c6c6] transition-colors">
            Our Story
          </Link>
          <Link href="#advantages" className="text-sm font-medium hover:text-[#f5c6c6] transition-colors">
            Why Choose Us
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#f5c6c6] transition-colors">
            Visit Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="bg-[#f5c6c6] text-[#1e3a6e] hover:bg-[#e5b6b6] font-medium rounded-full px-6 hidden md:flex">
            Shop Now
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>

  )
}
