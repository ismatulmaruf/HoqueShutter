import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Loading from "../Components/Loading";

// Brand Colors
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

export default function Media() {
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/mediapage`);
        const data = await res.json();

        if (data.success) {
          setMediaData(data.data);
        } else {
          console.error("Failed to fetch media data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching media data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaData();
  }, [API_BASE_URL]);

  if (loading) return <Loading />;
  if (!mediaData)
    return (
      <Layout>
        <p className="text-center mt-20">No media data found.</p>
      </Layout>
    );

  return (
    <Layout>
      {/* --- Hero Banner --- */}
      <div
        className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${mediaData.heroImage})`,
          backgroundColor: PRIMARY_TEAL,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#006973]/70 to-[#006973]/90"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold leading-tight text-white tracking-wider">
            {mediaData.title}
          </h1>
          {mediaData.subtitle && (
            <p className="mt-4 text-xl md:text-2xl font-cormorant text-white">
              {mediaData.subtitle}
            </p>
          )}
          <div
            className="w-20 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: ACCENT_GOLD }}
          ></div>
        </div>
      </div>

      {/* --- Photo Gallery Section --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-cormorant text-4xl md:text-5xl font-bold mb-4 text-center"
            style={{ color: PRIMARY_TEAL }}
          >
            Step Inside Our Center
          </h2>
          <p
            className="text-xl mb-12 text-center font-cormorant"
            style={{ color: TEXT_DARK }}
          >
            See our commitment to hygiene, comfort, and professionalism.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaData.gallery.map((image) => (
              <div
                key={image._id}
                className="overflow-hidden rounded-xl shadow-xl group cursor-pointer border-2"
                style={{ borderColor: LIGHT_GREY }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                  style={{
                    backgroundColor: `${PRIMARY_TEAL}10`,
                    borderBottom: `4px solid ${ACCENT_GOLD}`,
                  }}
                />
                <div className="p-4" style={{ backgroundColor: LIGHT_GREY }}>
                  <p
                    className="font-cormorant text-lg font-semibold"
                    style={{ color: PRIMARY_TEAL }}
                  >
                    {image.caption}
                  </p>
                  <p className="text-sm" style={{ color: TEXT_DARK }}>
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Assurance / Branding --- */}
      <section className="py-12 bg-white text-center">
        <div
          className="max-w-xl mx-auto px-4 border-b-4 pb-4"
          style={{ borderColor: PRIMARY_TEAL }}
        >
          <h3
            className="font-cormorant text-3xl font-bold mb-2"
            style={{ color: PRIMARY_TEAL }}
          >
            Your Comfort is Our Priority
          </h3>
          <p className="text-lg" style={{ color: TEXT_DARK }}>
            We are committed to providing a calm, clean, and professional
            environment for every traditional healing session.
          </p>
        </div>
      </section>
    </Layout>
  );
}
