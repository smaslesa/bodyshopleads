'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Calendar, X } from 'lucide-react'

const ModernFloatingWidgets = () => {
  const [showChat, setShowChat] = useState(false)

  return (
    <>
      {/* Floating Phone Button */}
      <motion.a
        href="tel:555-123-4567"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-orange-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Floating Schedule Button */}
      <motion.button
        className="fixed bottom-24 left-6 z-40 w-14 h-14 bg-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Calendar className="w-6 h-6" />
      </motion.button>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-orange-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-xs opacity-90">We're online now!</div>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {/* Bot Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-xs">
                    <p className="text-sm text-slate-900">
                      Hi! I'm here to help with your collision repair needs. 
                      What can I assist you with today?
                    </p>
                    <div className="text-xs text-slate-600 mt-1">Just now</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2">
                  <button className="block w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-slate-900 border border-gray-100">
                    📋 Get a free estimate
                  </button>
                  <button className="block w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-slate-900 border border-gray-100">
                    📅 Schedule appointment
                  </button>
                  <button className="block w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-slate-900 border border-gray-100">
                    📞 Call us now
                  </button>
                  <button className="block w-full text-left p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm text-slate-900 border border-gray-100">
                    ❓ Ask a question
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                />
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Labels */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="fixed bottom-8 right-24 z-30 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-white/20 pointer-events-none"
      >
        <div className="text-xs font-medium text-slate-900">Need help?</div>
        <div className="text-xs text-slate-600">Chat with us!</div>
      </motion.div>
    </>
  )
}

export default ModernFloatingWidgets
