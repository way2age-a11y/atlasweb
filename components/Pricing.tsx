import { Check, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface PricingProps {
  onNavigate?: (page: 'contact') => void;
}

export function Pricing({ onNavigate }: PricingProps) {
  const handleNavClick = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: 'Starter',
      description: 'For small organizations getting started',
      price: 'Contact us',
      features: [
        'Service navigation portal',
        'Barrier reporting',
        'Basic analytics dashboard',
        'Up to 2 administrators',
        'Email support',
        'Standard onboarding',
      ],
    },
    {
      name: 'Professional',
      description: 'For growing organizations',
      price: 'Contact us',
      popular: true,
      features: [
        'Everything in Starter, plus:',
        'Advanced analytics & insights',
        'Custom tagging frameworks',
        'Up to 10 administrators',
        'Priority support',
        '"You said, we did" reports',
        'API access',
        'Dedicated onboarding',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large municipalities and institutions',
      price: 'Contact us',
      features: [
        'Everything in Professional, plus:',
        'Unlimited administrators',
        'Multi-department deployment',
        'Custom integrations',
        'Dedicated account manager',
        'Custom training program',
        'White-label options',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-8">
              <Sparkles className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span className="text-sm text-indigo-900">Pricing</span>
            </div>
            <h1 className="text-gray-900 mb-6">Pricing for Every Scale</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Flexible plans designed to grow with your organization. All plans include our 
              core accessibility and age-friendly framework.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`p-8 relative bg-white transition-all ${
                  tier.popular 
                    ? 'border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105' 
                    : 'border-2 hover:border-indigo-200 hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg shadow-indigo-500/30">
                      <Star className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <div className="text-2xl text-gray-900">{tier.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30' 
                      : ''
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                  onClick={handleNavClick}
                >
                  Get started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Common Questions</h2>
          </div>
          
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
              <h3 className="text-gray-900 mb-3">How is pricing determined?</h3>
              <p className="text-gray-600 leading-relaxed">
                Pricing is based on organization size, number of sites/assets being tracked, 
                and required features. We offer flexible packages for municipalities, institutions, 
                and organizations of all sizes.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <h3 className="text-gray-900 mb-3">Can we start small and scale up?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Many organizations start with a single department or service area 
                and expand over time. You can upgrade your plan at any time as your needs grow.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
              <h3 className="text-gray-900 mb-3">What's included in onboarding?</h3>
              <p className="text-gray-600 leading-relaxed">
                All plans include onboarding support. Professional and Enterprise plans include 
                dedicated training, custom setup, and ongoing support to ensure successful deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Not sure which plan is right for you?</h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Book a 25-minute demo and we'll help you find the perfect fit for your organization.
          </p>
          <Button 
            size="lg" 
            onClick={handleNavClick}
            className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
          >
            Schedule a demo <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  );
}
