"use client"
import Link from "next/link"
import * as React from "react"
import { Button } from "./ui/button"
import MobileNav from "./mobile-nav"
import Image from "next/image"
import { useUser } from "@/server/auth"
import { useRouter } from "next/navigation"
import { signOut } from "@/app/(login)/action"

export default function Header() {
  const { userPromise } = useUser()
  const router = useRouter();
  const user = React.use(userPromise)
  async function handleSignOut() {
    await signOut()
    router.refresh();
    router.push('/');
  }
  return (
    <header className="sticky top-0 z-40 w-full bg-[#9DC183] text-white shadow-md px-2">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logoo.jpg" alt="kayana logo" width={100} height={100} />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            Home
          </Link>
          <Link href="#catalog" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            Catalog
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            Our Story
          </Link>
          <Link href="#advantage" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            Why Choose Us
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#893F26] transition-colors">
            Visit Us
          </Link>
          {user && (
            <Link href="/admin/products" className="text-sm font-medium hover:text-[#893F26] transition-colors">
              Admin
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {!user ? (
            <Link href="/products">
              <Button className="bg-[#893F26] text-white hover:bg-[#7a361f] font-medium rounded-full px-6 hidden md:flex">
                Shop Now
              </Button>
            </Link>
          ) : (
            <form action={handleSignOut}>
              <Button type="submit" className="bg-[#893F26] text-white hover:bg-[#7a361f] font-medium rounded-full px-6 hidden md:flex">
                Logout
              </Button>
            </form>
          )}
          <MobileNav user={user} />
        </div>
      </div>
    </header>

  )
}
