'use client'

import { useState } from 'react'
import { CheckCircle, Shield, Target, Clock, Phone, ArrowRight } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-6 py-3 rounded-full mb-8">
              <span className="text-blue-600 font-semibold">💡 Our Story</span>
            </div>
            
            <h1 className="text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              We Built This Because
              <span className="text-blue-600 block mt-2">Generic Agencies Don't</span>
              <span className="text-red-600 block mt-2">Get Collision Repair</span>
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-12 leading-relaxed">
              After watching shops waste thousands on marketing that doesn't work, 
              we created <span className="font-bold text-blue-600">body shop-specific strategies</span> that actually bring cars in.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Laser Focused</h3>
                <p className="text-neutral-600">We only work with collision repair shops. That's it.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Started in 2025</h3>
                <p className="text-neutral-600">New company, old industry expertise.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">One Metric</h3>
                <p className="text-neutral-600">How many more cars are in your shop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-neutral-900 mb-6">
                The Problem We're Solving
              </h2>
              <p className="text-xl text-neutral-600">
                Generic marketing agencies are failing body shops
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">What Other Agencies Do Wrong</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Generic Strategies</h4>
                        <p className="text-red-600">Use the same approach for restaurants, lawyers, and body shops</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Don't Understand Your Business</h4>
                        <p className="text-red-600">Can't tell the difference between a supplement and an estimate</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Lock You Into Contracts</h4>
                        <p className="text-red-600">12-month commitments with no guarantee of results</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Vanity Metrics</h4>
                        <p className="text-red-600">Focus on "impressions" and "engagement" instead of cars in your shop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">How We Do It Right</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Body Shop Specialists</h4>
                        <p className="text-green-600">We speak your language: estimates, supplements, cycle time, DRPs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Industry Experience</h4>
                        <p className="text-green-600">Combined 20+ years in automotive marketing and operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">No Contracts</h4>
                        <p className="text-green-600">No contracts • Cancel anytime with 30 days notice</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Real Metrics</h4>
                        <p className="text-green-600">We track leads, calls, and most importantly - cars in your bays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Our Values (The Honest Version)
            </h2>
            <p className="text-xl text-neutral-600">
              No corporate buzzwords. Just what we actually believe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "We Only Work With Shops We Can Actually Help",
                description: "If your market is saturated or you're not ready to invest in growth, we'll tell you upfront. We'd rather turn down business than take your money and fail."
              },
              {
                icon: Shield,
                title: "If It's Not Working, We Fix It or Refund You",
                description: "Simple as that. We're not interested in long explanations about why something didn't work. Results matter."
              },
              {
                icon: Clock,
                title: "No Contracts Because We Earn Your Business Monthly",
                description: "Good agencies don't need contracts. If we're not delivering value every month, you should be able to leave."
              },
              {
                icon: CheckCircle,
                title: "We've Made Every Mistake So You Don't Have To",
                description: "Wasted ad spend, terrible websites, bad targeting - we've seen it all and learned from it."
              },
              {
                icon: Phone,
                title: "Available When You Need Us",
                description: "No phone trees or ticket systems. Call or text and get a real person who knows your account."
              },
              {
                icon: ArrowRight,
                title: "Transparent About Everything",
                description: "You'll know exactly what we're doing, when we're doing it, and why. No black box marketing."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Small Team of Digital Marketing Experts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We're not a massive agency with hundreds of employees. We're a focused team of specialists 
              who live and breathe collision repair marketing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">Why We Don't Show Individual Team Photos</h3>
              <div className="text-left space-y-6 max-w-3xl mx-auto">
                <p className="text-lg text-neutral-600">
                  <strong>Because we're focused on results, not personalities.</strong> Most agencies plaster their team photos 
                  everywhere to look bigger than they are. We'd rather spend our time making your phone ring.
                </p>
                <p className="text-lg text-neutral-600">
                  What you should know about us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Combined 20+ years in automotive marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Google Ads certified experts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Former body shop owners and operators</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Available when you need us</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Based in the US</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-neutral-700">Actually answer our phones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Ready to Work With People Who Actually Get Your Business?
            </h2>
            
            <p className="text-2xl text-neutral-600 mb-12">
              No sales pitch. No generic presentation. Just an honest conversation about 
              <span className="font-bold text-blue-600"> how to get more cars in your shop</span>.
            </p>

            <div className="bg-white rounded-2xl p-12 shadow-2xl mb-12">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">What Happens When You Call</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h4 className="font-bold text-lg mb-2">Real Person Answers</h4>
                  <p className="text-gray-600">No phone trees or "press 1 for..."</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔍</div>
                  <h4 className="font-bold text-lg mb-2">Quick Assessment</h4>
                  <p className="text-gray-600">We'll look at your current marketing honestly</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h4 className="font-bold text-lg mb-2">Clear Next Steps</h4>
                  <p className="text-gray-600">Either we can help or we'll tell you who can</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Let's Talk About Your Shop
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
              No contracts. No commitments. Just an honest conversation.
            </p>
          </div>
        </div>
      </section>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="about-page"
        title="Let's Talk About Your Shop"
        subtitle="We'll create a custom plan to grow your business"
      />
    </main>
  )
}