'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Camera, Shield, Clock, Car, Star, Flag, Award, Users, Zap } from 'lucide-react'

const VideoHero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Enhanced Video Background */}
      <div className="absolute inset-0">
        {/* Patriotic gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue to-red opacity-90" />
        
        {/* Collision Video with enhanced filtering */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          style={{ filter: 'brightness(0.8) contrast(1.2) saturate(1.1)' }}
        >
          <source src="/videos/collision-video.mp4" type="video/mp4" />
        </video>
        
        {/* Premium overlay system */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-blue/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/60"></div>
        {/* Subtle patriotic vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-navy/40"></div>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 container px-8 pt-32 pb-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* American Excellence Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-4 mb-12"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-red/60 to-gold"></div>
              <Flag className="w-7 h-7 text-gold" />
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
                America's Finest Collision Experts
              </span>
              <Flag className="w-7 h-7 text-gold" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-red/60 to-gold"></div>
            </motion.div>

            {/* Main Headline - Apple-inspired Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-12"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-[-0.02em] mb-8 american-text-shadow">
                AMERICA'S
                <span className="block font-black text-gold mt-4 american-glow">FINEST</span>
                <span className="block font-black text-red mt-4">COLLISION</span>
              </h1>
              <div className="h-1 w-48 bg-gradient-to-r from-red via-white to-blue mx-auto mb-12 rounded-full"></div>
              <p className="text-xl md:text-2xl text-white font-medium tracking-wide max-w-4xl mx-auto leading-relaxed mb-4">
                Trusted by Los Angeles for 30+ years. Where American craftsmanship meets cutting-edge technology.
              </p>
              <p className="text-lg md:text-xl text-gold font-semibold max-w-3xl mx-auto leading-relaxed american-text-shadow">
                I-CAR Gold Certified • Insurance Approved • Lifetime Warranty
              </p>
            </motion.div>

            {/* Premium American CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                onClick={() => setIsFormVisible(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-gradient-to-r from-red to-bright-red text-white px-12 py-5 font-bold tracking-[0.15em] uppercase text-sm transition-all duration-500 hover:shadow-2xl hover:shadow-red/30 rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  Get Instant Estimate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-bright-red to-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
              
              <motion.a
                href="tel:555-123-4567"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy px-12 py-5 font-bold tracking-[0.15em] uppercase text-sm transition-all duration-500 hover:shadow-xl hover:shadow-gold/20 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency Line</span>
              </motion.a>
            </motion.div>

            {/* Premium Trust Indicators - Apple Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 border-2 border-gold/40 rounded-xl flex items-center justify-center group-hover:border-gold/80 group-hover:bg-gold/10 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Star className="w-8 h-8 text-gold" />
                  </motion.div>
                </div>
                <div className="text-4xl font-black text-white mb-2 american-text-shadow">4.9</div>
                <div className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Google Rating</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 border-2 border-gold/40 rounded-xl flex items-center justify-center group-hover:border-gold/80 group-hover:bg-gold/10 transition-all duration-300"
                    whileHover={{ rotate: -5, scale: 1.05 }}
                  >
                    <Shield className="w-8 h-8 text-gold" />
                  </motion.div>
                </div>
                <div className="text-4xl font-black text-white mb-2 american-text-shadow">∞</div>
                <div className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Lifetime Warranty</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 border-2 border-gold/40 rounded-xl flex items-center justify-center group-hover:border-gold/80 group-hover:bg-gold/10 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <Users className="w-8 h-8 text-gold" />
                  </motion.div>
                </div>
                <div className="text-4xl font-black text-white mb-2 american-text-shadow">15K+</div>
                <div className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Cars Repaired</div>
              </div>
              
              <div className="text-center group">
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="w-16 h-16 border-2 border-gold/40 rounded-xl flex items-center justify-center group-hover:border-gold/80 group-hover:bg-gold/10 transition-all duration-300"
                    whileHover={{ rotate: -5, scale: 1.05 }}
                  >
                    <Zap className="w-8 h-8 text-gold" />
                  </motion.div>
                </div>
                <div className="text-4xl font-black text-white mb-2 american-text-shadow">24hr</div>
                <div className="text-xs text-gold uppercase tracking-[0.2em] font-bold">Fast Service</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium American Consultation Modal */}
      {isFormVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setIsFormVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white/95 backdrop-blur-xl border-2 border-gold/30 rounded-2xl p-12 max-w-lg w-full relative shadow-2xl"
          >
            <button
              onClick={() => setIsFormVisible(false)}
              className="absolute top-6 right-6 text-gunmetal hover:text-red transition-colors text-2xl font-bold"
            >
              ✕
            </button>
            
            <div className="text-center mb-8">
              <Flag className="w-10 h-10 text-red mx-auto mb-4" />
              <h3 className="text-3xl font-black text-navy mb-2 tracking-wide">
                FREE ESTIMATE
              </h3>
              <p className="text-gunmetal text-sm font-semibold">
                🇺🇸 Proudly American • Instantly Accurate
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy placeholder-gunmetal focus:border-blue focus:outline-none transition-all duration-300 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy placeholder-gunmetal focus:border-blue focus:outline-none transition-all duration-300 font-semibold"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy placeholder-gunmetal focus:border-blue focus:outline-none transition-all duration-300 font-semibold"
              />
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy placeholder-gunmetal focus:border-blue focus:outline-none transition-all duration-300 font-semibold"
              />
              
              <select className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy focus:border-blue focus:outline-none transition-all duration-300 font-semibold">
                <option value="">Select Your Vehicle</option>
                <option value="ford">Ford</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="dodge">Dodge</option>
                <option value="jeep">Jeep</option>
                <option value="gmc">GMC</option>
                <option value="cadillac">Cadillac</option>
                <option value="lincoln">Lincoln</option>
                <option value="tesla">Tesla</option>
                <option value="other">Other</option>
              </select>
              
              <textarea
                placeholder="Describe the damage..."
                rows={3}
                className="w-full px-4 py-4 border-2 border-silver rounded-xl bg-white text-navy placeholder-gunmetal focus:border-blue focus:outline-none transition-all duration-300 font-semibold resize-none"
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-red to-bright-red text-white py-5 font-black tracking-[0.1em] uppercase text-sm transition-all duration-300 hover:shadow-xl hover:shadow-red/30 rounded-xl"
              >
                Get My American Estimate
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gunmetal font-semibold">
                Instant Response • No Obligation • 100% American Service
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating American Excellence Indicators */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-8 space-y-4"
      >
        <div className="bg-navy/80 backdrop-blur-xl border-2 border-gold/30 rounded-xl p-4 max-w-xs">
          <div className="flex items-center gap-3 text-white">
            <div className="w-3 h-3 bg-red rounded-full animate-pulse"></div>
            <div>
              <div className="text-sm font-bold">Now Open</div>
              <div className="text-xs text-gold font-semibold">Emergency Service 24/7</div>
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
        <div className="bg-navy/80 backdrop-blur-xl border-2 border-gold/30 rounded-xl p-4 max-w-xs">
          <div className="flex items-center gap-3 text-white">
            <Award className="w-5 h-5 text-gold" />
            <div>
              <div className="text-sm font-bold">I-CAR Gold</div>
              <div className="text-xs text-gold font-semibold">Certified Excellence</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Floating Stats - Apple Style */}
      <motion.div 
        className="absolute top-1/2 right-12 transform -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-2 border-gold/20 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: "spring" }}
              className="pb-4 border-b border-silver"
            >
              <div className="text-3xl font-black text-navy mb-1">15,000+</div>
              <div className="text-sm text-gunmetal font-bold uppercase tracking-wider">Cars Repaired</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.4, type: "spring" }}
              className="pb-4 border-b border-silver"
            >
              <div className="text-3xl font-black text-navy flex items-center justify-center gap-1 mb-1">
                4.9<Star className="w-6 h-6 text-gold fill-gold" />
              </div>
              <div className="text-sm text-gunmetal font-bold uppercase tracking-wider">Google Rating</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.6, type: "spring" }}
            >
              <div className="text-3xl font-black text-navy mb-1">30+</div>
              <div className="text-sm text-gunmetal font-bold uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/80">
          <div className="text-xs uppercase tracking-[0.3em] mb-4 font-bold text-gold">Discover Excellence</div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-12 bg-gradient-to-b from-gold via-red to-blue rounded-full"
          ></motion.div>
        </div>
      </motion.div>


    </section>
  )
}

export default VideoHero