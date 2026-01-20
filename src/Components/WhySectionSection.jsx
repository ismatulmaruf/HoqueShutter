import React from "react";
import { Ruler, Wind, Clock, Palette } from "lucide-react";

const AdvantageSection = () => {
  return (
    <section className="relative w-full bg-[#0A161E] py-28 overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#1D546C] blur-[220px] opacity-5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#1D546C] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            The Advantage
          </p>
          <h2 className="text-[#F4F4F4] text-4xl md:text-6xl font-extrabold tracking-tight">
            THE Hamad Maintenance Co. DIFFERENCE
          </h2>
          <p className="text-[#F4F4F4]/60 max-w-2xl mx-auto mt-6">
            Where precision engineering meets architectural excellence.
          </p>
        </div>

        {/* Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Card 1 */}
          <div className="group flex gap-6 border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
            <Ruler size={36} className="text-[#1D546C] shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                Precision Engineering
              </h3>
              <p className="text-[#F4F4F4]/60 leading-relaxed text-sm">
                Every rolling shutter is custom-fitted to your exact measurements, ensuring flawless alignment and a perfect, gap-free seal.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex gap-6 border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
            <Wind size={36} className="text-[#1D546C] shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                Climate-Ready Materials
              </h3>
              <p className="text-[#F4F4F4]/60 leading-relaxed text-sm">
                Designed to withstand extreme heat, strong wind, and heavy dust for long-term durability.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex gap-6 border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
            <Clock size={36} className="text-[#1D546C] shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                Rapid Response Team
              </h3>
              <p className="text-[#F4F4F4]/60 leading-relaxed text-sm">
                Our specialized Fix-It team responds quickly to urgent repairs, minimizing your downtime and disruption.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group flex gap-6 border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
            <Palette size={36} className="text-[#1D546C] shrink-0" />
            <div>
              <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                Modern Aesthetics
              </h3>
              <p className="text-[#F4F4F4]/60 leading-relaxed text-sm">
                Multiple premium finishes including powder-coated and anodized options to match your architectural identity.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdvantageSection;
