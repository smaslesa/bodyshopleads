'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import LeadModal from '@/components/shared/LeadModal'

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold text-white mb-4">
              <span className="text-primary-400">BodyShop</span>Leads
            </div>

            <p className="text-sm font-semibold text-white">
              No contracts. No commitments. Just more cars.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/websites" className="hover:text-white transition-colors duration-200">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-white transition-colors duration-200">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/google-ads" className="hover:text-white transition-colors duration-200">
                  Google Ads
                </Link>
              </li>

            </ul>
          </div>
          

          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ready to Grow?</h4>
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:702-518-7072" 
                className="flex items-center gap-3 text-white text-lg font-bold hover:text-primary-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                (702) 518-7072
              </a>
              
              <p className="text-sm text-neutral-400">Call or text anytime</p>
              
              {/* Email */}
              <a 
                href="mailto:hello@bodyshopleads.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@bodyshopleads.com</span>
              </a>
              
              {/* CTA Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 w-full shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get More Cars Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-neutral-400">
            © 2025 BodyShopLeads. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-8 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-sm">
            Built by shop owners, for shop owners. We understand your business.
          </p>
        </div>
      </div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="footer-cta"
        title="Get More Cars Now"
        subtitle="Let's fill your bays with quality collision repair work"
      />
    </footer>
  )
}

export default Footer