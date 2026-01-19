import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppFooter = () => {

  const colors = {
    navy: "#0C2B4E",
    midBlue: "#1A3D64",
    teal: "#1D546C",
    white: "#F4F4F4",
    dark: "#0A161E",
  };

  const logo = "/logo.png";

  const API_BASE_URL =
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api/v1";
  const CONTACT_INFO_URL = `${API_BASE_URL}/contact`;

  const [contactData, setContactData] = useState({
    phone: "+971 56 478 7683",
    email: "arifulislamncc@yahoo.com",
    address: "Dubai, United Arab Emirates, Nakil Center",
    mapUrl: "#",
  });

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(CONTACT_INFO_URL);
        const result = await response.json();
        if (result.success && result.data?.contactInfo) {
          setContactData(result.data.contactInfo);
        }
      } catch (error) {
        console.error("Failed to fetch contact information:", error);
      }
    };
    fetchContactData();
  }, [CONTACT_INFO_URL]);

  const productsLinks = [
    { title: "Rolling Shutters", link: "/products" },
    { title: "Industrial Doors", link: "/products" },
    { title: "Automatic Sunshades", link: "/products" },
    { title: "Security Grilles", link: "/products" },
    { title: "Maintenance", link: "/services" },
  ];

  const quickLinks = [
    { title: "About Us", link: "/about" },
    { title: "Our Projects", link: "/projects" },
    { title: "Request Quote", link: "/contact" },
    { title: "Quality Policy", link: "/info" },
    { title: "Privacy Policy", link: "/privacy" },
  ];

  return (
    <footer
      className="w-full relative"
      style={{ backgroundColor: colors.dark }}
    >
      {/* Optional subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C08_1px,transparent_1px),linear-gradient(to_bottom,#1D546C08_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Main Footer Section */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-tighter uppercase">
                  Hamad
                </span>
                <span className="text-[10px] font-bold text-[#1D546C] tracking-[0.4em] uppercase">
                  Maintenance Co.
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#F4F4F4]/70 max-w-xs">
              Engineering high-performance security and shading solutions for residential and industrial architectural projects since 2012.
            </p>

            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-sm border border-[#1D546C]/30 flex items-center justify-center text-[#F4F4F4] hover:bg-[#1D546C] hover:border-[#1D546C] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-[#1D546C] mb-8">
              Solutions
            </h5>
            <ul className="space-y-4">
              {productsLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-sm text-[#F4F4F4]/60 hover:text-[#1D546C] hover:translate-x-1 flex items-center transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-[#1D546C] mr-3"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-[#1D546C] mb-8">
              Company
            </h5>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-sm text-[#F4F4F4]/60 hover:text-[#F4F4F4] transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-xs font-black uppercase tracking-[0.3em] text-[#1D546C] mb-8">
              Global Support
            </h5>

            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#1A3D64] rounded-sm group-hover:bg-[#1D546C] transition-colors">
                  <FaPhoneAlt size={14} className="text-[#F4F4F4]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Direct Line
                  </p>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-sm font-bold text-[#F4F4F4]"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#1A3D64] rounded-sm group-hover:bg-[#1D546C] transition-colors">
                  <FaEnvelope size={14} className="text-[#F4F4F4]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Inquiry
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-sm font-bold text-[#F4F4F4]"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1A3D64] rounded-sm">
                  <FaLocationDot size={14} className="text-[#F4F4F4]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">
                    Office
                  </p>
                  <p className="text-sm font-bold text-[#F4F4F4] leading-relaxed">
                    {contactData.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A3D64]">
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-white/40 tracking-wider">
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Hamad Maintenance </span> ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
              Designed by
            </span>
            <a
              href="https://www.facebook.com/ismatulmaruf/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-black text-[#1D546C] hover:text-white transition-all"
            >
              Maruf
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
