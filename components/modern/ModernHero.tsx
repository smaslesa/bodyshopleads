'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Star, Shield, Award, Crown, Sparkles } from 'lucide-react'

const ModernHero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Ultra-Luxury Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.1)' }}
        >
          <source src="/videos/Luxury_Collision.mp4" type="video/mp4" />
        </video>
        {/* Lighter gradient overlay for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 container px-8 pt-32 pb-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Luxury Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-4 mb-12"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">
                Luxury Collision Specialists
              </span>
              <Crown className="w-6 h-6 text-amber-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </motion.div>

            {/* Main Headline - Rolls-Royce Inspired */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white leading-[0.85] tracking-[-0.02em] mb-8 luxury-text-shadow">
                MAISON
                <span className="block font-thin text-amber-100 mt-4">COLLISION</span>
              </h1>
              <div className="h-px w-40 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent mx-auto mb-12"></div>
              <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-4xl mx-auto leading-relaxed mb-4">
                Where automotive artistry meets uncompromising precision.
              </p>
              <p className="text-lg md:text-xl text-amber-100 font-normal max-w-3xl mx-auto leading-relaxed luxury-text-shadow">
                Restoring excellence to Rolls-Royce, Bentley, Ferrari & Aston Martin
              </p>
            </motion.div>

            {/* Luxury CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                onClick={() => setIsFormVisible(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-gradient-to-r from-amber-400 to-amber-500 text-black px-12 py-4 font-medium tracking-[0.2em] uppercase text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20"
              >
                <span className="relative z-10">Request Private Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
              
              <motion.a
                href="tel:555-123-4567"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 border border-white/30 text-white hover:border-amber-400 hover:text-amber-400 px-12 py-4 font-light tracking-[0.2em] uppercase text-sm transition-all duration-500 hover:shadow-xl hover:shadow-white/10"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Line</span>
              </motion.a>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl mx-auto"
            >
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400/60 transition-colors duration-300">
                    <Star className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="text-3xl font-extralight text-white mb-2 luxury-text-shadow">5.0</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light">Michelin Rated</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400/60 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="text-3xl font-extralight text-white mb-2 luxury-text-shadow">∞</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light">Lifetime Warranty</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400/60 transition-colors duration-300">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="text-3xl font-extralight text-white mb-2 luxury-text-shadow">Master</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light">Craftsmen</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 border border-amber-400/30 flex items-center justify-center group-hover:border-amber-400/60 transition-colors duration-300">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="text-3xl font-extralight text-white mb-2 luxury-text-shadow">Bespoke</div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-light">Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Luxury Consultation Modal */}
      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setIsFormVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-black/90 backdrop-blur-xl border border-amber-400/20 p-12 max-w-lg w-full relative"
          >
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
            
            <div className="text-center mb-8">
              <Crown className="w-8 h-8 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                Private Consultation
              </h3>
              <p className="text-gray-400 text-sm font-light">
                Exclusively for luxury vehicle owners
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Private Number"
                className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
              />
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
              />
              
              <select className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-light">
                <option value="" className="bg-black">Select Your Vehicle</option>
                <option value="rolls-royce" className="bg-black">Rolls-Royce</option>
                <option value="bentley" className="bg-black">Bentley</option>
                <option value="ferrari" className="bg-black">Ferrari</option>
                <option value="lamborghini" className="bg-black">Lamborghini</option>
                <option value="aston-martin" className="bg-black">Aston Martin</option>
                <option value="mclaren" className="bg-black">McLaren</option>
                <option value="porsche" className="bg-black">Porsche</option>
                <option value="mercedes" className="bg-black">Mercedes-Benz</option>
                <option value="bmw" className="bg-black">BMW</option>
                <option value="other-luxury" className="bg-black">Other Luxury</option>
              </select>
              
              <textarea
                placeholder="Describe your requirements..."
                rows={3}
                className="w-full px-0 py-3 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light resize-none"
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black py-4 font-medium tracking-[0.15em] uppercase text-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/20"
              >
                Schedule Consultation
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 font-light">
                Confidential • Immediate Response • White Glove Service
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Luxury Indicators */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-8 space-y-4"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-amber-400/20 p-4 max-w-xs">
          <div className="flex items-center gap-3 text-white">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <div>
              <div className="text-sm font-light">Now Accepting</div>
              <div className="text-xs text-gray-400">Ultra-Luxury Vehicles</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 right-8 space-y-4"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-amber-400/20 p-4 max-w-xs">
          <div className="flex items-center gap-3 text-white">
            <Shield className="w-4 h-4 text-amber-400" />
            <div>
              <div className="text-sm font-light">Concierge Service</div>
              <div className="text-xs text-gray-400">Available 24/7</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <div className="text-xs uppercase tracking-[0.2em] mb-4 font-light">Discover Excellence</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ModernHero
