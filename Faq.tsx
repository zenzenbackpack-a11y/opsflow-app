'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Under 15 minutes with our automated onboarding wizard. Just connect your Google Business Profile and phone number, and OpsFlow starts working immediately.',
  },
  {
    q: 'Does this require replacing my current website?',
    a: 'No, OpsFlow works seamlessly alongside your existing site and Google Business Profile. We add a small widget and connect your tools—no rebuild needed.',
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes, no long-term contracts—cancel with a single click in your dashboard. If you choose annual billing, you can still cancel and we'll prorate the refund.",
  },
  {
    q: 'What types of businesses is OpsFlow built for?',
    a: 'Local service businesses: contractors, HVAC, plumbing, electrical, dental clinics, auto repair, roofing, landscaping, and similar trades that rely on leads, reviews, and appointments.',
  },
  {
    q: 'Do I need to be technical to use it?',
    a: 'Not at all. If you can send a text message, you can run OpsFlow. The dashboard is designed for business owners, not IT teams.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We never sell or share your customer information. You own your data and can export it at any time.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Questions, Answered
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-slate-200 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-pretty pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
