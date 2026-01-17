import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

// Brand Colors
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

// ICON PLACEHOLDERS
const Icon = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case "Question":
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x2753;
        </span>
      ); // Question Mark
    case "Rule":
      return (
        <span
          className={`text-3xl ${className}`}
          style={{ color: PRIMARY_TEAL }}
        >
          &#x2705;
        </span>
      ); // Checkmark
    case "Info":
      return (
        <span
          className={`text-3xl ${className}`}
          style={{ color: PRIMARY_TEAL }}
        >
          &#x2139;
        </span>
      ); // Info symbol
    default:
      return null;
  }
};

export default function Info() {
  return (
    <Layout>
      {/* --- 1. Hero Banner: Info / FAQ --- */}
      <div
        className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.imgur.com/INxG7GM.jpeg')`,
          backgroundColor: PRIMARY_TEAL,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#006973]/70 to-[#006973]/90"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-tight text-white tracking-wider">
            Clinic Info & FAQs
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-cormorant text-white">
            Your guide to Hijama, preparation, and our clinic policies.
          </p>
          <div
            className="w-20 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: ACCENT_GOLD }}
          ></div>
        </div>
      </div>

      {/* --- 2. Hijama Explanation Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Icon type="Question" className="mx-auto mb-4 h-12 w-12" />
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold"
              style={{ color: PRIMARY_TEAL }}
            >
              What is Hijama Cupping Therapy?
            </h2>
            <div
              className="w-16 h-1 mx-auto mt-4"
              style={{ backgroundColor: ACCENT_GOLD }}
            ></div>
          </div>

          <div
            className="max-w-4xl mx-auto text-lg space-y-6"
            style={{ color: TEXT_DARK }}
          >
            <p>
              <b>Hijama (Wet Cupping) </b> is an ancient and traditional
              therapeutic method where small incisions are made on the skin, and
              cups are applied to create suction, drawing out small amounts of
              stagnant blood and toxins. This process promotes{" "}
              <b>detoxification </b> and stimulates the body's natural healing
              mechanisms.
            </p>
            <p>
              <b>Benefits include: </b> Relieving chronic pain, improving blood
              circulation, boosting the immune system, and addressing specific
              conditions like migraines and muscle tension. It is a powerful
              form of preventative and restorative medicine.
            </p>

            <div
              className="p-6 rounded-lg border-l-4"
              style={{ borderColor: PRIMARY_TEAL, backgroundColor: LIGHT_GREY }}
            >
              <h3
                className="font-cormorant text-2xl font-semibold mb-2"
                style={{ color: PRIMARY_TEAL }}
              >
                Safety and Hygiene
              </h3>
              <p>
                We adhere to the highest <b>MOH (Ministry of Health) </b>{" "}
                standards in the UAE. All equipment, including cups and blades,
                is single-use, sterilized, and immediately disposed of,
                guaranteeing a safe and hygienic experience for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Patient Guidelines (Preparation & Aftercare) --- */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: `${PRIMARY_TEAL}10` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Icon type="Info" className="mx-auto mb-4 h-12 w-12" />
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold"
              style={{ color: PRIMARY_TEAL }}
            >
              Important Patient Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Preparation Column */}
            <div
              className="p-8 rounded-xl shadow-lg bg-white border-t-4"
              style={{ borderColor: ACCENT_GOLD }}
            >
              <h3
                className="font-cormorant text-3xl font-bold mb-6"
                style={{ color: PRIMARY_TEAL }}
              >
                Before Your Session (Preparation)
              </h3>
              <ul
                className="space-y-4 text-lg leading-relaxed"
                style={{ color: TEXT_DARK }}
              >
                {[
                  {
                    title: "Fasting",
                    text: "Avoid eating for at least 2-3 hours prior to your appointment. A light meal the night before is ideal.",
                  },
                  {
                    title: "Hydration",
                    text: "Ensure you are well-hydrated by drinking plenty of water the day before.",
                  },
                  {
                    title: "Rest",
                    text: "Get adequate sleep the night before to prepare your body for the healing process.",
                  },
                  {
                    title: "Clothing",
                    text: "Wear comfortable, loose-fitting clothes that allow easy access to treatment areas.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Icon type="Rule" className="mt-1 flex-shrink-0 mr-3" />
                    <span>
                      <b>{item.title}:</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aftercare Column */}
            <div
              className="p-8 rounded-xl shadow-lg bg-white border-t-4"
              style={{ borderColor: ACCENT_GOLD }}
            >
              <h3
                className="font-cormorant text-3xl font-bold mb-6"
                style={{ color: PRIMARY_TEAL }}
              >
                After Your Session (Aftercare)
              </h3>
              <ul
                className="space-y-4 text-lg leading-relaxed"
                style={{ color: TEXT_DARK }}
              >
                <li className="flex items-start">
                  <Icon type="Rule" className="mt-1 flex-shrink-0 mr-3" />
                  <span>
                    <b>Diet:</b> Eat a light, nourishing meal (non-dairy) within
                    an hour after the session. Avoid red meat for{" "}
                    <b>24 hours</b>.
                  </span>
                </li>

                <li className="flex items-start">
                  <Icon type="Rule" className="mt-1 flex-shrink-0 mr-3" />
                  <span>
                    <b>Wounds:</b> Keep the treated area clean and dry. Avoid
                    bathing or heavy sweating for <b>24 hours</b>.
                  </span>
                </li>

                <li className="flex items-start">
                  <Icon type="Rule" className="mt-1 flex-shrink-0 mr-3" />
                  <span>
                    <b>Activity:</b> Avoid strenuous exercise and heavy lifting
                    for <b>24–48 hours</b>.
                  </span>
                </li>

                <li className="flex items-start">
                  <Icon type="Rule" className="mt-1 flex-shrink-0 mr-3" />
                  <span>
                    <b>Marks:</b> Cupping marks (bruising) are normal and
                    typically fade within <b>3–10 days</b>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Call to Action --- */}
      <section className="py-12 bg-white text-center">
        <p className="text-xl font-cormorant" style={{ color: PRIMARY_TEAL }}>
          Ready to book or still have questions?
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center text-xl font-bold py-3 px-8 rounded-full transition duration-300 hover:opacity-90 font-cormorant uppercase tracking-wider shadow-md"
          style={{ backgroundColor: ACCENT_GOLD, color: TEXT_DARK }}
        >
          Contact Our Specialists
        </Link>
      </section>
    </Layout>
  );
}
