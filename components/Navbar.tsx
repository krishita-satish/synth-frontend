'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check for user in localStorage
    const storedUser = localStorage.getItem('synth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('synth_token');
    localStorage.removeItem('synth_user');
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primaryBg/95 backdrop-blur-xl border-b border-borderColor' : 'bg-transparent'
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
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.6" />
                  <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-extrabold font-display tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent uppercase">
              Synth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-secondaryText hover:text-primaryText transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-secondaryText hover:text-primaryText transition-colors">
              How it works
            </Link>
            <Link href="/#contact" className="text-secondaryText hover:text-primaryText transition-colors">
              Contact
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-6">
                <Link href="/audit" className="text-secondaryText hover:text-primaryText transition-colors">
                  Audit
                </Link>
                <div className="flex items-center gap-3 pl-4 border-l border-borderColor">
                  <div className="w-8 h-8 rounded-full bg-borderColor/30 flex items-center justify-center">
                    <User size={16} className="text-accentGreen" />
                  </div>
                  <span className="text-sm font-medium text-primaryText">
                    {user.full_name.split(' ')[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-secondaryText hover:text-red-500 transition-colors"
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-secondaryText hover:text-primaryText transition-colors">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary bg-accentGreen hover:bg-accentGlow text-white px-6 py-2.5 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(34,211,104,0.1)] hover:shadow-[0_0_30px_rgba(34,211,104,0.3)]"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primaryText p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4 animate-slide-up-fade border-t border-borderColor pt-6">
            <Link href="/#features" className="block text-secondaryText px-4" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#how-it-works" className="block text-secondaryText px-4" onClick={() => setIsMobileMenuOpen(false)}>
              How it works
            </Link>
            <Link href="/#contact" className="block text-secondaryText px-4" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/audit" className="block text-secondaryText px-4" onClick={() => setIsMobileMenuOpen(false)}>
              Audit
            </Link>

            <div className="pt-4 mt-4 border-t border-borderColor px-4">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User size={20} className="text-accentGreen" />
                    <span className="font-semibold">{user.full_name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 text-red-500 font-medium"
                  >
                    <LogOut size={18} />
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link
                    href="/login"
                    className="block w-full py-3 text-center border border-borderColor rounded-xl font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full py-3 text-center bg-accentGreen text-white rounded-xl font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
