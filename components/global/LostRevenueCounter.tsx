'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, TrendingDown } from 'lucide-react'

const LostRevenueCounter = () => {
  const [seconds, setSeconds] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show after 5 seconds
    const showTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(showTimer)
  }, [isDismissed])

  useEffect(() => {
    if (isVisible && !isDismissed) {
      const interval = setInterval(() => {
        setSeconds(s => s + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isVisible, isDismissed])

  const lostRevenue = seconds * 23 // $23 per second
  
  if (!isVisible || isDismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-24 right-4 bg-red-600 text-white rounded-lg shadow-2xl p-4 z-40 max-w-xs no-print"
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: 100, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center text-sm hover:bg-gray-100 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <TrendingDown className="w-5 h-5 text-red-200" />
          <div className="text-xs uppercase tracking-wide font-semibold">While You Wait...</div>
        </div>
        
        <motion.div 
          className="text-2xl font-bold mb-1"
          key={lostRevenue}
          initial={{ scale: 1.2, color: '#fbbf24' }}
          animate={{ scale: 1, color: '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          ${lostRevenue.toLocaleString()}
        </motion.div>
        
        <div className="text-xs opacity-90 mb-3">Lost to Competitors</div>
        
        {/* Progress bar */}
        <div className="w-full bg-red-500 rounded-full h-2 mb-3">
          <motion.div
            className="bg-yellow-400 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((seconds / 60) * 100, 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <button
          onClick={() => setIsDismissed(true)}
          className="w-full bg-white text-red-600 py-2 px-3 rounded font-bold text-sm hover:bg-gray-100 transition-colors"
        >
          Stop This Now
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default LostRevenueCounter
