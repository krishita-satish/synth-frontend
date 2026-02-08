'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize AI automation and help businesses of all sizes unlock their full potential through intelligent systems.',
  },
  {
    icon: Users,
    title: 'Who We Serve',
    description: 'From startups to enterprises, we partner with forward-thinking companies ready to embrace the future of work.',
  },
  {
    icon: Lightbulb,
    title: 'Our Approach',
    description: 'We believe in practical AI that delivers measurable results. No hype, just real solutions that save time and money.',
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description: 'A world where every business has access to enterprise-grade AI automation, regardless of size or budget.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            About <span className="gradient-text">Synth</span>
          </h2>
          <p className="text-lg text-secondaryText max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how businesses operate by making AI automation accessible, 
            practical, and impactful. Founded by a team of AI engineers and business automation experts, 
            Synth bridges the gap between cutting-edge technology and real-world business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat number="500+" label="Companies Analyzed" />
            <Stat number="10M+" label="Hours Saved" />
            <Stat number="98%" label="Client Satisfaction" />
            <Stat number="24/7" label="AI Support" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-8 rounded-2xl"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accentGreen to-accentGlow flex items-center justify-center mb-6">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
      <p className="text-secondaryText leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {number}
      </div>
      <div className="text-sm text-secondaryText">
        {label}
      </div>
    </div>
  );
}
