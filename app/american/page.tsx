import { Metadata } from 'next'
import AmericanHeader from '@/components/american/AmericanHeader'
import VideoHero from '@/components/american/VideoHero'
import InstantEstimate from '@/components/american/InstantEstimate'
import ServicesGrid from '@/components/american/ServicesGrid'
import BeforeAfterGallery from '@/components/american/BeforeAfterGallery'
import InsurancePartners from '@/components/american/InsurancePartners'
import ReviewsSection from '@/components/american/ReviewsSection'
import Certifications from '@/components/american/Certifications'
import AmericanFooter from '@/components/american/AmericanFooter'

export const metadata: Metadata = {
  title: "America's Most Trusted Collision Repair | American Body Shop Los Angeles",
  description: "Serving Los Angeles for 30+ years. Insurance approved, I-CAR Gold certified, lifetime warranty. Get your instant estimate in 60 seconds.",
  keywords: 'collision repair Los Angeles, auto body shop, car accident repair, insurance claims, paint repair, dent repair',
}

export default function AmericanBodyShopPage() {
  return (
    <>
      <AmericanHeader />
      <VideoHero />
      <InstantEstimate />
      <ServicesGrid />
      <BeforeAfterGallery />
      <InsurancePartners />
      <ReviewsSection />
      <Certifications />
      <AmericanFooter />
    </>
  )
}
