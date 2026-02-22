'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Have questions? Want to learn more about how Synth can help your business? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-secondaryText leading-relaxed mb-8">
                Whether you're curious about our AI audit, need help with implementation,
                or just want to explore how automation can transform your business, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <ContactMethod
                icon={Mail}
                title="Email Us"
                value="gopeshvijayabhaskar@gmail.com"
                link="mailto:gopeshvijayabhaskar@gmail.com"
              />
              <ContactMethod
                icon={Phone}
                title="Call Us (Primary)"
                value="+91 8056266671"
                link="tel:+918056266671"
              />
              <ContactMethod
                icon={Phone}
                title="Call Us (Secondary)"
                value="+91 8637623234"
                link="tel:+918637623234"
              />
              <ContactMethod
                icon={MessageSquare}
                title="Live Chat"
                value="Available 24/7"
                link="#chat"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl relative overflow-hidden"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-slide-up-fade">
                <div className="w-16 h-16 bg-accentGreen/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                  >
                    <svg className="w-8 h-8 text-accentGreen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-secondaryText">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accentGreen hover:underline font-medium mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-borderColor/30 border border-borderColor rounded-lg px-4 py-3 focus:outline-none focus:border-accentGreen transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-borderColor/30 border border-borderColor rounded-lg px-4 py-3 focus:outline-none focus:border-accentGreen transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-borderColor/30 border border-borderColor rounded-lg px-4 py-3 focus:outline-none focus:border-accentGreen transition-colors"
                    placeholder="Acme Inc"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-borderColor/30 border border-borderColor rounded-lg px-4 py-3 focus:outline-none focus:border-accentGreen transition-colors resize-none"
                    placeholder="Tell us about your automation needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full bg-accentGreen hover:bg-accentGlow text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon: Icon, title, value, link }: any) {
  return (
    <a
      href={link}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-borderColor/20 transition-colors group"
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accentGreen to-accentGlow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-secondaryText">{value}</p>
      </div>
    </a>
  );
}
