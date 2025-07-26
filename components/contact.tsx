"use client"

import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#f8f8f8] py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 md:mb-16 max-w-xl md:max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#9DC183] mb-4 md:mb-5 tracking-tight">
            Experience Kayana Coffee
          </h2>
          <p className="text-[#000000]/80 text-base md:text-lg max-w-prose mx-auto">
            Visit our shop to experience the unique flavor of our coffee, meet our team, and learn more about our
            sustainable sourcing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Contact Information Card */}
          <Card className="lg:col-span-5 bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-6">Contact Information</h3>

              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#9DC183]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#9DC183]/20 transition-colors duration-300">
                    <MapPin className="text-[#9DC183] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000] text-base">Address</p>
                    <p className="text-[#000000]/80 text-base mt-1">Jl Teluk Bone No.101c2 Pasar Minggu Jakarta Selatan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#9DC183]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#9DC183]/20 transition-colors duration-300">
                    <Phone className="text-[#9DC183] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000] text-base">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-[#000000]/80 text-base mt-1 block hover:text-[#9DC183] transition-colors"
                    >
                      +62 812-1411-0034
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#9DC183]/10 p-3 rounded-full flex-shrink-0 group-hover:bg-[#9DC183]/20 transition-colors duration-300">
                    <Mail className="text-[#9DC183] h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#000000] text-base">Email</p>
                    <a
                      href="mailto:hello@gayobean.com"
                      className="text-[#000000]/80 text-base mt-1 block hover:text-[#9DC183] transition-colors"
                    >
                      admin@kayana.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-10 pt-6 border-t border-[#000000]/10">
                <h3 className="text-xl font-bold text-[#000000] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9DC183]/10 p-3 rounded-full text-[#9DC183] hover:bg-[#9DC183] hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9DC183]/10 p-3 rounded-full text-[#9DC183] hover:bg-[#9DC183] hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9DC183]/10 p-3 rounded-full text-[#9DC183] hover:bg-[#9DC183] hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-7 bg-white/95 backdrop-blur-sm border-none shadow-xl rounded-2xl overflow-hidden flex flex-col">
            <div className="h-80 md:h-96 w-full relative">
              {/* Real Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.886246153366!2d106.83780291476898!3d-6.277496995454999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f206da2eade3%3A0x18ceb6c3b41e29aa!2sJl.%20Teluk%20Bone%20No.101%2C%20RW.5%2C%20Ps.%20Minggu%2C%20Kec.%20Ps.%20Minggu%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012540%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1652687539673!5m2!1sen!2sus"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
                title="Kayana Coffee Location"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
