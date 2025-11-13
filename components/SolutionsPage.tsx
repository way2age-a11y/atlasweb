export function SolutionsPage({ navigateTo }: { navigateTo: (page: string) => void }) {
  const solutions = [
    {
      title: "Municipalities & Cities",
      icon: "🏛️",
      color: "from-indigo-500 to-purple-600",
      description: "Age-friendly community planning, service navigation, and resident engagement that generates actionable insights.",
      features: [
        "Help residents navigate community, provincial, and federal programs",
        "Track common questions and service gaps by theme and population",
        "Age-friendly domain mapping (WHO framework)",
        "Generate compliance and engagement reports"
      ]
    },
    {
      title: "Transit & Mobility",
      icon: "🚇",
      color: "from-blue-500 to-cyan-600",
      description: "Help riders navigate accessible transit options while capturing feedback on barriers and service improvements.",
      features: [
        "Connect riders to accessible routes, stops, and services",
        "Identify common accessibility barriers and concerns",
        "Track elevator outages, wayfinding issues, gap concerns",
        "Generate accessibility compliance reports"
      ]
    },
    {
      title: "Parks & Recreation",
      icon: "🌳",
      color: "from-green-500 to-emerald-600",
      description: "Guide residents to recreation programs and park amenities while gathering insights on accessibility and service needs.",
      features: [
        "Navigate residents to age-friendly programs and accessible facilities",
        "Understand patterns in questions about programs and amenities",
        "Track feedback on accessibility, safety, and facility conditions",
        "Evidence for program development and capital plans"
      ]
    },
    {
      title: "Housing Services",
      icon: "🏠",
      color: "from-orange-500 to-red-600",
      description: "Connect residents to housing programs while identifying application barriers, eligibility confusion, and service gaps.",
      features: [
        "Navigate residents to affordable, accessible, senior housing programs",
        "Track where applications and processes are confusing",
        "Identify gaps in housing support and eligibility challenges",
        "Report on housing accessibility and age-friendly compliance"
      ]
    },
    {
      title: "Campuses & Education",
      icon: "🎓",
      color: "from-purple-500 to-pink-600",
      description: "Help students and staff navigate campus services and accommodations while capturing campus-wide accessibility insights.",
      features: [
        "Connect students to accessibility services and accommodations",
        "Identify common navigation and service access challenges",
        "Track accommodation requests and support needs by theme",
        "Generate ADA compliance and accessibility reports"
      ]
    },
    {
      title: "Workplaces & Facilities",
      icon: "🏢",
      color: "from-gray-700 to-gray-900",
      description: "Support employees in finding accessible services and requesting accommodations while gathering workplace inclusion insights.",
      features: [
        "Navigate employees to accessibility resources and ERGs",
        "Track accommodation request patterns and themes",
        "Identify common workplace accessibility challenges",
        "Support inclusive workplace and DEI initiatives"
      ]
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="text-sm md:text-base text-indigo-900 font-medium">Built for Your Sector</span>
            </div>
            <h1 className="text-gray-900 mb-6 md:mb-8">Solutions by Sector</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Atlas InSites adapts to your organization—whether you're managing cities, campuses, transit systems, parks, housing, or workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all rounded-2xl p-8 md:p-10">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg`}>
                  <span className="text-3xl md:text-4xl">{solution.icon}</span>
                </div>
                <h3 className="text-gray-900 mb-4 md:mb-5">{solution.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {solution.description}
                </p>
                <div className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-white mb-6 md:mb-8">Find the right fit for your organization</h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 md:mb-10 leading-relaxed">
            Book a demo and we'll show you how Atlas InSites works for your specific sector and use case.
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
