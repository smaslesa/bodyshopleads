'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Crown, Award, Gem } from 'lucide-react'

const ModernGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const gallery = [
    { 
      before: '/images/before-1.jpg', 
      after: '/images/after-1.jpg', 
      title: 'Rolls-Royce Phantom Heritage Restoration',
      description: 'Complete body restoration with hand-polished finish',
      value: '$45,000',
      luxury: true
    },
    { 
      before: '/images/before-2.jpg', 
      after: '/images/after-2.jpg', 
      title: 'Ferrari SF90 Carbon Fiber Reconstruction',
      description: 'Autoclave-cured carbon fiber with precision weave matching',
      value: '$32,000',
      luxury: true
    },
    { 
      before: '/images/before-3.jpg', 
      after: '/images/after-3.jpg', 
      title: 'Bentley Mulsanne Bespoke Paint',
      description: 'Custom color-matched finish with hand-applied clear coat',
      value: '$28,000',
      luxury: true
    },
    { 
      before: '/images/before-4.jpg', 
      after: '/images/after-4.jpg', 
      title: 'Aston Martin DB11 Artisanal Repair',
      description: 'Structural restoration maintaining factory tolerances',
      value: '$38,000',
      luxury: true
    },
    { 
      before: '/images/before-5.jpg', 
      after: '/images/after-5.jpg', 
      title: 'McLaren 720S Track Restoration',
      description: 'Performance-grade repair with aerodynamic optimization',
      value: '$42,000',
      luxury: true
    },
    { 
      before: '/images/before-6.jpg', 
      after: '/images/after-6.jpg', 
      title: 'Lamborghini Huracán Precision Work',
      description: 'Exotic material restoration with factory certification',
      value: '$35,000',
      luxury: true
    }
  ]

  return (
    <section id="portfolio" className="luxury-section section-spacing bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
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
            <Gem className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">Portfolio</span>
            <Gem className="w-6 h-6 text-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-[-0.02em]">
            MASTERPIECE
            <span className="block text-amber-100 font-thin mt-2">GALLERY</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Witness the transformation of the world's most exclusive vehicles. 
            Each restoration represents our commitment to automotive perfection.
          </p>
        </motion.div>

        {/* Luxury Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="luxury-card p-8 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedImage(index)}
            >
              {/* Luxury Badge */}
              {item.luxury && (
                <div className="absolute top-6 right-6 z-10">
                  <Crown className="w-5 h-5 text-amber-400 fill-amber-400" />
                </div>
              )}

              <div className="relative">
                {/* Luxury Preview */}
                <div className="relative aspect-video mb-6 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-gray-900 to-amber-600/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700"
                  >
                    <div className="text-center">
                      <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                      <div className="text-amber-400 font-light mb-2 tracking-wide">BEFORE & AFTER</div>
                      <div className="text-sm text-gray-300 font-light">Click to reveal transformation</div>
                    </div>
                  </div>
                  
                  {/* Luxury Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-400/90 via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-black">
                      <Crown className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-lg font-medium mb-1">View Masterpiece</div>
                      <div className="text-sm opacity-90">Heritage Restoration</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-light text-white luxury-heading">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-amber-400/20">
                    <span className="text-amber-400 font-light text-sm tracking-wide">Investment</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                </div>
              </div>

              {/* Luxury hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Luxury Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black/90 backdrop-blur-xl border border-amber-400/30 p-12 max-w-6xl w-full max-h-[90vh] overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>
                
                <div className="text-center mb-8">
                  <Crown className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-light text-white mb-2 luxury-heading">
                    {gallery[selectedImage].title}
                  </h3>
                  <p className="text-gray-400 font-light">
                    {gallery[selectedImage].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-lg font-light mb-6 text-amber-400 tracking-[0.1em] uppercase">Before Restoration</h4>
                    <div 
                      className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-400/20 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <Award className="w-12 h-12 text-amber-400 mx-auto mb-4 opacity-50" />
                        <span className="text-gray-400 font-light">Heritage Documentation</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-light mb-6 text-amber-400 tracking-[0.1em] uppercase">After Restoration</h4>
                    <div 
                      className="aspect-video bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/40 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <Crown className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                        <span className="text-amber-400 font-light">Concours Perfection</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center gap-3 bg-amber-400/10 border border-amber-400/20 px-8 py-4">
                    <Gem className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 font-light tracking-wide">Investment: {gallery[selectedImage].value}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ModernGallery