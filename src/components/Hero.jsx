import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth, don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 pb-24 text-center md:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <p className="text-xs tracking-wide text-white/80">Now boarding the future of theme parks</p>
        </div>
        <h1 className="mt-6 max-w-4xl bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          NO Queue
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          A modern, Apple‑like experience that crafts smart ride plans so you spend more time screaming and less time waiting.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/10 transition hover:opacity-95"
          >
            Download on the App Store
          </a>
          <span className="text-sm text-white/70">iOS only</span>
        </div>
      </div>
    </section>
  );
}
