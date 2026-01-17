import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../src/Components/Loading";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// --- ICON COMPONENT ---
const Icon = ({ type, className = "w-6 h-6" }) => {
  const ACCENT_GOLD = "#D4AF37";
  const PRIMARY_TEAL = "#006973";

  const icons = {
    Hijama: "⚕",
    Pain: "✨",
    Beauty: "💄",
    Unani: "🌿",
    HydraFacial: "💧",
    Detox: "✓",
    PainRelief: "✓",
    Circulation: "✓",
    Stress: "✓",
    Immune: "✓",
    Caution: "⚠",
  };

  return icons[type] ? (
    <span
      className={`text-2xl ${className}`}
      style={{ color: type === "Caution" ? PRIMARY_TEAL : ACCENT_GOLD }}
    >
      {icons[type]}
    </span>
  ) : null;
};

// --- SERVICES PAGE COMPONENT ---
const Services = () => {
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);

  const PRIMARY_TEAL = "#006973";
  const ACCENT_GOLD = "#D4AF37";
  const TEXT_DARK = "#333333";
  const LIGHT_GREY = "#E5E5E5";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/services`);
        if (res.data.success) {
          setServicesData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  if (!servicesData)
    return (
      <Layout>
        <div className="py-20 text-center text-lg text-red-600">
          Failed to load service data.
        </div>
      </Layout>
    );

  // --- Destructure backend data ---
  const {
    hero,
    sectionHeadings,
    serviceCards,
    methodSteps,
    benefitsList1,
    benefitsList2,
    cautionNote,
    ctaSection,
  } = servicesData;

  return (
    <Layout>
      {/* 1️⃣ HERO SECTION */}
      <div
        className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.image}')`,
          backgroundColor: PRIMARY_TEAL,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${PRIMARY_TEAL}c0, ${PRIMARY_TEAL}f0)`,
          }}
        ></div>

        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-white"
            style={{
              fontFamily: `'Cairo', sans-serif`,
              textShadow: `2px 2px 4px rgba(0,0,0,0.5)`,
              direction: "rtl",
            }}
          >
            {hero.title}
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-cormorant text-white">
            {hero.subtitle}
          </p>
          <div
            className="w-20 h-1 mt-6 mx-auto"
            style={{ backgroundColor: ACCENT_GOLD }}
          ></div>
        </div>
      </div>

      {/* 2️⃣ SERVICE CARDS */}
      <section className="py-16 md:py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-cormorant font-bold mb-12 text-center"
            style={{ color: PRIMARY_TEAL }}
          >
            {sectionHeadings.services}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <div
                key={card._id}
                className="border rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white flex flex-col justify-between"
                style={{ borderColor: LIGHT_GREY }}
              >
                <div className="p-6">
                  <Icon type={card.icon} className="h-10 w-10 mb-4" />
                  <h3
                    className="font-cormorant text-3xl font-bold mb-3"
                    style={{ color: PRIMARY_TEAL }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-lg" style={{ color: TEXT_DARK }}>
                    {card.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={card.link}
                    className="inline-flex items-center text-md font-cormorant font-semibold uppercase tracking-wider"
                    style={{ color: ACCENT_GOLD }}
                  >
                    Details →
                  </a>
                </div>
              </div>
            ))}

            {/* CTA CARD */}
            <div
              className="border rounded-xl shadow-xl flex flex-col justify-center items-center p-8 text-center transition duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: PRIMARY_TEAL,
                borderColor: ACCENT_GOLD,
              }}
            >
              <h3
                className="font-cormorant text-4xl font-bold mb-3"
                style={{ color: ACCENT_GOLD }}
              >
                {ctaSection.title}
              </h3>
              <p
                className="text-lg text-white mb-6"
                style={{
                  direction: "rtl",
                  textShadow: `1px 1px 3px rgba(0,0,0,0.5)`,
                }}
              >
                {ctaSection.description}
              </p>

              <Link
                to={ctaSection.buttonLink}
                className="w-full inline-flex justify-center py-3 px-6 rounded-lg uppercase font-cormorant font-semibold shadow-md transition duration-300"
                style={{ backgroundColor: ACCENT_GOLD, color: TEXT_DARK }}
              >
                {ctaSection.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ METHOD SECTION */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: LIGHT_GREY }}
        id="method"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-cormorant font-bold mb-12 text-center"
            style={{ color: PRIMARY_TEAL }}
          >
            {sectionHeadings.method}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {methodSteps.map((step) => (
              <div
                key={step._id}
                className="p-6 rounded-xl shadow-md transition duration-300"
                style={{
                  backgroundColor: step.isCaution
                    ? `${ACCENT_GOLD}30`
                    : "white",
                  borderTop: `4px solid ${
                    step.isCaution ? ACCENT_GOLD : PRIMARY_TEAL
                  }`,
                }}
              >
                <h4
                  className="font-cormorant text-2xl font-bold mb-2"
                  style={{ color: PRIMARY_TEAL }}
                >
                  {step.step}
                </h4>
                <p
                  className="text-md font-semibold mb-2"
                  style={{ color: TEXT_DARK }}
                >
                  {step.detail}
                </p>
                <p
                  className="text-sm italic"
                  style={{ color: `${TEXT_DARK}b3` }}
                >
                  {step.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ BENEFITS SECTION */}
      <section className="py-16 md:py-24 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-cormorant font-bold mb-12 text-center"
            style={{ color: PRIMARY_TEAL, direction: "rtl" }}
          >
            {sectionHeadings.benefits}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6 text-lg">
              <p
                className="font-cormorant text-2xl italic"
                style={{ color: `${TEXT_DARK}e6` }}
              >
                نساعد في إطلاق العنان لقدرات الجسم الطبيعية على الشفاء، ونقدم
                مجموعة واسعة من الفوائد الشاملة الموثقة من خلال الممارسة
                التقليدية
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mt-6">
                <ul className="space-y-4">
                  {benefitsList1.map((benefit) => (
                    <li key={benefit._id} className="flex items-start">
                      <Icon type={benefit.icon} className="mr-3 mt-1 w-5 h-5" />
                      <p style={{ color: TEXT_DARK }}>{benefit.text}</p>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-4">
                  {benefitsList2.map((benefit) => (
                    <li key={benefit._id} className="flex items-start">
                      <Icon type={benefit.icon} className="mr-3 mt-1 w-5 h-5" />
                      <p style={{ color: TEXT_DARK }}>{benefit.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Caution Note */}
            <div
              className="lg:col-span-1 p-8 rounded-xl shadow-xl border"
              style={{
                backgroundColor: `${PRIMARY_TEAL}10`,
                borderColor: PRIMARY_TEAL,
              }}
            >
              <h3
                className="font-cormorant text-3xl font-bold mb-4 flex items-center"
                style={{ color: PRIMARY_TEAL }}
              >
                <Icon type="Caution" className="mr-3 mt-1 w-7 h-7" />
                {cautionNote.title}
              </h3>
              <ul
                className="list-disc list-inside space-y-3 text-md ml-4"
                style={{ color: TEXT_DARK }}
              >
                {cautionNote.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
