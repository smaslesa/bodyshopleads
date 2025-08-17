'use client'

import React from 'react'
import { Phone, MapPin, Clock, Mail, Star, Shield, Award } from 'lucide-react'

const AmericanFooter = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">AMERICAN</span>
                <span className="text-red block text-lg">BODY SHOP</span>
              </div>
              <p className="text-silver mb-6 leading-relaxed">
                Serving Los Angeles with pride for over 30 years. America's most trusted 
                collision repair specialists with I-CAR Gold certification.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-gold fill-current" />
                <span className="font-semibold">4.9/5 Stars</span>
                <span className="text-silver text-sm">(500+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold">CONTACT US</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-lg">(555) 123-4567</div>
                    <div className="text-silver text-sm">24/7 Emergency Line</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">123 Main Street</div>
                    <div className="text-silver">Los Angeles, CA 90210</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Mon-Fri: 8AM-6PM</div>
                    <div className="text-silver">Sat: 9AM-4PM • Sun: Closed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">info@americanbodyshop.com</div>
                    <div className="text-silver text-sm">Free Estimates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold">OUR SERVICES</h3>
              <ul className="space-y-2 text-silver">
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Collision Repair
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Paint & Refinishing
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Dent Repair & PDR
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Frame Straightening
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Insurance Claims
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Classic Car Restoration
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • Fleet Services
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  • 24/7 Towing
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gold">CERTIFICATIONS</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-gold" />
                  <div>
                    <div className="font-semibold">I-CAR Gold Certified</div>
                    <div className="text-silver text-sm">Industry Excellence</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green" />
                  <div>
                    <div className="font-semibold">ASE Certified</div>
                    <div className="text-silver text-sm">Automotive Service</div>
                  </div>
                </div>
                <div className="bg-gunmetal p-4 rounded">
                  <div className="text-sm font-semibold mb-2">INSURANCE PARTNERS</div>
                  <div className="text-xs text-silver leading-relaxed">
                    We work directly with all major insurance companies including 
                    State Farm, Allstate, GEICO, Progressive, and more.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gunmetal py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-silver text-sm mb-2 md:mb-0">
              © 2024 American Body Shop. All rights reserved. | 
              <span className="text-gold font-semibold"> Proudly American Owned & Operated</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-silver">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AmericanFooter
