import React from 'react';
import { Rocket, Clock, Map, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Ride More, Wait Less',
    desc: 'Dynamic plans optimize your path in real time so you can hit more thrills with minimal downtime.'
  },
  {
    icon: Clock,
    title: 'Live Wait Times',
    desc: 'See accurate queue lengths and best time-to-ride predictions throughout the day.'
  },
  {
    icon: Map,
    title: 'Smart Park Map',
    desc: 'A beautiful, interactive layout highlighting the next best stop based on your preferences.'
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    desc: 'Your data stays yours. We only use what’s needed to build your perfect schedule.'
  }
];

export default function Features() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),rgba(0,0,0,0))]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Designed for zero downtime</h2>
          <p className="mt-3 text-white/70">A streamlined, premium experience that feels right at home on iOS.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
