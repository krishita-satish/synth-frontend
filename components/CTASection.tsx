'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            See How Much Time Your
            <br />
            <span className="gradient-text">Business Can Save</span>
          </h2>
          <p className="text-lg text-secondaryText mb-10 max-w-2xl mx-auto">
            Get your free AI audit today and discover automation opportunities worth thousands of hours and dollars.
          </p>
          <a 
            href="/audit"
            className="btn-primary bg-accentGreen hover:bg-accentGlow text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-2 mx-auto group shadow-lg shadow-accentGreen/20 hover:shadow-accentGreen/40 transition-all"
          >
            Get Your Free AI Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <p className="text-sm text-secondaryText mt-4">
            No credit card required • 5-minute setup • Instant results
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accentGreen/10 blur-[150px] rounded-full -z-0" />
    </section>
  );
}
