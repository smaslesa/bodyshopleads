'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Crown, Quote, Award } from 'lucide-react'

const ModernTestimonials = () => {
  const testimonials = [
    {
      name: 'Charles Worthington III',
      vehicle: '2024 Rolls-Royce Phantom',
      rating: 5,
      text: 'Maison Collision restored my Phantom to a standard that exceeded even Rolls-Royce factory specifications. Their attention to detail is simply unparalleled.',
      location: 'Beverly Hills',
      verified: true
    },
    {
      name: 'Isabella Montenegro',
      vehicle: '2023 Ferrari SF90 Stradale',
      rating: 5,
      text: 'The carbon fiber restoration was flawless. They maintained the exact weave pattern and structural integrity. Truly master craftsmen.',
      location: 'Manhattan',
      verified: true
    },
    {
      name: 'Lord Hampton',
      vehicle: '2022 Bentley Mulsanne',
      rating: 5,
      text: 'The white-glove service and concierge approach made the entire process effortless. They understand luxury vehicle ownership.',
      location: 'Monaco',
      verified: true
    }
  ]

  return (
    <section id="testimonials" className="luxury-section section-spacing bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
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
            <Quote className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">Client Testimonials</span>
            <Quote className="w-6 h-6 text-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-[-0.02em]">
            DISTINGUISHED
            <span className="block text-amber-100 font-thin mt-2">CLIENTELE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            The trust of discerning collectors worldwide. Each testimonial represents 
            our unwavering commitment to automotive excellence.
          </p>
        </motion.div>

        {/* Luxury Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="luxury-card p-10 relative group"
            >
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-6 right-6 flex items-center gap-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-400 font-light">VERIFIED</span>
                </div>
              )}

              {/* Luxury Quote Icon */}
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-black" />
                </div>
              </div>

              <div className="relative z-10 pt-8">
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-amber-400/20 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/30 flex items-center justify-center">
                      <Crown className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="font-light text-white text-lg luxury-heading">
                        {testimonial.name}
                      </div>
                      <div className="text-amber-400 text-sm font-light">
                        {testimonial.vehicle}
                      </div>
                      <div className="text-gray-400 text-xs font-light tracking-wide">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Luxury hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Luxury Trust Section */}
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
              <div className="flex items-center justify-center gap-6 mb-8">
                <Crown className="w-8 h-8 text-amber-400" />
                <div className="text-center">
                  <div className="text-4xl font-extralight text-white mb-2">500+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-[0.15em]">Luxury Restorations</div>
                </div>
                <div className="h-12 w-px bg-amber-400/30"></div>
                <div className="text-center">
                  <div className="text-4xl font-extralight text-white mb-2">5.0</div>
                  <div className="text-sm text-gray-400 uppercase tracking-[0.15em]">Michelin Rating</div>
                </div>
                <Crown className="w-8 h-8 text-amber-400" />
              </div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                Join our distinguished clientele of collectors, enthusiasts, and luxury vehicle owners 
                who trust us with their most prized automotive possessions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernTestimonials