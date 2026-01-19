import React from "react";
import { ShieldCheck, Clock, Wrench, Award } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-28 bg-[#070F15] overflow-hidden font-[Poppins]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C15_1px,transparent_1px),linear-gradient(to_bottom,#1D546C15_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1D546C] blur-[250px] opacity-10 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            The Hamad Maintenance  Difference
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Trusted electromechanical and shutter solutions delivering safety,
            performance, and lasting value across the UAE.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Card */}
          <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]">
            <ShieldCheck size={38} className="text-[#4AA3C8] mb-6" />
            <h3 className="text-white font-bold uppercase tracking-wide mb-3">
              Precision Engineering
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Every shutter, door, and structure is custom-fitted for maximum
              safety, performance, and durability.
            </p>
          </div>

          <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]">
            <Clock size={38} className="text-[#4AA3C8] mb-6" />
            <h3 className="text-white font-bold uppercase tracking-wide mb-3">
              Fast Response
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Our emergency fix-it team ensures minimum downtime and quick
              restoration of your systems.
            </p>
          </div>

          <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]">
            <Wrench size={38} className="text-[#4AA3C8] mb-6" />
            <h3 className="text-white font-bold uppercase tracking-wide mb-3">
              Skilled Technicians
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Certified professionals with years of field experience in
              electromechanical and shutter systems.
            </p>
          </div>

          <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]">
            <Award size={38} className="text-[#4AA3C8] mb-6" />
            <h3 className="text-white font-bold uppercase tracking-wide mb-3">
              Premium Quality
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Using high-grade materials, modern tools, and international
              quality standards in every project.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
