import { motion } from "framer-motion";
// import bg from "indoor-spiral-stairs.webp"; // your blur image

const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center overflow-hidden font-[Poppins] bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="indoor-spiral-stairs.webp"
          alt="About Background"
          className="w-full h-full object-cover scale-110 blur-[8px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070F15]/90 via-[#070F15]/80 to-[#070F15]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#4AA3C8] blur-[180px] opacity-20 rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#1D546C] blur-[180px] opacity-20 rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-6"
        >
          About Our Company
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
        >
          Building Trust Through <span className="text-[#4AA3C8]">Engineering Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/70 max-w-2xl mt-8 leading-relaxed"
        >
          HOQUE SHUTTERTECH is committed to delivering premium rolling shutter, sunshade,
          steel and aluminum solutions across the UAE with unmatched quality, precision
          and long-term reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 flex gap-6"
        >
          <button className="px-8 py-4 bg-[#4AA3C8] text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition">
            Our Services
          </button>

          <button className="px-8 py-4 border border-white/30 text-white uppercase tracking-wider text-sm hover:border-[#4AA3C8] hover:text-[#4AA3C8] transition">
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutHero;
