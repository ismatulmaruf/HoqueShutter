import React from "react";
import { FaMapMarkerAlt, FaDirections, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const LocationSection = () => {
    return (
        <section className="relative w-full py-32 bg-[#070F15] overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(74,163,200,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-[#4AA3C8]">Location</span>
                    </h2>

                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Visit our office or find us easily with Google Maps.
                    </p>
                </motion.div>

                {/* Two Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0F2743]/90 to-[#07131D]/95 backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,.45)]"
                    >

                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-[#4AA3C8]/15 blur-3xl" />

                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#4AA3C8]/30 bg-[#4AA3C8]/10 px-4 py-2 text-sm font-semibold tracking-widest uppercase text-[#4AA3C8]">
                            <FaBuilding />
                            Head Office
                        </span>

                        <h3 className="mt-8 text-4xl font-bold text-white">
                            Visit Our Office
                        </h3>

                        <p className="mt-4 text-white/60 leading-8 text-lg">
                            Our headquarters is located in the heart of Dubai, providing
                            professional electromechanical contracting solutions throughout the UAE.
                        </p>

                        <div className="mt-10 border-l-2 border-[#4AA3C8] pl-6">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#4AA3C8]">
                                Address
                            </p>

                            <p className="mt-3 text-xl text-white leading-9">
                                Al Qusais Industrial Area<br />
                                Dubai<br />
                                United Arab Emirates
                            </p>
                        </div>

                        <div className="mt-10 flex gap-4">

                            <a
                                href="https://maps.google.com/maps?q=25.2730497,55.3101824&z=17&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-gradient-to-r from-[#4AA3C8] to-[#2B8EB8] px-8 py-4 font-semibold text-white transition hover:scale-105"
                            >
                                Get Directions
                            </a>

                            <a
                                href="tel:+971564787683"
                                className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-[#4AA3C8]"
                            >
                                Call Office
                            </a>

                        </div>

                    </motion.div>

                    {/* Map Card */}
                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#08141E] shadow-[0_20px_80px_rgba(0,0,0,.45)]">

                        <div className="absolute left-6 top-6 z-10 rounded-full bg-[#070F15]/80 px-5 py-3 backdrop-blur-xl border border-white/10">
                            <p className="text-xs uppercase tracking-[0.3em] text-[#4AA3C8]">
                                Google Maps
                            </p>
                            <h4 className="mt-1 text-white font-semibold">
                                Office Location
                            </h4>
                        </div>

                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=25.2730497,55.3101824&z=17&output=embed"
                            className="h-[600px] w-full"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default LocationSection;