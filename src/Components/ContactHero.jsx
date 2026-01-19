import React from "react";
import { motion } from "framer-motion";

const BusinessIdentitySection = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden font-[Poppins]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{
          backgroundImage:
            "url('https://i.imgur.com/buC4WVs.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#070F15]/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">

        {/* Arabic Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#4AA3C8] text-lg md:text-xl font-medium mb-4"
        >
          شركة عساف حمد محمد لاعمال تركيب المعدات الكهروميكانيكية وصيانتها
        </motion.p>

        {/* English Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-bold leading-snug"
        >
          Asaf Hamad Mohamed <br />
          <span className="text-[#4AA3C8]">
            Electromechanical Installation & Maintenance
          </span>
        </motion.h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#4AA3C8] mx-auto my-8 rounded-full"></div>

        {/* Person */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/80 text-lg"
        >
          Managing Contact: <span className="text-white font-semibold">Md Arif</span>
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/50 text-sm mt-2 tracking-widest uppercase"
        >
          Sharjah, United Arab Emirates
        </motion.p>

      </div>
    </section>
  );
};

export default BusinessIdentitySection;
