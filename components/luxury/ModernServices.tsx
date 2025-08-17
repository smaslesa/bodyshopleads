'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Palette, 
  Gem, 
  Shield, 
  Sparkles, 
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Phone
} from 'lucide-react'

const ModernServices = () => {
  const services = [
    {
      icon: Crown,
      title: 'Bespoke Restoration',
      description: 'Artisanal restoration services for the world\'s most exclusive vehicles, maintaining factory specifications.',
      features: ['Hand-crafted bodywork', 'Original paint formulations', 'Concours-level finish', 'Heritage certification'],
      premium: true
    },
    {
      icon: Palette,
      title: 'Atelier Paint Studio',
      description: 'Our master craftsmen recreate factory-perfect finishes using proprietary color-matching technology.',
      features: ['Spectrophotometer analysis', 'Multi-coat systems', 'Hand-polished finish', 'UV protection coating'],
      premium: true
    },
    {
      icon: Gem,
      title: 'Carbon Fiber Artistry',
      description: 'Specialized carbon fiber repair and refinishing for exotic and luxury performance vehicles.',
      features: ['Autoclave curing', 'Weave pattern matching', 'Structural integrity', 'Aerospace-grade materials'],
      premium: true
    },
    {
      icon: Shield,
      title: 'Concierge Insurance',
      description: 'White-glove insurance coordination with preferred status at luxury insurers worldwide.',
      features: ['Direct authorization', 'Expedited claims', 'Loaner coordination', 'Lifetime warranty'],
      premium: false
    },
    {
      icon: Sparkles,
      title: 'Detailing Atelier',
      description: 'Museum-quality preparation and protection services for discerning collectors.',
      features: ['Paint correction', 'Ceramic coating', 'Interior restoration', 'Protective films'],
      premium: false
    },
    {
      icon: Award,
      title: 'Certification Services',
      description: 'Factory-authorized repairs maintaining manufacturer warranties and heritage value.',
      features: ['OEM parts only', 'Factory procedures', 'Warranty preservation', 'Documentation'],
      premium: false
    }
  ]

  return (
    <section id="artisanship" className="luxury-section section-spacing bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
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
            <Crown className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">Artisanal Services</span>
            <Crown className="w-6 h-6 text-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-[-0.02em]">
            MASTER
            <span className="block text-amber-100 font-thin mt-2">CRAFTSMANSHIP</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Where automotive artistry meets uncompromising precision. Each vehicle receives bespoke attention 
            from our master craftsmen, ensuring restoration to concours-level perfection.
          </p>
        </motion.div>

        {/* Luxury Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`luxury-card p-10 group relative overflow-hidden ${
                service.premium ? 'border-amber-400/40' : ''
              }`}
            >
              {service.premium && (
                <div className="absolute top-4 right-4">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-8 group-hover:bg-amber-400/20 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl font-light text-white mb-6 tracking-wide luxury-heading">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Luxury CTA Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-amber-400/20 p-16 text-center relative overflow-hidden">
            {/* Luxury background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-amber-600/20"></div>
            </div>
            
            <div className="relative z-10">
              <Crown className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h3 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-wide luxury-heading">
                BESPOKE CONSULTATION
              </h3>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Experience the pinnacle of automotive restoration. Our master craftsmen provide 
                personalized consultations for the world's most exclusive vehicles.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="luxury-btn-primary text-base px-12 py-4 flex items-center justify-center gap-3"
                >
                  <Award className="w-4 h-4" />
                  Schedule Private Viewing
                </motion.button>
                <motion.a 
                  href="tel:555-123-4567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="luxury-btn-secondary text-base px-12 py-4 flex items-center justify-center gap-3"
                >
                  <Phone className="w-4 h-4" />
                  Concierge Line
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernServices