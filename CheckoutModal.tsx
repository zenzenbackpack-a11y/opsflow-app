'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
  billing: 'monthly' | 'yearly';
};

export default function CheckoutModal({ open, onClose, billing }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setBusinessName('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Start your OpsFlow subscription"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                  <Check className="w-8 h-8 text-emerald-600" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">You're all set!</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We've sent a confirmation to <span className="font-semibold text-slate-900">{email}</span>.
                  Check your inbox to finish setting up your OpsFlow suite.
                </p>
                <Button onClick={handleClose} className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                  Done
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Start Your Free Trial</h3>
                <p className="text-slate-600 text-sm mb-6">
                  14 days free, then{' '}
                  <span className="font-semibold text-slate-900">
                    ${billing === 'monthly' ? '199/mo' : '1,990/yr'}
                  </span>
                  . Cancel anytime.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="business-name" className="text-sm font-medium text-slate-700">
                      Business name
                    </Label>
                    <Input
                      id="business-name"
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Reed Plumbing Co."
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkout-email" className="text-sm font-medium text-slate-700">
                      Work email
                    </Label>
                    <Input
                      id="checkout-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourbusiness.com"
                      className="mt-1.5"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base h-12 group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Setting up your account...
                      </>
                    ) : (
                      <>
                        Claim Your Suite Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-4">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Secure checkout · No credit card required for trial
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
