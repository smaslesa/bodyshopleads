'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Star, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: "I-CAR Gold Class",
      description: "Highest level of collision repair training",
      icon: Award,
      color: "bg-gold",
      badge: "🏆"
    },
    {
      name: "ASE Certified",
      description: "Automotive Service Excellence certification",
      icon: Shield,
      color: "bg-blue",
      badge: "✅"
    },
    {
      name: "PPG Certified",
      description: "Premium paint system certification",
      icon: Star,
      color: "bg-red",
      badge: "🎨"
    },
    {
      name: "Tesla Approved",
      description: "Authorized Tesla collision repair center",
      icon: CheckCircle,
      color: "bg-green",
      badge: "⚡"
    },
    {
      name: "BMW Certified",
      description: "Factory-trained BMW repair specialists",
      icon: Award,
      color: "bg-navy",
      badge: "🚗"
    },
    {
      name: "Mercedes Approved",
      description: "Certified Mercedes-Benz repair facility",
      icon: Shield,
      color: "bg-gunmetal",
      badge: "⭐"
    }
  ]

  return (
    <section className="py-16 patriotic-gradient">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            Industry-Leading <span className="text-gold">Certifications</span>
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our technicians maintain the highest industry certifications to ensure quality repairs for all vehicle makes and models
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              className="text-white text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              {/* Certification Badge */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ rotate: 5 }}
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur border border-white/30 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-gold/20 transition-all duration-300">
                  <div className="text-4xl">{cert.badge}</div>
                </div>
                
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Certification Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx * 0.1) + 0.3 }}
              >
                <h4 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-white/80 group-hover:text-white transition-colors leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>

              {/* Hover Indicator */}
              <motion.div 
                className="w-2 h-2 bg-gold rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-american p-8 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-6">
              Why Certifications Matter
            </h4>
            
            <div className="grid md:grid-cols-3 gap-8 text-white/90">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-navy" />
                </div>
                <h5 className="font-bold mb-2">Expert Training</h5>
                <p className="text-sm">
                  Our technicians receive continuous training on the latest repair techniques and technologies
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-navy" />
                </div>
                <h5 className="font-bold mb-2">Quality Assurance</h5>
                <p className="text-sm">
                  Certifications ensure we meet the highest standards for safety and repair quality
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-navy" />
                </div>
                <h5 className="font-bold mb-2">Warranty Protection</h5>
                <p className="text-sm">
                  Certified repairs are backed by manufacturer warranties and our lifetime guarantee
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-12 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {[
            "30+ Years Experience",
            "15,000+ Cars Repaired", 
            "Lifetime Warranty",
            "Insurance Approved",
            "Family Owned"
          ].map((trust, idx) => (
            <motion.div
              key={trust}
              className="text-white/80 font-semibold text-lg hover:text-gold transition-colors cursor-default"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + (idx * 0.1) }}
              whileHover={{ scale: 1.1 }}
            >
              {trust}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
