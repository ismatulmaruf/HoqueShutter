import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Loading from "../Components/Loading";
import axios from "axios";
// Importing Fa icons is good, but they are not used in the Icon component here.
// They are kept for reference if you want to switch from unicode/span Icons.
import { FaPhoneAlt, FaEnvelopeOpenText, FaMapMarkerAlt } from "react-icons/fa";

// Define the base URL using the environment variable
const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000/api/v1";
const ABOUT_API_ENDPOINT = `${API_BASE_URL}/about`;
const CONTACT_API_ENDPOINT = `${API_BASE_URL}/contact`; // New endpoint

const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

const Icon = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case "Mission":
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x2728;
        </span>
      );
    case "Specialist":
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x2695;
        </span>
      );
    case "Location":
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x1F4CD;
        </span>
      );
    case "Contact":
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x1F4DE;
        </span>
      );
    case "Email": // Added case for email icon for clarity
      return (
        <span
          className={`text-4xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#x2709;
        </span>
      );
    default:
      return null;
  }
};

function AboutUs() {
  const [aboutData, setAboutData] = useState(null); // Renamed 'data' to 'aboutData'
  const [contactData, setContactData] = useState(null); // New state for contact info
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- 1. Fetch About Page Data ---
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(ABOUT_API_ENDPOINT);
        if (res.data.success) {
          setAboutData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching About data:", error);
        setError("Failed to load About Page content.");
      } finally {
        // We only set loading to false after attempting to fetch ALL critical data
        // We will keep it true until the contact fetch is also done/attempted
        // For simplicity, we'll run the contact fetch right after this
      }
    };
    fetchAbout();
  }, []);

  // --- 2. Fetch Contact Page Data ---
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(CONTACT_API_ENDPOINT);
        if (res.data.success) {
          // Assuming contactInfo holds the details we need
          setContactData(res.data.data.contactInfo);
        }
      } catch (error) {
        console.warn("Error fetching Contact data:", error);
        // Do not set global error, as this section is secondary to the main About page
      } finally {
        setLoading(false); // Set loading to false only after all fetches are done
      }
    };
    fetchContact();
  }, []); // Run this effect when component mounts

  if (loading) {
    return <Loading />;
  }

  // Check for fatal error (aboutData is critical)
  if (error || !aboutData) {
    return (
      <Layout>
        <div className="py-32 text-center text-red-600 text-xl">
          {error || "Failed to load About Page content."}
        </div>
      </Layout>
    );
  }

  // Destructure ABOUT data. The 'contact' property is no longer used from here.
  const { hero, mission, specialists } = aboutData;
  // Use fetched contact data or a fallback object
  const currentContactInfo = contactData || {
    phone: "N/A",
    email: "N/A",
    address: "Location N/A",
    mapUrl: "#",
  };

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <div
        className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero?.bgImage})`,
          backgroundColor: PRIMARY_TEAL,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${PRIMARY_TEAL}e0, ${PRIMARY_TEAL}f0)`,
          }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1
            className="font-cormorant text-6xl md:text-8xl font-bold text-white tracking-wide leading-tight"
            style={{ textShadow: `2px 2px 4px rgba(0,0,0,0.7)` }}
          >
            {hero?.title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-cormorant text-white/90">
            {hero?.subtitle}
          </p>
          <div
            className="w-20 h-1 mt-6 mx-auto"
            style={{ backgroundColor: ACCENT_GOLD }}
          ></div>
        </div>
      </div>

      {/* --- MISSION SECTION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-16 items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <Icon type="Mission" className="mb-4 h-12 w-12" />
              <h2
                className="font-cormorant text-4xl font-bold mb-4"
                style={{ color: PRIMARY_TEAL }}
              >
                {mission?.title}
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: TEXT_DARK }}
              >
                {mission?.text1}
              </p>
              <p
                className="text-lg leading-relaxed italic"
                style={{ color: `${TEXT_DARK}b3` }}
              >
                "{mission?.text2}"
              </p>
            </div>

            <div
              className="lg:w-1/2 rounded-xl shadow-xl overflow-hidden border"
              style={{ borderColor: PRIMARY_TEAL }}
            >
              <img
                src={mission?.image}
                alt="Ayan Hijama Center"
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.03]"
                style={{ minHeight: "300px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALISTS SECTION --- */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: `${PRIMARY_TEAL}10` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="font-cormorant text-4xl md:text-5xl font-bold"
              style={{ color: PRIMARY_TEAL }}
            >
              {specialists?.title}
            </h2>
          </div>

          <div
            className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-3xl mx-auto border-t-8"
            style={{ borderColor: ACCENT_GOLD }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Icon type="Specialist" className="h-16 w-16" />
              </div>
              <div className="flex-grow">
                <h3
                  className="font-cormorant text-3xl font-bold"
                  style={{ color: PRIMARY_TEAL }}
                >
                  {specialists?.heading}
                </h3>
                <p
                  className="text-xl font-semibold mb-3"
                  style={{ color: ACCENT_GOLD }}
                >
                  {specialists?.subheading}
                </p>
                <ul
                  className="list-disc list-inside text-lg leading-relaxed space-y-2"
                  style={{ color: TEXT_DARK }}
                >
                  {specialists?.points?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (UPDATED) --- */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-center font-cormorant text-5xl font-bold mb-16 tracking-wide"
            style={{ color: PRIMARY_TEAL }}
          >
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Phone Card */}
            <div
              className="group p-10 rounded-2xl shadow-xl border transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: LIGHT_GREY, borderColor: ACCENT_GOLD }}
            >
              <FaPhoneAlt
                size={52}
                className="mb-5 transition-transform group-hover:scale-110"
                color={ACCENT_GOLD}
              />
              <h3
                className="font-cormorant text-3xl font-bold mb-3"
                style={{ color: PRIMARY_TEAL }}
              >
                Call Us
              </h3>
              <p className="text-3xl font-bold" style={{ color: ACCENT_GOLD }}>
                {currentContactInfo.phone || "N/A"}
              </p>
              <a
                href={`tel:${currentContactInfo.phone}`}
                className="mt-4 inline-block font-cormorant font-semibold underline text-xl"
                style={{ color: PRIMARY_TEAL }}
              >
                Tap to Call Now →
              </a>
            </div>

            {/* Email Card */}
            <div
              className="group p-10 rounded-2xl shadow-xl border transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: LIGHT_GREY, borderColor: PRIMARY_TEAL }}
            >
              <FaEnvelopeOpenText
                size={52}
                className="mb-5 transition-transform group-hover:scale-110"
                color={ACCENT_GOLD}
              />

              <h3
                className="font-cormorant text-3xl font-bold mb-3"
                style={{ color: PRIMARY_TEAL }}
              >
                Email Us
              </h3>
              <p className="text-lg break-words" style={{ color: TEXT_DARK }}>
                {currentContactInfo.email || "N/A"}
              </p>
              <a
                href={`mailto:${currentContactInfo.email}`}
                className="mt-4 inline-block font-cormorant font-semibold underline text-xl"
                style={{ color: ACCENT_GOLD }}
              >
                Send an Inquiry →
              </a>
            </div>

            {/* Location Card */}
            <div
              className="group p-10 rounded-2xl shadow-xl border transition-all hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: LIGHT_GREY, borderColor: PRIMARY_TEAL }}
            >
              <FaMapMarkerAlt
                size={52}
                className="mb-5 transition-transform group-hover:scale-110"
                color={ACCENT_GOLD}
              />

              <h3
                className="font-cormorant text-3xl font-bold mb-3"
                style={{ color: PRIMARY_TEAL }}
              >
                Our Location
              </h3>
              <p className="text-lg font-semibold" style={{ color: TEXT_DARK }}>
                {currentContactInfo.address || "N/A"}
              </p>
              {currentContactInfo.mapUrl && (
                <a
                  href={currentContactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-cormorant font-semibold underline text-xl"
                  style={{ color: PRIMARY_TEAL }}
                >
                  View on Map →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutUs;
