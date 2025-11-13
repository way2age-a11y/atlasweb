import { useState } from 'react';

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('90ed6738-8450-49d4-85f8-d503d540a3ee', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormMessage('Thanks for reaching out! We\'ll get back to you within 1 business day.');
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage('Something went wrong. Please try emailing us directly at hello@atlasinsites.com');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Something went wrong. Please try emailing us directly at hello@atlasinsites.com');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-16 md:py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6 md:mb-8">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-sm md:text-base text-indigo-900 font-medium">Get in Touch</span>
            </div>
            <h1 className="text-gray-900 mb-6 md:mb-8">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Book a demo, ask a question, or just say hello. We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-gray-900 mb-6 md:mb-8">Let's talk about your needs</h2>
              <p className="text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
                Whether you're exploring Atlas InSites for the first time or ready to get started, we're here to help.
              </p>

              <div className="space-y-6 md:space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                    <a href="mailto:hello@atlasinsites.com" className="text-indigo-600 hover:text-indigo-700 text-lg">
                      hello@atlasinsites.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Book a Demo</h3>
                    <p className="text-gray-600">
                      25-minute walkthrough of the platform and dashboard
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">Response Time</h3>
                    <p className="text-gray-600">
                      We typically respond within 1 business day
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border-2 border-indigo-100">
                <h3 className="text-gray-900 font-semibold mb-3">What to expect in a demo:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>See the resident portal in action</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Walk through the planner dashboard</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Review compliance reporting features</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Discuss your specific use case</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-indigo-600">•</span>
                    <span>Answer your questions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg">
                <h3 className="text-gray-900 mb-6 md:mb-8">Send us a message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Web3Forms Access Key - Hidden field */}
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                      placeholder="Your organization name"
                    />
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-gray-700 font-medium mb-2">
                      Sector
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors"
                    >
                      <option value="">Select a sector</option>
                      <option value="municipality">Municipality/City</option>
                      <option value="transit">Transit & Mobility</option>
                      <option value="parks">Parks & Recreation</option>
                      <option value="housing">Housing Services</option>
                      <option value="campus">Campus/Education</option>
                      <option value="workplace">Workplace/Facilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your needs or questions..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all font-medium shadow-lg shadow-indigo-500/30 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                    <svg className="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                      <p className="text-green-700 font-medium">{formMessage}</p>
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                      <p className="text-red-700 font-medium">{formMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}