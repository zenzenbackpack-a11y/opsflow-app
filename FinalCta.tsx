'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCta() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-5xl font-bold text-white text-balance mb-6"
        >
          Start Saving 10+ Hours This Week
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-indigo-100 text-pretty mb-8"
        >
          Get the complete OpsFlow suite running in under 15 minutes. No contracts, no risk, just results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo('pricing')}
            size="lg"
            className="bg-white text-indigo-700 hover:bg-indigo-50 text-base px-8 h-12 group shadow-xl"
          >
            Get Started Risk-Free
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex items-center gap-4 text-indigo-100 text-sm">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              14-day guarantee
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
