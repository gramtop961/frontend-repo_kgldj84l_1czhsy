import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DownloadCTA from './components/DownloadCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Feature highlights */}
      <Features />

      {/* Steps */}
      <HowItWorks />

      {/* Download */}
      <DownloadCTA />

      {/* Simple footer */}
      <footer className="w-full bg-black pb-16 pt-6 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} NO Queue. Designed for thrill‑seekers.</p>
      </footer>
    </div>
  );
}

export default App;
