import React from "react";
import { motion } from "framer-motion";
import { Settings, Wrench, Zap, LayoutGrid, Sun, Shield } from "lucide-react";

const services = [
    {
        icon: <Shield size={36} />,
        title: "Rolling Shutters",
        desc: "Automatic and manual rolling shutters for shops, warehouses and industrial security."
    },
    {
        icon: <Sun size={36} />,
        title: "Sunshade Parda",
        desc: "Outdoor sunshade, parda curtain installation, motorized and manual systems."
    },
    {
        icon: <LayoutGrid size={36} />,
        title: "Mezzanine Floor",
        desc: "Strong steel mezzanine floors for warehouses, showrooms and storage optimization."
    },
    {
        icon: <Settings size={36} />,
        title: "Round Stairs",
        desc: "Custom round and spiral stair fabrication with modern steel and aluminum finishing."
    },
    {
        icon: <Wrench size={36} />,
        title: "Aluminium Door",
        desc: "Premium aluminum doors, sliding systems, glass aluminum frames and fittings."
    },
    {
        icon: <Shield size={36} />,
        title: "Steel Gate",
        desc: "Heavy duty steel gates for villas, factories and commercial buildings."
    },
    {
        icon: <Zap size={36} />,
        title: "Motor Shutter",
        desc: "Remote controlled motorized shutter installation, repair and automation systems."
    },
    {
        icon: <LayoutGrid size={36} />,
        title: "Carpentry & Glass",
        desc: "Furniture, partitions, wardrobes, glass fixing and mirror installation services."
    },
    {
        icon: <Zap size={36} />,
        title: "Electrical & Technical",
        desc: "Complete electrical wiring, automation, troubleshooting and safety systems."
    }
];


const ServicesSection = () => {
    return (
        <section className="relative w-full bg-[#070F15] py-32 overflow-hidden font-[Poppins]">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#1D546C] blur-[250px] opacity-10 rounded-full" />
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
                        Professional shutter, sunshade, door and technical solutions trusted across the UAE.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]"
                        >
                            <div className="text-[#4AA3C8] mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>

                            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
                                {service.title}
                            </h3>

                            <p className="text-white/60 text-sm leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Glow line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4AA3C8] to-transparent group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
