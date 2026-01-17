


import React from "react";
import { Settings, Wrench, Zap, LayoutGrid } from "lucide-react";

const ServicesSection = () => {
    return (
        <section className="relative w-full bg-[#0A161E] py-28 overflow-hidden">

            {/* Grid Background */}
            <div className="absolute inset-0">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:90px_90px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1D546C] blur-[220px] opacity-5 rounded-full" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-20">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-[#1D546C] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
                        Our Expertise
                    </p>
                    <h2 className="text-[#F4F4F4] text-4xl md:text-6xl font-extrabold tracking-tight">
                        CORE SERVICES
                    </h2>
                    <p className="text-[#F4F4F4]/60 max-w-2xl mx-auto mt-6">
                        Precision-driven technical solutions designed for security, comfort, and performance.
                    </p>
                </div>

                {/* Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Card 1 */}
                    <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
                        <Settings size={40} className="text-[#1D546C] mb-6" />
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
                            Rolling Shutters & Gates
                        </h3>
                        <p className="text-[#F4F4F4]/60 text-sm leading-relaxed">
                            High-grade aluminum, steel, and fireproof automated shutters with remote-controlled precision.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
                        <Wrench size={40} className="text-[#1D546C] mb-6" />
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
                            Handyman Services
                        </h3>
                        <p className="text-[#F4F4F4]/60 text-sm leading-relaxed">
                            Professional repair services including door fittings, glass works, and general maintenance.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
                        <Zap size={40} className="text-[#1D546C] mb-6" />
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
                            Electrical & Technical
                        </h3>
                        <p className="text-[#F4F4F4]/60 text-sm leading-relaxed">
                            Certified electrical installation, wiring, diagnostics, and system optimization.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 hover:border-[#1D546C] transition">
                        <LayoutGrid size={40} className="text-[#1D546C] mb-6" />
                        <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
                            Carpentry & Glass
                        </h3>
                        <p className="text-[#F4F4F4]/60 text-sm leading-relaxed">
                            Custom carpentry, furniture restoration, and premium glass installations.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
