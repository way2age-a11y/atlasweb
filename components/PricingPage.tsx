export function PricingPage({ navigateTo }: { navigateTo: (page: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-sm md:text-base text-indigo-900 font-medium">Pricing</span>
            </div>
            <h1 className="text-gray-900 mb-6 md:mb-8">Contact Us for Pricing</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Every organization has unique needs. Let's discuss a plan that's tailored to your specific requirements and budget.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-gray-900 mb-4 md:mb-6">What's included in every plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All plans include these core features—we scale based on your organization size and needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Location Tagging</h3>
              <p className="text-gray-600">Automatically organize feedback by specific sites, buildings, and assets</p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Live Dashboard</h3>
              <p className="text-gray-600">Visual hotspots and real-time insights for your planning team</p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Compliance Reports</h3>
              <p className="text-gray-600">WCAG, AODA, ADA, and age-friendly reporting in one click</p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Unlimited Resident Access</h3>
              <p className="text-gray-600">No limits on how many community members can use the portal</p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">WCAG Compliant Portal</h3>
              <p className="text-gray-600">Fully accessible platform for all users</p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Training, onboarding, and continued platform support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-white mb-6 md:mb-8">Ready to discuss your needs?</h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-10 leading-relaxed">
            Book a 25-minute demo and we'll walk you through the platform, discuss your specific use case, and provide custom pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigateTo('contact')} className="bg-white text-indigo-900 hover:bg-gray-100 shadow-xl text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg transition-all font-medium">
              Contact Us for Pricing
              <svg className="w-4 h-4 md:w-5 md:h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
