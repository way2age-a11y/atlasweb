export function HowItWorksPage({ navigateTo }: { navigateTo: (page: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span className="text-sm md:text-base text-indigo-900 font-medium">The Process</span>
            </div>
            <h1 className="text-gray-900 mb-6 md:mb-8">How It Works</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A simple three-layer system: residents get help, you get insights, everyone benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Three Steps */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="space-y-16 md:space-y-20 lg:space-y-28">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <span className="text-white text-xl md:text-2xl font-bold">1</span>
                  </div>
                  <h2 className="text-gray-900">Residents Ask & Report</h2>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Community members use your Atlas InSites portal to:
                  </p>
                  <ul className="space-y-3 text-gray-600 text-base md:text-lg">
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Ask questions about accessible services, age-friendly programs, housing support, transit options, and local resources</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Report barriers and service gaps—from broken curb cuts to confusing application forms</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Get immediate answers to community, provincial, and federal programs that fit their needs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 md:p-12">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium mb-2">Maria, 72</p>
                      <p className="text-gray-600">"I need help finding affordable housing options for seniors in my area. Are there any programs available?"</p>
                    </div>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-600">
                    <p className="text-sm text-gray-600 mb-2">✓ Connected to 3 relevant housing programs</p>
                    <p className="text-sm text-gray-600">🏷️ Tagged: Senior Services, Housing, Age-Friendly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 md:p-12">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg space-y-4">
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Senior Housing Programs</span>
                    </div>
                    <span className="text-orange-600 font-bold text-lg">24 questions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Transit Accessibility</span>
                    </div>
                    <span className="text-blue-600 font-bold text-lg">18 reports</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-900">Recreation Programs</span>
                    </div>
                    <span className="text-green-600 font-bold text-lg">12 inquiries</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white text-xl md:text-2xl font-bold">2</span>
                  </div>
                  <h2 className="text-gray-900">AI Auto-Organizes</h2>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Behind the scenes, every interaction is automatically:
                  </p>
                  <ul className="space-y-3 text-gray-600 text-base md:text-lg">
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Categorized by theme:</strong> Accessibility, housing, age-friendly services, mobility, safety, and more</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Tagged by location:</strong> Specific sites, buildings, neighborhoods, or service areas when relevant</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Mapped to frameworks:</strong> WHO age-friendly domains, accessibility standards, equity indicators</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                    <span className="text-white text-xl md:text-2xl font-bold">3</span>
                  </div>
                  <h2 className="text-gray-900">You See & Act</h2>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Your team gets a live dashboard showing:
                  </p>
                  <ul className="space-y-3 text-gray-600 text-base md:text-lg">
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>What residents need:</strong> Common questions about services, programs, and support</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>Where barriers exist:</strong> Service gaps, accessibility issues, and navigation challenges</span>
                    </li>
                    <li className="flex gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span><strong>One-click reports:</strong> Age-friendly assessments, accessibility audits, "you said we did" updates</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 md:p-12">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-gray-900 font-semibold mb-4">Export Options</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">📊 Age-Friendly Community Report</span>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </button>
                    <button className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">♿ Accessibility Insights Summary</span>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </button>
                    <button className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">📍 Service Navigation Trends</span>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-white mb-6 md:mb-8">See it in action</h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-10 leading-relaxed">
            Book a 25-minute demo and we'll walk you through the resident portal and planner dashboard.
          </p>
          <button onClick={() => navigateTo('contact')} className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all font-medium">
            Book a demo
            <svg className="w-4 h-4 md:w-5 md:h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
