import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
    const cards = [
        {
            title: "Call Us",
            desc: "Direct Support Line",
            value: "+971 56 478 7683",
            link: "tel:+971564787683",
            icon: <FaPhoneAlt size={22} />,
        },
        {
            title: "Email Us",
            desc: "Business Inquiries",
            value: "arifulislamncc@yahoo.com",
            link: "mailto:arifulislamncc@yahoo.com",
            icon: <FaEnvelope size={22} />,
        },
        {
            title: "Facebook",
            desc: "Follow Our Work",
            value: "Visit Page",
            link: "https://www.facebook.com/profile.php?id=100089096073872",
            icon: <FaFacebookF size={22} />,
        },
    ];

    return (
        <section className="relative w-full py-32 bg-[#070F15] overflow-hidden">

            {/* PREMIUM BACKGROUND */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,163,200,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px),linear-gradient(to_bottom,#1D546C10_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Contact <span className="text-[#4AA3C8]">Us</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-white/60 max-w-xl mx-auto text-lg mb-20"
                >
                    Professional electromechanical solutions with trusted communication support.
                </motion.p>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {cards.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.link}
                            target={i === 2 ? "_blank" : "_self"}
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="group block p-12 rounded-2xl border border-[#1D546C]/40 bg-[#0C2B4E]/30 backdrop-blur-xl hover:border-[#4AA3C8] transition-all duration-500 shadow-xl"
                        >
                            {/* ICON */}
                            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#4AA3C8]/40 text-[#4AA3C8] group-hover:bg-[#4AA3C8] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>

                            <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-2">
                                {item.title}
                            </h4>

                            <p className="text-white/50 text-sm mb-4">{item.desc}</p>

                            <p className="text-[#4AA3C8] font-bold text-lg break-all">
                                {item.value}
                            </p>
                        </motion.a>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
