'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, Zap, ArrowRight, CheckCircle, Phone } from 'lucide-react'
import Card from '@/components/shared/Card'
import { PRICING_CONFIG } from '@/config/pricing'

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Complete Digital Presence',
      price: '$497',
      priceUnit: '/month',
      originalPrice: '$997/mo',
      badge: 'MOST POPULAR',
      value: 'Everything included • No setup fees',
      features: [
        'Professional 10-page website',
        'Mobile responsive design',
        'Complete technical SEO (schema markup, speed optimization)',
        'Google My Business setup & management',
        'Hosting & maintenance included',
        'Monthly reporting dashboard',
        'SSL certificate',
        '2 hours monthly updates'
      ],
      cta: 'Start for $497/mo',
      popular: true
    },
    {
      icon: Zap,
      title: 'Google Ads Management',
      price: '$997',
      priceUnit: '/month',
      originalPrice: null,
      badge: 'FASTEST RESULTS',
      value: '+ your ad budget (minimum $500/month)',
      features: [
        'Everything from Complete Digital Presence',
        'Complete Google Ads campaign management',
        'Keyword research & optimization',
        'Ad copywriting & testing',
        'Weekly bid adjustments',
        'Call tracking included',
        'Detailed ROI reporting',
        'Negative keyword management'
      ],
      cta: 'Get Instant Leads'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-neutral-900 mb-6">
            {PRICING_CONFIG.sectionHeader.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {PRICING_CONFIG.sectionHeader.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <Card className={`h-full p-8 hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'border-2 border-green-500 shadow-lg' : 'border border-neutral-200'
              }`}>
                <div className="text-center space-y-6">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                    service.popular 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {service.badge}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-xl flex items-center justify-center mx-auto shadow-lg">
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Title & Pricing */}
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                    
                    {/* Price with Strike-through */}
                    <div className="space-y-2">
                      {service.originalPrice && (
                        <p className="text-gray-400 line-through text-lg">{service.originalPrice}</p>
                      )}
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-bold text-primary-600">{service.price}</span>
                        <span className="text-xl text-gray-600">{service.priceUnit}</span>
                      </div>
                      <p className="text-green-600 font-semibold">{service.value}</p>
                    </div>
                  </div>



                  {/* Features */}
                  <div className="space-y-3 text-left">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className={`w-full ${
                    service.popular 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-orange-600 hover:bg-orange-700'
                  } text-white py-4 px-6 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105`}>
                    {service.cta}
                    <ArrowRight className="w-5 h-5" />
                  </button>

                                                {/* Terms */}
                              <p className="text-xs text-gray-500">
                                No contracts • Cancel anytime with 30 days notice
                              </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
                  <div className="bg-white border border-gray-200 rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-neutral-900">
            Simple, Transparent Pricing. Two Options. No Contracts.
          </h3>
          <div className="space-y-4 mb-8">
            <p className="text-xl text-neutral-600">
              <span className="text-blue-600 font-bold">$497/mo</span> for a website that works
            </p>
            <p className="text-xl text-neutral-600">
              <span className="text-red-600 font-bold">$997/mo</span> to dominate Google
            </p>
          </div>
          <p className="text-2xl font-bold mb-8 text-neutral-900">
            Which problem do you want to solve?
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Start for $497/mo
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Instant Leads
              </button>
            </div>
            <p className="text-sm text-neutral-500 mt-6">
              No contracts • Cancel anytime with 30 days notice
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services