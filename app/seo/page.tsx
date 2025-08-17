'use client'

import { useState } from 'react'
import { Phone, CheckCircle, ArrowRight, TrendingUp, Target, Search } from 'lucide-react'
import GoogleSearchLive from '@/components/home/GoogleSearchLive'
import { PRICING_CONFIG } from '@/config/pricing'
import LeadModal from '@/components/shared/LeadModal'

export default function SEOPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-6 py-3 rounded-full mb-8">
              <span className="text-red-600 font-semibold">🚨 Search Emergency</span>
            </div>
            
            <h1 className="text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Your Competitors Own
              <span className="text-blue-600 block mt-2">"Body Shop Near Me"</span>
              <span className="text-red-600 block mt-2">Let's Fix That</span>
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-8 leading-relaxed">
              While you wait for insurance referrals, shops ranking #1 on Google get 
              <span className="font-bold text-blue-600"> 33% of ALL searches</span>. 
              That should be you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Dominate Google Now
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

            {/* Painful Truth */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Position #1 Wins</h3>
                <p className="text-red-600">Gets 33% of all clicks. Your competitor, not you.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Ads Cost $50+/Click</h3>
                <p className="text-red-600">Ranking #1 gets the same traffic for FREE.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">1,000+ Monthly Searches</h3>
                <p className="text-red-600">In your city. Going to someone else.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Search Demo */}
      <GoogleSearchLive />

      {/* The Math Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-neutral-900 mb-6">
                The Math That'll Make You Sick
              </h2>
              <p className="text-xl text-neutral-600">
                Here's exactly what ranking #1 vs. #10 means in real money
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">Your Current Situation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Google ranking:</span>
                      <span className="text-2xl font-bold text-red-600">Page 2+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly searches:</span>
                      <span className="text-xl font-bold">1,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Clicks you get:</span>
                      <span className="text-2xl font-bold text-red-600">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">New customers:</span>
                      <span className="text-2xl font-bold text-red-600">1-2</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="text-gray-700">Monthly revenue:</span>
                      <span className="text-3xl font-bold text-red-600">$5,000</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-3xl text-gray-400">VS</div>

                <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                  <h3 className="text-2xl font-bold text-green-700 mb-6">Ranking #1</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Google ranking:</span>
                      <span className="text-2xl font-bold text-green-600">#1</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Monthly searches:</span>
                      <span className="text-xl font-bold">1,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Clicks you get:</span>
                      <span className="text-2xl font-bold text-green-600">400</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">New customers:</span>
                      <span className="text-2xl font-bold text-green-600">40-50</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="text-gray-700">Monthly revenue:</span>
                      <span className="text-3xl font-bold text-green-600">$125,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-8">You're Losing</h3>
                <div className="text-6xl font-bold mb-4">$120,000</div>
                <div className="text-xl mb-8">Every Single Month</div>
                
                <div className="bg-white/10 rounded-xl p-6 mb-8">
                  <div className="text-lg mb-4">While you wait:</div>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span>Your competitor gets the clicks</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your competitor gets the customers</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your competitor gets the money</span>
                      <span>✓</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg w-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Stop This Madness
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Pricing */}
      <section className="py-24 bg-gray-50">
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
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              How Long Will You Let Them Steal Your Customers?
            </h2>
            
            <p className="text-2xl text-neutral-600 mb-12">
              Every month you wait, your competitor gets stronger. Every customer they steal makes them harder to beat. 
              <span className="font-bold text-red-600"> End this today.</span>
            </p>

            <div className="bg-white rounded-2xl p-12 shadow-2xl mb-12">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">The Guarantee</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-bold text-lg mb-2">Page 1 in 90 Days</h4>
                  <p className="text-gray-600">Or we work for free until you are</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h4 className="font-bold text-lg mb-2">More Calls</h4>
                  <p className="text-gray-600">Track every lead we generate</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="font-bold text-lg mb-2">More Money</h4>
                  <p className="text-gray-600">Or we refund your investment</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Start Dominating Google
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
              First page or you don't pay. No contracts. No commitments.
            </p>
          </div>
        </div>
      </section>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="seo-page"
        title="Start Dominating Google"
        subtitle="Let's get your shop ranking #1 for 'body shop near me'"
      />
    </main>
  )
}