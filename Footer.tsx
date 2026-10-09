'use client';

import { Zap, Mail, Lock, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold">OpsFlow</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:support@opsflow.com" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              support@opsflow.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5" />
              Secure
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-400">
              <CreditCard className="w-3.5 h-3.5" />
              Stripe Verified
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} OpsFlow, Inc. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for local service businesses that want to grow without hiring.
          </p>
        </div>
      </div>
    </footer>
  );
}
