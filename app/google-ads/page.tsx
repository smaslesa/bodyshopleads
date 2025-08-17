'use client'

import { useState } from 'react'
import { Phone, CheckCircle, ArrowRight, Target, Zap, Shield } from 'lucide-react'
import AdROICalculator from '@/components/ads/AdROICalculator'
import { PRICING_CONFIG } from '@/config/pricing'
import LeadModal from '@/components/shared/LeadModal'

export default function GoogleAdsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-6 py-3 rounded-full mb-8">
              <span className="text-red-600 font-semibold">💸 Ad Waste Alert</span>
            </div>
            
            <h1 className="text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Stop Wasting Money on
              <span className="text-red-600 block mt-2">Ads That Don't Work</span>
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-8 leading-relaxed">
              Your competitors are paying <span className="font-bold text-red-600">$50+ per click</span> and losing money. 
              We only run ads that turn into <span className="font-bold text-blue-600">cars in your shop</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                Stop Wasting Money
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

            {/* Problem Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">$50+ Per Click</h3>
                <p className="text-red-600">That's what most shops pay for garbage traffic.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">📉</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">2% Conversion Rate</h3>
                <p className="text-red-600">Average shop ads convert terribly.</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Money Down the Drain</h3>
                <p className="text-red-600">Most shops lose money on every click.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Wrong Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-neutral-900 mb-6">
                Why Your Competitors Are Bleeding Money
              </h2>
              <p className="text-xl text-neutral-600">
                (And how we fix it for you)
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">What They're Doing Wrong</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Generic Ads</h4>
                        <p className="text-red-600">"Auto repair near you" - boring and expensive</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Bad Landing Pages</h4>
                        <p className="text-red-600">Send traffic to their broken homepage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">No Tracking</h4>
                        <p className="text-red-600">Can't tell what's working or what's not</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <h4 className="font-bold text-red-600">Set and Forget</h4>
                        <p className="text-red-600">Never optimize or improve</p>
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
                        <h4 className="font-bold text-green-600">Targeted Keywords</h4>
                        <p className="text-green-600">Only bid on searches that convert to repairs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Converting Ad Copy</h4>
                        <p className="text-green-600">Headlines that make them click YOUR ad</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Optimized Landing Pages</h4>
                        <p className="text-green-600">Convert clicks into actual appointments</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-600">Complete Tracking</h4>
                        <p className="text-green-600">Know exactly what's working and what's not</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <AdROICalculator />

      {/* Our Process */}
      <section className="py-24 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              How We Make Ads That Actually Work
            </h2>
            <p className="text-xl text-neutral-600">
              No guesswork. No wasted money. Just results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Audit Your Current Waste",
                  description: "We'll show you exactly where your money is going and why your ads aren't working.",
                  icon: Target
                },
                {
                  step: "2", 
                  title: "Build Converting Campaigns",
                  description: "Target only the keywords that bring customers. Write ads that actually get clicked.",
                  icon: Zap
                },
                {
                  step: "3",
                  title: "Optimize Landing Pages", 
                  description: "Turn clicks into calls. Every visitor gets a clear path to contact you.",
                  icon: Phone
                },
                {
                  step: "4",
                  title: "Track Everything",
                  description: "Know which ads bring customers and which ones waste money. Optimize constantly.",
                  icon: Shield
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 bg-white rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                    <p className="text-lg text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                  <item.icon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                </div>
              ))}
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
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              How Much More Money Are You Going to Waste?
            </h2>
            
            <p className="text-2xl text-neutral-600 mb-12">
              Every month you run broken ads is money down the drain. Every click you pay for that doesn't convert is profit lost. 
              <span className="font-bold text-red-600"> Stop the bleeding today.</span>
            </p>

            <div className="bg-white rounded-2xl p-12 shadow-2xl mb-12">
              <h3 className="text-3xl font-bold text-neutral-900 mb-6">The Guarantee</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-bold text-lg mb-2">Better ROI</h4>
                  <p className="text-gray-600">Or we refund the difference</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📞</div>
                  <h4 className="font-bold text-lg mb-2">More Qualified Leads</h4>
                  <p className="text-gray-600">Track every call and form</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚗</div>
                  <h4 className="font-bold text-lg mb-2">More Cars</h4>
                  <p className="text-gray-600">Or we work for free until you do</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Stop Wasting Money
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
              Only pay for leads that convert. No contracts. No commitments.
            </p>
          </div>
        </div>
      </section>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="google-ads-page"
        title="Stop Wasting Money on Ads"
        subtitle="Let's create ads that actually bring cars to your shop"
      />
    </main>
  )
}