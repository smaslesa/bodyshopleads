'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Users, 
  TrendingUp, 
  Star,
  CheckCircle,
  Clock,
  Phone
} from 'lucide-react'

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "100% Money Back",
      subtitle: "Guarantee",
      color: "green"
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "200+ Happy",
      subtitle: "Body Shops",
      color: "primary"
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "4.9 Star",
      subtitle: "Rating",
      color: "yellow"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-500" />,
      title: "Industry",
      subtitle: "Specialists",
      color: "purple"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-secondary-500" />,
      title: "Proven",
      subtitle: "Results",
      color: "secondary"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: "No Long",
      subtitle: "Contracts",
      color: "green"
    }
  ]

  const certifications = [
    {
      icon: <Clock className="w-5 h-5 text-primary-500" />,
      text: "24/7 Support"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-500" />,
      text: "Direct Access to Experts"
    },
    {
      icon: <Shield className="w-5 h-5 text-primary-500" />,
      text: "GDPR Compliant"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Trusted by Body Shop Owners Nationwide
          </h3>
          <p className="text-text-secondary">
            Join hundreds of successful shops already growing with our proven system
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-xl p-4 text-center shadow-soft hover:shadow-card transition-all duration-300 border border-border-light group-hover:border-primary-200"
                whileHover={{ 
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300">
                    {badge.icon}
                  </div>
                </motion.div>

                {/* Text */}
                <div className="text-sm">
                  <div className="font-bold text-text-primary group-hover:text-primary-600 transition-colors duration-300">
                    {badge.title}
                  </div>
                  <div className="text-text-secondary text-xs">
                    {badge.subtitle}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 hover:text-primary-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cert.icon}
              <span>{cert.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-6 bg-white rounded-full px-8 py-4 shadow-soft">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-500">200+</div>
              <div className="text-xs text-text-secondary">Clients</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-500">$2.3M+</div>
              <div className="text-xs text-text-secondary">Generated</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">182%</div>
              <div className="text-xs text-text-secondary">Avg ROI</div>
            </div>
          </div>
        </motion.div>

        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-primary-100 rounded-full opacity-10 blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
