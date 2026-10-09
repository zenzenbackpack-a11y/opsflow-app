'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Bot, CalendarCheck, Star, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const demoSteps = [
  {
    icon: Bot,
    title: 'A new lead lands at 9:47 PM',
    description: 'A potential customer fills out your website contact form after hours. OpsFlow\'s AI assistant instantly responds via SMS to qualify them.',
    message: 'New lead from website: "Do you offer emergency plumbing?" — AI responded in 42 seconds.',
  },
  {
    icon: CalendarCheck,
    title: 'Booking happens automatically',
    description: 'The AI shares your live calendar link. The customer picks a slot and pays a deposit—no phone tag, no back-and-forth.',
    message: 'Appointment booked: Thursday 10 AM · Deposit collected: $75',
  },
  {
    icon: Star,
    title: 'Review request goes out after the job',
    description: 'Once the service is marked complete, OpsFlow automatically texts the customer a Google review link.',
    message: 'Review request sent. 4 days later: ★★★★★ "Fast, professional, and easy to book!"',
  },
];

export default function HowItWorks() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance mb-4">
            Watch a Lead Become a Booked Job in 3 Steps
          </h2>
          <p className="text-lg text-slate-600 text-pretty">
            Click through a quick interactive demo to see exactly how OpsFlow captures, books, and follows up—hands-free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <button
            onClick={() => { setStep(0); setIsOpen(true); }}
            className="group w-full relative rounded-2xl overflow-hidden bg-slate-900 p-12 sm:p-16 hover:shadow-2xl transition-shadow"
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600 group-hover:scale-110 transition-transform shadow-xl shadow-indigo-600/30">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
              <span className="text-white font-semibold text-lg">Start Interactive Demo</span>
              <span className="text-slate-400 text-sm">60 seconds · No signup needed</span>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Interactive demo"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                  Step {step + 1} of {demoSteps.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600">
                      {(() => {
                        const Icon = demoSteps[step].icon;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {demoSteps[step].title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed text-pretty">
                        {demoSteps[step].description}
                      </p>
                    </div>
                  </div>

                  {/* Simulated notification */}
                  <div className="rounded-xl bg-slate-900 p-4 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs text-slate-400 font-medium">OpsFlow Notification</span>
                    </div>
                    <p className="text-sm text-white leading-relaxed">
                      {demoSteps[step].message}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {demoSteps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === step ? 'w-8 bg-indigo-600' : 'w-1.5 bg-slate-200'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                {step > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                {step < demoSteps.length - 1 ? (
                  <Button
                    onClick={() => setStep(step + 1)}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white group"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    See Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
