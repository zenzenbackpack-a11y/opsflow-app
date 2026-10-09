'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4" fill="currentColor" />
            All-in-one automation for local service businesses
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
            Save 10+ Hours Every Week on{' '}
            <span className="text-indigo-400">Customer Ops</span>—Without Hiring.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 text-pretty leading-relaxed mb-8 max-w-2xl mx-auto">
            The complete automated software package for local service businesses:
            lead response, review collection, and smart booking working together on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollTo('pricing')}
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-base px-8 h-12 group"
            >
              Get Started Risk-Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo('how-it-works')}
              size="lg"
              variant="outline"
              className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:text-white hover:border-slate-500 text-base px-8 h-12 group"
            >
              <Play className="w-4 h-4 mr-2" fill="currentColor" />
              See How It Works
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-indigo-400" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-indigo-400" />
              15-minute setup
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-indigo-400" />
              Cancel anytime
            </div>
          </div>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <p className="text-center text-sm text-slate-400 mb-6 uppercase tracking-wider font-medium">
            Trusted by 100+ local contractors, boutique clinics, and service professionals
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-50">
            {['NORTHGATE HVAC', 'Bloom Dental', 'Summit Plumbing', 'ClearView Auto', 'Atlas Roofing'].map((name) => (
              <span key={name} className="text-sm font-bold text-slate-300 tracking-wide whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
