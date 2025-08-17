'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Card from '@/components/shared/Card'
import Section from '@/components/shared/Section'
import Button from '@/components/shared/Button'

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      quote: "37 new cars last month alone. My shop has never been this busy. BodyShopLeads delivered exactly what they promised.",
      name: "Mike Thompson",
      title: "Owner",
      company: "Thompson Collision Center",
      location: "Phoenix, AZ",
      rating: 5,
      results: "+37 cars/month",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "Finally, a marketing company that understands collision repair. They helped us compete with the big MSOs.",
      name: "Sarah Chen", 
      title: "Manager",
      company: "Precision Auto Body",
      location: "Denver, CO",
      rating: 5,
      results: "+250% online visibility",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "Our phone literally won't stop ringing. Best investment I've made in 20 years of business.",
      name: "Carlos Rodriguez",
      title: "Owner",
      company: "Quality Collision",
      location: "Austin, TX", 
      rating: 5,
      results: "+$180k revenue",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "From 2-3 cars a week to 12-15. The ROI speaks for itself. These guys know what they're doing.",
      name: "Jennifer Walsh",
      title: "Owner",
      company: "Elite Auto Body",
      location: "Miami, FL",
      rating: 5,
      results: "+400% lead increase",
      avatar: "/api/placeholder/80/80"
    },
    {
      quote: "We went from struggling to stay busy to having a 2-week waiting list. Game changer for our business.",
      name: "David Kim",
      title: "Owner", 
      company: "Metro Body Works",
      location: "Seattle, WA",
      rating: 5,
      results: "2-week backlog",
      avatar: "/api/placeholder/80/80"
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <Section background="white" padding="xl" id="testimonials">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-section-title font-bold font-display text-text-primary mb-6">
            Shop Owners Love Working With Us
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real body shop owners are saying 
            about their results with BodyShopLeads.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main Testimonial Card */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card variant="floating" padding="xl" className="relative">
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-6 left-6 text-primary-100"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                >
                  <Quote size={48} />
                </motion.div>

                <div className="relative z-10 pt-8">
                  {/* Stars */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    className="text-xl md:text-2xl text-text-primary text-center mb-8 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div
                    className="flex flex-col sm:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      {/* Name & Company */}
                      <div className="text-center sm:text-left">
                        <div className="font-bold text-text-primary text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-text-secondary">
                          {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                        </div>
                        <div className="text-text-muted text-sm">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>

                    {/* Results Badge */}
                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                      {testimonials[currentIndex].results}
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Previous Button */}
          <motion.button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover transition-all duration-200 text-text-primary hover:text-primary-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-card hover:shadow-card-hover transition-all duration-200 text-text-primary hover:text-primary-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          className="flex items-center justify-center mt-6 gap-2 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-300'}`} />
          <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-primary-500 hover:text-primary-600 ml-2"
          >
            {isAutoPlaying ? 'Pause' : 'Resume'}
          </button>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          Ready to Join These Success Stories?
        </h3>
        <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
          Get your free digital audit and see exactly how we can help your shop 
          get more cars and grow your revenue.
        </p>
        <Button size="lg" href="#contact">
          Get My Free Audit
        </Button>
      </motion.div>
    </Section>
  )
}

export default Testimonials
