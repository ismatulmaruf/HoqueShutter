import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AdminNavbar from "./AdminNavbar.jsx";
import Loading from "../../Components/Loading.jsx";
import {
  FiEdit,
  FiImage,
  FiTarget,
  FiUsers,
  FiPhoneCall,
  FiSave,
  FiRotateCw,
  FiPlus,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";

// --- Color Variables ---
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// Utility functions for applying input/focus styles
const getInputStyle = () => ({
  borderColor: LIGHT_GREY,
  color: TEXT_DARK,
  boxShadow: "none",
});

const getFocusStyle = (e) => {
  e.target.style.borderColor = PRIMARY_TEAL;
  e.target.style.boxShadow = `0 0 0 2px ${PRIMARY_TEAL}40`; // Soft focus ring
};

const getBlurStyle = (e) => {
  e.target.style.borderColor = LIGHT_GREY;
  e.target.style.boxShadow = "none";
};

export default function AdminAboutEditor() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch About page data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/about`);
        const data = await res.json();
        if (data.success) {
          setAboutData(data.data);
        } else {
          setMessage("Failed to load initial data.");
        }
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch About page data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleChange = (section, field, value, index = null) => {
    setAboutData((prev) => {
      // Ensure prev is not null before proceeding
      if (!prev) return null;

      const updated = { ...prev };
      if (index !== null) {
        // For array fields like specialists.points
        const newArray = [...updated[section][field]];
        newArray[index] = value;
        updated[section] = { ...updated[section], [field]: newArray };
      } else {
        // For simple string fields
        updated[section] = { ...updated[section], [field]: value };
      }
      return updated;
    });
  };

  // Add new point to specialists.points
  const addSpecialistPoint = () => {
    setAboutData((prev) => ({
      ...prev,
      specialists: {
        ...prev.specialists,
        points: [...prev.specialists.points, ""],
      },
    }));
  };

  // Remove a point
  const removeSpecialistPoint = (index) => {
    setAboutData((prev) => ({
      ...prev,
      specialists: {
        ...prev.specialists,
        points: prev.specialists.points.filter((_, i) => i !== index),
      },
    }));
  };

  // Update About page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/about`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aboutData),
      });
      const data = await res.json();
      setMessage(
        data.success
          ? "About page updated successfully! "
          : "Update failed! Check server logs."
      );
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong during the update!");
    } finally {
      setUpdating(false);
    }
  };

  // Reset About page to default
  const handleReset = async () => {
    if (
      !window.confirm(
        "⚠️ Are you sure you want to reset ALL fields to their original default values?"
      )
    )
      return;
    setUpdating(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/about/reset`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        setAboutData(data.data);
        setMessage("About page reset to default! 🔄");
      } else {
        setMessage("Reset failed!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong during the reset!");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <Loading />;

  if (!aboutData)
    return (
      <Layout hideNav>
        <AdminNavbar />
        <div className="text-center py-32 text-red-600 font-bold text-xl">
          Error: Cannot load About page data. Check API connection.
        </div>
      </Layout>
    );

  return (
    <Layout hideNav>
      <AdminNavbar />

      <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8 sm:space-y-12">
        <h1
          className="text-3xl font-extrabold mb-6 border-b pb-3 flex items-center"
          style={{ color: TEXT_DARK, borderColor: LIGHT_GREY }}
        >
          <FiEdit
            size={30}
            style={{ color: PRIMARY_TEAL }}
            className="inline-block mr-3"
          />
          Admin About Page Editor
        </h1>

        {/* Message/Notification Alert - Uses ACCENT_GOLD for success/info */}
        {message && (
          <div
            className="py-3 px-4 sm:px-6 rounded-lg shadow-sm font-medium flex items-center"
            style={{
              backgroundColor: ACCENT_GOLD + "1A",
              borderColor: ACCENT_GOLD,
              color: TEXT_DARK,
            }}
          >
            <FiAlertTriangle
              size={20}
              style={{ color: ACCENT_GOLD }}
              className="mr-3"
            />
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          {/* --- Hero Section --- */}
          <section
            className="space-y-5 p-4 sm:p-6 border rounded-xl shadow-lg"
            style={{ borderColor: LIGHT_GREY, backgroundColor: "white" }}
          >
            <h2
              className="text-xl sm:text-2xl font-bold border-b pb-3 flex items-center"
              style={{ color: PRIMARY_TEAL, borderColor: LIGHT_GREY }}
            >
              <FiImage size={24} className="mr-3" />
              Hero Section
            </h2>
            <input
              type="text"
              placeholder="Title (e.g., About Us)"
              value={aboutData.hero.title}
              onChange={(e) => handleChange("hero", "title", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Subtitle (e.g., Our journey of excellence)"
              value={aboutData.hero.subtitle}
              onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Background Image URL"
              value={aboutData.hero.bgImage}
              onChange={(e) => handleChange("hero", "bgImage", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
          </section>

          {/* --- Mission Section --- */}
          <section
            className="space-y-5 p-4 sm:p-6 border rounded-xl shadow-lg"
            style={{ borderColor: LIGHT_GREY, backgroundColor: "white" }}
          >
            <h2
              className="text-xl sm:text-2xl font-bold border-b pb-3 flex items-center"
              style={{ color: PRIMARY_TEAL, borderColor: LIGHT_GREY }}
            >
              <FiTarget size={24} className="mr-3" />
              Mission Section
            </h2>
            <input
              type="text"
              placeholder="Title (e.g., Our Core Mission)"
              value={aboutData.mission.title}
              onChange={(e) => handleChange("mission", "title", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <textarea
              placeholder="Text 1 (e.g., A brief overview of your purpose)"
              value={aboutData.mission.text1}
              onChange={(e) => handleChange("mission", "text1", e.target.value)}
              rows={4}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 resize-y text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <textarea
              placeholder="Text 2 (e.g., More detail on your impact and values)"
              value={aboutData.mission.text2}
              onChange={(e) => handleChange("mission", "text2", e.target.value)}
              rows={4}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 resize-y text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Image URL for Mission Section"
              value={aboutData.mission.image}
              onChange={(e) => handleChange("mission", "image", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
          </section>

          {/* --- Specialists Section --- */}
          <section
            className="space-y-5 p-4 sm:p-6 border rounded-xl shadow-lg"
            style={{ borderColor: LIGHT_GREY, backgroundColor: "white" }}
          >
            <h2
              className="text-xl sm:text-2xl font-bold border-b pb-3 flex items-center"
              style={{ color: PRIMARY_TEAL, borderColor: LIGHT_GREY }}
            >
              <FiUsers size={24} className="mr-3" />
              Specialists Section
            </h2>
            <input
              type="text"
              placeholder="Title (e.g., Meet Our Team)"
              value={aboutData.specialists.title}
              onChange={(e) =>
                handleChange("specialists", "title", e.target.value)
              }
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Heading (e.g., Leaders in the Industry)"
              value={aboutData.specialists.heading}
              onChange={(e) =>
                handleChange("specialists", "heading", e.target.value)
              }
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Subheading (e.g., Experience the difference)"
              value={aboutData.specialists.subheading}
              onChange={(e) =>
                handleChange("specialists", "subheading", e.target.value)
              }
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />

            {/* Specialists Points List */}
            <div
              className="space-y-3 pt-4 border-t"
              style={{ borderColor: LIGHT_GREY }}
            >
              <label
                className="font-semibold block"
                style={{ color: TEXT_DARK }}
              >
                Specialist Points
              </label>
              {aboutData.specialists.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-2 items-stretch sm:items-center w-full"
                >
                  <input
                    type="text"
                    placeholder={`Point ${idx + 1}`}
                    value={point}
                    onChange={(e) =>
                      handleChange("specialists", "points", e.target.value, idx)
                    }
                    className="flex-grow p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base w-full sm:w-auto"
                    style={getInputStyle()}
                    onFocus={getFocusStyle}
                    onBlur={getBlurStyle}
                  />
                  <button
                    type="button"
                    onClick={() => removeSpecialistPoint(idx)}
                    className="px-3 py-2 text-white font-medium rounded-lg transition duration-150 shadow-md flex items-center justify-center w-full sm:w-auto"
                    style={{ backgroundColor: ACCENT_GOLD }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = PRIMARY_TEAL)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = ACCENT_GOLD)
                    }
                  >
                    <FiX size={16} className="mr-1" />
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addSpecialistPoint}
                className="px-6 py-3 text-white font-semibold rounded-lg mt-3 transition duration-150 shadow-md flex items-center"
                style={{ backgroundColor: PRIMARY_TEAL }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = ACCENT_GOLD)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = PRIMARY_TEAL)
                }
              >
                <FiPlus size={18} className="mr-2" />
                Add Point
              </button>
            </div>
          </section>

          {/* --- Contact Section --- */}
          {/* <section
            className="space-y-5 p-4 sm:p-6 border rounded-xl shadow-lg"
            style={{ borderColor: LIGHT_GREY, backgroundColor: "white" }}
          >
            <h2
              className="text-xl sm:text-2xl font-bold border-b pb-3 flex items-center"
              style={{ color: PRIMARY_TEAL, borderColor: LIGHT_GREY }}
            >
              <FiPhoneCall size={24} className="mr-3" />
              Contact Section
            </h2>
            <input
              type="text"
              placeholder="Title (e.g., Get in Touch)"
              value={aboutData.contact.title}
              onChange={(e) => handleChange("contact", "title", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Address"
              value={aboutData.contact.address}
              onChange={(e) =>
                handleChange("contact", "address", e.target.value)
              }
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="text"
              placeholder="Phone"
              value={aboutData.contact.phone}
              onChange={(e) => handleChange("contact", "phone", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
            <input
              type="email"
              placeholder="Email"
              value={aboutData.contact.email}
              onChange={(e) => handleChange("contact", "email", e.target.value)}
              className="w-full p-3 bg-white border rounded-lg shadow-sm transition duration-150 text-base"
              style={getInputStyle()}
              onFocus={getFocusStyle}
              onBlur={getBlurStyle}
            />
          </section> */}

          {/* --- Action Buttons --- */}
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 border-t"
            style={{ borderColor: LIGHT_GREY }}
          >
            <button
              type="submit"
              disabled={updating}
              className="flex-1 px-8 py-3 text-white font-bold rounded-lg transition duration-200 disabled:opacity-50 shadow-lg flex items-center justify-center"
              style={{ backgroundColor: PRIMARY_TEAL }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = ACCENT_GOLD)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = PRIMARY_TEAL)
              }
            >
              {updating ? (
                <>
                  {" "}
                  <FiRotateCw size={20} className="animate-spin mr-2" />{" "}
                  Updating...
                </>
              ) : (
                <>
                  {" "}
                  <FiSave size={20} className="mr-2" /> Update About Page
                </>
              )}
            </button>
            {/* <button
              type="button"
              onClick={handleReset}
              disabled={updating}
              className="flex-1 px-8 py-3 text-white font-bold rounded-lg transition duration-200 disabled:opacity-50 shadow-lg flex items-center justify-center"
              style={{ backgroundColor: TEXT_DARK }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = ACCENT_GOLD)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = TEXT_DARK)
              }
            >
              {updating ? (
                <>
                  {" "}
                  <FiRotateCw size={20} className="animate-spin mr-2" />{" "}
                  Processing...
                </>
              ) : (
                <>
                  {" "}
                  <FiRotateCw size={20} className="mr-2" /> Reset to Default
                </>
              )}
            </button> */}
          </div>
        </form>
      </div>
    </Layout>
  );
}
