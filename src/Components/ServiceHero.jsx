import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-[#070F15] overflow-hidden font-[Poppins]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,163,200,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20 text-center">

        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-4 py-1 border border-[#4AA3C8]/40 bg-[#4AA3C8]/10"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-semibold">
            Professional Service Solutions
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[44px] md:text-[64px] lg:text-[80px] font-extrabold leading-[1] tracking-tight text-white mb-8"
        >
          Rolling Shutter & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA3C8] via-[#1D546C] to-[#4AA3C8]">
            Sunshade Experts
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We deliver premium rolling shutter systems, sunshade parda solutions,
          steel gates, aluminium doors, and professional maintenance services
          across residential, commercial, and industrial projects.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-[#1D546C] to-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em] shadow-lg hover:scale-105 transition"
          >
            Get a Quote
          </a>

          <a
            href="#services"
            className="px-10 py-4 border border-white/20 hover:border-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em] transition"
          >
            View Services
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;
