'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'

const FloatingPhone = () => {
  const [isRinging, setIsRinging] = useState(false)
  const { isAnyModalOpen } = useModal()

  useEffect(() => {
    const ringInterval = setInterval(() => {
      setIsRinging(true)
      setTimeout(() => setIsRinging(false), 2000)
    }, 8000)

    return () => clearInterval(ringInterval)
  }, [])

  return (
    <AnimatePresence>
      {!isAnyModalOpen && (
        <motion.a
          href="tel:702-518-7072"
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center gap-3 px-6 py-4 no-print"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            ...(isRinging && {
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            })
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            duration: isRinging ? 0.5 : 0.8,
            delay: 1,
            type: isRinging ? "tween" : "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className={`w-6 h-6 ${isRinging ? 'animate-pulse' : ''}`} />
          <span className="font-bold text-lg hidden sm:inline">(702) 518-7072</span>
          
          {/* Pulse ring effect when ringing */}
          {isRinging && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-red-300"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: 2 }}
            />
          )}
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default FloatingPhone
