'use client';

import { Coffee, Star, ChevronRight, Sparkles, Zap, Shield } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Premium Quality', desc: 'Crafted with attention to every detail for an exceptional experience.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance that keeps you ahead of the competition.' },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security you can trust with your data.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0f2e] to-[#0d0d0d] text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ✨ To Build A Castle
          </h1>
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-400 text-sm mb-6">
            <Star className="w-4 h-4 fill-purple-400" /> Built with Heaven AI Engine
          </div>
          <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            Welcome to
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              To Build A Castle
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
            A beautifully crafted experience, powered by modern technology and designed for excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2">
              Explore <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((card, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300">
              <card.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">{card.title}</h4>
              <p className="text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p>Built with ✨ <span className="text-purple-400">Heaven AI Engine</span></p>
        </div>
      </footer>
    </main>
  );
}
