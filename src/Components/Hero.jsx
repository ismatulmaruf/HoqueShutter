import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Sun, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/rollingshutter.webp",
  "/sun.jpg",
  "https://i.imgur.com/buC4WVs.jpeg",
  // "/Mezzanines.webp",
];

const headlines = [
  {
    title: "AUTOMATIC ROLLING",
    highlight: "SHUTTERS & REPAIR EXPERTS",
  },
  {
    title: "SUNSHADE & AWNING",
    highlight: "SOLUTIONS IN DUBAI & UAE",
  },
  {
    title: "SAME DAY SERVICE",
    highlight: "ROLLING SHUTTER & SUNSHADE",
  },
];

const HeroSection = () => {

  const [index, setIndex] = useState(0);
  const [indexHead, setIndexHead] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setAnimate(true); // fade in
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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
          transition={{ duration: 1.5 }}
          className="w-full lg:w-3/5 text-center lg:text-left"
        >

          <div className="inline-flex items-center gap-2 mb-6 mt-6 px-4 py-1 border border-[#4AA3C8]/40 bg-[#4AA3C8]/10">
            <span className="w-2 h-2 bg-[#4AA3C8] animate-ping"></span>
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-semibold">
              Hoque Technical • UAE
            </span>
          </div>

          {/* <h1 className="text-[48px] md:text-[72px] lg:text-[88px] font-extrabold leading-[0.9] tracking-tight text-white mb-8">
            ROLLING SHUTTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA3C8] via-[#1D546C] to-[#4AA3C8] animate-gradientMove">
              & SUNSHADE EXPERTS
            </span>
          </h1> */}

          <h1
            className={`text-[40px] md:text-[66px] lg:text-[80px] font-extrabold leading-[0.9] tracking-tight text-white mb-8 transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
          >
            {headlines[index].title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3D64] via-[#1D546C] to-[#0C2B4E] animate-gradientMove">
              {headlines[index].highlight}
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            {/* Professional <span className="text-white font-semibold">rolling shutter, motor shutter, sunshade parda, aluminium door, steel gate</span> and complete technical solutions for villas, shops and industrial projects across UAE. */}
            Premium motorized rolling shutters for shops, warehouses, villas & industrial properties across the UAE. Beat the UAE heat with motorized sunshades and retractable awnings — custom-made for villas, cafes & commercial spaces.


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
            <Link
              to="/services"
              className="px-9 py-4 bg-gradient-to-r from-[#1D546C] to-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em] flex items-center gap-3 shadow-lg"
            >
              Our Services <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="px-9 py-4 border border-white/20 hover:border-[#4AA3C8] text-white font-bold uppercase text-[12px] tracking-[0.25em]"
            >
              Contact Now
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-2/5 relative mt-10 lg:mt-0"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[#4AA3C8]/20 blur-[100px] rounded-full"></div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative z-10 p-[2px] bg-gradient-to-br from-[#4AA3C8] via-[#1D546C] to-transparent rounded-xl"
          >
            {/* ✅ RESPONSIVE CONTAINER */}
            <div className="relative overflow-hidden rounded-xl bg-[#081C2F] 
                    h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]">

              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 animate-shine z-10"></div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 w-full h-full object-cover 
                     object-center sm:object-center 
                     transition-all duration-700"
                />
              </AnimatePresence>

            </div>
          </motion.div>

          {/* ✅ RESPONSIVE BADGE */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-[-20px] right-2 sm:right-4 md:-right-6 
               bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-xl rounded-md z-20"
          >
            <p className="text-[#0C2B4E] font-black text-2xl sm:text-3xl md:text-4xl leading-none">
              100%
            </p>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-[#1D546C] mt-1">
              Precision Work
            </p>
          </motion.div>

        </motion.div>

      </div>

      {/* ANIMATIONS */}
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
