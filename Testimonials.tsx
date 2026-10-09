'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Reed',
    role: 'Owner, Reed Plumbing Co.',
    quote: "We stopped missing after-hours calls the first week. The AI books jobs while I'm on a job site. It's like having a receptionist who never sleeps.",
    rating: 5,
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Director, Bloom Dental',
    quote: "Our no-show rate dropped by half. Patients book online and get automatic reminders. We went from 3-4 no-shows a week to maybe one.",
    rating: 5,
  },
  {
    name: 'Tony Morales',
    role: 'Founder, Summit HVAC',
    quote: "The review engine alone paid for the subscription. We went from 12 Google reviews to 40+ in two months. New customers constantly mention them.",
    rating: 5,
  },
  {
    name: 'Jenna Whitfield',
    role: 'Owner, ClearView Auto Body',
    quote: "I was spending two hours a day on follow-ups and scheduling. Now it's maybe 15 minutes. OpsFlow handles the busywork so I can actually run the shop.",
    rating: 5,
  },
  {
    name: 'Dave Kowalski',
    role: 'Owner, Atlas Roofing',
    quote: "Setup took 10 minutes. The deposit collection feature alone has saved me thousands in canceled jobs. Wish I'd found this years ago.",
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Manager, Riverside Vet Clinic',
    quote: "Our clients love the text reminders. Appointment confirmations went from 60% to 95%. The whole front desk runs smoother now.",
    rating: 5,
  },
];

export default function Testimonials() {
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
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Customer Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance mb-4">
            Service Businesses Love OpsFlow
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            Over 100 local businesses have recovered leads, boosted reviews, and reclaimed their time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-100 mb-3" fill="currentColor" />
              <p className="text-slate-700 leading-relaxed mb-6 text-pretty">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
