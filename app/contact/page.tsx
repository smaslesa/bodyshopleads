'use client'

import { useState } from 'react'
import { Phone, Clock, Target, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'
import LeadModal from '@/components/shared/LeadModal'

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 border border-red-200 px-6 py-3 rounded-full mb-8">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-semibold">Urgent: Stop Losing Customers</span>
            </div>
            
            <h1 className="text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Every Day You Wait =
              <span className="text-red-600 block mt-2">5-10 Lost Customers</span>
            </h1>
            
            <p className="text-2xl text-neutral-600 mb-12 leading-relaxed">
              Let's fix your marketing before your competition steals 
              <span className="font-bold text-red-600"> more of YOUR customers</span>.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">While You Read This</h3>
                <p className="text-red-600">3 customers just found your competitor online</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Every Week You Wait</h3>
                <p className="text-red-600">$12,500 in potential revenue goes elsewhere</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Your Competition</h3>
                <p className="text-red-600">Gets stronger every day you don't act</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Urgency Copy */}
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-neutral-900">
                  Let's Stop the Bleeding Right Now
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-green-700 mb-3">What Happens Next:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-bold text-green-600">We Answer (Actually Answer)</h4>
                          <p className="text-green-600">Real person picks up. No phone tree.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-bold text-green-600">Quick Assessment</h4>
                          <p className="text-green-600">15-minute honest look at your current marketing.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-bold text-green-600">First Leads Within 48 Hours</h4>
                          <p className="text-green-600">If we can help, we get started immediately.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">The Money-Back Guarantee</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">No contracts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">Cancel anytime</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">Money back guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-neutral-700">You approve everything</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone CTA */}
                <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Skip the Form. Call Right Now.</h3>
                  <a 
                    href="tel:702-518-7072"
                    className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6" />
                    (702) 518-7072
                  </a>
                  <p className="mt-4 text-red-100">Available 7 days a week</p>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
                  Get Your Free Assessment
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Shop Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Body Shop Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(702) 518-7072"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      How many cars are you losing monthly? *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Select...</option>
                      <option value="5-10">5-10 cars</option>
                      <option value="10-20">10-20 cars</option>
                      <option value="20-30">20-30 cars</option>
                      <option value="30+">30+ cars</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      What's your biggest marketing problem?
                    </label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-24"
                      placeholder="Website doesn't work, no Google visibility, wasting money on ads..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      When do you want to start getting more cars? *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option value="">Select...</option>
                      <option value="immediately">Immediately</option>
                      <option value="this-week">This week</option>
                      <option value="this-month">This month</option>
                      <option value="next-month">Next month</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Get My Free Assessment Now
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    100% confidential. We'll contact you within 2 hours during business hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-neutral-900 mb-6">
              Real Questions, Honest Answers
            </h2>
            <p className="text-xl text-neutral-600">
              No generic FAQ nonsense. These are the questions shop owners actually ask.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "How fast can I get more cars?",
                answer: "First leads within 48 hours if we can help. Full campaigns running within a week. But we're honest - sustainable growth takes 30-90 days to really kick in."
              },
              {
                question: "What if it doesn't work?",
                answer: "Money back guarantee. No arguments, no explanations needed. If you're not getting more qualified leads within 90 days, we refund everything."
              },
              {
                question: "Why should I trust you over other agencies?",
                answer: "You shouldn't trust us. Trust our guarantee: No contracts, cancel anytime with 30 days notice, money back if it doesn't work. We earn your business every month."
              },
              {
                question: "How much does it cost?",
                answer: "Depends on what you need. Website: $3k-$8k. SEO: $500-$1k/month. Ads: $750-$2k/month + ad spend. We'll give you exact pricing on the call."
              },
              {
                question: "Do you work with shops in my area?",
                answer: "We work with independent shops nationwide. We'll tell you upfront if your market is too saturated or if there's not enough search volume."
              },
              {
                question: "What makes you different?",
                answer: "We only work with body shops. That's it. While other agencies spread thin across industries, we're laser-focused on collision repair marketing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{faq.question}</h3>
                <p className="text-neutral-600 text-lg leading-relaxed">{faq.answer}</p>
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
              Your Competition Just Got Another Customer
            </h2>
            
            <p className="text-2xl text-neutral-600 mb-12">
              While you're thinking about it, they're taking action. 
              <span className="font-bold text-red-600"> Stop losing and start winning.</span>
            </p>

            <div className="bg-white rounded-2xl p-12 shadow-2xl mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">Every Hour Costs You</h4>
                  <p className="text-gray-600">2-3 potential customers to competitors</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">Every Day Costs You</h4>
                  <p className="text-gray-600">$1,800 in potential revenue</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-2">Take Action Now</h4>
                  <p className="text-gray-600">Start getting leads in 48 hours</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:702-518-7072" 
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3"
              >
                <Phone className="w-8 h-8" />
                Call (702) 518-7072 Now
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get More Customers Now
              </button>
            </div>

            <p className="mt-8 text-neutral-500">
              Available 7 days a week. Real people answer.
            </p>
          </div>
        </div>
      </section>
      
      <LeadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="contact-page"
        title="Get More Customers Now"
        subtitle="Let's discuss how to grow your body shop business"
      />
    </main>
  )
}