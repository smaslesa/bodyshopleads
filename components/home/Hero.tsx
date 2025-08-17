'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, ChevronDown } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="relative h-screen flex items-center">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Competition Has a Better Website.
            <span className="block text-3xl md:text-5xl mt-4 text-red-400">
              That's Why They're Busier Than You.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Right now, someone just Googled "body shop near me" and chose your 
            competitor because they couldn't find you. That's $2,500 you just lost. 
            <span className="font-bold">It'll happen again in the next hour.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get More Customers Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="tel:702-518-7072" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call (702) 518-7072
            </a>
          </motion.div>
          
          {/* Trust Signals */}
          <motion.div 
            className="flex flex-wrap gap-6 text-white/90 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>See ROI in 30 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>No Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Pay Only If It Works</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </motion.div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="homepage-hero"
        title="Get More Customers Now"
        subtitle="We'll show you exactly how to dominate your local market"
      />
    </section>
  )
}

export default Hero