import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AdminNavbar from "./AdminNavbar";
import Loading from "../../Components/Loading";

export default function PricingAdmin() {
  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  const [config, setConfig] = useState({});
  const [tiers, setTiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch current pricing
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(`${API_URL}/pricing`, {
          method: "GET",
          credentials: "include",
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        if (json.success) {
          setConfig(json.data.Config);
          setTiers(json.data.Tiers);
        }
      } catch (error) {
        console.error("Error fetching pricing:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPricing();
  }, [API_URL]);

  // Config change handler
  const handleConfigChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  // Tier change handler
  const handleTierChange = (index, field, value) => {
    const newTiers = [...tiers];
    newTiers[index][field] = value;
    setTiers(newTiers);
  };

  const handleFeatureChange = (tierIndex, featureIndex, value) => {
    const newTiers = [...tiers];
    newTiers[tierIndex].features[featureIndex] = value;
    setTiers(newTiers);
  };

  const addTier = () =>
    setTiers([
      ...tiers,
      { name: "", price: "", duration: "", features: [""], isFeatured: false },
    ]);

  const removeTier = (index) => setTiers(tiers.filter((_, i) => i !== index));

  const addFeature = (tierIndex) => {
    const newTiers = [...tiers];
    newTiers[tierIndex].features.push("");
    setTiers(newTiers);
  };

  const removeFeature = (tierIndex, featureIndex) => {
    const newTiers = [...tiers];
    newTiers[tierIndex].features = newTiers[tierIndex].features.filter(
      (_, i) => i !== featureIndex
    );
    setTiers(newTiers);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}/pricing`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Config: config, Tiers: tiers }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      if (json.success) alert("Pricing updated successfully!");
      else alert("Failed to update pricing.");
    } catch (error) {
      console.error("Error updating pricing:", error);
      alert("Failed to update pricing.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <Layout hideNav>
      <AdminNavbar />
      <div className="max-w-7xl mx-auto md:p-6 py-6 px-2">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#006973]">
          Pricing Admin Panel
        </h1>

        {/* Config Section */}
        {/* <section className="bg-white rounded-2xl shadow-2xl p-6 mb-12 border border-[#333333]/10">
          <h2 className="text-2xl font-semibold mb-4 text-[#006973]">
            Global Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "PRIMARY_TEAL",
              "ACCENT_GOLD",
              "TEXT_DARK",
              "LIGHT_GREY",
              "CONTACT_PHONE",
            ].map((key) => (
              <div key={key} className="flex flex-col">
                <label className="mb-1 font-medium text-[#333333]">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={config[key] || ""}
                  onChange={handleConfigChange}
                  className="border border-[#333333]/30 rounded-lg p-2 bg-white text-[#333333] focus:ring-2 focus:ring-[#006973] focus:outline-none transition"
                />
              </div>
            ))}
          </div>
        </section> */}

        {/* Tiers Section */}
        <section className="bg-white rounded-2xl shadow-2xl md:p-6 py-6 px-2 mb-12 border border-[#333333]/10">
          <h2 className="text-2xl font-semibold mb-6 text-[#006973]">
            Pricing Tiers
          </h2>

          {tiers.map((tier, i) => (
            <div
              key={i}
              className="mb-6 border border-[#006973]/30 md:p-4 py-6 px-2 rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl text-[#006973]">
                  Tier {i + 1}
                </h3>
                <button
                  className="text-red-600 font-semibold hover:text-red-800 transition"
                  onClick={() => removeTier(i)}
                >
                  Remove Tier
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={tier.name}
                  onChange={(e) => handleTierChange(i, "name", e.target.value)}
                  className="border border-[#333333]/30 rounded-lg p-2 bg-white text-[#333333] focus:ring-2 focus:ring-[#006973] focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Price"
                  value={tier.price}
                  onChange={(e) => handleTierChange(i, "price", e.target.value)}
                  className="border border-[#333333]/30 rounded-lg p-2 bg-white text-[#333333] focus:ring-2 focus:ring-[#006973] focus:outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={tier.duration}
                  onChange={(e) =>
                    handleTierChange(i, "duration", e.target.value)
                  }
                  className="border border-[#333333]/30 rounded-lg p-2 bg-white text-[#333333] focus:ring-2 focus:ring-[#006973] focus:outline-none transition"
                />
                <div className="flex items-center space-x-2">
                  <label className="flex items-center space-x-2 text-[#333333]">
                    Featured
                    <input
                      type="checkbox"
                      checked={tier.isFeatured}
                      onChange={(e) =>
                        handleTierChange(i, "isFeatured", e.target.checked)
                      }
                      className="w-5 h-5 accent-[#D4AF37] bg-white border border-[#333333]/30 rounded-sm"
                    />
                  </label>
                </div>
              </div>

              {/* Features */}
              <div className="mb-2">
                <h4 className="font-semibold mb-2 text-[#006973]">Features</h4>
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center mb-2 space-x-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(i, j, e.target.value)
                      }
                      className="border border-[#333333]/30 rounded-lg p-2 bg-white text-[#333333] flex-grow focus:ring-2 focus:ring-[#006973] focus:outline-none transition"
                    />
                    <button
                      className="text-red-600 font-semibold hover:text-red-800 transition"
                      onClick={() => removeFeature(i, j)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <button
                  className="mt-2 text-[#006973] font-semibold hover:underline"
                  onClick={() => addFeature(i)}
                >
                  + Add Feature
                </button>
              </div>
            </div>
          ))}

          <button
            className="mb-6 px-4 py-2 bg-[#006973] text-white rounded-lg hover:bg-[#005959] transition"
            onClick={addTier}
          >
            + Add Tier
          </button>
        </section>

        <div className="text-center">
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-6 py-3 rounded-lg font-bold text-white transition ${
              saving
                ? "bg-[#E5E5E5] text-gray-400 cursor-not-allowed"
                : "bg-[#006973] hover:bg-[#005959]"
            }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </Layout>
  );
}
