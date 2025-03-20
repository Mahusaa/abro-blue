"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gradient-to-b from-[#f5c6c6] to-[#f8d7d7] py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 max-w-xl md:max-w-2xl mx-auto">
          <div className="inline-block animate-fade-in">
            <Badge className="bg-[#104B2B] text-white hover:bg-[#104B2B]/90 mb-3 md:mb-4 px-3 py-1 text-sm">
              Visit Us
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3a6e] mb-4 md:mb-5 tracking-tight">
            Experience ABR Coffee
          </h2>
          <p className="text-[#1e3a6e]/80 text-base md:text-lg max-w-prose mx-auto">
            Visit our shop to experience the unique flavor of Gayo coffee, meet our team, and learn more about our
            sustainable sourcing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Contact Information Card */}
          <Card className="lg:col-span-5 bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#1e3a6e] mb-6">Contact Information</h3>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#104B2B]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#104B2B]/20 transition-colors duration-300">
                    <MapPin className="text-[#104B2B] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a6e] text-base">Address</p>
                    <p className="text-[#1e3a6e]/80 text-base mt-1">123 Coffee Street, Bean City, BC 12345</p>
                    <Button
                      variant="link"
                      className="text-[#104B2B] p-0 h-auto mt-1 font-medium"
                      onClick={() => window.open("https://maps.google.com", "_blank")}
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#104B2B]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#104B2B]/20 transition-colors duration-300">
                    <Phone className="text-[#104B2B] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a6e] text-base">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-[#1e3a6e]/80 text-base mt-1 block hover:text-[#104B2B] transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#104B2B]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#104B2B]/20 transition-colors duration-300">
                    <Mail className="text-[#104B2B] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a6e] text-base">Email</p>
                    <a
                      href="mailto:hello@gayobean.com"
                      className="text-[#1e3a6e]/80 text-base mt-1 block hover:text-[#104B2B] transition-colors"
                    >
                      hello@gayobean.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#104B2B]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#104B2B]/20 transition-colors duration-300">
                    <Clock className="text-[#104B2B] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1e3a6e] text-base">Hours</p>
                    <div className="mt-1 space-y-1">
                      <div className="flex justify-between max-w-[250px]">
                        <p className="text-[#1e3a6e]/80 text-base">Monday - Friday:</p>
                        <p className="text-[#1e3a6e] font-medium text-base">7am - 7pm</p>
                      </div>
                      <div className="flex justify-between max-w-[250px]">
                        <p className="text-[#1e3a6e]/80 text-base">Saturday - Sunday:</p>
                        <p className="text-[#1e3a6e] font-medium text-base">8am - 6pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 pt-6 border-t border-[#1e3a6e]/10">
                <h3 className="text-xl font-bold text-[#1e3a6e] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#104B2B]/10 p-3 rounded-full text-[#104B2B] hover:bg-[#104B2B] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="lg:col-span-7 bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-2xl overflow-hidden h-full">
            <CardContent className="p-0 h-full">
              <div className="relative h-full w-full min-h-[400px]">
                {/* This would be replaced with an actual map component in production */}
                <div className="absolute inset-0 bg-[#f0f0f0] overflow-hidden">
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#104B2B]/10"></div>

                    {/* Map Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce-slow">
                      <div className="relative">
                        <div className="absolute -top-16 -left-[100px] bg-white p-4 rounded-lg shadow-lg min-w-[200px]">
                          <p className="font-semibold text-[#1e3a6e] text-lg">ABR Coffee</p>
                          <p className="text-[#1e3a6e]/80">123 Coffee Street</p>
                          <p className="text-[#1e3a6e]/80 text-sm mt-1">Bean City, BC 12345</p>
                        </div>
                        <div className="h-12 w-12 bg-[#104B2B] rounded-full flex items-center justify-center shadow-lg">
                          <MapPin className="h-7 w-7 text-white" />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#104B2B] rotate-45"></div>
                      </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
                        <span className="text-lg font-bold">+</span>
                      </Button>
                      <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full shadow-md">
                        <span className="text-lg font-bold">-</span>
                      </Button>
                    </div>

                    {/* Map Legend */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-[#104B2B] rounded-full"></div>
                        <span className="text-sm text-[#1e3a6e]">Our Location</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-3 w-3 bg-[#1e3a6e]/40 rounded-full"></div>
                        <span className="text-sm text-[#1e3a6e]">Parking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-[#1e3a6e]/80 text-lg mb-4">
            We&apos;d love to see you in person! Stop by for a cup of our signature Gayo coffee.
          </p>
          <Button
            className="bg-[#104B2B] hover:bg-[#104B2B]/90 text-white px-6 py-2 h-auto"
            onClick={() => window.open("https://maps.google.com", "_blank")}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  )
}


