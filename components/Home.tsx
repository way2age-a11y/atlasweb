import { ArrowRight, MessageSquare, AlertCircle, CheckCircle, Sparkles, Zap, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HomeProps {
  onNavigate?: (page: 'how-it-works' | 'solutions' | 'pricing' | 'contact') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const handleNavClick = (page: 'how-it-works' | 'solutions' | 'pricing' | 'contact') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-8">
              <Sparkles className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span className="text-sm text-indigo-900">Real-world questions. Real-world sites. Real-time insight.</span>
            </div>
            
            <h1 className="text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text">
              Real-world questions in.<br />Real-time InSites out.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Atlas InSites helps people find accessible, age-friendly services and report barriers, 
              while giving organizations live, location-based insight to improve transportation, parks, 
              housing, campuses, and workplaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => handleNavClick('contact')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/30 text-lg px-8 py-6"
              >
                Book a 25-minute demo
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 text-lg px-8 py-6"
                asChild
              >
                <a href="#" download>Download the overview</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wide">Trusted by municipalities, institutions, and organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30" aria-hidden="true">
            <div className="w-36 h-14 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-14 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-14 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-14 bg-gray-300 rounded-lg"></div>
            <div className="w-36 h-14 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* What Atlas InSites Does */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <Zap className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span className="text-sm text-indigo-900">The Platform</span>
            </div>
            <h2 className="text-gray-900 mb-6">What Atlas InSites does in one sentence</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Atlas InSites is a service navigation and feedback portal that residents and users actually use, 
              with an intelligence layer that organizes every interaction by place, topic, and population 
              so planners, operators, and leaders can act.
            </p>
          </div>
        </div>
      </section>

      {/* For Residents Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-purple-600" aria-hidden="true" />
              <span className="text-sm text-purple-900">For Residents</span>
            </div>
            <h2 className="text-gray-900 mb-4">It's simple</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Ask */}
            <Card className="p-8 bg-white border-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">Ask</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-indigo-600 flex-shrink-0">→</span>
                  <span>"Where can I find accessible recreation programs near me?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 flex-shrink-0">→</span>
                  <span>"What transit options work with a walker?"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600 flex-shrink-0">→</span>
                  <span>"How do I get support to stay in my home?"</span>
                </li>
              </ul>
            </Card>

            {/* Report */}
            <Card className="p-8 bg-white border-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">Report</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <span>"Broken curb cut here"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <span>"No bench between clinic and bus stop"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-600 flex-shrink-0">→</span>
                  <span>"Difficult online form for mobility pass"</span>
                </li>
              </ul>
            </Card>

            {/* See Change */}
            <Card className="p-8 bg-white border-2 hover:border-green-200 hover:shadow-2xl hover:shadow-green-100 transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-gray-900 mb-4">See change</h3>
              <p className="text-gray-600 leading-relaxed">
                Atlas InSites feeds this directly into the right team and powers "you said, we did" 
                updates so people can see how their input is used.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => handleNavClick('how-it-works')}
              className="border-2 hover:border-indigo-300 hover:bg-indigo-50"
            >
              See how it works <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Planners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              <span className="text-sm text-indigo-900">For Organizations</span>
            </div>
            <h2 className="text-gray-900 mb-4">It's structured</h2>
            <p className="text-xl text-gray-600">From noise to navigable insight</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                  <span className="text-white">📍</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">Every interaction is tagged by:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Site or asset (stop, park, building, campus, service)</li>
                    <li>• Theme (accessibility, mobility, safety, clarity of info, hours, etc.)</li>
                    <li>• Age-friendly domain or equivalent framework</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                  <BarChart3 className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">Dashboards show:</h3>
                  <p className="text-gray-600">
                    Where problems cluster and where navigation is failing.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                  <span className="text-white">📊</span>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">One click to generate:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• "You said, we did" summaries</li>
                    <li>• Accessibility and age-friendly reports</li>
                    <li>• Evidence for budgets, capital plans, and policy changes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50" aria-hidden="true"></div>
                    <span className="text-white">Transit Stop #42 - King Street</span>
                  </div>
                  <p className="text-gray-300">12 accessibility reports this month</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50" aria-hidden="true"></div>
                    <span className="text-white">Riverside Park</span>
                  </div>
                  <p className="text-gray-300">8 navigation questions about accessible facilities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" aria-hidden="true"></div>
                    <span className="text-white">Housing Services Portal</span>
                  </div>
                  <p className="text-gray-300">15 reports about form clarity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              onClick={() => handleNavClick('solutions')}
              className="border-2 hover:border-indigo-300 hover:bg-indigo-50"
            >
              Explore solutions <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Accessibility Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-300" aria-hidden="true" />
            <span className="text-sm text-purple-100">Our Approach</span>
          </div>
          
          <h2 className="text-white mb-8">Why start with accessibility and older adults</h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Atlas InSites is built on age-friendly and accessibility planning. We start with older adults, 
            people with disabilities, and caregivers because they experience barriers first and most acutely. 
            When you fix those barriers, you improve services for everyone. The platform keeps that lens 
            at the core while extending the same approach to transit, parks, housing, campuses, and workplaces.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white backdrop-blur-sm"
            asChild
          >
            <a href="#">
              Learn why this lens matters <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Ready for What's Next */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl shadow-indigo-500/30 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-white mb-8">Ready for what's next</h2>
              <p className="text-xl max-w-2xl mx-auto mb-10 text-indigo-100 leading-relaxed">
                Launch today as your age-friendly and accessibility navigator. Expand tomorrow into 
                transportation, parks and recreation, housing, and campus or workplace experiences 
                without changing platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={() => handleNavClick('contact')}
                  className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
                >
                  Book a demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white backdrop-blur-sm text-lg px-8 py-6"
                  onClick={() => handleNavClick('pricing')}
                >
                  View pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
