import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
    return (
        <section className="relative w-full py-28 overflow-hidden font-sans bg-[#0A161E]">

            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C08_1px,transparent_1px),linear-gradient(to_bottom,#1D546C08_1px,transparent_1px)] bg-[size:90px_90px]" />
                <div className="absolute top-[-120px] left-[-150px] w-[500px] h-[500px] bg-[#1D546C] rounded-full blur-[220px] opacity-10"></div>
                <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#1A3D64] rounded-full blur-[180px] opacity-15"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -80, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative p-2 sm:p-3 border border-[#1D546C]/30 rounded-lg overflow-hidden group">

                        <img
                            src="/Mezzanines.webp"
                            alt="HOQUE ShutterTech"
                            className="
                w-full 
                h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px]
                object-cover 
                object-center sm:object-[center_30%]
                rounded-lg 
                grayscale brightness-75 contrast-125 
                group-hover:grayscale-0 group-hover:brightness-100 
                transition-all duration-700
            "
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Top Label */}
                        <div className="absolute top-3 sm:top-6 left-3 sm:left-6 text-[8px] sm:text-[10px] font-mono text-[#4AA3C8] tracking-widest uppercase">
                            Ref: HS-772 / Tech-Spec
                        </div>

                        {/* Side Label */}
                        <div className="hidden sm:block absolute bottom-6 right-4 sm:right-6 text-[9px] sm:text-[10px] font-mono text-[#4AA3C8] tracking-widest uppercase rotate-90 origin-right">
                            System.Secure_Active
                        </div>

                    </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >

                    <div className="flex items-center gap-3 mb-2">
                        <div className="h-[1px] w-10 bg-[#1D546C]"></div>
                        <span className="text-[10px] tracking-[0.5em] uppercase text-[#1D546C] font-bold">
                            Technical Excellence
                        </span>
                    </div>

                    <h2 className="text-[30px] md:text-[45px] font-black leading-[1.05] text-[#F4F4F4] mb-4 tracking-tighter">
                        We Produce & Install Rolling
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D546C] to-[#4AA3C8]">
                            Shutters Across UAE
                        </span>
                    </h2>

                    <p className="text-[#F4F4F4]/70 text-md leading-relaxed mb-2 max-w-xl font-light">
                        Hoque Technical is a leading supplier and installer of automatic rolling shutters and sunshade solutions in Dubai, UAE. With over a decade of experience serving residential, commercial, and industrial clients, we deliver premium quality with fast turnaround.
                    </p>

                    <p className="text-[#F4F4F4]/60 text-lg leading-relaxed max-w-xl font-light mb-2">
                        We work with the UAE's top construction companies, retail chains, and property developers — delivering shutter systems built to withstand the harsh UAE climate.
                    </p>

                    <ul className="space-y-1 text-[#F4F4F4]/70 text-md md:text-md mb-8">
                        <li className="flex items-start gap-3">
                            <span className="text-[#1D546C] font-bold">✓</span>
                            Free site visit within 1 hour anywhere in Dubai
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-[#1D546C] font-bold">✓</span>
                            10-year warranty on all installations
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-[#1D546C] font-bold">✓</span>
                            Premium motors: BFT, CAME, FAAC, NICE, BENINCA
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-[#1D546C] font-bold">✓</span>
                            Custom sizes & RAL powder coat colours
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="text-[#1D546C] font-bold">✓</span>
                            24/7 emergency repair service across UAE
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="flex gap-6 flex-wrap">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/services"
                            className="px-8 py-4 bg-[#1D546C] hover:bg-[#256a88] text-white font-bold uppercase text-[11px] tracking-[0.25em] transition-all"
                        >
                            Our Services
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/contact"
                            className="px-8 py-4 border border-[#F4F4F4]/20 hover:border-[#1D546C] text-[#F4F4F4] font-bold uppercase text-[11px] tracking-[0.25em] transition-all"
                        >
                            Contact Us
                        </motion.a>
                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default AboutSection;
