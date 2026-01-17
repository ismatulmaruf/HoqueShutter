

import React from 'react';
import { ArrowRight, ShieldCheck, Settings, Sun } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#0A161E] overflow-hidden font-sans">
      
      {/* --- ARCHITECTURAL BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Radial Glow for Depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(29,84,108,0.15)_0%,transparent_70%)]"></div>
        
        {/* Decorative Vertical Line */}
        <div className="absolute left-12 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#1D546C]/30 to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-16">
        
        {/* --- LEFT CONTENT: THE HOOK --- */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-[#1D546C]/40 bg-[#1D546C]/10 rounded-sm">
            <span className="w-1.5 h-1.5 bg-[#1D546C] animate-pulse"></span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#F4F4F4]/80 font-bold">
              Hoque Shuttertech • Established 2012
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[45px] md:text-[70px] lg:text-[85px] font-black leading-[0.9] tracking-tighter text-[#F4F4F4] mb-8">
            SMART SECURITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D546C] to-[#4AA3C8]">
              SHADING SOLUTIONS.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-[#F4F4F4]/70 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
            Protecting your home and business with 
            <span className="text-white font-medium"> premium automatic rolling shutters</span> and 
            <span className="text-white font-medium"> professional sunshades</span>. Engineered for durability, designed for style.
          </p>

          {/* Feature Micro-Cards (Simple & Clean) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <ShieldCheck size={18} />, text: "Security Shutters" },
              { icon: <Sun size={18} />, text: "Luxury Sunshades" },
              { icon: <Settings size={18} />, text: "Expert Maintenance" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[#F4F4F4]/60">
                <div className="text-[#1D546C]">{item.icon}</div>
                <span className="text-xs uppercase tracking-widest font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5">
            <button className="px-8 py-4 bg-[#1D546C] hover:bg-[#256a88] text-white font-bold uppercase text-[12px] tracking-[0.2em] transition-all flex items-center gap-3 group">
              View Our Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-[#F4F4F4]/20 hover:border-[#1D546C] text-[#F4F4F4] font-bold uppercase text-[12px] tracking-[0.2em] transition-all">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* --- RIGHT CONTENT: THE VISUAL --- */}
        <div className="w-full lg:w-2/5 relative">
          
          {/* Main Image Container */}
          <div className="relative z-10 p-2 bg-gradient-to-b from-[#1D546C] to-transparent">
             <div className="overflow-hidden bg-[#0C2B4E]">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Luxury Property" 
                  className="w-full h-auto object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

          {/* Floating Data Badge */}
          <div className="absolute -bottom-8 -right-4 z-20 bg-white p-6 shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
            <p className="text-[#0C2B4E] font-black text-4xl leading-none">100%</p>
            <p className="text-[10px] uppercase tracking-tighter font-bold text-[#1D546C] mt-1">
              Custom Automated Precision
            </p>
          </div>

          {/* Decorative Framing */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#1D546C]"></div>
        </div>

      </div>

      {/* Side Label */}
      <div className="absolute bottom-10 right-10 hidden xl:block">
        <p className="text-[#F4F4F4]/5 text-[10px] font-black uppercase tracking-[1.5em] [writing-mode:vertical-lr] rotate-180">
          Industrial Durability • Modern Aesthetics
        </p>
      </div>
    </section>
  );
};

export default HeroSection;