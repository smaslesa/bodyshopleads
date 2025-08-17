'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Star, Shield, Award, Crown, Gem, Sparkles, Palette } from 'lucide-react'

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Luxury Brand Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-10 h-10 text-amber-400" />
                  <div className="text-3xl font-extralight tracking-[0.15em] luxury-heading">
                    <span className="text-white">MAISON</span>
                    <span className="text-amber-400 block text-sm font-light tracking-[0.3em]">COLLISION</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg max-w-md">
                  The world's premier destination for luxury vehicle restoration. 
                  Where automotive heritage meets contemporary artisanship.
                </p>
                
                {/* Luxury Credentials */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <div>
                      <div className="font-light text-white">Michelin Rated</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Excellence</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="font-light text-white">Heritage Certified</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Since 1985</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-400" />
            <div>
                      <div className="font-light text-white">Master Craftsmen</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
              </div>
              </div>
              <div className="flex items-center gap-3">
                    <Gem className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="font-light text-white">Lifetime Warranty</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Guaranteed</div>
                    </div>
                  </div>
              </div>
              </motion.div>
            </div>

            {/* Luxury Contact */}
            <div>
              <h3 className="text-xl font-light mb-8 text-amber-400 tracking-[0.1em] uppercase">Private Concierge</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-light text-lg text-white">+1 (555) 123-4567</div>
                    <div className="text-gray-400 text-sm font-light">24/7 Emergency Service</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-light text-white">Beverly Hills Atelier</div>
                    <div className="text-gray-400 text-sm">9200 Sunset Boulevard</div>
                    <div className="text-gray-400 text-sm">Beverly Hills, CA 90210</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-light text-white">By Appointment</div>
                    <div className="text-gray-400 text-sm">Mon-Sat: Private Consultations</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-light text-white">concierge@maisoncollision.com</div>
                    <div className="text-gray-400 text-sm font-light">Confidential Inquiries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Services */}
            <div>
              <h3 className="text-xl font-light mb-8 text-amber-400 tracking-[0.1em] uppercase">Artisanal Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Crown className="w-3 h-3 text-amber-400" />
                  Bespoke Restoration
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Palette className="w-3 h-3 text-amber-400" />
                  Paint Atelier
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Gem className="w-3 h-3 text-amber-400" />
                  Carbon Fiber Work
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Shield className="w-3 h-3 text-amber-400" />
                  Insurance Concierge
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Detailing Studio
                </li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-3 font-light">
                  <Award className="w-3 h-3 text-amber-400" />
                  Heritage Certification
                </li>
              </ul>
              
              <div className="mt-8 p-6 bg-amber-400/5 border border-amber-400/20">
                <div className="text-sm font-light mb-2 text-amber-400 uppercase tracking-wider">Exclusive Partners</div>
                <div className="text-xs text-gray-400 leading-relaxed font-light">
                  Authorized service provider for Rolls-Royce, Bentley, Ferrari, 
                  Aston Martin, and other luxury marques.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Bottom Bar */}
      <div className="bg-black border-t border-amber-400/20 py-6 relative z-10">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 font-light">
              © 2024 Maison Collision. All rights reserved. | 
              <span className="text-amber-400 font-normal"> Luxury • Heritage • Excellence</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors font-light">Privacy</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-amber-400 transition-colors font-light">Terms</a>
              <span className="text-gray-600">•</span>
              <a href="#" className="hover:text-amber-400 transition-colors font-light">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ModernFooter