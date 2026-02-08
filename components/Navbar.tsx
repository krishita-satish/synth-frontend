'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

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
        isScrolled ? 'bg-primaryBg/80 backdrop-blur-xl border-b border-borderColor' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accentGreen to-accentGlow rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-accentGreen to-accentGlow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.6"/>
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <span className="text-2xl font-extrabold font-display tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SYNTH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-secondaryText hover:text-primaryText transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-secondaryText hover:text-primaryText transition-colors">
              How it works
            </Link>
            <Link href="#about" className="text-secondaryText hover:text-primaryText transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-secondaryText hover:text-primaryText transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-secondaryText hover:text-primaryText transition-colors">
              Login
            </Link>
            <a
              href="/audit"
              className="btn-primary bg-accentGreen hover:bg-accentGlow text-white px-6 py-2.5 rounded-lg font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primaryText"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up-fade">
            <Link href="#features" className="block text-secondaryText hover:text-primaryText transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-secondaryText hover:text-primaryText transition-colors">
              How it works
            </Link>
            <Link href="#about" className="block text-secondaryText hover:text-primaryText transition-colors">
              About
            </Link>
            <Link href="#contact" className="block text-secondaryText hover:text-primaryText transition-colors">
              Contact
            </Link>
            <Link href="/login" className="block text-secondaryText hover:text-primaryText transition-colors">
              Login
            </Link>
            <a
              href="/audit"
              className="block btn-primary bg-accentGreen hover:bg-accentGlow text-white px-6 py-2.5 rounded-lg font-medium text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
