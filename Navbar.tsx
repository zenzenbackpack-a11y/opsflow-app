'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className={`text-lg font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              OpsFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('features')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Features
            </button>
            <button onClick={() => scrollTo('how-it-works')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              How It Works
            </button>
            <button onClick={() => scrollTo('pricing')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              Pricing
            </button>
            <button onClick={() => scrollTo('faq')} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-300 hover:text-white'}`}>
              FAQ
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => scrollTo('pricing')} className={`text-sm font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-slate-200 hover:text-white'}`}>
              Sign In
            </button>
            <Button onClick={() => scrollTo('pricing')} className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              <button onClick={() => scrollTo('features')} className="text-sm font-medium text-slate-600 text-left py-2">Features</button>
              <button onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-slate-600 text-left py-2">How It Works</button>
              <button onClick={() => scrollTo('pricing')} className="text-sm font-medium text-slate-600 text-left py-2">Pricing</button>
              <button onClick={() => scrollTo('faq')} className="text-sm font-medium text-slate-600 text-left py-2">FAQ</button>
              <Button onClick={() => scrollTo('pricing')} className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
