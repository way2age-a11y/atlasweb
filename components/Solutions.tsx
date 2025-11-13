import { Building2, Bus, Trees, Home, GraduationCap, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface SolutionsProps {
  onNavigate?: (page: 'contact' | 'pricing') => void;
}

export function Solutions({ onNavigate }: SolutionsProps) {
  const handleNavClick = (page: 'contact' | 'pricing') => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: Building2,
      title: 'Municipalities',
      description: 'Connect residents with accessible services while gathering insights across all departments and facilities.',
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-100 to-cyan-100',
      shadow: 'shadow-blue-500/30',
    },
    {
      icon: Bus,
      title: 'Transit & Mobility',
      description: 'Help riders navigate accessible transit options and report barriers at stops, stations, and vehicles.',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-100 to-emerald-100',
      shadow: 'shadow-green-500/30',
    },
    {
      icon: Trees,
      title: 'Parks & Recreation',
      description: 'Guide users to accessible programs and facilities while identifying where improvements are needed.',
      gradient: 'from-teal-500 to-green-600',
      bgGradient: 'from-teal-100 to-green-100',
      shadow: 'shadow-teal-500/30',
    },
    {
      icon: Home,
      title: 'Housing & Community',
      description: 'Support tenants and residents in finding housing services while tracking accessibility across properties.',
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-100 to-red-100',
      shadow: 'shadow-orange-500/30',
    },
    {
      icon: GraduationCap,
      title: 'Campus & Post-Secondary',
      description: 'Help students navigate accessible campus services and report barriers across buildings and facilities.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-100 to-pink-100',
      shadow: 'shadow-purple-500/30',
    },
    {
      icon: Briefcase,
      title: 'Employers & Workplaces',
      description: 'Support employees in accessing workplace services while gathering feedback on accessibility and inclusion.',
      gradient: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-100 to-purple-100',
      shadow: 'shadow-indigo-500/30',
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
              <span className="text-sm text-indigo-900">Solutions</span>
            </div>
            <h1 className="text-gray-900 mb-6">Solutions for Every Context</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              One platform that adapts to municipalities, transit systems, parks, housing, 
              campuses, and workplaces—all built on an accessibility and age-friendly foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              
              return (
                <Card key={solution.title} className="p-8 bg-white border-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100 transition-all group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${solution.shadow} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Principle */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-purple-300" aria-hidden="true" />
            <span className="text-sm text-purple-100">Core Principle</span>
          </div>
          <h2 className="text-white mb-8">Built on accessibility, designed for everyone</h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Every solution starts with the accessibility and age-friendly lens—because when you 
            design for those who experience barriers first, you create better services for all users. 
            The same platform that helps an older adult find accessible transit also helps a parent 
            with a stroller, a person recovering from injury, or anyone navigating your services.
          </p>
          <Button 
            variant="outline" 
            className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white backdrop-blur-sm"
            asChild
          >
            <a href="#">
              Learn about our accessibility-first approach <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Ready to explore solutions for your organization?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let's discuss how Atlas InSites can work in your specific context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/30 text-lg px-8 py-6"
            >
              Book a demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => handleNavClick('pricing')}
              className="border-2 hover:border-indigo-300 hover:bg-indigo-50 text-lg px-8 py-6"
            >
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
