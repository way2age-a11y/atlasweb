import { Users, Database, LineChart, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HowItWorksProps {
  onNavigate?: (page: 'contact') => void;
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const handleNavClick = () => {
    if (onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
              <span className="text-sm text-indigo-900">The Process</span>
            </div>
            <h1 className="text-gray-900 mb-6">How Atlas InSites Works</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A simple platform that turns everyday questions and barrier reports into 
              actionable, location-based insights for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Card className="p-10 relative border-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100 transition-all bg-white group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30" aria-hidden="true">
                <span className="text-white text-xl">1</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-indigo-600" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">Residents Interact</h3>
              <p className="text-gray-600 leading-relaxed">
                People ask questions about accessible services, report barriers at specific locations, 
                and navigate resources through an intuitive portal.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-10 relative border-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-100 transition-all bg-white group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30" aria-hidden="true">
                <span className="text-white text-xl">2</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-purple-600" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">Data Gets Structured</h3>
              <p className="text-gray-600 leading-relaxed">
                Every interaction is automatically tagged by location, theme, and framework 
                (accessibility, age-friendly domains) creating organized, searchable data.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-10 relative border-2 hover:border-green-200 hover:shadow-2xl hover:shadow-green-100 transition-all bg-white group">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30" aria-hidden="true">
                <span className="text-white text-xl">3</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <LineChart className="w-8 h-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">Teams Take Action</h3>
              <p className="text-gray-600 leading-relaxed">
                Planners view dashboards showing where problems cluster, generate reports, 
                and share "you said, we did" updates back to the community.
              </p>
            </Card>
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
          <h2 className="text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Book a 25-minute demo to see how Atlas InSites can work for your organization.
          </p>
          <Button 
            size="lg" 
            onClick={handleNavClick}
            className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
          >
            Book a demo <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </div>
  );
}
