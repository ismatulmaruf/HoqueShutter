import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sun, Settings } from "lucide-react";

const ServiceHighlight = () => {
  return (
    <section className="relative w-full bg-[#070F15] py-28 overflow-hidden font-[Poppins]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4AA3C8] blur-[220px] opacity-10 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            Our Core Expertise
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Rolling Shutter & Sunshade Solutions
          </h2>
          <p className="text-white/60 leading-relaxed">
            We deliver advanced rolling shutter and sunshade parda systems that
            combine security, durability and modern architectural elegance.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-3xl font-bold mb-6">
              Premium Rolling Shutter Installation
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              Our rolling shutter systems are engineered for maximum protection,
              smooth operation and long-lasting performance. We design and
              install manual and motorized shutters for warehouses, shops,
              villas, factories and commercial properties across the UAE.
            </p>

            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[#4AA3C8]" />
                Anti-theft & high-security materials
              </li>
              <li className="flex items-center gap-3">
                <Settings size={18} className="text-[#4AA3C8]" />
                Motorized automation with remote control
              </li>
              <li className="flex items-center gap-3">
                <Sun size={18} className="text-[#4AA3C8]" />
                Weather-resistant coating for UAE climate
              </li>
            </ul>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#081C2F] border border-[#1D546C]/30 p-10"
          >
            <h3 className="text-white text-3xl font-bold mb-6">
              Elegant Sunshade Parda Systems
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              Our sunshade parda solutions provide superior sun protection while
              enhancing the aesthetic appeal of outdoor and indoor spaces. We
              offer fixed, retractable and motorized sunshade systems designed
              for villas, balconies, gardens, cafes and commercial buildings.
            </p>

            <ul className="space-y-4 text-white/70">
              <li>✔ UV and heat protection</li>
              <li>✔ Stylish modern fabric designs</li>
              <li>✔ Smooth motorized and manual options</li>
              <li>✔ Long-lasting outdoor durability</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ServiceHighlight;
