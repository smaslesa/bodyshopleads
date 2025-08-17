'use client'

import { useState } from 'react'
import { Phone, CheckCircle, ArrowRight, DollarSign, Clock, Zap } from 'lucide-react'
import WebsiteComparison from '@/components/websites/WebsiteComparison'
import DeviceShowcase from '@/components/websites/DeviceShowcase'
import { PRICING_CONFIG } from '@/config/pricing'
import LeadModal from '@/components/shared/LeadModal'

export default function WebsitesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-6 py-3 rounded-full mb-8">
              <span className="text-red-600 font-semibold">⚠️ Website Emergency</span>
            </div>
            
            <h1 className="text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Your Website Is Costing You
              <span className="text-red-600 block mt-2">$50,000+ Per Year</span>
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-8 leading-relaxed">
              Every day your site stays broken on mobile, slow to load, or impossible to find 
              is another day competitors steal <span className="font-bold text-red-600">YOUR customers</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Stop Losing Money Now
                <ArrowRight className="w-6 h-6" />
              </button>
              <a 
                href="tel:702-518-7072" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call (702) 518-7072
              </a>
            </div>

            {/* Pain Points */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">78% Search on Mobile</h3>
                <p className="text-red-600">Is your site mobile-ready? Most aren't.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">3 Second Rule</h3>
                <p className="text-red-600">Google gives you 3 seconds before visitors leave.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Competitors Win</h3>
                <p className="text-red-600">Their sites are terrible - here's your chance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Comparison Slider */}
      <WebsiteComparison />

      {/* Device Showcase */}
      <DeviceShowcase />

      {/* What Your Website Costs You */}
      <section className="py-24 bg-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-neutral-900 mb-6">
                What Your Broken Website Costs You
              </h2>
              <p className="text-xl text-neutral-600">
                Stop pretending your 2003 website is "good enough"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Lost Customers Daily</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Visitors who leave immediately:</span>
                      <span className="font-bold text-red-600">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile visitors who can't navigate:</span>
                      <span className="font-bold text-red-600">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>People who can't find your phone:</span>
                      <span className="font-bold text-red-600">92%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">With a New Website</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Conversion rate:</span>
                      <span className="font-bold text-green-600">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mobile experience:</span>
                      <span className="font-bold text-green-600">Perfect</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Load time:</span>
                      <span className="font-bold text-green-600">&lt;2 seconds</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6">The Real Math</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">Current website brings:</div>
                    <div className="text-3xl font-bold text-red-600">0-2 cars/month</div>
                  </div>
                  
                  <div className="text-center text-2xl">↓</div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-2">New website brings:</div>
                    <div className="text-3xl font-bold text-green-600">30-50 cars/month</div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Additional monthly revenue:</div>
                      <div className="text-4xl font-bold text-green-600">$75,000+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Pricing */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              {PRICING_CONFIG.sectionHeader.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {PRICING_CONFIG.sectionHeader.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PRICING_CONFIG.packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl p-8 shadow-xl border-2 ${
                  pkg.popular ? 'border-green-500 scale-105' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full font-bold">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{pkg.title}</h3>
                  {pkg.originalPrice && (
                    <p className="text-gray-400 line-through text-lg">{pkg.originalPrice}</p>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-xl text-gray-600">{pkg.priceUnit}</span>
                  </div>
                  <p className="text-green-600 font-semibold mt-2">{pkg.value}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mb-4 ${
                  pkg.popular 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}>
                  {pkg.cta}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    {PRICING_CONFIG.terms}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              How Many More Customers Are You Going to Let Your Competition Steal?
            </h2>
            
            <p className="text-2xl text-neutral-600 mb-12">
              Every day you wait, they get stronger. Every customer you lose makes them busier. 
              <span className="font-bold text-red-600"> Stop this right now.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Stop Losing Money Today
              </button>
              <a 
                href="tel:702-518-7072" 
                className="border-2 border-blue-600 text-blue-600 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-8 h-8" />
                (702) 518-7072
              </a>
            </div>

            <p className="mt-8 text-neutral-500">
              No contracts. No commitments. Just more cars in your shop.
            </p>
          </div>
        </div>
      </section>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="websites-page"
        title="Stop Losing Money Today"
        subtitle="Let's build you a website that brings in more customers"
      />
    </main>
  )
}