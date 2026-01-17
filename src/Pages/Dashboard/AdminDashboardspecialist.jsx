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
  FaTimes,
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
            <FaHome /> Admin Home : Specialist
          </h1>

          {/* Hijama Info Section */}
          {/* Specialist Section */}
          <section className="mb-12 border-b border-[#333333]/20 pb-8">
            <h2 className="md:text-2xl font-bold text-[#333333] flex items-center gap-2 mb-6">
              <FaSave /> Specialist Section
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {["title", "subTitle", "subHeadline", "subHeadlineArabic"].map(
                (key) => (
                  <div key={key} className="space-y-1">
                    <label className="block text-sm font-semibold text-[#333333] capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      value={data.Specialist[key]}
                      onChange={(e) =>
                        handleChange(`Specialist.${key}`, e.target.value)
                      }
                      dir={key === "subHeadlineArabic" ? "rtl" : "ltr"} // Arabic field support
                      className={`w-full border border-[#333333]/30 rounded-lg p-3 text-[#333333] bg-white focus:border-[#006973] focus:ring-1 focus:ring-[#006973] ${
                        key === "subHeadlineArabic" ? "text-right" : "text-left"
                      }`}
                    />
                  </div>
                )
              )}
            </div>

            {/* Points Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#006973]">Points</h3>
                <button
                  onClick={() =>
                    setData((prev) => ({
                      ...prev,
                      Specialist: {
                        ...prev.Specialist,
                        points: [...prev.Specialist.points, ""],
                      },
                    }))
                  }
                  className="bg-[#006973] text-white px-5 py-2 rounded-full font-medium shadow-md hover:bg-[#005959] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#006973] focus:ring-offset-2"
                >
                  + Add Point
                </button>
              </div>

              {data.Specialist.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 mb-3 border border-[#006973]/30 p-3 rounded-lg bg-[#E5E5E5]/50"
                >
                  <input
                    type="text"
                    value={point}
                    onChange={(e) =>
                      handleChange(`Specialist.points.${i}`, e.target.value)
                    }
                    className="w-full border border-[#333333]/30 rounded-lg p-2 text-[#333333] bg-white focus:border-[#006973] focus:ring-1 focus:ring-[#006973]"
                  />
                  <button
                    onClick={() =>
                      setData((prev) => ({
                        ...prev,
                        Specialist: {
                          ...prev.Specialist,
                          points: prev.Specialist.points.filter(
                            (_, idx) => idx !== i
                          ),
                        },
                      }))
                    }
                    className="text-red-600 hover:text-red-800 transition duration-200"
                    title="Remove Point"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>

            {/* Save Button & Messages */}
            <div className="flex flex-col items-center mt-6 space-y-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-[#006973] hover:bg-[#005959] text-white font-bold px-10 py-3 rounded-full shadow-lg transition duration-200 disabled:bg-[#339999] disabled:cursor-not-allowed md:text-lg tracking-wider focus:outline-none focus:ring-4 focus:ring-[#006973]/50 flex items-center justify-center gap-2"
              >
                {saving ? (
                  "Saving..."
                ) : (
                  <>
                    <FaSave /> Save Specialist
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
