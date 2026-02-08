import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">CM</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              ClicksMeta
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-gray-300 hover:text-white transition-colors">
              Resources
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 text-white hover:text-neon-blue transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Resources
            </a>
            <button className="w-full px-4 py-2 text-white border border-gray-700 rounded-lg hover:border-neon-blue transition-colors">
              Sign In
            </button>
            <button className="w-full px-6 py-2.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold">
              Start Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
