'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">
                Stop Losing Customers to Competitors
              </h2>
              
              <p className="text-xl text-blue-100 mb-8">
                Get a free audit of your online presence. We'll show you exactly where you're losing customers and how to fix it.
              </p>

              {/* What You Get */}
              <div className="space-y-4 mb-8">
                {[
                  "See exactly where you rank on Google",
                  "Find out why customers can't find you", 
                  "Get a plan to fix it in 30 days",
                  "No sales pitch, just honest feedback"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Elements */}
              <div className="flex flex-wrap gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Results in 30 days</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl text-center"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Get Your Free Website Consultation
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  See exactly how to get more customers online
                </p>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Free website audit & recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">See what your competitors are doing wrong</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Get a custom plan to dominate your area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">No obligation - just valuable insights</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-lg font-bold text-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get My Free Consultation
                <ArrowRight className="w-6 h-6" />
              </button>

              <p className="text-sm text-gray-500 mt-4">
                ⏱️ Takes 2 minutes • 📞 We'll call within 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="homepage-cta"
        title="Get Your Free Website Consultation"
        subtitle="We'll show you exactly how to get more customers online"
      />
    </section>
  )
}

export default CTA