'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GoogleSearchLive = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [currentResult, setCurrentResult] = useState(0)

  const searchText = "body shop near me"
  
  // Type animation
  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    if (searchQuery.length < searchText.length) {
      timeout = setTimeout(() => {
        setSearchQuery(searchText.slice(0, searchQuery.length + 1))
      }, 100)
    } else if (!showResults) {
      timeout = setTimeout(() => {
        setShowResults(true)
      }, 500)
    }
    
    return () => clearTimeout(timeout)
  }, [searchQuery, showResults])
  
  // Show results one by one
  useEffect(() => {
    if (showResults && currentResult < 3) {
      const timeout = setTimeout(() => {
        setCurrentResult(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [showResults, currentResult])
  
  // Reset animation after showing all results
  useEffect(() => {
    if (currentResult === 3) {
      const timeout = setTimeout(() => {
        setSearchQuery('')
        setShowResults(false)
        setCurrentResult(0)
      }, 4000) // Show complete results for 4 seconds
      return () => clearTimeout(timeout)
    }
  }, [currentResult])

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Watch What Happens When Someone Searches for You
          </h2>
          <p className="text-xl text-neutral-600">
            30+ people search for body shops in your city every day.<br />
            <span className="font-bold text-red-600">None of them find you.</span>
          </p>
        </div>

        {/* Google Search Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Bar */}
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center gap-4 bg-white rounded-full px-6 py-4 border border-gray-200">
                {/* Google Logo */}
                <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                
                {/* Search Input */}
                <input 
                  className="flex-1 text-lg outline-none"
                  value={searchQuery}
                  readOnly
                  placeholder="Search Google"
                />
                
                {/* Search Button */}
                {searchQuery.length === searchText.length && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium"
                  >
                    Search
                  </motion.button>
                )}
              </div>
            </div>

                      {/* Search Results */}
          <div className="p-6 h-[500px]">
              <AnimatePresence mode="sync">
                {showResults && (
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Ad Result */}
                    {currentResult >= 1 && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="relative"
                      >
                        <div className="absolute -left-16 top-4 text-red-600 font-bold text-lg">
                          -$7
                        </div>
                        <div className="border-l-4 border-yellow-400 pl-4">
                          <div className="flex items-start gap-2">
                            <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded font-bold">AD</span>
                            <div className="flex-1">
                              <h3 className="text-blue-700 text-lg font-medium hover:underline cursor-pointer">
                                Premier Collision Center
                              </h3>
                              <p className="text-gray-600 text-sm">
                                Professional auto body repair. Insurance approved. Free estimates...
                              </p>
                              <p className="text-xs text-red-600 mt-1">
                                💰 They pay $5-8 every time someone clicks this
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Your Client Result */}
                    {currentResult >= 2 && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="relative"
                      >
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-green-500 text-white px-3 py-1 rounded-r-lg text-sm font-bold">
                          YOUR CLIENT
                        </div>
                        <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50">
                          <h3 className="text-blue-700 text-lg font-medium hover:underline cursor-pointer">
                            Mike's Body Shop - 5 Star Collision Repair Near You
                          </h3>
                          <div className="flex items-center gap-4 my-2">
                            <div className="flex text-yellow-400">
                              {'★★★★★'.split('').map((star, i) => (
                                <span key={i}>{star}</span>
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">4.9 (247 reviews)</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Professional collision repair with lifetime warranty. Free estimates, insurance approved...
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex gap-4 text-sm">
                              <button className="text-blue-700 hover:underline">Directions</button>
                              <button className="text-blue-700 hover:underline">Call</button>
                              <button className="text-blue-700 hover:underline">Website</button>
                            </div>
                            <span className="text-green-600 font-bold text-sm">
                              FREE Traffic! $0/click
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Competitor */}
                    {currentResult >= 3 && (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="opacity-60"
                      >
                        <h3 className="text-blue-700 text-lg font-medium hover:underline cursor-pointer">
                          Some Other Body Shop
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Another shop that gets barely any clicks...
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Gets 5% of clicks • Page 2 of Google
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading State */}
              {!showResults && (
                <div className="flex items-center justify-center h-[300px]">
                  <div className="text-gray-400">
                    {searchQuery.length === 0 ? 'Customer searches for local body shop...' : 'Searching...'}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl text-neutral-700 mb-6">
            Most shops are getting <span className="font-bold text-red-600">ZERO</span> of these searches. What about you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Found on Google →
            </button>
            <a 
              href="tel:702-518-7072" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              Call (702) 518-7072
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleSearchLive
