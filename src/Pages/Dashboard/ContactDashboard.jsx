import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AdminNavbar from "./AdminNavbar.jsx";
import Loading from "../../Components/Loading.jsx";
import {
  FiHome,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiInbox,
  FiEdit,
} from "react-icons/fi";

// --- Color Variables (for easy reference) ---
const PRIMARY_TEAL = "#006973";
const ACCENT_GOLD = "#D4AF37";
const TEXT_DARK = "#333333";
const LIGHT_GREY = "#E5E5E5";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function AdminContactEditor() {
  const [contactData, setContactData] = useState({
    hero: { title: "", subtitle: "", image: "" },
    contactInfo: {
      phone: "",
      email: "",
      address: "",
      coordinates: "",
      mapUrl: "",
    },
  });
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch contact page & form submissions
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Contact page
        const res1 = await fetch(`${API_URL}/contact/`, {
          method: "GET",
          credentials: "include",
        });
        const data1 = await res1.json();
        if (data1.success) setContactData(data1.data);

        // Form submissions
        const res2 = await fetch(`${API_URL}/contact/submissions`, {
          method: "GET",
          credentials: "include",
        });
        const data2 = await res2.json();
        if (data2.success) {
          // Add a contacted property if not exist
          const submissionsWithStatus = data2.data.map((item) => ({
            ...item,
            contacted: item.contacted || false,
          }));
          setFormSubmissions(submissionsWithStatus);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle contact page input changes
  const handleChange = (section, field, value) => {
    setContactData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  // Update contact page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/contact/`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
      const data = await res.json();
      setMessage(data.success ? "Contact page updated!" : "Update failed!");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    } finally {
      setUpdating(false);
    }
  };

  // Toggle contacted status locally
  const toggleContacted = async (index) => {
    const submission = formSubmissions[index];

    try {
      // Update backend
      const res = await fetch(
        `${API_URL}/contact/submissions/${submission._id}/toggle`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data.success) {
        // Update local state
        setFormSubmissions((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, contacted: !item.contacted } : item
          )
        );
      } else {
        console.error("Failed to update submission:", data.message);
      }
    } catch (err) {
      console.error("Error updating submission:", err);
    }
  };

  if (loading) return <Loading />;

  return (
    <Layout hideNav={true}>
      {/* Assuming AdminNavbar is styled separately, we'll focus on the main content area */}
      <AdminNavbar />

      <div
        className="min-h-screen py-6 sm:py-12"
        style={{ backgroundColor: LIGHT_GREY }} // LIGHT_GREY background
      >
        {/* Contact Page Editor Card */}
        <div
          className="max-w-4xl mx-auto p-4 sm:p-8 md:p-10 shadow-2xl rounded-xl border"
          style={{ backgroundColor: "white", borderColor: LIGHT_GREY }}
        >
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-6 border-b-2 pb-4 tracking-tight text-center"
            style={{ color: TEXT_DARK, borderColor: PRIMARY_TEAL }} // TEXT_DARK & PRIMARY_TEAL border
          >
            <FiEdit
              size={30}
              style={{ color: PRIMARY_TEAL }}
              className="inline-block mr-3 -mt-1"
            />
            <span style={{ color: PRIMARY_TEAL }}>Contact Page Editor</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Hero Section */}
            <div
              className="p-4 sm:p-6 rounded-xl border shadow-md"
              style={{ borderColor: LIGHT_GREY }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold mb-5 flex items-center"
                style={{ color: PRIMARY_TEAL }}
              >
                <FiHome className="w-6 h-6 mr-3" /> {/* React Feather Icon */}
                Hero Section Details
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title (e.g., 'Let's Connect')"
                  value={contactData.hero.title}
                  onChange={(e) =>
                    handleChange("hero", "title", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{
                    borderColor: LIGHT_GREY,
                    color: TEXT_DARK,
                    boxShadow: "0 0 0 1px transparent",
                    outline: "none",
                    "--tw-ring-color": PRIMARY_TEAL,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
                <input
                  type="text"
                  placeholder="Subtitle (Brief supporting text)"
                  value={contactData.hero.subtitle}
                  onChange={(e) =>
                    handleChange("hero", "subtitle", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
                <input
                  type="text"
                  placeholder="Image URL (Link to your hero banner image)"
                  value={contactData.hero.image}
                  onChange={(e) =>
                    handleChange("hero", "image", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="p-4 sm:p-6 rounded-xl border shadow-md"
              style={{ borderColor: LIGHT_GREY }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold mb-5 flex items-center"
                style={{ color: PRIMARY_TEAL }}
              >
                <FiPhone className="w-6 h-6 mr-3" /> {/* React Feather Icon */}
                Location & Contacts
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Phone (e.g., +1 555-123-4567)"
                  value={contactData.contactInfo.phone}
                  onChange={(e) =>
                    handleChange("contactInfo", "phone", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
                <input
                  type="email"
                  placeholder="Email (e.g., support@domain.com)"
                  value={contactData.contactInfo.email}
                  onChange={(e) =>
                    handleChange("contactInfo", "email", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
                <input
                  type="text"
                  placeholder="Address (Street, City, Zip)"
                  value={contactData.contactInfo.address}
                  onChange={(e) =>
                    handleChange("contactInfo", "address", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
                <input
                  type="text"
                  placeholder="Map URL (Embed link for iframe)"
                  value={contactData.contactInfo.mapUrl}
                  onChange={(e) =>
                    handleChange("contactInfo", "mapUrl", e.target.value)
                  }
                  className="w-full p-3 border rounded-lg bg-white placeholder-gray-500 transition duration-200 text-base"
                  style={{ borderColor: LIGHT_GREY, color: TEXT_DARK }}
                  onFocus={(e) => (e.target.style.borderColor = PRIMARY_TEAL)}
                  onBlur={(e) => (e.target.style.borderColor = LIGHT_GREY)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-lg transition duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed tracking-wider"
              style={{
                backgroundColor: PRIMARY_TEAL,
                color: "white",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 105, 115, 0.2), 0 2px 4px -2px rgba(0, 105, 115, 0.2)",
              }}
              disabled={updating}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = ACCENT_GOLD)
              } // ACCENT_GOLD hover
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = PRIMARY_TEAL)
              }
            >
              {updating ? (
                <>
                  {" "}
                  <FiCheckCircle className="inline-block mr-2" /> Saving
                  Changes...
                </>
              ) : (
                <>
                  {" "}
                  <FiCheckCircle className="inline-block mr-2" /> Publish
                  Updates
                </>
              )}
            </button>
          </form>

          {message && (
            <p
              className="mt-6 font-medium text-center"
              style={{ color: PRIMARY_TEAL }}
            >
              {message}
            </p>
          )}
        </div>

        {/* --- Horizontal Rule --- */}
        <div
          className="max-w-6xl mx-auto my-12"
          style={{ borderTop: `1px solid ${LIGHT_GREY}` }}
        ></div>

        {/* Form Submissions Table */}
        <div
          className="max-w-6xl mx-auto p-4 sm:p-8 md:p-10 shadow-2xl rounded-xl border"
          style={{ backgroundColor: "white", borderColor: LIGHT_GREY }}
        >
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-6 flex items-center"
            style={{ color: TEXT_DARK }}
          >
            <FiInbox
              size={30}
              style={{ color: PRIMARY_TEAL }}
              className="inline-block mr-3"
            />
            Recent Submissions
          </h2>

          {formSubmissions.length === 0 ? (
            <p
              className="py-6 text-center border-t"
              style={{ color: TEXT_DARK, borderColor: LIGHT_GREY }}
            >
              No new customer submissions yet.
            </p>
          ) : (
            <div
              className="overflow-x-auto border rounded-lg"
              style={{ borderColor: LIGHT_GREY }}
            >
              <table className="min-w-full table-auto">
                <thead>
                  <tr
                    className="text-left text-xs font-semibold uppercase border-b"
                    style={{
                      backgroundColor: LIGHT_GREY,
                      color: TEXT_DARK,
                      borderColor: LIGHT_GREY,
                    }}
                  >
                    <th className="px-4 py-3 sm:px-5">Name</th>
                    <th className="px-4 py-3 sm:px-5">Email</th>
                    <th className="px-4 py-3 sm:px-5">Message Snippet</th>
                    <th className="px-4 py-3 sm:px-5 text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {formSubmissions.map((sub, index) => (
                    <tr
                      key={sub._id || index}
                      className={`border-b transition duration-150`}
                      style={{ borderColor: LIGHT_GREY }}
                    >
                      <td
                        className="px-4 py-3 sm:px-5 text-sm font-medium"
                        style={{ color: TEXT_DARK }}
                      >
                        {sub.name}
                      </td>
                      <td
                        className="px-4 py-3 sm:px-5 text-sm"
                        style={{ color: TEXT_DARK }}
                      >
                        {sub.email}
                      </td>
                      <td
                        className="px-4 py-3 sm:px-5 text-sm max-w-[150px] sm:max-w-sm truncate text-ellipsis"
                        style={{ color: TEXT_DARK }}
                      >
                        {sub.message}
                      </td>
                      <td className="px-4 py-3 sm:px-5 text-center">
                        <button
                          onClick={() => toggleContacted(index)}
                          className={`text-xs font-bold py-1 px-3 rounded-full transition-colors duration-200 shadow-sm`}
                          style={{
                            backgroundColor: sub.contacted
                              ? PRIMARY_TEAL
                              : ACCENT_GOLD, // PRIMARY_TEAL or ACCENT_GOLD status
                            color: sub.contacted ? "white" : TEXT_DARK,
                            boxShadow: sub.contacted
                              ? "0 1px 3px 0 rgba(0, 105, 115, 0.1), 0 1px 2px -1px rgba(0, 105, 115, 0.1)"
                              : "0 1px 3px 0 rgba(212, 175, 55, 0.1), 0 1px 2px -1px rgba(212, 175, 55, 0.1)",
                          }}
                        >
                          {sub.contacted ? (
                            <>
                              {" "}
                              <FiCheckCircle
                                size={14}
                                className="inline-block mr-1 -mt-0.5"
                              />{" "}
                              Followed Up
                            </>
                          ) : (
                            <>
                              {" "}
                              <FiMail
                                size={14}
                                className="inline-block mr-1 -mt-0.5"
                              />{" "}
                              New Lead
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
