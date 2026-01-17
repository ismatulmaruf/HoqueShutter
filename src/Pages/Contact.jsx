import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Loading from "../Components/Loading";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// Brand Colors
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

// Icon Component
const Icon = ({ type, className = "w-6 h-6" }) => {
  switch (type) {
    case "Phone":
      return (
        <span
          className={`text-2xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#9742;
        </span>
      );
    case "Email":
      return (
        <span
          className={`text-2xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#9993;
        </span>
      );
    case "Location":
      return (
        <span
          className={`text-2xl ${className}`}
          style={{ color: ACCENT_GOLD }}
        >
          &#127968;
        </span>
      );
    default:
      return null;
  }
};

const ContactPage = () => {
  const [content, setContent] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  // Fetch content from backend
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(`${API_URL}/contact/`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) setContent(data.data);
      } catch (err) {
        console.error("Failed to fetch contact page content:", err);
      }
    };
    fetchContent();
  }, []);

  // Handle form changes
  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormMessage("");

    try {
      const res = await fetch(`${API_URL}/contact/submit`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setFormMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFormMessage("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setFormMessage("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!content) return <Loading />;

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Banner */}
        <div
          className="relative w-full h-96 flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${content.hero.image}')`,
            backgroundColor: PRIMARY_TEAL,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/40"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight text-white tracking-wider">
              {content.hero.title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-serif text-white">
              {content.hero.subtitle}
            </p>
            <div
              className="w-20 h-1 mx-auto mt-6 rounded-full"
              style={{ backgroundColor: ACCENT_GOLD }}
            ></div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="lg:order-1">
                <h2
                  className="text-4xl font-serif font-bold mb-8 border-b-2 inline-block pb-2"
                  style={{ color: PRIMARY_TEAL, borderColor: PRIMARY_TEAL }}
                >
                  Our Details
                </h2>
                <div className="space-y-8 text-lg" style={{ color: TEXT_DARK }}>
                  <a
                    href={`tel:${content.contactInfo.phone.replace(/ /g, "")}`}
                    className="flex items-start hover:opacity-80 transition duration-150"
                  >
                    <Icon type="Phone" className="mr-3 mt-1 h-6 w-6" />
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: PRIMARY_TEAL }}
                      >
                        Direct Phone
                      </p>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: ACCENT_GOLD }}
                      >
                        {content.contactInfo.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${content.contactInfo.email}`}
                    className="flex items-start hover:opacity-80 transition duration-150"
                  >
                    <Icon type="Email" className="mr-3 mt-1 h-6 w-6" />
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: PRIMARY_TEAL }}
                      >
                        Email Address
                      </p>
                      <p className="break-words text-xl">
                        {content.contactInfo.email}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start">
                    <Icon type="Location" className="mr-3 mt-1 h-6 w-6" />
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: PRIMARY_TEAL }}
                      >
                        Location
                      </p>
                      <p className="text-xl">{content.contactInfo.address}</p>
                      <p className="text-sm text-gray-500">
                        Coordinates: ({content.contactInfo.coordinates})
                      </p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="mt-12 w-full rounded-xl shadow-xl overflow-hidden border border-gray-200">
                    <div className="relative w-full aspect-[4/3] lg:aspect-video">
                      <iframe
                        src={content.contactInfo.mapUrl}
                        className="absolute top-0 left-0 w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                        style={{ border: 0 }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="lg:order-2 p-10 rounded-2xl shadow-2xl"
                style={{ backgroundColor: LIGHT_GREY }}
              >
                <h2
                  className="text-4xl font-serif font-extrabold text-[#1a1a1a] mb-10 border-b-4 inline-block pb-3 tracking-wide"
                  style={{ borderColor: ACCENT_GOLD }}
                >
                  Send Us a Message ✨
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleFormChange}
                    // LUXURIOUS STYLING
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-[#333333] shadow-inner focus:border-transparent focus:ring-2 transition duration-300"
                    style={{ focusRingColor: ACCENT_GOLD }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleFormChange}
                    // LUXURIOUS STYLING
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-[#333333] shadow-inner focus:border-transparent focus:ring-2 transition duration-300"
                    style={{ focusRingColor: ACCENT_GOLD }}
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleFormChange}
                    // LUXURIOUS STYLING
                    className="w-full p-4 border border-gray-300 rounded-lg bg-white placeholder-gray-500 text-[#333333] shadow-inner focus:border-transparent focus:ring-2 transition duration-300 resize-none"
                    style={{ focusRingColor: ACCENT_GOLD }}
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    // LUXURIOUS BUTTON STYLING
                    className="w-full py-4 text-lg font-bold rounded-lg transition duration-300 tracking-wider shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: ACCENT_GOLD, color: "#333333" }}
                  >
                    {submitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                  {formMessage && (
                    <p className="mt-4 text-center text-green-700 font-semibold">
                      {formMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
