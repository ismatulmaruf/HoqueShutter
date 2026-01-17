import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = () => {
    const cardAnim = {
        hidden: { opacity: 0, y: 60 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
        }),
    };

    return (
        <section className="relative w-full py-28 bg-[#0A161E] overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#1D546C] rounded-full blur-[200px] opacity-10"></div>
                <div className="absolute bottom-[-120px] left-[-120px] w-[380px] h-[380px] bg-[#1A3D64] rounded-full blur-[180px] opacity-12"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C08_1px,transparent_1px),linear-gradient(to_bottom,#1D546C08_1px,transparent_1px)] bg-[size:90px_90px]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-16 text-center">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[42px] md:text-[60px] font-black tracking-tighter text-[#F4F4F4] mb-6"
                >
                    Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D546C] to-[#4AA3C8]">Connect</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-[#F4F4F4]/60 max-w-xl mx-auto text-lg mb-20"
                >
                    Whether you need security solutions, maintenance, or expert technical support — our team is ready to assist you.
                </motion.p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Phone */}
                    <motion.div
                        custom={0}
                        variants={cardAnim}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group border border-[#1D546C]/30 p-12 rounded-xl hover:border-[#1D546C] transition-all duration-500 bg-[#0C2B4E]/40 backdrop-blur-md"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#1D546C]/40 group-hover:bg-[#1D546C] transition-all">
                            <FaPhoneAlt className="text-[#F4F4F4]" size={22} />
                        </div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">
                            Call Us
                        </h4>
                        <p className="text-[#F4F4F4]/60 text-sm mb-3">Direct Support Line</p>
                        <a href="tel:+971564787683" className="text-[#1D546C] font-bold text-lg">
                            +971 56 478 7683
                        </a>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        custom={1}
                        variants={cardAnim}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group border border-[#1D546C]/30 p-12 rounded-xl hover:border-[#1D546C] transition-all duration-500 bg-[#0C2B4E]/40 backdrop-blur-md"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#1D546C]/40 group-hover:bg-[#1D546C] transition-all">
                            <FaEnvelope className="text-[#F4F4F4]" size={22} />
                        </div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">
                            Email Us
                        </h4>
                        <p className="text-[#F4F4F4]/60 text-sm mb-3">Business Inquiries</p>
                        <a href="mailto:arifulislamncc@yahoo.com" className="text-[#1D546C] font-bold text-lg break-all">
                            arifulislamncc@yahoo.com
                        </a>
                    </motion.div>

                    {/* Facebook */}
                    <motion.div
                        custom={2}
                        variants={cardAnim}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="group border border-[#1D546C]/30 p-12 rounded-xl hover:border-[#1D546C] transition-all duration-500 bg-[#0C2B4E]/40 backdrop-blur-md"
                    >
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#1D546C]/40 group-hover:bg-[#1D546C] transition-all">
                            <FaFacebookF className="text-[#F4F4F4]" size={22} />
                        </div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">
                            Facebook
                        </h4>
                        <p className="text-[#F4F4F4]/60 text-sm mb-3">Follow Our Work</p>
                        <a
                            href="https://www.facebook.com/profile.php?id=100089096073872"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#1D546C] font-bold text-lg"
                        >
                            Visit Page
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
