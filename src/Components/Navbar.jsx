import { Link, NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { Drawer } from "antd";
import Logo from "./Logo.jsx";

const navLinks = [
  { title: "Home", path: "/" },
  // { title: "Products", path: "/products" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link-ltr { position: relative; transition: letter-spacing .4s ease; }
        .nav-link-ltr:hover { letter-spacing: .35em; }

        // .nav-link-ltr::after {
        //   content:'';
        //   position:absolute;
        //   width:0;
        //   height:2px;
        //   margin-top:5px;
        //   right:0;
        //   background:#1D546C;
        //   transition:width .4s cubic-bezier(.23,1,.32,1);
        //   bottom : 0;
        // }
        .nav-link-ltr:hover::after {
          width:100%;
          left:0;
          background:#F4F4F4;
        }

        .nav-active::after {
          width:100%!important;
          background:#1D546C!important;
        }

        // .nav-active::before{
        //   content:'•';
        //   position:absolute;
        //   left:-12px;
        //   color:#1D546C;
        // }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${scrolled
            ? "bg-[#0C2B4E]/65 backdrop-blur-xl  py-3 shadow-[0_12px_35px_-12px_rgba(29,84,108,0.6)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[#1D546C] after:to-transparent"
            : "bg-transparent py-7"}`}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="group transition-all duration-500">
            <Logo className={`h-10 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-0.5 ${!scrolled ? 'brightness-0 invert' : ' brightness-0 invert'}`} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link-ltr text-[11px] uppercase tracking-[0.25em] pt-2 pb-1 transition-all duration-300
    ${isActive
                        ? "text-white font-extrabold relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#4AA3C8] after:to-[#1D546C]"
                        : "text-[#F4F4F4]/60 font-bold hover:text-[#F4F4F4]"
                      }`
                    }
                  >

                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="group relative px-8 py-3.5 border border-[#1D546C] overflow-hidden hover:border-white transition-all">
                <span className="relative z-10 flex items-center gap-3 text-[#F4F4F4] group-hover:text-[#0C2B4E] text-[10px] font-extrabold uppercase tracking-[0.2em] transition-colors">
                  Request Estimate
                  <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition" />
                </span>

                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Slide background */}
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden flex flex-col items-end gap-1.5" onClick={() => setOpen(true)}>
            <span className="h-[2px] w-8 bg-white"></span>
            <span className="h-[2px] w-5 bg-[#1D546C]"></span>
            <span className="h-[2px] w-8 bg-white"></span>
          </button>

          {/* Drawer */}
          <Drawer
            placement="right"
            open={open}
            onClose={() => setOpen(false)}
            width={320}
            closeIcon={null}
            styles={{
              body: { backgroundColor: "#0C2B4E", padding: 0 },
              mask: { backdropFilter: "blur(10px)", backgroundColor: "rgba(12,43,78,.6)" }
            }}
          >
            <div className="relative h-full text-white">

              {/* grid texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C10_1px,transparent_1px)] bg-[size:80px_80px]" />

              <div className="relative z-10 flex flex-col h-full">

                <div className="p-8 flex justify-between border-b border-white/10">
                  <span className="font-bold tracking-widest">Hamad</span>
                  <button onClick={() => setOpen(false)} className="hover:rotate-90 transition">
                    <MdClose size={24} />
                  </button>
                </div>

                <div className="flex flex-col p-10 gap-10">
                  {navLinks.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4"
                    >
                      <span className="text-[#1D546C] text-xs font-bold group-hover:scale-110 transition">
                        0{index + 1}
                      </span>
                      <span className="text-4xl font-bold uppercase tracking-tight group-hover:text-[#1D546C] group-hover:translate-x-4 transition-all">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-auto p-8 border-t border-white/10">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    <button className="w-full py-5 bg-[#1D546C] hover:bg-white hover:text-[#0C2B4E] font-bold tracking-[0.3em] uppercase transition">
                      Get In Touch
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </Drawer>

        </div>
      </header>
    </>
  );
}

export default Header;
