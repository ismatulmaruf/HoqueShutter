import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Settings, Sun, DoorOpen } from "lucide-react";

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
              Hamad Maintenance • UAE
            </span>
          </motion.div>

          <h1 className="text-[48px] md:text-[72px] lg:text-[88px] font-extrabold leading-[0.9] tracking-tight text-white mb-8">
            ROLLING SHUTTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA3C8] via-[#1D546C] to-[#4AA3C8] animate-gradientMove">
              & SUNSHADE EXPERTS
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Professional <span className="text-white font-semibold">rolling shutter, motor shutter, sunshade parda, aluminium door, steel gate</span> and complete technical solutions for villas, shops and industrial projects across UAE.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { text: "Rolling & Motor Shutters", icon: ShieldCheck },
              { text: "Sunshade & Parda Works", icon: Sun },
              { text: "All Kind of Door Services", icon: DoorOpen }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="flex items-center gap-3 text-white/60 hover:text-[#4AA3C8] transition"
                >
                  <Icon size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
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
              Contact Now
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

          {/* Glow behind */}
          <div className="absolute inset-0 bg-[#4AA3C8]/20 blur-[120px] rounded-full"></div>

          {/* Image Frame */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative z-10 p-[2px] bg-gradient-to-br from-[#4AA3C8] via-[#1D546C] to-transparent rounded-xl"
          >
            <div className="relative overflow-hidden rounded-xl bg-[#081C2F]">

              {/* Light sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 animate-shine"></div>

              <motion.img
                whileHover={{ scale: 1.08 }}
                src="https://i.imgur.com/buC4WVs.jpeg"
                alt="Modern Property"
                className="w-full h-[520px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-10 -right-6 bg-white px-6 py-4 shadow-2xl rounded-md z-20"
          >
            <p className="text-[#0C2B4E] font-black text-4xl leading-none">100%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1D546C] mt-1">
              Precision Work
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
          .animate-shine {
  background-size: 200% 200%;
  animation: shine 6s linear infinite;
}

@keyframes shine {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}

        `}
      </style>

    </section>
  );
};

export default HeroSection;
