'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Camera, Phone, CheckCircle, ArrowRight, FileText, Car, Zap, Shield, Clock } from 'lucide-react'

const InstantEstimate = () => {
  const [step, setStep] = useState(1)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)

  const handleFileUpload = (files: FileList) => {
    setUploadedFiles(Array.from(files))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files)
    }
  }

  return (
    <section className="py-32 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get Your Estimate in <span className="text-red">60 Seconds</span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gunmetal max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            No waiting, no appointments. Just upload photos and get your professional quote instantly.
          </motion.p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Progress Bar */}
          <motion.div 
            className="flex items-center justify-between mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { step: 1, title: 'Upload Photos', icon: Camera, color: 'blue' },
              { step: 2, title: 'Vehicle Details', icon: FileText, color: 'red' },
              { step: 3, title: 'Get Quote', icon: Car, color: 'gold' }
            ].map((item, index) => (
              <div key={item.step} className="flex-1 relative">
                <div className="flex items-center">
                  {/* Enhanced Step Circle */}
                  <motion.div 
                    className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 shadow-xl ${
                      item.step <= step 
                        ? `bg-gradient-to-br from-${item.color} to-${item.color === 'gold' ? 'yellow-500' : item.color === 'blue' ? 'navy' : 'bright-red'} text-white shadow-${item.color}/30` 
                        : 'bg-white border-2 border-silver text-gunmetal shadow-lg'
                    }`}
                    animate={{ 
                      scale: item.step === step ? 1.15 : 1,
                      rotateY: item.step <= step ? 360 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
                    whileHover={{ scale: item.step === step ? 1.2 : 1.05 }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                  
                  {/* Enhanced Progress Line */}
                  {index < 2 && (
                    <div className="flex-1 h-2 mx-6 bg-silver rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.step < step ? 'bg-gradient-to-r from-blue via-red to-gold' : 'bg-silver'
                        }`}
                        initial={{ width: '0%' }}
                        animate={{ width: item.step < step ? '100%' : '0%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </div>
                
                {/* Enhanced Step Title */}
                <motion.div 
                  className={`absolute -bottom-12 left-0 text-center w-20 text-sm font-black transition-colors uppercase tracking-wide ${
                    item.step <= step ? 'text-navy' : 'text-gray-400'
                  }`}
                  animate={{ scale: item.step === step ? 1.1 : 1 }}
                >
                  {item.title}
                </motion.div>
              </div>
            ))}
          </motion.div>
          
          {/* Enhanced Form Steps */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-16 border-2 border-gold/10"
              >
                <motion.h3 
                  className="text-4xl font-black mb-12 text-center text-navy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Upload Damage Photos
                </motion.h3>
                
                <motion.div 
                  className={`border-3 border-dashed rounded-3xl p-20 text-center transition-all duration-300 ${
                    isDragOver 
                      ? 'border-gold bg-gold/5 scale-105' 
                      : 'border-blue/50 hover:border-blue hover:bg-blue/5'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="mb-8"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Upload className="w-24 h-24 text-blue mx-auto" />
                  </motion.div>
                  
                  <h4 className="text-3xl font-black mb-6 text-navy">
                    Drag photos here or click to browse
                  </h4>
                  <p className="text-xl text-gunmetal mb-12 font-medium">
                    Take photos from multiple angles for the most accurate estimate
                  </p>
                  
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                    className="hidden"
                    id="file-upload"
                  />
                  <motion.label 
                    htmlFor="file-upload" 
                    className="bg-gradient-to-r from-blue to-navy text-white text-xl px-12 py-5 rounded-xl font-black cursor-pointer inline-block shadow-xl hover:shadow-2xl hover:shadow-blue/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Photos
                  </motion.label>
                </motion.div>
                
                {/* Enhanced Photo Tips */}
                <motion.div 
                  className="grid md:grid-cols-3 gap-8 mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { title: "Front Angle", tip: "Show the full front damage clearly", icon: Camera, color: "blue" },
                    { title: "Side View", tip: "Capture any side panel damage", icon: Camera, color: "red" },
                    { title: "Close-up", tip: "Detail shots of specific damage areas", icon: Camera, color: "gold" }
                  ].map((tip, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center p-8 bg-gradient-to-br from-white to-off-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-silver/30"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br from-${tip.color} to-${tip.color === 'gold' ? 'yellow-500' : tip.color === 'blue' ? 'navy' : 'bright-red'} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <tip.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h4 className="font-black text-navy mb-3 text-lg">{tip.title}</h4>
                      <p className="text-sm text-gunmetal font-semibold">{tip.tip}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.a 
                    href="tel:555-123-4567" 
                    className="text-blue hover:text-red font-black flex items-center gap-3 text-lg"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Phone className="w-6 h-6" />
                    Call Instead: (555) 123-4567
                  </motion.a>
                  <motion.button 
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-red to-bright-red text-white text-xl flex items-center gap-3 px-12 py-5 rounded-xl font-black shadow-xl hover:shadow-2xl hover:shadow-red/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next Step
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-16 border-2 border-gold/10"
              >
                <motion.h3 
                  className="text-4xl font-black mb-12 text-center text-navy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Tell Us About the Damage
                </motion.h3>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-xl font-black text-navy mb-6">
                      Vehicle Information
                    </label>
                    <div className="space-y-6">
                      {[
                        { placeholder: "Year (e.g., 2023)", type: "text" },
                        { placeholder: "Make (e.g., Ford)", type: "text" },
                        { placeholder: "Model (e.g., F-150)", type: "text" }
                      ].map((field, idx) => (
                        <motion.input
                          key={idx}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-6 py-5 border-2 border-silver rounded-xl focus:ring-4 focus:ring-blue/20 focus:border-blue transition-all duration-300 font-semibold text-lg bg-white shadow-lg hover:shadow-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          whileFocus={{ scale: 1.02 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-xl font-black text-navy mb-6">
                      Damage Type
                    </label>
                    <div className="space-y-4">
                      {[
                        "Front-end collision",
                        "Rear-end collision", 
                        "Side impact",
                        "Minor dents/scratches",
                        "Multiple areas",
                        "Other"
                      ].map((type, idx) => (
                        <motion.label 
                          key={type} 
                          className="flex items-center gap-4 cursor-pointer p-4 rounded-xl hover:bg-blue/5 transition-all duration-300 group"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.input 
                            type="checkbox" 
                            className="w-6 h-6 text-blue rounded-lg border-2 border-silver focus:ring-2 focus:ring-blue/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          />
                          <span className="text-gunmetal font-bold group-hover:text-navy transition-colors">{type}</span>
                        </motion.label>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <label className="block text-xl font-black text-navy mb-6">
                    Additional Details (Optional)
                  </label>
                  <motion.textarea 
                    className="w-full px-6 py-5 border-2 border-silver rounded-xl focus:ring-4 focus:ring-blue/20 focus:border-blue transition-all duration-300 h-40 font-semibold text-lg bg-white shadow-lg hover:shadow-xl resize-none"
                    placeholder="Describe what happened or any specific concerns..."
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="flex justify-between items-center mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <motion.button 
                    onClick={() => setStep(1)}
                    className="text-blue hover:text-red font-black text-lg flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: -5 }}
                  >
                    ← Back
                  </motion.button>
                  <motion.button 
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-red to-bright-red text-white text-xl flex items-center gap-3 px-12 py-5 rounded-xl font-black shadow-xl hover:shadow-2xl hover:shadow-red/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get My Quote
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white to-off-white rounded-3xl shadow-2xl p-16 text-center border-2 border-gold/20"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-32 h-32 bg-gradient-to-br from-green to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-12 shadow-xl"
                >
                  <CheckCircle className="w-16 h-16 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-5xl font-black mb-8 text-navy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Your Estimate is Ready!
                </motion.h3>
                <motion.p 
                  className="text-2xl text-gunmetal mb-12 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  We'll contact you within 15 minutes with your detailed estimate.
                </motion.p>
                
                <motion.div 
                  className="bg-white/80 rounded-3xl p-12 mb-12 shadow-xl border border-gold/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-3xl font-black text-navy mb-10">What Happens Next:</h4>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { step: "1", title: "Expert Review", desc: "Our certified technicians analyze your photos", icon: Shield, color: "blue" },
                      { step: "2", title: "Detailed Quote", desc: "Receive itemized estimate via text/email", icon: FileText, color: "red" },
                      { step: "3", title: "Schedule Repair", desc: "Book your appointment at your convenience", icon: Clock, color: "gold" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={item.step} 
                        className="text-center group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + idx * 0.2 }}
                        whileHover={{ y: -5 }}
                      >
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color === 'gold' ? 'yellow-500' : item.color === 'blue' ? 'navy' : 'bright-red'} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 font-black text-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="w-8 h-8" />
                        </motion.div>
                        <h5 className="font-black text-navy mb-3 text-lg">{item.title}</h5>
                        <p className="text-sm text-gunmetal font-semibold leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  <motion.a 
                    href="tel:555-123-4567" 
                    className="bg-gradient-to-r from-red to-bright-red text-white text-xl flex items-center gap-3 px-12 py-5 rounded-xl font-black shadow-xl hover:shadow-2xl hover:shadow-red/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-6 h-6" />
                    Call Now: (555) 123-4567
                  </motion.a>
                  <motion.button 
                    onClick={() => setStep(1)}
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-white text-xl px-12 py-5 rounded-xl font-black transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit Another Estimate
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default InstantEstimate