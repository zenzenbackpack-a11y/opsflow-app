'use client';

import { motion } from 'framer-motion';
import { Bot, Star, CalendarCheck, ArrowUpRight, Clock, MessageSquare, DollarSign } from 'lucide-react';

const pillars = [
  {
    icon: Bot,
    title: 'Instant Lead Capture',
    description: 'AI Assistant that responds to website leads and texts within 60 seconds—day or night.',
    highlights: [
      { icon: Clock, text: '24/7 automated responses' },
      { icon: MessageSquare, text: 'SMS + web chat coverage' },
    ],
    accent: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Star,
    title: 'Reputation Engine',
    description: 'Automated text campaigns requesting Google reviews right after a service call is completed.',
    highlights: [
      { icon: Star, text: '3.5x more monthly reviews' },
      { icon: MessageSquare, text: 'Post-job auto-trigger' },
    ],
    accent: 'from-amber-500 to-orange-600',
  },
  {
    icon: CalendarCheck,
    title: 'Hands-Free Scheduling',
    description: 'Integrated calendar booking system with automated SMS reminders to eliminate no-shows.',
    highlights: [
      { icon: CalendarCheck, text: 'Self-serve online booking' },
      { icon: DollarSign, text: 'Deposit collection built-in' },
    ],
    accent: 'from-emerald-500 to-teal-600',
  },
];

export default function Pillars() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            The 3-Pillar Package
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance mb-4">
            Everything You Need, Working Together
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            Three integrated modules that replace a dozen disconnected tools and a part-time hire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/60 transition-shadow cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.accent} mb-6 shadow-lg`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 group-hover:rotate-45 transition-all" />
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 text-pretty">
                {pillar.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                {pillar.highlights.map((h) => (
                  <div key={h.text} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <h.icon className="w-4 h-4 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{h.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
