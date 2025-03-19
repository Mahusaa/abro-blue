import Link from "next/link"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-[#1e3a6e] text-white py-12 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logolong.jpg" alt="logolong" width={400} height={100} />
            </div>
            <p className="text-sm text-gray-300">
              Premium coffee beans from Aceh, Indonesia. Ethically sourced, traditionally processed.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/products?type=green" className="hover:text-[#f5c6c6] transition-colors">
                  Green Beans
                </Link>
              </li>
              <li>
                <Link href="/products?type=roasted" className="hover:text-[#f5c6c6] transition-colors">
                  Roasted Beans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Brewing Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Subscriptions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#about" className="hover:text-[#f5c6c6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#f5c6c6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f5c6c6] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} AB Roastery. All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}
