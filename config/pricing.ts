export const PRICING_CONFIG = {
  packages: [
    {
      id: 'complete-digital',
      title: 'Complete Digital Presence',
      price: '$497',
      priceUnit: '/month',
      originalPrice: '$997/mo',
      badge: 'MOST POPULAR',
      value: 'Everything included • No setup fees',
      features: [
        'Professional 10-page website',
        'Mobile responsive design',
        'Complete technical SEO (schema markup, speed optimization)',
        'Google My Business setup & management',
        'Hosting & maintenance included',
        'Monthly reporting dashboard',
        'SSL certificate',
        '2 hours monthly updates'
      ],
      cta: 'Start for $497/mo',
      popular: true,
      color: 'blue'
    },
    {
      id: 'google-ads',
      title: 'Google Ads Management',
      price: '$997',
      priceUnit: '/month',
      originalPrice: null,
      badge: 'FASTEST RESULTS',
      value: '+ your ad budget (minimum $500/month)',
      features: [
        'Everything from Complete Digital Presence',
        'Complete Google Ads campaign management',
        'Keyword research & optimization',
        'Ad copywriting & testing',
        'Weekly bid adjustments',
        'Call tracking included',
        'Detailed ROI reporting',
        'Negative keyword management'
      ],
      cta: 'Get Instant Leads',
      popular: false,
      color: 'red'
    }
  ],
  terms: 'No contracts • Cancel anytime with 30 days notice',
  sectionHeader: {
    title: 'Simple, Transparent Pricing',
    description: 'No hidden fees. No surprises. Just honest pricing that\'s 70% less than other agencies. Everything you need to get more cars in your shop.'
  },
  simplifiedMessage: {
    title: 'Simple, Transparent Pricing. Two Options. No Contracts.',
    options: [
      { price: '$497/mo', description: 'for a professional website that works' },
      { price: '$997/mo', description: 'to dominate Google with ads' }
    ],
    question: 'Which problem do you want to solve?'
  }
}

export type PricingPackage = typeof PRICING_CONFIG.packages[0]
