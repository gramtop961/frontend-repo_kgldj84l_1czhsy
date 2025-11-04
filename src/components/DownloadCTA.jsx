import React from 'react';
import { Apple } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative w-full bg-black pb-24 pt-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 text-center backdrop-blur md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to skip the lines?</h3>
            <p className="mt-2 max-w-xl text-white/70">NO Queue is available exclusively on the App Store for iPhone. Experience the park at your pace.</p>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="#"
              aria-label="Download on the App Store"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/10 transition hover:opacity-95"
            >
              <Apple size={18} />
              <span>Download on the App Store</span>
            </a>
            <span className="text-xs text-white/60">iOS only • Coming soon to VisionOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
