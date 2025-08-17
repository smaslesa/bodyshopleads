'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, Loader2, AlertCircle, User, Mail, Phone, Building, MessageSquare } from 'lucide-react'
import { useModal } from '@/contexts/ModalContext'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  source?: string
  title?: string
  subtitle?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  shop: string
}

// Enhanced Input Component
interface LeadInputProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  icon?: React.ReactNode
}

const LeadInput = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  error,
  icon 
}: LeadInputProps) => (
  <div className="relative">
    <div className={`relative rounded-2xl border-2 transition-all duration-200 ${
      error ? 'border-red-300' : 'border-gray-200 hover:border-gray-300 focus-within:border-blue-600'
    }`}>
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`w-full px-4 ${icon ? 'pl-12' : ''} pt-6 pb-2 text-base bg-transparent outline-none peer`}
        id={name}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 ${icon ? 'left-12' : ''} top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none
          peer-placeholder-shown:text-base
          peer-focus:top-3 peer-focus:text-xs peer-focus:text-gray-700
          ${value ? 'top-3 text-xs text-gray-700' : ''}`}
      >
        {label}
      </label>
    </div>
    {error && (
      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
)

export default function LeadModal({ 
  isOpen, 
  onClose, 
  source = 'general',
  title = "Get Your Free Website Consultation",
  subtitle = "We'll show you exactly how to get more customers online"
}: LeadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shop: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isMobile, setIsMobile] = useState(false)
  
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const { setIsAnyModalOpen } = useModal()

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Update modal context when modal opens/closes
  useEffect(() => {
    setIsAnyModalOpen(isOpen)
  }, [isOpen, setIsAnyModalOpen])

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      setTimeout(() => modalRef.current?.focus(), 100)
    } else {
      previousActiveElement.current?.focus()
    }
  }, [isOpen])

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen && isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          shop: ''
        })
        setErrors({})
      }, 300)
    }
  }, [isOpen, isSubmitted])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.shop.trim()) newErrors.shop = 'Shop name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const submissionData = {
        ...formData,
        source,
        timestamp: new Date().toISOString()
      }
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setIsSubmitted(true)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(
        error instanceof Error 
          ? error.message 
          : 'Sorry, there was an error. Please call us at (702) 518-7072.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) return `(${match[1]}) ${match[2]}-${match[3]}`
    return phone
  }

  // Success Screen
  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8 space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
      >
        <CheckCircle className="w-10 h-10 text-green-600" />
      </motion.div>
      
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-gray-900">Thanks! We'll Call You Within 24 Hours</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          We'll discuss <strong>{formData.shop}'s</strong> needs and show you exactly how to get more customers online.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3">
        <h4 className="font-semibold text-lg text-gray-900">Your Information</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <p><span className="font-medium text-gray-900">Name:</span> {formData.firstName} {formData.lastName}</p>
          <p><span className="font-medium text-gray-900">Shop:</span> {formData.shop}</p>
          <p><span className="font-medium text-gray-900">Email:</span> {formData.email}</p>
          <p><span className="font-medium text-gray-900">Phone:</span> {formatPhoneNumber(formData.phone)}</p>
        </div>
      </div>

      <div className="space-y-3 max-w-md mx-auto">
        <a
          href="tel:702-518-7072"
          className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 text-lg"
        >
          <Phone className="w-5 h-5" />
          Call Now: (702) 518-7072
        </a>
        
        <button
          onClick={onClose}
          className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          Close
        </button>
      </div>
    </motion.div>
  )

  // Form Screen
  const renderForm = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <LeadInput
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            icon={<User className="w-5 h-5" />}
          />
          <LeadInput
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <LeadInput
          label="Shop name"
          name="shop"
          value={formData.shop}
          onChange={handleChange}
          error={errors.shop}
          icon={<Building className="w-5 h-5" />}
        />

        <LeadInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={<Mail className="w-5 h-5" />}
        />

        <LeadInput
          label="Phone number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          icon={<Phone className="w-5 h-5" />}
        />


      </div>
    </motion.div>
  )

  // Mobile version
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={onClose}
            />
            
            <motion.div
              ref={modalRef}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl max-h-[95vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Get Started</h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 160px)' }}>
                {isSubmitted ? renderSuccess() : renderForm()}
              </div>

              {!isSubmitted && (
                <div className="p-4 border-t bg-gray-50">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500'
                        : 'bg-red-600 text-white active:bg-red-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Get More Customers Now'
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  // Desktop version
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">Get Started</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {isSubmitted ? renderSuccess() : renderForm()}
              </div>

              {!isSubmitted && (
                <div className="p-6 border-t bg-gray-50">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Get More Customers Now'
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
