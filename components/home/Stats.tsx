'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Star, Users } from 'lucide-react'
import Card from '@/components/shared/Card'

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      number: "47",
      label: "Average New Cars/Month",
      description: "Quality leads that convert to repairs",
      color: "primary"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary-500" />,
      number: "$2.3M",
      label: "Additional Revenue Generated",
      description: "For our clients in the last 12 months",
      color: "secondary"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      number: "182%",
      label: "Average ROI Increase",
      description: "Return on marketing investment",
      color: "green"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      number: "4.9★",
      label: "Google Rating",
      description: "From 200+ satisfied shop owners",
      color: "yellow"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-section-title font-bold font-display text-text-primary mb-4">
            Proven Results That Drive Growth
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it. Here's what we've delivered for body shops just like yours.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <Card
                variant="floating"
                padding="lg"
                className="text-center h-full group"
                hover={true}
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-3 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300">
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-text-primary mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6, type: "spring" }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: stat.color === 'primary' ? '#0066CC' : 
                                stat.color === 'secondary' ? '#FF6B35' :
                                stat.color === 'green' ? '#16A34A' : '#EAB308'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-text-secondary mb-6">
            Ready to see results like these for your shop?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get Your Free Audit
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
