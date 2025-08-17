'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Smartphone, 
  Zap, 
  Search, 
  PhoneCall,
  Shield,
  Users,
  Car,
  Calendar,
  CheckCircle
} from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

const WebsiteShowcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const websitePackages = [
    {
      id: 1,
      name: "American Body Shop",
      tagline: "Professional & Trustworthy Design",
      demoUrl: "/american", // Your actual demo
      highlights: [
        "Loads in under 2 seconds",
        "Perfect on mobile devices", 
        "Clear call-to-action buttons",
        "Insurance info prominently displayed"
      ],
      designElements: [
        { icon: Zap, label: "Fast" },
        { icon: Smartphone, label: "Mobile Ready" },
        { icon: Search, label: "SEO Built-in" },
        { icon: PhoneCall, label: "Click to Call" }
      ]
    },
    {
      id: 2,
      name: "Modern Collision Center",
      tagline: "Clean & Converting Design", 
      demoUrl: "/modern", // Your second demo
      highlights: [
        "Modern, clean layout",
        "Trust badges visible",
        "Easy estimate forms",
        "Gallery showcase ready"
      ],
      designElements: [
        { icon: Shield, label: "Trust" },
        { icon: Users, label: "Reviews" },
        { icon: Car, label: "Gallery" },
        { icon: Calendar, label: "Booking" }
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            See Your New Website
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Choose your professional design. Customized for your shop. Live in 48 hours.
          </p>
        </motion.div>

        {/* Demo Sites Grid */}
        <div className="space-y-16 mb-16">
          {websitePackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-7xl mx-auto"
            >
              {/* Special header for American demo */}
              {pkg.id === 1 && (
                <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white text-center py-4">
                  <h3 className="text-2xl font-bold">🇺🇸 Live Website Preview</h3>
                  <p className="text-blue-100">Click below to explore the full interactive demo!</p>
                </div>
              )}
              {/* Browser Bar */}
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 font-mono ml-4">
                  {pkg.id === 1 ? 'localhost:3000/american' : 'localhost:3000/modern'}
                </div>
              </div>

              {/* Website Preview */}
              <div className="relative bg-white overflow-hidden">
                {pkg.id === 1 || pkg.id === 2 ? (
                  // Show iframe for both featured demos (American & Modern) - Static Preview
                  <div className="bg-white" style={{ height: '800px' }}>
                    <iframe 
                      src={pkg.demoUrl}
                      className="w-full h-full border-0 pointer-events-none"
                      title={`${pkg.name} Preview`}
                      loading="lazy"
                      scrolling="no"
                    />
                  </div>
                ) : (
                  // Show placeholder for other demos
                  <div className="aspect-video bg-gray-100 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                      <p className="text-gray-600">{pkg.tagline}</p>
                      
                      {/* Design Elements */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        {pkg.designElements.map((element, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <element.icon className="w-4 h-4 text-blue-600" />
                            <span>{element.label}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Demo Button */}
                      <div className="pt-4">
                        <a 
                          href={pkg.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          View Live Demo
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div className="p-6 bg-gray-50">
                {pkg.id === 1 || pkg.id === 2 ? (
                  // Interactive highlights for featured demos (American & Modern)
                  <div className="text-center space-y-4">
                    <h4 className="text-lg font-bold text-gray-900">Interactive Demo Above</h4>
                    <p className="text-gray-600">Scroll, click, and explore the live website!</p>
                    <div className="grid grid-cols-2 gap-4 mt-4 max-w-md mx-auto">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-3 text-center">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* View Demo Button */}
                    <div className="pt-4">
                      <a 
                        href={pkg.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Full Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  // Regular highlights for other demos
                  <div className="space-y-3">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                    
                    {/* View Demo Button for other templates */}
                    <div className="pt-4 text-center">
                      <a 
                        href={pkg.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Live Demo
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple ROI Section */}
        <motion.div
          className="bg-blue-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8">Why This Investment Makes Sense</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-blue-200">Works while you sleep</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">1</div>
              <div className="text-blue-200">Customer pays for itself</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">∞</div>
              <div className="text-blue-200">Customers over its lifetime</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </button>
            <a 
              href="tel:702-518-7072"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (702) 518-7072
            </a>
          </div>
        </motion.div>
      </div>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="website-showcase"
        title="Get Started Today"
        subtitle="Let's build you a website that brings in more customers"
      />
    </section>
  )
}

export default WebsiteShowcase