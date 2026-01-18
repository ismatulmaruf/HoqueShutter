import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      {/* Call Button - Bottom Left */}
      <a
        href="tel:+971564787683"
        className="fixed bottom-6 left-6 z-[999] group"
      >
        <div className="w-14 h-14 rounded-full bg-[#1D546C] flex items-center justify-center shadow-lg shadow-[#1D546C]/40 hover:scale-110 transition-all duration-300 animate-pulse">
          <FaPhoneAlt className="text-white text-xl" />
        </div>
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a
        href="https://wa.me/971564787683"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[999] group"
      >
        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-all duration-300 animate-pulse">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </a>
    </>
  );
};

export default FloatingButtons;
