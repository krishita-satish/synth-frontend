'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Clock, Zap } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section id="preview" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Preview Your <span className="gradient-text">Audit</span>
          </h2>
          <p className="text-lg text-secondaryText max-w-2xl mx-auto">
            See exactly what kind of insights you'll receive with our comprehensive AI audit dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="glass p-8 rounded-3xl">
            <AuditDashboard />
          </div>
          
          {/* Decorative glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-accentGreen/20 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function AuditDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-borderColor">
        <div>
          <h3 className="text-2xl font-bold mb-1">AI Automation Report</h3>
          <p className="text-secondaryText">Generated for: Acme Corporation</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-lg bg-accentGreen/20 text-accentGreen font-medium text-sm">
            47% Time Savings Potential
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          icon={Clock}
          title="Hours Saved/Week"
          value="87.5"
          trend="+23%"
          color="green"
        />
        <MetricCard
          icon={Zap}
          title="Processes Analyzed"
          value="128"
          trend="+15"
          color="blue"
        />
        <MetricCard
          icon={TrendingUp}
          title="Efficiency Gain"
          value="68%"
          trend="+12%"
          color="purple"
        />
        <MetricCard
          icon={BarChart3}
          title="ROI Projection"
          value="$45K"
          trend="+31%"
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Automation Opportunities */}
        <div className="glass p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-6">Top Automation Opportunities</h4>
          <div className="space-y-4">
            <OpportunityBar title="Email Processing" percentage={85} color="green" />
            <OpportunityBar title="Data Entry" percentage={72} color="blue" />
            <OpportunityBar title="Report Generation" percentage={68} color="purple" />
            <OpportunityBar title="Customer Support" percentage={61} color="orange" />
          </div>
        </div>

        {/* Workflow Analysis */}
        <div className="glass p-6 rounded-xl">
          <h4 className="text-lg font-semibold mb-6">Workflow Efficiency</h4>
          <div className="h-48 flex items-end justify-between gap-2">
            {[45, 62, 38, 78, 55, 89, 67, 82, 71, 95, 88, 76].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-accentGreen/50 to-accentGreen rounded-t-lg hover:from-accentGreen hover:to-accentGlow transition-all cursor-pointer relative group"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primaryBg px-2 py-1 rounded text-xs whitespace-nowrap">
                  {height}%
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-secondaryText">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="glass p-6 rounded-xl">
        <h4 className="text-lg font-semibold mb-4">Recommended AI Agents</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <RecommendationCard
            title="Email Assistant"
            description="Automate email categorization and responses"
            impact="High Impact"
          />
          <RecommendationCard
            title="Data Processor"
            description="Extract and organize data from documents"
            impact="Medium Impact"
          />
          <RecommendationCard
            title="Report Generator"
            description="Create automated weekly reports"
            impact="High Impact"
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, title, value, trend, color }: any) {
  const colorMap: any = {
    green: 'from-accentGreen to-accentGlow',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
  };

  return (
    <div className="glass p-5 rounded-xl">
      <div className="flex items-center justify-between mb-3">
        <Icon size={20} className="text-secondaryText" />
        <span className="text-xs text-accentGreen">{trend}</span>
      </div>
      <p className={`text-3xl font-bold bg-gradient-to-r ${colorMap[color]} bg-clip-text text-transparent mb-1`}>
        {value}
      </p>
      <p className="text-sm text-secondaryText">{title}</p>
    </div>
  );
}

function OpportunityBar({ title, percentage, color }: any) {
  const colorMap: any = {
    green: 'bg-accentGreen',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span>{title}</span>
        <span className="text-secondaryText">{percentage}%</span>
      </div>
      <div className="h-2 bg-borderColor rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full ${colorMap[color]} rounded-full`}
        />
      </div>
    </div>
  );
}

function RecommendationCard({ title, description, impact }: any) {
  return (
    <div className="bg-borderColor/30 p-4 rounded-lg hover:bg-borderColor/50 transition-colors cursor-pointer">
      <h5 className="font-semibold mb-2">{title}</h5>
      <p className="text-sm text-secondaryText mb-3">{description}</p>
      <span className="text-xs px-2 py-1 rounded bg-accentGreen/20 text-accentGreen">
        {impact}
      </span>
    </div>
  );
}
