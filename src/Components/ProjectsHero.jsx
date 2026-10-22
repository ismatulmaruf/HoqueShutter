import React from "react";
import { motion } from "framer-motion";

const ProjectsHero = () => {
    return (
        <section className="relative w-full min-h-[75vh] flex items-center bg-[#070F15] overflow-hidden font-[Poppins]">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:70px_70px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,163,200,0.18)_0%,transparent_60%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20 text-center">

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 mb-6 px-4 mt-6 py-1 border border-[#4AA3C8]/40 bg-[#4AA3C8]/10"
                >
                    <span className="w-2 h-2 bg-[#4AA3C8] animate-pulse"></span>
                    <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-semibold">
                        Our Project Showcase
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-[42px] md:text-[64px] lg:text-[78px] font-extrabold leading-[1] tracking-tight text-white mb-8"
                >
                    Our Latest <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA3C8] via-[#1D546C] to-[#4AA3C8]">
                        Completed Works
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                >
                    Explore our portfolio of premium rolling shutter installations,
                    sunshade systems, garage doors, steel fabrication, and automation
                    projects delivered across UAE for residential, commercial, and industrial clients.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-white"
                >
                    <div className="border border-[#1D546C]/30 p-5 bg-[#1D546C]/5">
                        <h3 className="text-3xl font-bold text-[#4AA3C8]">150+</h3>
                        <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                            Projects Completed
                        </p>
                    </div>

                    <div className="border border-[#1D546C]/30 p-5 bg-[#1D546C]/5">
                        <h3 className="text-3xl font-bold text-[#4AA3C8]">100%</h3>
                        <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                            Client Satisfaction
                        </p>
                    </div>

                    <div className="border border-[#1D546C]/30 p-5 bg-[#1D546C]/5">
                        <h3 className="text-3xl font-bold text-[#4AA3C8]">24/7</h3>
                        <p className="text-xs uppercase tracking-widest text-white/60 mt-2">
                            Support & Service
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsHero;