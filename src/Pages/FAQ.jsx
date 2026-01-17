import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaPhone,
  FaSpinner,
  FaExclamationTriangle,
  FaCheck,
} from "react-icons/fa";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

// Colors (unchanged)
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

// Safe API Base URL
const API_BASE_URL = (() => {
  try {
    // Using VITE_REACT_APP_API_URL if available, otherwise checking for VITE_API_URL
    // This handles common environment variable naming conventions for Vite.
    return (
      import.meta.env.VITE_REACT_APP_API_URL || import.meta.env.VITE_API_URL
    );
  } catch {
    return null;
  }
})();

// ✅ Utility Components (Updated CheckIcon to match original intent)
const CheckIcon = () => (
  <FaCheck
    className="mr-3 w-6 h-6 flex-shrink-0" // Using slightly larger icon for visual weight
    style={{ color: PRIMARY_TEAL }}
  />
);

const Loading = () => (
  <Layout>
    <div className="flex items-center justify-center min-h-screen bg-white">
      <FaSpinner
        className="animate-spin w-10 h-10"
        style={{ color: PRIMARY_TEAL }}
      />

      <p className="ml-3 text-xl font-medium" style={{ color: PRIMARY_TEAL }}>
        Loading FAQ content...
      </p>
    </div>
  </Layout>
);

const ErrorState = ({ message }) => (
  <div className="flex items-center justify-center min-h-[50vh] p-10 bg-red-50 rounded-xl border border-red-400 shadow-md mx-6">
    <div className="text-center">
      <FaExclamationTriangle className="w-14 h-14 text-red-600 mx-auto" />

      <h2 className="text-2xl font-bold mt-3 text-red-700">
        Error Fetching FAQ
      </h2>
      <p className="text-gray-600 mt-2">{message}</p>
      <p className="text-gray-500 text-sm mt-2">
        Make sure backend is running and data is seeded.
      </p>
    </div>
  </div>
);

// ✅ Main Component
export default function FaqPage() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openQuestion, setOpenQuestion] = useState({});

  const toggleQuestion = (section, index) => {
    setOpenQuestion((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  useEffect(() => {
    const fetchFaq = async () => {
      if (!API_BASE_URL) {
        setError(
          "API base URL missing from environment variables. Using fallback structure."
        ); // Fallback structure (for demo/development if API is down)
        setContent({
          title: "Client FAQ & Guidelines",
          subtitle:
            "Comprehensive answers on Hijama, Unani, and your visit to our clinic.",
          categories: [
            {
              category: "Hijama Therapy: The Basics",
              description:
                "Everything you need to know about the cupping procedure itself.",
              questions: [
                {
                  q: "What is the difference between Wet and Dry Cupping?",
                  a: "...",
                },
              ],
            },
          ],
          // Assuming the heroimg might be dynamic but using a placeholder since it's hardcoded in the original
          heroimg: "/Hijama-main-about.jpg",
        });
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_BASE_URL}/faqpage`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (data.success && data.data) {
          // Extract data and merge in the hardcoded hero image path since the model doesn't store it.
          setContent({ ...data.data, heroimg: "/Hijama-main-about.jpg" });
        } else {
          throw new Error("Invalid data format.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch FAQ.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaq();
  }, []);

  if (isLoading) return <Loading />;
  if (error && !content) return <ErrorState message={error} />;

  const { title, subtitle, categories, heroimg } = content;
  // console.log(content);
  // console.log(heroimg);
  // const CONTACT_PHONE = "+971 56 110 7276";

  return (
    <Layout>
      <div className="font-sans bg-white text-gray-800">
        {/* ✅ 1. Hero Banner */}
        <div
          className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.imgur.com/E28BxZu.jpeg')`,
            backgroundColor: PRIMARY_TEAL,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#006973]/70 to-[#006973]/90"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-tight text-white tracking-wider">
              {title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-cormorant text-white">
              {subtitle}
            </p>
            <div
              className="w-20 h-1 mx-auto mt-6 rounded-full"
              style={{ backgroundColor: ACCENT_GOLD }}
            ></div>
          </div>
        </div>

        {/* ✅ 2. FAQ Accordion Sections */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
            <h2
              className="font-cormorant text-4xl font-bold mb-12 text-center"
              style={{ color: PRIMARY_TEAL }}
            >
              Your Essential Health Questions
            </h2>

            {categories.map((sec, i) => (
              <div
                key={i}
                className="mb-10 md:p-6 px-3 p-4 rounded-xl shadow-2xl border-t-8"
                style={{
                  borderColor: PRIMARY_TEAL,
                  backgroundColor: LIGHT_GREY,
                }}
              >
                {/* ✅ Category title & info */}
                <h3
                  className="font-cormorant text-3xl font-bold mb-2"
                  style={{ color: PRIMARY_TEAL }}
                >
                  {sec.category}
                </h3>

                <p
                  className="text-lg mb-6 pb-2 border-b leading-relaxed"
                  style={{ color: TEXT_DARK, borderColor: ACCENT_GOLD }}
                >
                  {sec.description}
                </p>

                {/* ✅ Questions */}
                <div className="space-y-4">
                  {sec.questions.map((qItem, idx) => {
                    const open = openQuestion[i] === idx;
                    return (
                      <div key={idx} className="bg-white rounded-lg shadow-md">
                        <button
                          onClick={() => toggleQuestion(i, idx)}
                          className="w-full md:p-4 p-2 py-4 flex justify-between items-center text-left transition duration-150 hover:bg-gray-50/70"
                        >
                          <div className="flex items-start">
                            <CheckIcon />
                            <span
                              className="font-cormorant text-xl font-semibold"
                              style={{ color: TEXT_DARK }}
                            >
                              {qItem.q}
                            </span>
                          </div>

                          <FaChevronDown
                            className="w-5 h-5 ml-4 transition-transform flex-shrink-0"
                            style={{
                              color: ACCENT_GOLD,
                              transform: open
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        </button>

                        {open && (
                          <div
                            className="px-4 pb-4 pl-10 pt-1 border-t text-lg leading-relaxed"
                            style={{
                              borderColor: LIGHT_GREY,
                              color: TEXT_DARK,
                            }}
                          >
                            {qItem.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Final CTA --- */}
        <section
          style={{ backgroundColor: PRIMARY_TEAL }}
          className="py-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="font-cormorant text-3xl font-bold mb-3 text-white">
              Ready to Start Your Healing Journey?
            </h3>

            <p className="text-lg mb-6 text-white/90">
              Book your personalized consultation or speak directly with our
              licensed therapist.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center text-xl font-bold py-3 px-8 rounded-full transition duration-300 hover:-translate-y-1 hover:opacity-90 font-cormorant uppercase tracking-wider shadow-lg text-light"
              style={{ backgroundColor: ACCENT_GOLD }}
            >
              <svg
                className="mr-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              CONTACT US TO BOOK
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
