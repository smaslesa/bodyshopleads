'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Phone, FileText } from 'lucide-react'

const InsurancePartners = () => {
  const insurers = [
    "State Farm", "GEICO", "Progressive", "Allstate", 
    "Farmers", "Liberty Mutual", "Nationwide", "USAA",
    "Mercury", "AAA", "Travelers", "Hartford"
  ]

  return (
    <section className="py-20 bg-off-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue/10 text-blue px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Insurance Approved</span>
          </div>
          <h3 className="text-4xl font-bold mb-4 text-navy">
            Direct Repair for <span className="text-red">All Major Insurers</span>
          </h3>
          <p className="text-xl text-gunmetal max-w-3xl mx-auto">
            We handle the paperwork, coordinate with your insurance, and get you back on the road faster.
          </p>
        </motion.div>

        {/* Insurance Logos Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {insurers.map((insurer, idx) => (
            <motion.div
              key={insurer}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[100px] group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                {/* Placeholder logo - in real implementation, these would be actual logos */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue to-navy rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {insurer.charAt(0)}
                  </span>
                </div>
                <div className="font-bold text-gunmetal group-hover:text-blue transition-colors">
                  {insurer}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: FileText,
              title: "Direct Billing",
              description: "We bill your insurance directly - no out-of-pocket expenses"
            },
            {
              icon: Phone,
              title: "Claim Assistance",
              description: "Our experts help navigate the claims process from start to finish"
            },
            {
              icon: CheckCircle,
              title: "Rental Coordination",
              description: "We arrange your rental car and handle all the paperwork"
            },
            {
              icon: Shield,
              title: "Warranty Protection",
              description: "All repairs backed by our lifetime warranty, accepted by all insurers"
            }
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.div 
                className="w-20 h-20 bg-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <benefit.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-navy mb-4">{benefit.title}</h4>
              <p className="text-gunmetal leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Insurance Process */}
        <motion.div 
          className="bg-white rounded-3xl p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-navy mb-4">
              How We Handle Your <span className="text-red">Insurance Claim</span>
            </h3>
            <p className="text-xl text-gunmetal">
              Stress-free process from claim to completion
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Contact Your Insurance",
                description: "We can call your insurance for you or you can file the claim yourself",
                icon: Phone
              },
              {
                step: "2", 
                title: "Schedule Inspection",
                description: "Insurance adjuster inspects damage at our facility",
                icon: FileText
              },
              {
                step: "3",
                title: "Approve Estimate",
                description: "We work with insurance to ensure all damage is covered",
                icon: CheckCircle
              },
              {
                step: "4",
                title: "Complete Repair",
                description: "Professional repair with lifetime warranty included",
                icon: Shield
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Step Number */}
                <motion.div 
                  className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.step}
                </motion.div>

                {/* Step Icon */}
                <motion.div 
                  className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="w-6 h-6 text-blue" />
                </motion.div>

                <h4 className="text-lg font-bold text-navy mb-3">{step.title}</h4>
                <p className="text-sm text-gunmetal leading-relaxed">{step.description}</p>

                {/* Connection Line */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-1">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-red to-blue rounded"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.1) + 0.5, duration: 0.8 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 p-8 bg-green/10 rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="text-2xl font-bold text-navy mb-4">
              Questions About Your Insurance Coverage?
            </h4>
            <p className="text-gunmetal mb-6">
              Our insurance specialists are here to help you understand your coverage and maximize your benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-american">
                Get Free Insurance Review
              </button>
              <a href="tel:555-123-4567" className="btn-american-outline flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Insurance Specialist
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default InsurancePartners
