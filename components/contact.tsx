import { Badge } from "./ui/badge"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"
export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#f5c6c6] py-12 md:py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16 max-w-xl md:max-w-2xl mx-auto px-4">
          <Badge className="bg-[#104B2B] text-white hover:bg-[#104B2B] mb-3 md:mb-4">Visit Us</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a6e] mb-3 md:mb-4">Experience ABR Coffee</h2>
          <p className="text-[#1e3a6e]/80 text-base md:text-lg">
            Visit our shop to experience the unique flavor of Gayo coffee, meet our team, and learn more about our
            sourcing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-[#1e3a6e] mb-4 md:mb-6">Contact Information</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <MapPin className="text-[#104B2B] h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#1e3a6e] text-sm md:text-base">Address</p>
                  <p className="text-[#1e3a6e]/80 text-sm md:text-base">123 Coffee Street, Bean City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Phone className="text-[#104B2B] h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#1e3a6e] text-sm md:text-base">Phone</p>
                  <p className="text-[#1e3a6e]/80 text-sm md:text-base">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Mail className="text-[#104B2B] h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#1e3a6e] text-sm md:text-base">Email</p>
                  <p className="text-[#1e3a6e]/80 text-sm md:text-base break-words">hello@gayobean.com</p>
                </div>
              </div>
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <div className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Clock className="text-[#104B2B] h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#1e3a6e] text-sm md:text-base">Hours</p>
                  <p className="text-[#1e3a6e]/80 text-sm md:text-base">Monday - Friday: 7am - 7pm</p>
                  <p className="text-[#1e3a6e]/80 text-sm md:text-base">Saturday - Sunday: 8am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-bold text-[#1e3a6e] mb-3 md:mb-4">Follow Us</h3>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="#"
                  className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="#"
                  className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="#"
                  className="bg-[#104B2B]/10 p-2 md:p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B]/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
            {/* This would be replaced with an actual map component in production */}
            <div className="absolute inset-0 bg-[#104B2B]/10 flex items-center justify-center">
              <p className="text-[#1e3a6e] bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow text-sm md:text-base">
                Interactive Map Would Be Displayed Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
