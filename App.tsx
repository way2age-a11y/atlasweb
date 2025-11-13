import { useState, useEffect } from 'react';
import { HowItWorksPage } from './components/HowItWorksPage.tsx';
import { SolutionsPage } from './components/SolutionsPage.tsx';
import { PricingPage } from './components/PricingPage.tsx';
import { ContactPage } from './components/ContactPage.tsx';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (pageName: string) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        
        @media (min-width: 768px) {
          h1 {
            font-size: 3.5rem;
          }
        }
        
        h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        
        @media (min-width: 768px) {
          h2 {
            font-size: 2.5rem;
          }
        }
        
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
        }
        
        @media (min-width: 768px) {
          h3 {
            font-size: 1.75rem;
          }
        }
        
        p {
          font-size: 1rem;
          line-height: 1.7;
        }
        
        @media (min-width: 768px) {
          p {
            font-size: 1.125rem;
          }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="bg-white w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20 md:h-24">
              {/* Logo */}
              <button 
                onClick={() => navigateTo('home')} 
                className="flex items-center gap-2 md:gap-3 group cursor-pointer"
                aria-label="Atlas InSites Home"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"></circle>
                    <path d="M12 3 L14 10 L12 12 L10 10 Z" fill="currentColor" stroke="none"></path>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
                  </svg>
                </div>
                <span className="text-lg md:text-xl text-gray-900 tracking-tight font-medium">Atlas InSites</span>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
                <button onClick={() => navigateTo('home')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'home' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Home</button>
                <button onClick={() => navigateTo('about')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'about' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>About Us</button>
                <button onClick={() => navigateTo('how-it-works')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'how-it-works' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>How It Works</button>
                <button onClick={() => navigateTo('solutions')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'solutions' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Solutions</button>
                <button onClick={() => navigateTo('pricing')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'pricing' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Pricing</button>
                <button onClick={() => navigateTo('contact')} className={`px-4 py-2.5 rounded-lg transition-all font-medium text-base ${currentPage === 'contact' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</button>
              </nav>

              {/* Desktop CTA Button */}
              <button onClick={() => navigateTo('contact')} className="hidden lg:block bg-indigo-600 hover:bg-indigo-700 shadow-lg text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg transition-all font-medium text-sm md:text-base">
                Book a Demo
              </button>
              
              {/* Mobile Menu Button */}
              <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all" aria-label="Toggle menu">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden pb-4">
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  <button onClick={() => navigateTo('home')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'home' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Home</button>
                  <button onClick={() => navigateTo('about')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'about' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>About Us</button>
                  <button onClick={() => navigateTo('how-it-works')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'how-it-works' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>How It Works</button>
                  <button onClick={() => navigateTo('solutions')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'solutions' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Solutions</button>
                  <button onClick={() => navigateTo('pricing')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'pricing' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Pricing</button>
                  <button onClick={() => navigateTo('contact')} className={`text-left px-4 py-3 rounded-lg transition-all font-medium ${currentPage === 'contact' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</button>
                  <button onClick={() => navigateTo('contact')} className="mt-2 bg-indigo-600 hover:bg-indigo-700 shadow-lg text-white px-6 py-3 rounded-lg transition-all font-medium text-center">
                    Book a Demo
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* Home Page */}
          {currentPage === 'home' && (
            <div>
              {/* Hero Section */}
              <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                  <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-4 md:mb-6">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                        </svg>
                        <span className="text-sm md:text-base text-indigo-900 font-medium">From questions at the curb to decisions in the boardroom.</span>
                      </div>
                      
                      <h1 className="text-gray-900 mb-6 md:mb-8">
                        Turn everyday questions into actionable community insights
                      </h1>
                      
                      <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed">
                        Atlas InSites helps residents navigate community services while giving planners and leaders 
                        structured insights about what people need—from accessible programs and age-friendly services 
                        to housing support, transit information, and local resources.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start">
                        <button onClick={() => navigateTo('contact')} className="bg-indigo-600 hover:bg-indigo-700 shadow-xl text-white text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all font-medium">
                          Book a 25-minute demo
                          <svg className="w-4 h-4 md:w-5 md:h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                          </svg>
                        </button>
                        <button onClick={() => navigateTo('how-it-works')} className="border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 text-gray-900 text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all font-medium">
                          See how it works
                        </button>
                      </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <img 
                          src="https://images.unsplash.com/photo-1726842172813-55c6e284f8b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzZWFyY2hpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjI5MDgzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                          alt="Person searching for community services online"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-2xl -z-10 blur-xl opacity-40"></div>
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-2xl -z-10 blur-xl opacity-40"></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trust Strip */}
              <section className="bg-white border-y border-gray-200 py-12 md:py-16">
                <div className="max-w-full mx-auto">
                  <p className="text-center text-gray-500 mb-8 md:mb-10 text-xs md:text-sm uppercase tracking-wide font-medium">Trusted by municipalities, institutions, and organizations</p>
                  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30">
                    <div className="w-32 h-12 md:w-40 md:h-16 bg-gray-300 rounded-lg"></div>
                    <div className="w-32 h-12 md:w-40 md:h-16 bg-gray-300 rounded-lg"></div>
                    <div className="w-32 h-12 md:w-40 md:h-16 bg-gray-300 rounded-lg"></div>
                    <div className="w-32 h-12 md:w-40 md:h-16 bg-gray-300 rounded-lg hidden sm:block"></div>
                    <div className="w-32 h-12 md:w-40 md:h-16 bg-gray-300 rounded-lg hidden lg:block"></div>
                  </div>
                </div>
              </section>

              {/* What Atlas InSites Does */}
              <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-indigo-100 rounded-full mb-6 md:mb-8">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                      <span className="text-sm md:text-base text-indigo-900 font-medium">The Platform</span>
                    </div>
                    <h2 className="text-gray-900 mb-6 md:mb-8">What Atlas does</h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      Atlas InSites is a service navigation and feedback portal that residents and users actually use, 
                      with an intelligence layer that organizes every interaction by place, topic, and population 
                      so planners, operators, and leaders can act.
                    </p>
                  </div>
                </div>
              </section>

              {/* Dashboard Features - MAIN SELLING POINT */}
              <section className="py-16 md:py-20 lg:py-28 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                  <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-indigo-100 rounded-full mb-6 md:mb-8">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <span className="text-sm md:text-base text-indigo-900 font-medium">Dashboard & Intelligence</span>
                    </div>
                    <h2 className="text-gray-900 mb-4 md:mb-6">From noise to navigable insight</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">Your team gets a structured dashboard that shows exactly where action is needed</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
                    {/* Dashboard Features */}
                    <div className="space-y-6 md:space-y-8 lg:space-y-10">
                      <div className="flex gap-4 md:gap-6 lg:gap-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                          <span className="text-2xl md:text-3xl">📍</span>
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-3 md:mb-4">Auto-tagged by location & theme</h3>
                          <p className="text-gray-600 text-base md:text-lg leading-relaxed">Every question and feedback item is automatically organized by site or asset (transit stop, park, building), theme (accessibility, mobility, safety), and framework (age-friendly domains).</p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6 lg:gap-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-3 md:mb-4">See where problems cluster</h3>
                          <p className="text-gray-600 text-base md:text-lg leading-relaxed">Dashboards visualize hotspots—which transit stops need attention, which parks have accessibility gaps, where navigation is failing residents.</p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6 lg:gap-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-gray-900 mb-3 md:mb-4">Generate reports in one click</h3>
                          <ul className="space-y-2 text-gray-600 text-base md:text-lg">
                            <li>• "You said, we did" summaries for transparency</li>
                            <li>• Accessibility and age-friendly compliance reports</li>
                            <li>• Evidence-based requests for budgets and capital plans</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Visual */}
                    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl">
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-white text-xl md:text-2xl mb-2 md:mb-3">Live Dashboard Preview</h3>
                        <p className="text-indigo-200 text-base md:text-lg">Real-time insights by location</p>
                      </div>
                      <div className="space-y-4 md:space-y-5">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all">
                          <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50"></div>
                              <span className="text-white font-medium text-sm md:text-base lg:text-lg">Transit Stop #42 - King St</span>
                            </div>
                            <span className="text-orange-400 font-bold text-xl md:text-2xl">12</span>
                          </div>
                          <p className="text-gray-300 text-sm md:text-base">Accessibility issues this month</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all">
                          <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className="w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                              <span className="text-white font-medium text-sm md:text-base lg:text-lg">Riverside Park</span>
                            </div>
                            <span className="text-green-400 font-bold text-xl md:text-2xl">8</span>
                          </div>
                          <p className="text-gray-300 text-sm md:text-base">Questions about accessible facilities</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all">
                          <div className="flex items-center justify-between mb-2 md:mb-3">
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                              <span className="text-white font-medium text-sm md:text-base lg:text-lg">Housing Portal</span>
                            </div>
                            <span className="text-blue-400 font-bold text-xl md:text-2xl">15</span>
                          </div>
                          <p className="text-gray-300 text-sm md:text-base">Reports about form clarity</p>
                        </div>
                      </div>
                      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
                        <button className="w-full bg-white/20 hover:bg-white/30 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg transition-all backdrop-blur-sm border border-white/30 font-medium text-base md:text-lg">
                          View Full Dashboard →
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12 md:mt-16 lg:mt-20">
                    <button onClick={() => navigateTo('solutions')} className="border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all font-medium text-base md:text-lg">
                      Explore solutions by sector
                      <svg className="w-4 h-4 md:w-5 md:h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </section>

              {/* How Residents Use It */}
              <section className="py-16 md:py-20 lg:py-28 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                  <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-purple-100 rounded-full mb-6 md:mb-8">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      <span className="text-sm md:text-base text-purple-900 font-medium">How It Works for Residents</span>
                    </div>
                    <h2 className="text-gray-900 mb-4 md:mb-6">Simple for the people you serve</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">Residents get the help they need. You get structured data.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-indigo-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Get Targeted Answers</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Residents ask questions and get directed to community, provincial, and federal programs specific to their needs—accessible services, housing support, transit options, and more.
                      </p>
                    </div>

                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-orange-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Share Feedback & Barriers</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Quick feedback at specific locations (broken curb cuts, missing benches, confusing forms, program gaps) is automatically tagged and mapped for your team.
                      </p>
                    </div>

                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-green-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-green-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">See Progress</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        You share "you said, we did" updates through the platform, showing residents their input drives real change.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* About Us Page */}
          {currentPage === 'about' && (
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 md:py-24 lg:py-28">
              <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
                  <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm md:text-base text-indigo-900 font-medium">Our Story</span>
                  </div>
                  <h1 className="text-gray-900 mb-6 md:mb-8">About Atlas InSites</h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    We built Atlas InSites because accessibility and age-friendly planning deserve better than scattered spreadsheets and guesswork.
                  </p>
                </div>

                {/* Mission */}
                <div className="max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-28">
                  <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-xl border-2 border-indigo-100">
                    <h2 className="text-gray-900 mb-6 md:mb-8 text-center">Our Mission</h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                      To turn every resident question, barrier report, and navigation challenge into structured, 
                      location-based intelligence that helps organizations build truly accessible and age-friendly communities.
                    </p>
                  </div>
                </div>

                {/* What Makes Us Different */}
                <div className="max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-28">
                  <h2 className="text-gray-900 mb-10 md:mb-12 lg:mb-16 text-center">What makes us different</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-indigo-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Accessibility-first foundation</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We're not a generic engagement tool with accessibility bolted on. Every feature is built from the ground up with accessibility and age-friendly frameworks at the core.
                      </p>
                    </div>

                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-purple-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-purple-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Real-world, place-based insight</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        We don't just collect feedback—we organize it by specific locations (transit stops, buildings, parks) so you know exactly where to invest resources.
                      </p>
                    </div>

                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-green-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-green-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Built for residents and planners</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Residents get simple navigation to programs they need. Planners get structured dashboards. Both sides win, and the data flows automatically.
                      </p>
                    </div>

                    <div className="p-8 md:p-10 bg-white border-2 border-gray-200 hover:border-orange-200 hover:shadow-xl transition-all rounded-xl">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-orange-500/30">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                      </div>
                      <h3 className="text-gray-900 mb-4 md:mb-5">Compliance-ready reporting</h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Generate WCAG, AODA, ADA, and age-friendly compliance reports in one click. Turn resident input into evidence for accreditation and funding requests.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Who We Serve */}
                <div className="max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-28">
                  <h2 className="text-gray-900 mb-6 md:mb-8 text-center">Who we serve</h2>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center mb-10 md:mb-12">
                    Municipalities, transit agencies, parks departments, housing organizations, campuses, and workplaces—anywhere accessibility and navigation matter.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-indigo-100 text-indigo-900 rounded-full font-medium text-sm md:text-base">Municipalities</span>
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-purple-100 text-purple-900 rounded-full font-medium text-sm md:text-base">Transit & Mobility</span>
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-green-100 text-green-900 rounded-full font-medium text-sm md:text-base">Parks & Recreation</span>
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-orange-100 text-orange-900 rounded-full font-medium text-sm md:text-base">Housing</span>
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-pink-100 text-pink-900 rounded-full font-medium text-sm md:text-base">Campuses</span>
                    <span className="px-4 md:px-6 py-2 md:py-3 bg-blue-100 text-blue-900 rounded-full font-medium text-sm md:text-base">Workplaces</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center max-w-3xl mx-auto">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
                    <h2 className="text-white mb-4 md:mb-6">Ready to see how it works?</h2>
                    <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-10 leading-relaxed">
                      Book a 25-minute demo to see the platform and dashboard in action.
                    </p>
                    <button onClick={() => navigateTo('contact')} className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all font-medium">
                      Book a demo
                      <svg className="w-4 h-4 md:w-5 md:h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* How It Works Page */}
          {currentPage === 'how-it-works' && <HowItWorksPage navigateTo={navigateTo} />}

          {/* Solutions Page */}
          {currentPage === 'solutions' && <SolutionsPage navigateTo={navigateTo} />}

          {/* Pricing Page */}
          {currentPage === 'pricing' && <PricingPage navigateTo={navigateTo} />}

          {/* Contact Page */}
          {currentPage === 'contact' && <ContactPage />}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"></circle>
                      <path d="M12 3 L14 10 L12 12 L10 10 Z" fill="currentColor" stroke="none"></path>
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
                    </svg>
                  </div>
                  <span className="text-xl font-medium">Atlas InSites</span>
                </div>
                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  Turning everyday feedback into site-specific intelligence for accessible and age-friendly communities.
                </p>
              </div>

              {/* Product */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Product</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => navigateTo('how-it-works')} className="text-gray-400 hover:text-white transition-colors text-base">How It Works</button></li>
                  <li><button onClick={() => navigateTo('solutions')} className="text-gray-400 hover:text-white transition-colors text-base">Solutions</button></li>
                  <li><button onClick={() => navigateTo('pricing')} className="text-gray-400 hover:text-white transition-colors text-base">Pricing</button></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Dashboard Demo</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => navigateTo('about')} className="text-gray-400 hover:text-white transition-colors text-base">About Us</button></li>
                  <li><button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white transition-colors text-base">Contact</button></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Case Studies</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-base">Resources</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Get in Touch</h4>
                <ul className="space-y-3">
                  <li><a href="mailto:hello@atlasinsites.com" className="text-gray-400 hover:text-white transition-colors text-base">hello@atlasinsites.com</a></li>
                  <li className="pt-4">
                    <button onClick={() => navigateTo('contact')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all font-medium text-base">
                      Book a Demo
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Atlas InSites. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}