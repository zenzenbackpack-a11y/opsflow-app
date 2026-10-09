'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CheckoutModal from '@/components/site/CheckoutModal';

const includes = [
  'All 3 software modules (Lead Capture, Reputation Engine, Scheduling)',
  '1-click automated setup wizard',
  'Ongoing product updates included',
  'Direct SMS & email support',
  'No long-term contracts — cancel anytime',
  'Works alongside your existing website & Google Business Profile',
];

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Simple Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance mb-4">
            One Suite. One Price. Everything Included.
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            No add-ons, no hidden fees, no per-seat pricing. Just the complete package.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              billing === 'monthly' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              billing === 'yearly' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Yearly
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold">
              2 months free
            </span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative rounded-3xl border-2 border-indigo-200 bg-gradient-to-br from-white to-indigo-50/50 p-8 sm:p-10 shadow-xl shadow-indigo-100/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
                  <Zap className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-lg font-bold text-slate-900">OpsFlow</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">
                The Complete Efficiency Suite
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Everything your service business needs to capture, convert, and keep customers.
              </p>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold text-slate-900">
                  ${billing === 'monthly' ? '199' : '1,990'}
                </span>
                <span className="text-slate-500 font-medium">
                  /{billing === 'monthly' ? 'month' : 'year'}
                </span>
              </div>
              {billing === 'yearly' && (
                <p className="text-sm text-emerald-600 font-semibold mb-6">
                  You save $398 compared to monthly billing
                </p>
              )}
              {billing === 'monthly' && (
                <p className="text-sm text-slate-500 mb-6">
                  or $1,990/year (2 months free)
                </p>
              )}

              <Button
                onClick={() => setCheckoutOpen(true)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base h-12 mb-2 group"
              >
                Claim Your Suite Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-8">
                <Shield className="w-3.5 h-3.5" />
                Secure checkout · 14-day money-back guarantee
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  What's included
                </p>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-indigo-600" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        billing={billing}
      />
    </section>
  );
}
