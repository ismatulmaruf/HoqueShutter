import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    q: "What types of automatic rolling shutters do you supply in Dubai?",
    a: "We supply aluminium rolling shutters, GI galvanized steel shutters, polycarbonate transparent shutters, perforated shutters, insulated double-skin shutters, and high-speed industrial shutters across UAE.",
  },
  {
    q: "How much does a rolling shutter cost in UAE?",
    a: "Prices depend on size, material, and motor type. We offer a free site visit within 1 hour anywhere in Dubai.",
  },
  {
    q: "Do you offer repair services?",
    a: "Yes — same-day repair across UAE. We service all major brands including BFT, CAME, FAAC, NICE, and BENINCA.",
  },
  {
    q: "How long does installation take?",
    a: "Most installations are completed within one working day.",
  },
  {
    q: "Do you provide sunshade solutions?",
    a: "Yes — motorized sunshades, awnings, pergola shading and car park shades across UAE.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="relative w-full py-28 overflow-hidden bg-[#0A161E] text-white">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C08_1px,transparent_1px),linear-gradient(to_bottom,#1D546C08_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="absolute top-[-120px] right-[-150px] w-[500px] h-[500px] bg-[#1D546C] rounded-full blur-[220px] opacity-10"></div>
        <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#1A3D64] rounded-full blur-[180px] opacity-15"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-10 bg-[#1D546C]"></div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#1D546C] font-bold">
              FAQ SYSTEM
            </span>
          </div>

          <h2 className="text-[30px] md:text-[50px] font-black leading-[1.05] text-[#F4F4F4] tracking-tighter">
            Common Questions About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D546C] to-[#4AA3C8]">
              Rolling Shutters UAE
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#1D546C]/30 rounded-lg overflow-hidden backdrop-blur-sm bg-[#0C2B4E]/40"
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg"
              >
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-[#1D546C]" />
                  {item.q}
                </div>

                <FaChevronDown
                  className={`transition-all duration-300 ${
                    active === i ? "rotate-180 text-[#1D546C]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === i ? "max-h-96 opacity-100 px-5 pb-5" : "max-h-0 opacity-0 px-5"
                }`}
              >
                <p className="text-[#F4F4F4]/70 leading-relaxed text-md">
                  {item.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}