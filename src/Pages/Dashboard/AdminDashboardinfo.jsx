import Layout from "../../Layout/Layout";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar.jsx";
import Loading from "../../Components/Loading.jsx";
import {
  FaHome,
  FaTint,
  FaSave,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export default function AdminHomeEditor() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch homepage data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/homepage`, {
          credentials: "include",
        });
        const result = await res.json();
        if (result.success) setData(result.data);
        else setError(result.message || "Failed to fetch data");
      } catch (err) {
        setError("Error fetching homepage data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper to update nested values
  const handleChange = (path, value) => {
    setData((prev) => {
      const updated = { ...prev };
      const keys = path.split(".");
      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  // Save data
  const handleSave = async () => {
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch(`${API_URL}/homepage`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) setSuccess("Home page updated successfully!");
      else setError(result.message || "Failed to update data");
    } catch (err) {
      setError("Error updating homepage data.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-lg">
        {error}
      </div>
    );

  return (
    <Layout hideNav>
      <AdminNavbar />
      <div className="min-h-screen bg-[#E5E5E5] py-12 px-1 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-2 sm:p-10 rounded-3xl shadow-2xl border border-[#333333]/10">
          <h1 className="md:text-4xl font-extrabold mb-10 text-center text-[#006973] tracking-tight border-b-2 border-[#006973] pb-4 flex items-center justify-center gap-2">
            <FaHome /> Admin Home : Info
          </h1>

          {/* Hijama Info Section */}
          <section className="mb-12 border-b border-[#333333]/20 pb-8">
            <h2 className="md:text-2xl font-bold mb-5 text-[#333333] flex items-center gap-2">
              <FaTint /> Hijama Info Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(data.HijamaInfoSection)
                .filter((key) => key !== "_id") // Exclude _id
                .map((key) => (
                  <div key={key} className="space-y-1">
                    <label className="block text-sm font-semibold text-[#333333] capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                      {Array.isArray(data.HijamaInfoSection[key]) &&
                        " (Comma Separated)"}
                    </label>

                    <input
                      type="text"
                      value={
                        Array.isArray(data.HijamaInfoSection[key])
                          ? data.HijamaInfoSection[key].join(", ")
                          : data.HijamaInfoSection[key]
                      }
                      onChange={(e) =>
                        handleChange(
                          `HijamaInfoSection.${key}`,
                          Array.isArray(data.HijamaInfoSection[key])
                            ? e.target.value
                                .split(",")
                                .map((item) => item.trim())
                            : e.target.value
                        )
                      }
                      dir={key === "quote" ? "rtl" : "ltr"} // RTL for Arabic quote
                      className={`w-full border border-[#333333]/30 rounded-lg p-3 text-[#333333] bg-white focus:border-[#006973] focus:ring-1 focus:ring-[#006973] ${
                        key === "body" && "h-24"
                      } ${key === "quote" ? "text-right" : "text-left"}`}
                    />
                  </div>
                ))}
            </div>

            {/* Save Button & Messages */}
            <div className="flex flex-col items-center mt-10 space-y-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-[#006973] hover:bg-[#005959] text-white font-bold px-10 py-3 rounded-full shadow-lg transition duration-200 disabled:bg-[#339999] disabled:cursor-not-allowed md:text-lg tracking-wider focus:outline-none focus:ring-4 focus:ring-[#006973]/50 flex items-center justify-center gap-2"
              >
                {saving ? (
                  "Saving..."
                ) : (
                  <>
                    <FaSave /> Save Info
                  </>
                )}
              </button>

              {success && (
                <p className="text-green-600 font-medium text-center p-3 bg-green-50 rounded-lg border border-green-300 w-full max-w-sm flex items-center justify-center gap-2">
                  <FaCheckCircle /> {success}
                </p>
              )}
              {error && (
                <p className="text-red-600 font-medium text-center p-3 bg-red-50 rounded-lg border border-red-300 w-full max-w-sm flex items-center justify-center gap-2">
                  <FaTimesCircle /> {error}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
