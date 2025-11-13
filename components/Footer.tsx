import { Compass } from 'lucide-react';
import type { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 mb-6 group"
              aria-label="Atlas InSites Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-all">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg tracking-tight">Atlas InSites</span>
            </button>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
              Real-world questions, real-world places, real-time insight.
            </p>
            <p className="text-gray-400 text-sm">
              Turning everyday questions and barrier reports into actionable insights for accessible, age-friendly communities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('how-it-works')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('solutions')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('pricing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Privacy & Safety
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atlas InSites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
