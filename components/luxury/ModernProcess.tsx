'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Palette, Crown, Gem, CheckCircle, Star, Award } from 'lucide-react'

const ModernProcess = () => {
  const steps = [
    {
      icon: Eye,
      title: 'Private Assessment',
      description: 'Master craftsmen conduct a comprehensive evaluation using precision measurement tools and heritage documentation.',
      time: 'Complimentary',
      luxury: true
    },
    {
      icon: Crown,
      title: 'Bespoke Planning',
      description: 'Detailed restoration blueprint created with factory specifications and artisanal techniques.',
      time: 'Personalized',
      luxury: true
    },
    {
      icon: Palette,
      title: 'Artisanal Execution',
      description: 'Master craftsmen restore your vehicle using time-honored techniques and modern precision.',
      time: '3-14 days',
      luxury: false
    },
    {
      icon: Gem,
      title: 'Concours Delivery',
      description: 'White-glove delivery with complete documentation and lifetime heritage warranty.',
      time: 'Ceremonial',
      luxury: true
    }
  ]

  return (
    <section id="process" className="luxury-section section-spacing bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Luxury Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
            <Award className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">Heritage Process</span>
            <Award className="w-6 h-6 text-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-[-0.02em]">
            ARTISANAL
            <span className="block text-amber-100 font-thin mt-2">RESTORATION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Each restoration follows our time-honored four-stage process, refined over decades 
            of serving the world's most discerning automotive collectors.
          </p>
        </motion.div>

        {/* Luxury Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              {/* Luxury Step Number */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-lg font-light text-black">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Luxury Card */}
              <div className={`luxury-card p-10 h-full relative overflow-hidden ${
                step.luxury ? 'border-amber-400/40' : 'border-amber-400/20'
              }`}>
                {step.luxury && (
                  <div className="absolute top-4 right-4">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-8 group-hover:bg-amber-400/20 transition-all duration-500">
                    <step.icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-light text-white mb-6 tracking-wide luxury-heading">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed font-light">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/20 px-6 py-3">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-amber-400 font-light tracking-wide">{step.time}</span>
                  </div>
                </div>
                
                {/* Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-amber-400/60 to-transparent z-20" />
                )}
                
                {/* Luxury hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-amber-400/30 p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-600/10"></div>
            
            <div className="relative z-10">
              <Crown className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-wide luxury-heading">
                BEGIN YOUR RESTORATION
              </h3>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Experience the difference of true automotive artistry. Every restoration begins 
                with a private consultation in our Beverly Hills atelier.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="luxury-btn-primary text-base px-16 py-5 flex items-center justify-center gap-3 mx-auto"
              >
                <Award className="w-5 h-5" />
                Schedule Heritage Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernProcess