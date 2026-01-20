import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sun,
  LayoutGrid,
  Settings,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Shield size={28} />,
    title: "Rolling Shutters",
    desc: "Automatic and manual rolling shutters for shops, warehouses and industrial security.",
    img: "/Rolling-Shutter.jpg"
  },
  {
    icon: <Sun size={28} />,
    title: "Sunshade Parda",
    desc: "Outdoor sunshade and parda curtain installation with motorized and manual systems.",
    img: "sunshade.jpg"
  },
  {
    icon: <LayoutGrid size={28} />,
    title: "Mezzanine Floor",
    desc: "Steel mezzanine floors for warehouses, showrooms and storage optimization.",
    img: "Mezzanines.webp"
  },
  {
    icon: <Settings size={28} />,
    title: "Round Stairs",
    desc: "Custom round and spiral stair fabrication with modern steel finishing.",
    img: "indoor-spiral-stairs.webp"
  },
  {
    icon: <Wrench size={28} />,
    title: "Aluminium Door",
    desc: "Premium aluminum doors, glass frames, sliding and hinged systems.",
    img: "LogoRemoval800x800-23.webp"
  },
  {
    icon: <Shield size={28} />,
    title: "Steel Gate",
    desc: "Heavy duty steel gates for villas, factories and commercial buildings.",
    img: "metal-gate-500x500.webp"
  },
  {
    icon: <Zap size={28} />,
    title: "Motor Shutter",
    desc: "Remote controlled motorized shutter installation and automation systems.",
    img: "No-Longer-Functioning-Well.jpg"
  },
  {
    icon: <LayoutGrid size={28} />,
    title: "Carpentry & Glass",
    desc: "Furniture, wardrobes, partitions, mirrors and glass installations.",
    img: "APG-Carpentry-Construction-glass-wall-partition-04.webp"
  },
  {
    icon: <Zap size={28} />,
    title: "Electrical & Technical",
    desc: "Complete electrical wiring, automation and safety systems.",
    img: "Streamlining-Your-Standard.png"
  }
];

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#070F15] py-32 overflow-hidden font-[Poppins]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#4AA3C8] blur-[260px] opacity-10 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            Our Expertise
          </p>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            CORE SERVICES
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            Premium rolling shutter, sunshade and fabrication solutions across the UAE.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-[#0A1B2A]/60 backdrop-blur-md border border-[#1D546C]/30 overflow-hidden hover:border-[#4AA3C8] transition-all"
            >

              {/* Image */}
              <div className="h-[300px] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-center gap-3 text-[#4AA3C8] mb-4">
                  {service.icon}
                  <span className="uppercase text-xs tracking-widest font-semibold">
                    Service
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3 uppercase tracking-wide">
                  {service.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>

              </div>

              {/* Bottom glow */}
              <div className="h-[2px] w-0 bg-gradient-to-r from-[#4AA3C8] to-transparent group-hover:w-full transition-all duration-700"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
