'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      name: "Mike Rodriguez",
      location: "Los Angeles, CA",
      rating: 5,
      date: "2 weeks ago",
      review: "Absolutely incredible work! My 2023 Tesla Model S was hit pretty bad in a parking lot. American Body Shop made it look brand new again. The paint matching is perfect and you can't even tell it was damaged. Their customer service is outstanding too.",
      avatar: "MR",
      verified: true,
      platform: "Google"
    },
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA", 
      rating: 5,
      date: "1 month ago",
      review: "I was rear-ended on the 405 and my BMW X5 had significant damage. These guys handled everything with my insurance and kept me updated throughout the process. The repair quality is exceptional and they even detailed my car before pickup!",
      avatar: "SJ",
      verified: true,
      platform: "Google"
    },
    {
      name: "David Chen",
      location: "Santa Monica, CA",
      rating: 5,
      date: "3 weeks ago", 
      review: "Best collision repair shop in LA, hands down. They repaired my Ford F-150 after a major accident and it looks better than when I bought it. The lifetime warranty gives me peace of mind. Highly recommend to anyone needing bodywork.",
      avatar: "DC",
      verified: true,
      platform: "Yelp"
    },
    {
      name: "Jennifer Martinez",
      location: "Pasadena, CA",
      rating: 5,
      date: "1 week ago",
      review: "My daughter's first car got damaged in a fender bender. The team at American Body Shop was so patient and explained everything to us. They made a stressful situation much easier. The car looks perfect and the price was very fair.",
      avatar: "JM",
      verified: true,
      platform: "Google"
    },
    {
      name: "Robert Thompson",
      location: "Long Beach, CA",
      rating: 5,
      date: "2 months ago",
      review: "Professional, honest, and skilled. They repaired hail damage on my Camaro and the work is flawless. They even found additional damage that my insurance initially missed and got it covered. These guys really know their stuff!",
      avatar: "RT",
      verified: true,
      platform: "Google"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  // Auto-advance reviews every 5 seconds
  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextReview, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, currentReview])

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              >
                <Star className="w-10 h-10 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Trusted by <span className="text-blue">3,000+ Customers</span>
          </h2>
          <p className="text-xl text-gunmetal max-w-3xl mx-auto">
            Don't just take our word for it - see what our customers say about their experience
          </p>
        </motion.div>
        
        {/* Main Review Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                className="card-american p-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <motion.div 
                  className="text-blue/20 mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </motion.div>

                {/* Stars */}
                <motion.div 
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </motion.div>

                {/* Review Text */}
                <motion.blockquote 
                  className="text-2xl text-gunmetal mb-8 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  "{reviews[currentReview].review}"
                </motion.blockquote>

                {/* Reviewer Info */}
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue to-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {reviews[currentReview].avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-bold text-navy text-lg">
                          {reviews[currentReview].name}
                        </div>
                        {reviews[currentReview].verified && (
                          <div className="w-5 h-5 bg-blue rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="text-gunmetal">{reviews[currentReview].location}</div>
                      <div className="text-sm text-gray-500">{reviews[currentReview].date}</div>
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-6 h-6 bg-red rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <span>Posted on {reviews[currentReview].platform}</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevReview()
                setIsAutoPlaying(false)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gunmetal" />
            </button>
            <button
              onClick={() => {
                nextReview()
                setIsAutoPlaying(false)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gunmetal" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentReview(idx)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentReview ? 'bg-blue w-8' : 'bg-silver hover:bg-gunmetal'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex items-center justify-center mt-6 gap-2 text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green animate-pulse' : 'bg-gray-400'}`} />
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-blue hover:text-red ml-2 font-semibold"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'}
            </button>
          </div>
        </div>

        {/* Review Stats */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { number: "3,247", label: "Total Reviews", icon: "⭐" },
            { number: "4.9", label: "Average Rating", icon: "📊" },
            { number: "98%", label: "Recommend Us", icon: "👍" },
            { number: "24hrs", label: "Response Time", icon: "⚡" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
              <div className="text-gunmetal font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-navy mb-6">
            Ready to Join Our <span className="text-gold">Happy Customers?</span>
          </h3>
          <p className="text-xl text-gunmetal mb-8 max-w-2xl mx-auto">
            Get your free estimate today and experience the American Body Shop difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-american text-lg px-8 py-4">
              Get My Free Estimate
            </button>
            <a 
              href="https://www.google.com/search?q=american+body+shop+reviews" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-american-outline text-lg px-8 py-4 flex items-center gap-2"
            >
              Read All 3,247 Reviews
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewsSection
