import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Loading from "../Components/Loading";

// Minimal Layout component
// const Layout = ({ children }) => (
//   <div className="min-h-screen bg-white font-inter">{children}</div>
// );

// ICON PLACEHOLDERS
const Icon = ({ type, className = "w-5 h-5" }) => {
  const symbol =
    type === "Check" ? "\u2713" : type === "Star" ? "\u272D" : "\u2695";
  return (
    <span className={`mr-2 ${className}`} style={{ color: "#D4AF37" }}>
      {symbol}
    </span>
  );
};

export default function Pricing() {
  const [config, setConfig] = useState({});
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(`${API_URL}/pricing`);
        const json = await res.json();
        if (json.success && json.data) {
          setConfig(json.data.Config);
          setTiers(json.data.Tiers);
        }
      } catch (error) {
        console.error("Error fetching pricing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, [API_URL]);

  if (loading) {
    return <Loading />;
  }

  const { PRIMARY_TEAL, ACCENT_GOLD, TEXT_DARK, LIGHT_GREY, CONTACT_PHONE } =
    config;

  return (
    <Layout>
      {/* Hero Banner */}
      <div
        className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.imgur.com/0Yguf2W.jpeg')`,
          backgroundColor: PRIMARY_TEAL,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#006973]/70 to-[#006973]/90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-tight text-white tracking-wider">
            Our Pricing
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-cormorant text-white">
            الاستثمار الشفاف في صحتك ورفاهتك
          </p>
          <div
            className="w-20 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: ACCENT_GOLD }}
          ></div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: LIGHT_GREY }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-cormorant font-bold mb-16 text-center"
            style={{ color: PRIMARY_TEAL }}
          >
            Choose Your Healing Path
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-xl transition duration-300 hover:shadow-2xl flex flex-col ${
                  tier.isFeatured
                    ? "bg-white border-t-8 border-b-8"
                    : "bg-white border-t-4 border-b-4"
                }`}
                style={{
                  borderColor: tier.isFeatured ? ACCENT_GOLD : PRIMARY_TEAL,
                }}
              >
                <div className="text-center mb-6">
                  <h3
                    className="font-cormorant text-3xl font-bold mb-1"
                    style={{ color: PRIMARY_TEAL }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider"
                    style={{ color: ACCENT_GOLD }}
                  >
                    {tier.duration} Session
                  </p>
                </div>

                <div className="text-center mb-8">
                  <span
                    className="text-5xl font-extrabold font-cormorant"
                    style={{ color: TEXT_DARK }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-xl font-medium"
                    style={{ color: TEXT_DARK }}
                  >
                    {" "}
                    / session
                  </span>
                </div>

                <ul
                  className="flex-grow space-y-3 text-left mb-8"
                  style={{ color: TEXT_DARK }}
                >
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-lg">
                      <Icon type="Check" className="mt-1 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-auto w-full inline-flex justify-center py-3 px-6 shadow-md text-lg font-medium rounded-lg uppercase tracking-wider font-cormorant transition duration-300 ${
                    tier.isFeatured
                      ? "border border-[#006973]"
                      : "border border-transparent"
                  }`}
                  style={{
                    backgroundColor: tier.isFeatured
                      ? ACCENT_GOLD
                      : PRIMARY_TEAL,
                    color: tier.isFeatured ? TEXT_DARK : "white",
                  }}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-12 bg-white">
        <div
          className="max-w-4xl mx-auto text-center px-4 py-8 rounded-xl shadow-lg border-2"
          style={{ borderColor: ACCENT_GOLD }}
        >
          <h3
            className="font-cormorant text-3xl font-bold mb-3"
            style={{ color: PRIMARY_TEAL }}
          >
            Need Personalized Advice?
          </h3>
          <p className="text-lg mb-6" style={{ color: TEXT_DARK }}>
            اتصل بنا مباشرة لمناقشة خطة علاج مخصصة بناءً على متطلباتك الصحية
            الفريدة
          </p>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex items-center text-xl font-bold py-3 px-8 rounded-full transition duration-300 hover:opacity-90 text-white"
            style={{ backgroundColor: ACCENT_GOLD }}
          >
            Call Us: {CONTACT_PHONE}
          </a>
        </div>
      </section>
    </Layout>
  );
}
