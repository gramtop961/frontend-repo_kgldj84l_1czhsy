import React from 'react';
import { Map, Clock, Star } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Set your vibe',
    desc: 'Pick thrill level, favorite rides, and must-see shows so we tailor the plan to you.',
    icon: Star,
  },
  {
    number: '02',
    title: 'Get your smart plan',
    desc: 'We calculate an optimal route with live wait times and walking distances.',
    icon: Map,
  },
  {
    number: '03',
    title: 'Glide through the day',
    desc: 'Stay on track with real-time updates and gentle nudges when things change.',
    icon: Clock,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From setup to screams in three simple steps.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ number, title, desc, icon: Icon }) => (
            <div key={number} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/50">{number}</span>
                <Icon className="text-emerald-300" size={18} />
              </div>
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
