'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Workflow, TrendingUp, Zap, Brain, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Customer Support Automation',
    description: 'Automate responses, tickets, and workflows with intelligent AI agents.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Workflow,
    title: 'Operations & Workflow Optimization',
    description: 'Save time on repetitive internal tasks with smart automation.',
    gradient: 'from-accentGreen to-emerald-400',
  },
  {
    icon: TrendingUp,
    title: 'Sales & Marketing Intelligence',
    description: 'Get AI insights for your growth with data-driven recommendations.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Analyze thousands of documents in seconds, not hours.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'Get personalized AI agent templates for your specific needs.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is encrypted and secure with SOC 2 compliance.',
    gradient: 'from-red-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Our <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            Everything you need to discover, implement, and scale AI automation in your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass p-8 rounded-2xl group hover:scale-105 transition-all cursor-pointer relative overflow-hidden"
    >
      {/* Animated border accent */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accentGreen/20 to-transparent animate-shimmer"></div>
      </div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
          <Icon size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
        <p className="text-secondaryText leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}
