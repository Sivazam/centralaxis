import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Data Center Management', href: '#' },
    { name: 'Intelligence Solutions', href: '#' },
    { name: 'Data Center Compliance', href: '#' },
    { name: 'Sustainability Blog', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <nav className="hidden md:flex space-x-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;