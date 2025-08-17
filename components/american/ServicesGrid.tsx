'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Car, Paintbrush, Wrench, FileText, Shield, Clock, Award, CheckCircle, ArrowRight, Zap } from 'lucide-react'

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Car,
      title: "Collision Repair",
      description: "Precision collision repair using state-of-the-art technology and American craftsmanship",
      features: ["Frame straightening", "Unibody repair", "Structural restoration", "Factory-grade paint matching"],
      color: "bg-gradient-to-br from-blue to-navy",
      hoverColor: "hover:from-navy hover:to-blue",
      accentColor: "blue",
      stats: "15K+ repairs"
    },
    {
      icon: Paintbrush,
      title: "Auto Painting",
      description: "Factory-quality paint matching and refinishing that exceeds OEM standards",
      features: ["Perfect color matching", "Full vehicle repaints", "Spot repairs", "Ceramic coating protection"],
      color: "bg-gradient-to-br from-red to-bright-red",
      hoverColor: "hover:from-bright-red hover:to-red",
      accentColor: "red",
      stats: "100% match rate"
    },
    {
      icon: Wrench,
      title: "Dent Repair",
      description: "Advanced paintless dent repair technology for flawless restoration",
      features: ["Hail damage repair", "Door dings", "Minor dents", "Crease removal"],
      color: "bg-gradient-to-br from-green to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-green",
      accentColor: "green",
      stats: "Same-day service"
    },
    {
      icon: FileText,
      title: "Insurance Claims",
      description: "Complete insurance claim management with direct billing and advocacy",
      features: ["Direct billing", "Claim assistance", "Rental coordination", "Paperwork handling"],
      color: "bg-gradient-to-br from-gold to-yellow-600",
      hoverColor: "hover:from-yellow-600 hover:to-gold",
      accentColor: "gold",
      stats: "100% approved"
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-off-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-red"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive <span className="text-blue">Collision Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gunmetal max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            From minor dents to major collisions, we restore your vehicle 
            to pre-accident condition with our <span className="font-black text-red">lifetime warranty</span>.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onHoverStart={() => setHoveredService(idx)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full border-2 border-transparent hover:border-gold/20 relative overflow-hidden">
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Icon Header */}
                <motion.div 
                  className={`relative z-10 w-20 h-20 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-gold text-navy text-xs font-black px-2 py-1 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredService === idx ? 1 : 0,
                      opacity: hoveredService === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.stats}
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <motion.h3 
                    className="text-2xl font-black text-navy group-hover:text-red transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-gunmetal leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  {/* Enhanced Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-3 text-sm text-gunmetal"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.15) + (i * 0.1) }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
                        </motion.div>
                        <span className="font-semibold">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className="flex items-center gap-3 text-blue font-black group-hover:text-red transition-colors pt-6 text-sm uppercase tracking-wide"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More 
                    <motion.div
                      animate={{ x: hoveredService === idx ? [0, 5, 0] : 0 }}
                      transition={{ duration: 1, repeat: hoveredService === idx ? Infinity : 0 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Service Guarantees */}
        <motion.div 
          className="bg-gradient-to-r from-navy via-blue to-navy text-white rounded-3xl p-16 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/20 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-5xl md:text-6xl font-black mb-6">
                Our <span className="text-gold">Service Guarantees</span>
              </h3>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
                We stand behind every repair with industry-leading warranties and American pride
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Shield,
                  title: "Lifetime Warranty",
                  description: "As long as you own your vehicle, we guarantee our work with American craftsmanship",
                  accent: "gold"
                },
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  description: "Your vehicle ready when promised, or we pay for your rental - that's our commitment",
                  accent: "red"
                },
                {
                  icon: Award,
                  title: "I-CAR Gold Certified",
                  description: "Highest industry certification for collision repair excellence and continuous training",
                  accent: "blue"
                }
              ].map((guarantee, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl group-hover:shadow-gold/30 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 20px 40px rgba(255, 215, 0, 0.4)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <guarantee.icon className="w-12 h-12 text-navy" />
                  </motion.div>
                  
                  <motion.h4 
                    className="text-2xl font-black mb-4 text-gold group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {guarantee.title}
                  </motion.h4>
                  
                  <p className="text-white/90 leading-relaxed font-medium text-lg">
                    {guarantee.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-red to-bright-red hover:from-bright-red hover:to-red text-white text-xl px-12 py-5 rounded-xl font-black tracking-wide shadow-xl hover:shadow-2xl hover:shadow-red/30 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Schedule Your Repair Today
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid