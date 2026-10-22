// import React from "react";
// import { motion } from "framer-motion";
// import { Settings, Wrench, Zap, LayoutGrid, Sun, Shield } from "lucide-react";

// const services = [
//     {
//         icon: <Shield size={36} />,
//         title: "Rolling Shutters",
//         desc: "Automatic and manual rolling shutters for shops, warehouses and industrial security."
//     },
//     {
//         icon: <Sun size={36} />,
//         title: "Sunshade Parda",
//         desc: "Outdoor sunshade, parda curtain installation, motorized and manual systems."
//     },
//     {
//         icon: <LayoutGrid size={36} />,
//         title: "Mezzanine Floor",
//         desc: "Strong steel mezzanine floors for warehouses, showrooms and storage optimization."
//     },
//     {
//         icon: <Settings size={36} />,
//         title: "Round Stairs",
//         desc: "Custom round and spiral stair fabrication with modern steel and aluminum finishing."
//     },
//     {
//         icon: <Wrench size={36} />,
//         title: "Aluminium Door",
//         desc: "Premium aluminum doors, sliding systems, glass aluminum frames and fittings."
//     },
//     {
//         icon: <Shield size={36} />,
//         title: "Steel Gate",
//         desc: "Heavy duty steel gates for villas, factories and commercial buildings."
//     },
//     {
//         icon: <Zap size={36} />,
//         title: "Motor Shutter",
//         desc: "Remote controlled motorized shutter installation, repair and automation systems."
//     },
//     {
//         icon: <LayoutGrid size={36} />,
//         title: "Carpentry & Glass",
//         desc: "Furniture, partitions, wardrobes, glass fixing and mirror installation services."
//     },
//     {
//         icon: <Zap size={36} />,
//         title: "Electrical & Technical",
//         desc: "Complete electrical wiring, automation, troubleshooting and safety systems."
//     }
// ];


// const ServicesSection = () => {
//     return (
//         <section className="relative w-full bg-[#070F15] py-32 overflow-hidden font-[Poppins]">

//             {/* Background */}
//             <div className="absolute inset-0">
//                 <div className="absolute h-full w-full bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:80px_80px]" />
//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#1D546C] blur-[250px] opacity-10 rounded-full" />
//             </div>

//             <div className="relative z-10 container mx-auto px-6 lg:px-20">

//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-24"
//                 >
//                     <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
//                         Our Expertise
//                     </p>
//                     <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
//                         CORE SERVICES
//                     </h2>
//                     <p className="text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
//                         Professional shutter, sunshade, door and technical solutions trusted across the UAE.
//                     </p>
//                 </motion.div>

//                 {/* Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

//                     {services.map((service, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: i * 0.15, duration: 0.8 }}
//                             viewport={{ once: true }}
//                             whileHover={{ y: -10 }}
//                             className="group relative border border-[#1D546C]/30 bg-[#1D546C]/5 p-10 transition-all hover:border-[#4AA3C8] hover:shadow-[0_0_40px_rgba(74,163,200,0.15)]"
//                         >
//                             <div className="text-[#4AA3C8] mb-6 group-hover:scale-110 transition-transform">
//                                 {service.icon}
//                             </div>

//                             <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
//                                 {service.title}
//                             </h3>

//                             <p className="text-white/60 text-sm leading-relaxed">
//                                 {service.desc}
//                             </p>

//                             {/* Glow line */}
//                             <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#4AA3C8] to-transparent group-hover:w-full transition-all duration-700"></div>
//                         </motion.div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default ServicesSection;



import React from "react";
import { motion } from "framer-motion";
import {
    FaShieldAlt,
    FaSun,
    FaTools,
    FaCogs,
    FaWarehouse,
    FaDoorOpen,
    FaLayerGroup,
    FaBolt,
    FaWrench
} from "react-icons/fa";

const services = [
    {
        icon: <FaShieldAlt size={30} />,
        title: "Automatic Rolling Shutters Dubai",
        desc: "Motorized rolling shutters for shops, malls & commercial buildings. Remote & smartphone-controlled with premium European motors."
    },
    {
        icon: <FaBolt size={30} />,
        title: "GI Rolling Shutters UAE",
        desc: "Galvanized iron rolling shutters — strong, durable and cost-effective. Ideal for warehouses, factories and loading bays across UAE."
    },
    {
        icon: <FaDoorOpen size={30} />,
        title: "Garage Doors Dubai",
        desc: "Automatic garage doors for villas and apartments. Elegant, whisper-quiet operation with custom sizing for your property."
    },
    {
        icon: <FaSun size={30} />,
        title: "Sunshade Solutions Dubai",
        desc: "Motorized sunshades and retractable awnings for outdoor spaces, patios, pools and pergolas. Beat the UAE heat in style."
    },
    {
        icon: <FaWarehouse size={30} />,
        title: "Industrial Shutters UAE",
        desc: "Heavy-duty high-speed industrial shutters for factories, logistics hubs and large commercial openings. Built for UAE climate."
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: "Polycarbonate Shutters UAE",
        desc: "Transparent polycarbonate shutters — security without blocking visibility. Perfect for storefronts and showrooms in Dubai."
    },
    {
        icon: <FaLayerGroup size={30} />,
        title: "Window Rolling Shutters UAE",
        desc: "Space-saving window shutters providing security, insulation and privacy for homes and commercial buildings across UAE."
    },
    {
        icon: <FaTools size={30} />,
        title: "Car Park Shades Dubai",
        desc: "Custom cantilever and sail shade structures for parking lots, schools and residential complexes across UAE."
    },
    {
        icon: <FaCogs size={30} />,
        title: "AMC Maintenance Contracts UAE",
        desc: "Annual maintenance contracts for commercial & residential shutters. Scheduled servicing keeps shutters running all year."
    },
    {
        icon: <FaWrench size={30} />,
        title: "Rolling Shutter Repair Dubai",
        desc: "Same-day shutter repair across Dubai & UAE. Motor replacement, spring repair, remote issues — all brands serviced 24/7."
    }
];

const ServicesSection = () => {
    return (
        <section className="relative w-full bg-[#070F15] py-28 overflow-hidden font-[Poppins]">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute w-full h-full bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:80px_80px]" />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#1D546C] blur-[200px] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-[#4AA3C8] uppercase tracking-[0.4em] text-xs font-semibold mb-3">
                        Our Expertise
                    </p>

                    <h2 className="text-white text-4xl md:text-5xl font-extrabold">
                        CORE SERVICES
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto mt-5 text-sm md:text-base">
                        High-quality shutter, sunshade, and technical solutions trusted across UAE industries.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 border border-[#1D546C]/30 bg-[#1D546C]/5 backdrop-blur-md hover:border-[#4AA3C8] hover:shadow-[0_0_35px_rgba(74,163,200,0.2)] transition-all duration-300 rounded-2xl"
                        >

                            {/* Icon */}
                            <div className="text-[#4AA3C8] mb-5 group-hover:scale-110 transition">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-semibold text-lg mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 text-sm leading-relaxed">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <div className="mt-6 text-[#4AA3C8] text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                                Learn More →
                            </div>

                            {/* Glow line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#4AA3C8] to-transparent group-hover:w-full transition-all duration-500"></div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;