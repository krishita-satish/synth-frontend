'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-borderColor py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accentGreen to-accentGlow rounded-xl blur-sm opacity-60"></div>
                <div className="relative w-8 h-8 bg-gradient-to-br from-accentGreen to-accentGlow rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.6"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-extrabold font-display">SYNTH</span>
            </div>
            <p className="text-secondaryText text-sm leading-relaxed">
              AI-powered business automation for the modern world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li>
                <a href="/audit" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  Start Free Audit
                </a>
              </li>
              <li>
                <a href="mailto:contact@synth-ai.com" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#preview" className="text-secondaryText hover:text-primaryText transition-colors text-sm">
                  See Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-borderColor flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondaryText text-sm">
            © 2026 Synth AI. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-borderColor/30 flex items-center justify-center hover:bg-borderColor transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-borderColor/30 flex items-center justify-center hover:bg-borderColor transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-borderColor/30 flex items-center justify-center hover:bg-borderColor transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
