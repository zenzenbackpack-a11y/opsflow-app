'use client';

import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: '88%',
    label: 'reduction in missed leads',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-600/10',
  },
  {
    icon: TrendingUp,
    value: '3.5x',
    label: 'increase in monthly Google reviews',
    color: 'text-amber-400',
    bgColor: 'bg-amber-600/10',
  },
  {
    icon: Clock,
    value: '10+',
    label: 'hours saved weekly per business',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-600/10',
  },
];

export default function RoiBanner() {
  return (
    <section className="relative py-20 sm:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">
            Real Numbers from Real Businesses
          </h2>
          <p className="text-lg text-slate-400 text-pretty">
            OpsFlow pays for itself in recovered leads alone—here's what our customers see on average.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-5xl sm:text-6xl font-bold mb-2 tracking-tight">
                {stat.value}
              </div>
              <p className="text-slate-400 text-sm sm:text-base text-pretty">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
