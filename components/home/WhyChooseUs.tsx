'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Target, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Star,
  CheckCircle,
  Users
} from 'lucide-react'
import Card from '@/components/shared/Card'
import Section from '@/components/shared/Section'

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: "Industry-Specific Expertise",
      description: "We only work with body shops. That's it. That's our edge.",
      points: [
        "We speak your language - estimates, supplements, cycle time",
        "OEM certification showcase capabilities", 
        "DRP alternative positioning"
      ],
      color: "primary"
    },
    {
      icon: <Target className="w-8 h-8 text-secondary-500" />,
      title: "Guaranteed Results",
      description: "We don't just promise results - we guarantee them.",
      points: [
        "30+ new cars per month or money back",
        "Track every lead, call, and conversion",
        "Monthly reports you'll actually understand"
      ],
      color: "secondary"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "No Long Contracts", 
      description: "We earn your business every single month.",
      points: [
        "No contracts • Cancel anytime with 30 days notice",
        "We earn your business every month",
        "Simple, transparent pricing"
      ],
      color: "green"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Complete Digital Dominance",
      description: "Own your local market completely.",
      points: [
        "Rank #1 for 'body shop near me'",
        "5-star review generation system",
        "Social proof that converts"
      ],
      color: "purple"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <Section background="gradient" padding="xl" id="why-choose-us">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-section-title font-bold font-display text-text-primary mb-6">
            Built Specifically for Collision Repair
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We only work with body shops. That's it. That's our edge. While other agencies 
            spread themselves thin across industries, we've laser-focused on collision repair 
            for one simple reason: it works.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
          >
            <Card
              variant="glass"
              padding="xl"
              className="h-full group relative overflow-hidden"
              hover={true}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-white mb-6 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-3 font-display">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + pointIndex * 0.1 + 0.5, duration: 0.6 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{
                  borderColor: feature.color === 'primary' ? '#0066CC' : 
                              feature.color === 'secondary' ? '#FF6B35' :
                              feature.color === 'green' ? '#16A34A' : '#8B5CF6'
                }}
                transition={{ duration: 0.3 }}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {/* Client Count */}
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-primary-500" />
            <div>
              <div className="text-2xl font-bold text-text-primary">200+</div>
              <div className="text-text-secondary">Happy Clients</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary">4.9</div>
              <div className="text-text-secondary">Average Rating</div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-500" />
            <div>
              <div className="text-2xl font-bold text-text-primary">100%</div>
              <div className="text-text-secondary">Money Back</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default WhyChooseUs
