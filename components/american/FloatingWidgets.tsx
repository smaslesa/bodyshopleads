'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, MessageCircle, Phone, X, Send } from 'lucide-react'

const FloatingWidgets = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState('')

  return (
    <>
      {/* Floating Estimate Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-50 no-print"
        initial={{ scale: 0, x: -100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <motion.button 
          className="btn-american rounded-full px-8 py-4 shadow-2xl flex items-center gap-3 font-bold text-lg group"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 10px 30px rgba(196, 30, 58, 0.3)",
              "0 15px 40px rgba(196, 30, 58, 0.5)", 
              "0 10px 30px rgba(196, 30, 58, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Camera className="w-6 h-6" />
          </motion.div>
          <span className="hidden sm:inline">Get Instant Estimate</span>
          <span className="sm:hidden">Estimate</span>
          
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-bright-red rounded-full opacity-30"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Live Chat Widget */}
      <motion.div
        className="fixed bottom-24 right-8 z-50 no-print"
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      >
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-blue hover:bg-navy text-white rounded-full shadow-2xl flex items-center justify-center relative group"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 10px 30px rgba(0, 71, 171, 0.3)",
              "0 15px 40px rgba(0, 71, 171, 0.5)", 
              "0 10px 30px rgba(0, 71, 171, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AnimatePresence mode="wait">
            {isChatOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Dot */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.div>

          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-blue rounded-full opacity-30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className="fixed bottom-44 right-8 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 no-print"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Chat Header */}
            <div className="bg-blue text-white p-4 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">ABS</span>
                </div>
                <div>
                  <div className="font-bold">American Body Shop</div>
                  <div className="text-xs opacity-90">Typically replies instantly</div>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-64 overflow-y-auto">
              <motion.div
                className="bg-gray-100 rounded-lg p-3 mb-4 max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm">
                  Hi! I'm here to help with your collision repair needs. How can I assist you today?
                </p>
                <div className="text-xs text-gray-500 mt-2">Just now</div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button className="w-full text-left p-3 bg-blue/5 hover:bg-blue/10 rounded-lg text-sm transition-colors">
                  📸 Get instant estimate
                </button>
                <button className="w-full text-left p-3 bg-blue/5 hover:bg-blue/10 rounded-lg text-sm transition-colors">
                  📞 Schedule phone call
                </button>
                <button className="w-full text-left p-3 bg-blue/5 hover:bg-blue/10 rounded-lg text-sm transition-colors">
                  🏢 Visit our shop
                </button>
              </motion.div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue focus:border-transparent text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && setChatMessage('')}
                />
                <button 
                  onClick={() => setChatMessage('')}
                  className="w-10 h-10 bg-blue text-white rounded-lg flex items-center justify-center hover:bg-navy transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Powered by American Body Shop
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Emergency Call Button */}
      <motion.div
        className="fixed top-1/2 right-0 z-40 no-print"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
      >
        <motion.a
          href="tel:555-123-4567"
          className="block bg-red hover:bg-bright-red text-white p-4 rounded-l-2xl shadow-2xl group"
          whileHover={{ x: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
            <div className="hidden lg:block">
              <div className="font-bold text-sm">Emergency?</div>
              <div className="text-xs opacity-90">Call Now!</div>
            </div>
          </div>
        </motion.a>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red origin-left z-50"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
      />
    </>
  )
}

export default FloatingWidgets
