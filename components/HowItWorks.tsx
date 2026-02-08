'use client';

import { motion } from 'framer-motion';
import { Upload, Sparkles, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Company Data',
    description: 'Share your emails, documents, CSVs, or any business files securely. Our AI engine supports all formats.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI Analyzes Workflows',
    description: 'Our advanced AI examines your processes, identifies patterns, and finds automation opportunities.',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download Professional Audit Report',
    description: 'Get a detailed report with actionable insights and custom AI agent recommendations.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Get started in three simple steps. No technical knowledge required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accentGreen/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Step number */}
      <div className="text-8xl font-bold font-display text-accentGreen/10 mb-4">
        {step.number}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accentGreen to-accentGlow flex items-center justify-center mb-6 relative z-10">
        <Icon size={32} className="text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
      <p className="text-secondaryText leading-relaxed">{step.description}</p>

      {/* Connecting dot */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accentGreen z-20 ring-4 ring-primaryBg" />
    </motion.div>
  );
}
