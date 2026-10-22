import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Mohammad Kalam",
    role: "Business Owner",
    review:
      "Outstanding quality and professional service. The rolling shutter installation was smooth and exceeded expectations.",
  },
  {
    name: "Raheeel Borkar",
    role: "Project Manager",
    review:
      "Very reliable team. Delivered on time with excellent finishing. Highly recommended for industrial projects.",
  },
  {
    name: "Md Selim Mia",
    role: "Shop Owner",
    review:
      "Affordable pricing with premium quality. Their support team was very responsive and helpful throughout.",
  },
  {
    name: "Jino Elangooparambil",
    role: "Site Engineer",
    review:
      "Top-notch craftsmanship and attention to detail. One of the best fabrication services I’ve worked with.",
  },
];

const ReviewSection = () => {
  return (
    <section className="relative bg-[#070F15] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[#4AA3C8]/10 blur-[160px]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-extrabold">
            WHAT OUR CLIENTS SAY
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-6">
            Real feedback from our satisfied customers across UAE projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#4AA3C8]/50 transition"
            >

              {/* Quote Icon */}
              <div className="text-[#4AA3C8] text-3xl mb-4">“</div>

              {/* Review Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {item.review}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4AA3C8]/30 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-white text-sm font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-white/50 text-xs">{item.role}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#4AA3C8]/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;