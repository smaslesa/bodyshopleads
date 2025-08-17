'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Menu, X, Crown, Star, Shield } from 'lucide-react'

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/98 backdrop-blur-xl border-b border-amber-400/30 shadow-2xl' 
        : 'bg-black/20 backdrop-blur-md border-b border-white/5'
    }`}>
      {/* Streamlined Luxury Header */}
      <div className="py-4">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Luxury Logo */}
            <motion.div 
              className="flex items-center gap-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Crown className="w-8 h-8 text-amber-400" />
              <div className="text-2xl md:text-3xl font-extralight tracking-[0.15em] luxury-heading">
                <span className="text-white">MAISON</span>
                <span className="text-amber-400 block text-xs font-light tracking-[0.4em]">COLLISION</span>
              </div>
              <div className="hidden xl:block text-xs text-gray-400 border-l border-amber-400/20 pl-6 ml-2">
                <div className="font-light uppercase tracking-[0.15em] text-amber-400">Beverly Hills Atelier</div>
              </div>
            </motion.div>

            {/* Luxury Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Artisanship', 'Process', 'Portfolio', 'Testimonials', 'Concierge'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-light tracking-[0.1em] uppercase text-xs relative group py-3"
                  whileHover={{ y: -1 }}
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300"></div>
                </motion.a>
              ))}
            </nav>

            {/* Luxury CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 py-2 font-medium tracking-[0.1em] uppercase text-xs transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20"
              >
                Consultation
              </motion.button>
              <motion.a 
                href="tel:555-123-4567"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/30 text-white hover:border-amber-400 hover:text-amber-400 px-6 py-2 font-light tracking-[0.1em] uppercase text-xs transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-3 h-3" />
                Call
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-amber-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-amber-400/20"
        >
          <div className="container mx-auto px-8 py-6">
            <nav className="flex flex-col gap-6">
              {['Artisanship', 'Process', 'Portfolio', 'Testimonials', 'Concierge'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-amber-400 transition-colors font-light py-3 tracking-[0.1em] uppercase text-sm border-b border-gray-800 last:border-b-0"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-6 border-t border-amber-400/20">
                <button className="luxury-btn-primary w-full">
                  Private Consultation
                </button>
                <a 
                  href="tel:555-123-4567"
                  className="luxury-btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-3 h-3" />
                  Emergency Line
                </a>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default ModernHeader
