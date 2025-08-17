'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const repairs = [
    {
      type: "Major Front-End Collision",
      vehicle: "2023 Toyota Camry",
      time: "3 days",
      beforeDesc: "Severe front-end damage from intersection collision",
      afterDesc: "Complete restoration to factory condition",
      // Using placeholder gradient backgrounds for now
      before: "linear-gradient(45deg, #8B0000, #A0522D)", // Dark red/brown for damage
      after: "linear-gradient(45deg, #0047ab, #4b7bec)"   // Clean blue
    },
    {
      type: "Rear-End Impact",
      vehicle: "2022 Ford F-150",
      time: "2 days", 
      beforeDesc: "Rear bumper and tailgate damage",
      afterDesc: "Perfect paint match and alignment",
      before: "linear-gradient(45deg, #2F4F4F, #696969)",
      after: "linear-gradient(45deg, #c41e3a, #ff0000)"
    },
    {
      type: "Side Panel Damage",
      vehicle: "2024 BMW X5",
      time: "4 days",
      beforeDesc: "Driver side door and quarter panel damage",
      afterDesc: "Seamless repair with OEM parts",
      before: "linear-gradient(45deg, #800080, #4B0082)",
      after: "linear-gradient(45deg, #ffd700, #ffed4e)"
    }
  ]

  const handleMove = (clientX: number) => {
    const container = document.getElementById('comparison-container')
    if (container) {
      const rect = container.getBoundingClientRect()
      const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
      setSliderPosition(x)
    }
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % repairs.length)
    setSliderPosition(50) // Reset slider position
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + repairs.length) % repairs.length)
    setSliderPosition(50) // Reset slider position
  }

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-6">
            See Our <span className="text-red">Work Quality</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Drag the slider to see the incredible transformation. Every repair comes with our lifetime warranty.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Before/After Slider */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div 
              id="comparison-container"
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize"
              onMouseMove={(e) => isDragging && handleMove(e.clientX)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Before Image (Left) */}
              <div 
                className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: repairs[activeIndex].before }}
              >
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">🚗💥</div>
                  <div className="text-xl">BEFORE</div>
                  <div className="text-sm mt-2 opacity-80">
                    {repairs[activeIndex].beforeDesc}
                  </div>
                </div>
              </div>

              {/* After Image (Right) */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
                style={{ 
                  background: repairs[activeIndex].after,
                  clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` 
                }}
              >
                <div className="text-center p-8">
                  <div className="text-4xl mb-4">✨🚗</div>
                  <div className="text-xl">AFTER</div>
                  <div className="text-sm mt-2 opacity-80">
                    {repairs[activeIndex].afterDesc}
                  </div>
                </div>
              </motion.div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <button
                  className="absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
                  onMouseDown={() => setIsDragging(true)}
                  onTouchStart={() => setIsDragging(true)}
                >
                  <div className="flex gap-1">
                    <div className="w-1 h-6 bg-navy rounded"></div>
                    <div className="w-1 h-6 bg-navy rounded"></div>
                  </div>
                </button>
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 bg-red/90 text-white px-4 py-2 rounded-lg font-bold">
                BEFORE
              </div>
              <div className="absolute top-6 right-6 bg-green/90 text-white px-4 py-2 rounded-lg font-bold">
                AFTER
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </motion.div>
          
          {/* Repair Details */}
          <motion.div 
            className="glass-american p-8 rounded-2xl mb-12"
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-sm text-white/70 mb-2">Damage Type</div>
                <div className="text-2xl font-bold text-gold">{repairs[activeIndex].type}</div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-2">Vehicle</div>
                <div className="text-2xl font-bold text-white">{repairs[activeIndex].vehicle}</div>
              </div>
              <div>
                <div className="text-sm text-white/70 mb-2">Repair Time</div>
                <div className="text-2xl font-bold text-green">{repairs[activeIndex].time}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {repairs.map((repair, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx)
                  setSliderPosition(50)
                }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === activeIndex ? 'border-gold scale-110' : 'border-white/20 hover:border-white/50'
                }`}
                whileHover={{ scale: idx === activeIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="w-full h-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: repair.after }}
                >
                  {repair.vehicle.split(' ')[0]}
                </div>
                {idx === activeIndex && (
                  <motion.div
                    className="absolute inset-0 border-2 border-gold rounded-lg"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Ready to See Your Car <span className="text-gold">Transformed?</span>
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Every repair includes our lifetime warranty and satisfaction guarantee. 
              See why thousands of customers trust us with their vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-american text-lg px-8 py-4">
                Get Your Free Estimate
              </button>
              <button className="btn-american-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy">
                View More Examples
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterGallery
