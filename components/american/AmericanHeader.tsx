'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock, Menu, X, Star, Shield } from 'lucide-react'

const AmericanHeader = () => {
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
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-navy/95 backdrop-blur-xl shadow-2xl shadow-navy/20' 
          : 'bg-navy'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Enhanced Top Bar */}
      <motion.div 
        className="bg-gradient-to-r from-red via-bright-red to-red text-white py-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <motion.div 
              className="flex items-center gap-8"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center gap-2 hover:text-gold transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-bold">(555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="hidden md:flex items-center gap-2 hover:text-gold transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="font-semibold">123 Main Street, Los Angeles, CA</span>
              </motion.div>
              <motion.div 
                className="hidden lg:flex items-center gap-2 hover:text-gold transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Mon-Fri 8AM-6PM • Sat 9AM-4PM</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-sm font-black tracking-wider"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              PROUDLY SERVING LA FOR 30+ YEARS
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Main Header */}
      <div className={`py-4 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div 
                className="text-2xl font-black cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white tracking-tight">AMERICAN</span>
                <span className="text-red block text-lg tracking-wide">BODY SHOP</span>
              </motion.div>
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-gold fill-gold" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-xs text-white font-bold">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span>I-CAR GOLD CERTIFIED</span>
                  </div>
                  <div className="text-gold font-black">INSURANCE APPROVED</div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center gap-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { href: "#services", label: "SERVICES" },
                { href: "#gallery", label: "OUR WORK" },
                { href: "#insurance", label: "INSURANCE" },
                { href: "#reviews", label: "REVIEWS" },
                { href: "#contact", label: "CONTACT" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative text-white hover:text-gold transition-all duration-300 font-bold text-sm tracking-wide group"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </motion.nav>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="hidden md:flex items-center gap-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-navy px-8 py-3 rounded-lg font-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                FREE ESTIMATE
              </motion.button>
              <motion.a 
                href="tel:555-123-4567"
                className="bg-gradient-to-r from-red to-bright-red hover:from-bright-red hover:to-red text-white px-8 py-3 rounded-lg font-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                CALL NOW
              </motion.a>
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy/95 backdrop-blur-xl border-t-2 border-gold/30 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.nav 
                className="flex flex-col gap-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {[
                  { href: "#services", label: "SERVICES" },
                  { href: "#gallery", label: "OUR WORK" },
                  { href: "#insurance", label: "INSURANCE" },
                  { href: "#reviews", label: "REVIEWS" },
                  { href: "#contact", label: "CONTACT" }
                ].map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="hover:text-gold transition-colors font-bold py-3 text-white border-b border-white/10 hover:border-gold/30"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div 
                  className="flex flex-col gap-3 pt-6 border-t-2 border-gold/30"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button 
                    className="bg-gradient-to-r from-gold to-yellow-500 text-navy px-8 py-4 rounded-lg font-black transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    FREE ESTIMATE
                  </motion.button>
                  <motion.a 
                    href="tel:555-123-4567"
                    className="bg-gradient-to-r from-red to-bright-red text-white px-8 py-4 rounded-lg font-black transition-all duration-300 text-center shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    CALL NOW
                  </motion.a>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default AmericanHeader