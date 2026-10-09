'use client';

import { motion } from 'framer-motion';
import { X, Check, PhoneMissed, MessageSquareOff, StarOff, CalendarX, Bot, Star, CalendarCheck } from 'lucide-react';

const oldWay = [
  { icon: PhoneMissed, text: 'Missed calls after hours — leads go cold' },
  { icon: MessageSquareOff, text: 'Manual text follow-ups you forget to send' },
  { icon: StarOff, text: 'Empty review profiles that cost you jobs' },
  { icon: CalendarX, text: 'Scheduling phone tag and endless back-and-forth' },
];

const withOpsFlow = [
  { icon: Bot, text: 'Instant 24/7 AI lead capture — responds in 60 seconds' },
  { icon: Star, text: 'Automated Google reviews on job completion' },
  { icon: CalendarCheck, text: 'Self-serve booking with deposit collection' },
  { icon: Check, text: 'Smart SMS reminders that eliminate no-shows' },
];

export default function PainSolution() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance mb-4">
            Stop Bleeding Revenue from Manual Work
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            Every missed call and forgotten follow-up is money walking out the door. Here's what changes when you switch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold mb-6">
              <X className="w-3.5 h-3.5" />
              The Old Way
            </div>
            <ul className="space-y-5">
              {oldWay.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-slate-500 leading-relaxed pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With OpsFlow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-8 shadow-lg shadow-indigo-100/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold mb-6">
                <Check className="w-3.5 h-3.5" />
                With OpsFlow
              </div>
              <ul className="space-y-5">
                {withOpsFlow.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-800 font-medium leading-relaxed pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
