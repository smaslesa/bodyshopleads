'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import Link from 'next/link'
import LeadModal from '@/components/shared/LeadModal'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/websites', label: 'Websites' },
    { href: '/seo', label: 'SEO' },
    { href: '/google-ads', label: 'Google Ads' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            <span className="text-primary-600">BodyShop</span>
            <span className="text-neutral-900">Leads</span>
          </div>
          <div className="hidden md:block text-xs text-neutral-500 border-l border-neutral-300 pl-2 ml-2">
            Websites That Bring Cars
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Phone Number */}
          <a 
            href="tel:702-518-7072" 
            className="hidden md:flex items-center gap-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(702) 518-7072</span>
          </a>
          
          {/* CTA Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get More Cars
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-700" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          height: isMobileMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white border-t border-neutral-200 overflow-hidden"
      >
        <div className="container py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Phone */}
          <a 
            href="tel:702-518-7072" 
            className="flex items-center gap-2 text-primary-600 font-bold py-2 text-lg"
          >
            <Phone className="w-5 h-5" />
            <span>(702) 518-7072</span>
          </a>
          
          {/* Mobile CTA */}
          <button 
            onClick={() => {
              setIsModalOpen(true)
              setIsMobileMenuOpen(false)
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all duration-200 mt-4"
          >
            Get More Cars Now
          </button>
        </div>
      </motion.div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="header-cta"
        title="Get More Cars for Your Shop"
        subtitle="We'll show you exactly how to fill your bays with quality work"
      />
    </header>
  )
}

export default Navbar