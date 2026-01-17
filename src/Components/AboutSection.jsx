import React from "react";

const AboutSection = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden font-sans bg-[#0A161E]">

            {/* Background Glows */}
            <div className="absolute inset-0 z-0">
                {/* Top left soft glow */}
                <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#1D546C] rounded-full blur-[200px] opacity-10"></div>
                {/* Bottom right soft glow */}
                <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#1A3D64] rounded-full blur-[150px] opacity-15"></div>
                {/* Subtle grid texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C05_1px,transparent_1px),linear-gradient(to_bottom,#1D546C05_1px,transparent_1px)] bg-[size:90px_90px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Text */}
                <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-10 bg-[#1D546C]"></div>
                        <span className="text-[10px] tracking-[0.5em] uppercase text-[#1D546C] font-bold">
                            Technical Excellence
                        </span>
                    </div>

                    <h2 className="text-[40px] md:text-[60px] font-black leading-[1.1] text-[#F4F4F4] mb-8 tracking-tighter">
                        Your Trusted Partner <br />
                        <span className="text-[#1D546C]">in Technical Excellence</span>
                    </h2>

                    <p className="text-[#F4F4F4]/70 text-lg leading-relaxed mb-6 max-w-xl font-light">
                        At <span className="text-white font-medium">HOQUE SHUTTERTECH</span>, we specialize in the intersection of security and comfort. From high-tech automatic rolling shutters that protect your assets to elegant sunshades that transform your outdoor spaces, our work is built to last.
                    </p>

                    <p className="text-[#F4F4F4]/60 text-lg leading-relaxed max-w-xl font-light">
                        With a dedicated team of technicians, we provide end-to-end services including installation, repair, and long-term maintenance. We don't just fix things; we upgrade your property with the latest in shutter technology and technical craftsmanship.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 p-3 border border-[#1D546C]/30 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                            alt="HOQUE ShutterTech"
                            className="w-full h-[500px] object-cover rounded-lg grayscale brightness-75 contrast-125"
                        />
                        <div className="absolute top-6 left-6 text-[10px] font-mono text-[#1D546C] tracking-widest uppercase">
                            Ref: HS-772 / Tech-Spec
                        </div>
                        <div className="absolute bottom-6 right-6 text-[10px] font-mono text-[#1D546C] tracking-widest uppercase rotate-90 origin-right">
                            System.Secure_Active
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
