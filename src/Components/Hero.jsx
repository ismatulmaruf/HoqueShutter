import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Settings, Sun } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#070F15] overflow-hidden font-[Poppins]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C15_1px,transparent_1px),linear-gradient(to_bottom,#1D546C15_1px,transparent_1px)] bg-[size:45px_45px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,163,200,0.12)_0%,transparent_65%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-[#4AA3C8]/40 bg-[#4AA3C8]/10"
          >
            <span className="w-2 h-2 bg-[#4AA3C8] animate-ping"></span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-semibold">
              Hoque Shuttertech • Since 2022
            </span>
          </motion.div>

          <h1 className="text-[48px] md:text-[72px] lg:text-[90px] font-extrabold leading-[0.9] tracking-tight text-white mb-8">
            SMART SECURITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA3C8] via-[#1D546C] to-[#4AA3C8] animate-gradientMove">
              SHADING SOLUTIONS
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Premium <span className="text-white font-semibold">automatic rolling shutters</span> and
            <span className="text-white font-semibold"> sunshade systems</span> engineered for protection, elegance, and performance.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[ShieldCheck, Sun, Settings].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-3 text-white/60 hover:text-[#4AA3C8] transition"
              >
                <Icon size={18} />
                <span className="text-xs uppercase tracking-widest font-semibold">
                  {["Security Shutters", "Luxury Sunshades", "Expert Maintenance"][i]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="px-9 py-4 bg-gradient-to-r from-[#1D546C] to-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em] flex items-center gap-3 shadow-lg"
            >
              Our Services <ArrowRight size={16} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-9 py-4 border border-white/20 hover:border-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em]"
            >
              Get a Quote
            </motion.a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/5 relative"
        >

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative z-10 p-2 bg-gradient-to-b from-[#4AA3C8] to-transparent"
          >
            <div className="overflow-hidden bg-[#081C2F]">
              <motion.img
                whileHover={{ scale: 1.08 }}
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Property"
                className="w-full h-auto object-cover opacity-90 grayscale-[25%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 -right-6 bg-white p-6 shadow-2xl z-index-100"
          >
            <p className="text-[#0C2B4E] font-black text-4xl">100%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1D546C] mt-1">
              Custom Precision
            </p>
          </motion.div>

        </motion.div>

      </div>

      {/* GRADIENT ANIMATION */}
      <style>
        {`
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 4s linear infinite;
        }
        @keyframes gradientMove {
          0% {background-position:0% 50%;}
          100% {background-position:100% 50%;}
        }
        `}
      </style>

    </section>
  );
};

export default HeroSection;
