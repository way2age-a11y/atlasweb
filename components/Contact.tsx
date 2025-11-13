import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, MapPin, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll be in touch soon.');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              <span className="text-sm text-indigo-900">Get in Touch</span>
            </div>
            <h1 className="text-gray-900 mb-6">Let's Talk</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to see how Atlas InSites can work for your organization? 
              Book a demo or get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-gray-900 mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-required="true"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@organization.com"
                    aria-required="true"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization *</Label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your organization"
                    aria-required="true"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your role (optional)"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={5}
                    aria-required="true"
                    className="mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/30"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white border-0 shadow-2xl shadow-indigo-500/30 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Calendar className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-white mb-4">Book a 25-Minute Demo</h3>
                  <p className="text-indigo-100 mb-6 leading-relaxed">
                    See Atlas InSites in action. We'll walk through how the platform works 
                    and discuss how it can fit your organization's needs.
                  </p>
                  <Button variant="secondary" className="w-full bg-white text-indigo-900 hover:bg-gray-100">
                    Schedule Demo
                  </Button>
                </div>
              </Card>

              <div className="space-y-6 p-8 bg-white rounded-2xl border-2 border-gray-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@atlasinsites.com" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                      info@atlasinsites.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-1">Based in</h3>
                    <p className="text-gray-600">Canada</p>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100">
                <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  What to expect
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-3">
                    <span className="text-green-600">→</span>
                    <span>Response within 1 business day</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">→</span>
                    <span>Personalized demo of the platform</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">→</span>
                    <span>Discussion of your specific needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-green-600">→</span>
                    <span>Custom pricing proposal</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
