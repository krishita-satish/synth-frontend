'use client';

import { motion } from 'framer-motion';

export default function SocialProof() {
  const companies = ['Shopify', 'Stripe', 'Notion', 'Figma', 'Linear'];

  return (
    <section className="py-16 border-y border-borderColor/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm text-secondaryText mb-8 uppercase tracking-wider">
            Inspired by modern teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
            {companies.map((company, i) => (
              <div
                key={i}
                className="text-2xl font-bold font-display hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
