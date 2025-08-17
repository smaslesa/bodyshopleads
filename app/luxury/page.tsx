import { Metadata } from 'next'
import LuxuryHeader from '@/components/luxury/ModernHeader'
import LuxuryHero from '@/components/luxury/ModernHero'
import LuxuryServices from '@/components/luxury/ModernServices'
import LuxuryProcess from '@/components/luxury/ModernProcess'
import LuxuryGallery from '@/components/luxury/ModernGallery'
import LuxuryTestimonials from '@/components/luxury/ModernTestimonials'
import LuxuryContact from '@/components/luxury/ModernContact'
import LuxuryFooter from '@/components/luxury/ModernFooter'

export const metadata: Metadata = {
  title: 'Maison Collision - Ultra-Luxury Vehicle Restoration Atelier',
  description: 'Beverly Hills premier destination for Rolls-Royce, Ferrari, Bentley & Aston Martin restoration. Master craftsmen, heritage certification, lifetime warranty.',
}

export default function LuxuryTemplate() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Luxury ambient background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10">
        <LuxuryHeader />
        <LuxuryHero />
        <LuxuryServices />
        <LuxuryProcess />
        <LuxuryGallery />
        <LuxuryTestimonials />
        <LuxuryContact />
        <LuxuryFooter />
      </div>
    </div>
  )
}
