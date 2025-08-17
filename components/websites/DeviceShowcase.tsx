'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const DeviceShowcase = () => {
  const [activeDevice, setActiveDevice] = useState('mobile')
  
  const devices = {
    mobile: { width: 375, height: 667, traffic: '73%', icon: '📱' },
    tablet: { width: 768, height: 1024, traffic: '15%', icon: '📲' },
    desktop: { width: 1200, height: 700, traffic: '12%', icon: '💻' }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Perfect on Every Device</h2>
          <p className="text-xl text-gray-600">Your customers will find you on their phones</p>
        </div>

        {/* Device Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(devices).map(([key, device]) => (
            <motion.button
              key={key}
              onClick={() => setActiveDevice(key)}
              className={`px-8 py-4 rounded-xl font-bold transition-all ${
                activeDevice === key 
                  ? 'bg-blue-600 text-white scale-110 shadow-xl' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl mr-2">{device.icon}</span>
              <span className="capitalize">{key}</span>
            </motion.button>
          ))}
        </div>

        {/* Device Frame */}
        <div className="flex justify-center">
          <motion.div
            className="relative bg-black rounded-3xl p-2 shadow-2xl"
            animate={{
              width: devices[activeDevice as keyof typeof devices].width + 40,
              height: devices[activeDevice as keyof typeof devices].height + 40,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
              {/* Website Preview */}
              <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white">
                <div className="bg-blue-600 text-white p-4">
                  <h2 className="text-2xl font-bold">Mike's Body Shop</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <button className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg">
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </div>

            {/* Traffic Badge */}
            <motion.div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-full shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold">{devices[activeDevice as keyof typeof devices].traffic}</div>
              <div className="text-sm">of your traffic</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DeviceShowcase
