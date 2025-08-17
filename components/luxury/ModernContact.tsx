'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Crown, Award, Gem, Star } from 'lucide-react'

const ModernContact = () => {
  return (
    <section id="concierge" className="luxury-section section-spacing bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Luxury Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">Private Concierge</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-extralight mb-8 tracking-[-0.02em] luxury-heading">
              EXCLUSIVE
              <span className="block text-amber-100 font-thin mt-2">ACCESS</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-16 leading-relaxed font-light">
              Experience white-glove service tailored exclusively for luxury vehicle owners. 
              Our concierge team ensures every detail exceeds your expectations.
            </p>

            {/* Luxury Contact Methods */}
            <div className="space-y-8">
              <motion.div
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 luxury-heading">Private Line</h3>
                  <a href="tel:555-123-4567" className="text-amber-400 text-2xl hover:text-amber-300 transition-colors font-light">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-gray-400 text-sm font-light">Available 24/7 for emergencies</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 luxury-heading">Beverly Hills Atelier</h3>
                  <p className="text-amber-400 text-lg font-light">9200 Sunset Boulevard</p>
                  <p className="text-gray-400 text-sm font-light">Beverly Hills, CA 90210</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 luxury-heading">Private Appointments</h3>
                  <p className="text-amber-400 font-light">By appointment only</p>
                  <p className="text-gray-400 text-sm font-light">Monday - Saturday</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Luxury Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="luxury-card p-12 relative overflow-hidden"
          >
            {/* Luxury form header */}
            <div className="text-center mb-10">
              <Crown className="w-10 h-10 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-light text-white mb-4 luxury-heading">
                Private Consultation
              </h3>
              <p className="text-gray-400 font-light">
                Exclusively for luxury vehicle owners
              </p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Private Number"
                className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
              />
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light"
              />
              
              <select className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-light">
                <option value="" className="bg-black">Select Your Marque</option>
                <option value="rolls-royce" className="bg-black">Rolls-Royce</option>
                <option value="bentley" className="bg-black">Bentley</option>
                <option value="ferrari" className="bg-black">Ferrari</option>
                <option value="lamborghini" className="bg-black">Lamborghini</option>
                <option value="aston-martin" className="bg-black">Aston Martin</option>
                <option value="mclaren" className="bg-black">McLaren</option>
                <option value="porsche" className="bg-black">Porsche</option>
                <option value="mercedes" className="bg-black">Mercedes-Benz</option>
                <option value="bmw" className="bg-black">BMW</option>
                <option value="other-luxury" className="bg-black">Other Luxury Marque</option>
              </select>
              
              <textarea
                placeholder="Describe your restoration requirements..."
                rows={4}
                className="w-full px-0 py-4 border-0 border-b border-gray-600 bg-transparent text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors font-light resize-none"
              />
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full luxury-btn-primary text-base py-5 flex items-center justify-center gap-3"
              >
                <Award className="w-5 h-5" />
                Request Private Consultation
              </motion.button>
            </form>

            {/* Luxury Guarantees */}
            <div className="mt-10 pt-8 border-t border-amber-400/20">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Star className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-light">Confidential</div>
                </div>
                <div>
                  <Crown className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-light">Immediate</div>
                </div>
                <div>
                  <Gem className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-light">Bespoke</div>
                </div>
              </div>
            </div>

            {/* Luxury background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-amber-600/5 opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernContact