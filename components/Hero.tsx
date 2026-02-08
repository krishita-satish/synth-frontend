'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 grid-bg">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accentGreen rounded-full animate-float opacity-40" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accentGreen rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accentGlow rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accentGreen rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <div className="w-2 h-2 bg-accentGreen rounded-full animate-pulse" />
          <span className="text-sm text-secondaryText">AI-Powered Business Automation</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
        >
          Discover What Your
          <br />
          <span className="gradient-text">Company Can Automate</span>
          <br />
          With AI
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-secondaryText max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Upload your business data and receive a professional AI audit showing where AI can save time and money.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <a 
            href="/audit"
            className="btn-primary bg-accentGreen hover:bg-accentGlow text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 group"
          >
            Start Free Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="#preview"
            className="glass px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:border-accentGreen transition-colors"
          >
            <Play size={20} />
            See Demo
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm text-secondaryText"
        >
          Free • No credit card required
        </motion.p>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 relative"
        >
          <div className="glass p-2 rounded-2xl max-w-6xl mx-auto">
            <DashboardMockup />
          </div>
          
          {/* Glow effect under dashboard */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-accentGreen/20 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-[#0F0F0F] rounded-xl p-6 border border-borderColor">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-borderColor">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accentGreen/20 rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accentGreen">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Business Automation Audit</h3>
            <p className="text-xs text-secondaryText">Sample Report Preview</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-md bg-accentGreen/10 text-accentGreen text-sm font-medium">
            Preview Mode
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Annual Time Savings" value="2,400hrs" color="green" />
        <StatCard title="Cost Reduction" value="$156K" color="blue" />
        <StatCard title="Automation Score" value="82/100" color="purple" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Top Automation Opportunities" type="opportunities" />
        <ChartCard title="Monthly Efficiency Gains" type="timeline" />
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string; value: string; color: string }) {
  const colorMap: { [key: string]: string } = {
    green: 'from-accentGreen to-accentGlow',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
  };

  return (
    <div className="glass p-4 rounded-lg">
      <p className="text-xs text-secondaryText mb-2">{title}</p>
      <p className={`text-3xl font-bold bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent`}>
        {value}
      </p>
    </div>
  );
}

function ChartCard({ title, type }: { title: string; type?: string }) {
  const opportunities = ['Email Processing', 'Data Entry', 'Report Generation', 'Customer Support', 'Scheduling'];
  
  return (
    <div className="glass p-4 rounded-lg">
      <h4 className="text-sm font-medium mb-4 text-secondaryText">{title}</h4>
      {type === 'opportunities' ? (
        <div className="space-y-2">
          {opportunities.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-borderColor rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-accentGreen to-accentGlow rounded-full"
                  style={{ width: `${85 - i * 8}%` }}
                />
              </div>
              <span className="text-xs text-secondaryText w-12 text-right">{85 - i * 8}%</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-32 flex items-end gap-2">
          {[40, 65, 45, 80, 60, 90, 70, 85, 75, 95, 88, 92].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-accentGreen to-accentGlow rounded-t opacity-60 hover:opacity-100 transition-opacity"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
