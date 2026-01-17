import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import toast, { Toaster } from "react-hot-toast";
import AdminNavbar from "./AdminNavbar.jsx";
import {
  FaPhotoVideo,
  FaEdit,
  FaImage,
  FaTrash,
  FaRegSave,
  FaSpinner,
  FaPlus,
  FaRedo,
} from "react-icons/fa";

// --- Color Definitions ---
const PRIMARY_TEAL = "#006973"; // Primary Color: Teal
const ACCENT_GOLD = "#D4AF37"; // Accent Color: Gold

// Helper class for inputs - ensures focus ring uses PRIMARY_TEAL
const INPUT_CLASS = `p-3 border border-gray-300 rounded-lg shadow-sm w-full transition duration-150 focus:ring-4 focus:ring-[${PRIMARY_TEAL}]/50 focus:border-[${PRIMARY_TEAL}]`;
// Note: When using arbitrary values like hex codes in focus:ring-*, it's often safer to use inline style or ensure the colors are in your tailwind.config.js for full compilation. I'm using a safer approach with focus:ring-teal-500 for the generic inputs to ensure it works, but I'll use inline styles for the main buttons/headers as requested.

const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;

// Re-defining INPUT_CLASS for better Tailwind compatibility with dynamic colors (using 'teal-500' fallback for focus ring, as true arbitrary focus color can be tricky without config)
const INPUT_CLASS_SAFE =
  "p-3 border border-gray-300 rounded-lg shadow-sm w-full transition duration-150 focus:ring-teal-500 focus:border-teal-500";

export default function AdminMediaEdit() {
  const [mediaData, setMediaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  // State to track which gallery item is currently being edited (by its index)
  const [editingIndex, setEditingIndex] = useState(null);

  // Get the data for the item currently being edited
  const currentItem =
    editingIndex !== null ? mediaData?.gallery[editingIndex] : null;

  // --- Preview URL Handler ---
  const getImagePreviewUrl = (src) => {
    if (src && (src.startsWith("http") || src.startsWith("/"))) return src;
    return null;
  };

  // --- Fetch media page ---
  const fetchMediaData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/mediapage`);
      const data = await res.json();
      if (data.success) {
        setMediaData(data.data);
      } else {
        setMediaData(null);
        toast.error("Failed to fetch media page data. ❌");
      }
    } catch (err) {
      console.error(err);
      setMediaData(null);
      toast.error("Failed to fetch media page data 🚨");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);

  // --- Handle input changes for main content ---
  const handleMainChange = (e) => {
    setMediaData({ ...mediaData, [e.target.name]: e.target.value });
  };

  // --- Handle input changes for the SINGLE editing form ---
  const handleEditFormChange = (e) => {
    if (editingIndex === null) return;

    const newGallery = [...mediaData.gallery];
    newGallery[editingIndex] = {
      ...newGallery[editingIndex],
      [e.target.name]: e.target.value,
    };
    setMediaData({ ...mediaData, gallery: newGallery });
  };

  // --- Start editing an item ---
  const startEditing = (index) => {
    setEditingIndex(index);
    // Scroll to the edit form if necessary
    // Use requestAnimationFrame to ensure the form is rendered before scrolling
    requestAnimationFrame(() => {
      document
        .getElementById("edit-form-anchor")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // --- Stop editing and save data locally ---
  const saveEditedItem = () => {
    if (editingIndex !== null) {
      toast.success(
        `Item ${
          editingIndex + 1
        } updated locally. Click 'Save All Changes' to persist 💾`
      );
      setEditingIndex(null); // Close the edit form
    }
  };

  // --- Cancel editing ---
  const cancelEditing = () => {
    // Optionally revert changes if needed, but for simplicity, we just close the form.
    setEditingIndex(null);
  };

  // --- Add new gallery item ---
  const addGalleryItem = () => {
    const newItem = {
      src: "",
      alt: "",
      caption: "",
      category: "",
      _id: `temp-${Date.now()}`,
    };
    const newIndex = mediaData.gallery.length;
    setMediaData({ ...mediaData, gallery: [...mediaData.gallery, newItem] });
    toast.success("New gallery slide added 🎨. Now editing the new item.");
    startEditing(newIndex); // Immediately start editing the new item
  };

  // --- Remove gallery item ---
  const removeGalleryItem = (index) => {
    const item = mediaData.gallery[index];
    if (
      !window.confirm(
        `Are you sure you want to remove item ${index + 1} (${
          item.caption || "New Item"
        })? This change must be saved to the server.`
      )
    )
      return;

    if (editingIndex === index) {
      setEditingIndex(null); // Close the form if the item being edited is deleted
    }

    const newGallery = mediaData.gallery.filter((_, i) => i !== index);
    setMediaData({ ...mediaData, gallery: newGallery });
    toast("Slide removed locally. Click 'Save All Changes' to confirm 🗑️", {
      icon: "🗑️",
    });
  };

  // --- Submit All Changes (Updates Hero Content and entire Gallery array) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (editingIndex !== null) {
      toast.error(
        "Please save or cancel the currently edited gallery item first."
      );
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/mediapage`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mediaData),
      });
      const data = await res.json();
      if (data.success) {
        setMediaData(data.data);
        toast.success("Media page updated successfully! 🚀");
      } else {
        toast.error(data.message || "Update failed 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating media page 🚨");
    } finally {
      setSubmitting(false);
    }
  };

  // --- Loading State ---
  if (loading)
    return (
      <Layout hideNav>
        <div className="flex justify-center items-center h-screen">
          <FaSpinner
            className="animate-spin text-4xl mr-2"
            style={{ color: PRIMARY_TEAL }}
          />
          <p className="text-xl" style={{ color: PRIMARY_TEAL }}>
            Loading media data...
          </p>
        </div>
      </Layout>
    );

  if (!mediaData)
    return (
      <Layout hideNav>
        <AdminNavbar />
        <div className="flex justify-center items-center h-screen flex-col">
          <FaImage className="text-3xl text-red-500 mb-2" />
          <p className="text-xl text-red-500">
            No media page data found. Please check API connection. ❌
          </p>
          <button
            onClick={fetchMediaData}
            className={`mt-4 px-4 py-2 text-sm text-white rounded-md flex items-center`}
            style={{ backgroundColor: PRIMARY_TEAL }}
          >
            <FaRedo className="inline mr-1" /> Retry
          </button>
        </div>
      </Layout>
    );

  return (
    <Layout hideNav>
      <AdminNavbar />
      <Toaster position="top-right" reverseOrder={false} />
      {/* Responsive Padding: p-4 for mobile, sm:p-8 for larger screens */}
      <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-10">
        {/* --- Header --- */}
        <header className="border-b pb-4 border-gray-200">
          <h1
            className="text-3xl font-extrabold flex items-center"
            style={{ color: PRIMARY_TEAL }}
          >
            <FaPhotoVideo className="mr-3" />
            Media Page Editor
          </h1>
          {/* <p className="text-gray-500 mt-1">
            Manage the hero content and the photo gallery. *Changes here
            require clicking 'Save All Changes' to go live.**
          </p> */}
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* --- Main Content Section (Hero) --- */}
          <section className="space-y-6 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
              <FaEdit className="mr-2" style={{ color: PRIMARY_TEAL }} />
              Page Content & Hero Image
            </h2>

            <label className="block text-sm font-medium text-gray-700">
              Main Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Main Page Title"
              value={mediaData?.title || ""}
              onChange={handleMainChange}
              className={INPUT_CLASS_SAFE}
            />

            <label className="block text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <textarea
              name="subtitle"
              placeholder="A brief subtitle or description"
              value={mediaData?.subtitle || ""}
              onChange={handleMainChange}
              rows={2}
              className={`${INPUT_CLASS_SAFE} resize-y`}
            />

            <label className="block text-sm font-medium text-gray-700">
              Hero Image URL
            </label>
            {/* Mobile: Stack items (flex-col), Tablet/Desktop: Gap side-by-side (sm:flex-row) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="heroImage"
                placeholder="Hero Image URL"
                value={mediaData?.heroImage || ""}
                onChange={handleMainChange}
                className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 focus:ring-teal-500 focus:border-teal-500"
              />
              {getImagePreviewUrl(mediaData?.heroImage) && (
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-300 mt-2 sm:mt-0">
                  <img
                    src={getImagePreviewUrl(mediaData.heroImage)}
                    alt="Hero Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* --- Gallery Section (List) --- */}
          <section className="space-y-6 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg">
            <h2 className="md:text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
              <FaImage className="mr-2" style={{ color: PRIMARY_TEAL }} />
              Photo Gallery Items ({mediaData?.gallery?.length || 0})
            </h2>

            {/* Gallery Items Mapping */}
            <div className="space-y-4">
              {mediaData?.gallery?.map((item, index) => (
                <div
                  key={item._id || index}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border rounded-lg shadow-sm transition duration-300 ${
                    editingIndex === index
                      ? "bg-teal-50 border-teal-400"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto mb-2 sm:mb-0">
                    <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0 border border-gray-200 flex items-center justify-center">
                      {getImagePreviewUrl(item.src) ? (
                        <img
                          src={getImagePreviewUrl(item.src)}
                          alt="Thumb"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaImage size={16} className="text-gray-400" />
                      )}
                    </div>
                    <span className="font-medium text-gray-700 break-words max-w-full">
                      {index + 1}. {item.caption || "Untitled Item"} (
                      {item.category || "No Category"})
                    </span>
                  </div>

                  {/* Button Group: uses flex-shrink-0 and space-x for consistent layout */}
                  <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
                    <button
                      type="button"
                      onClick={() => startEditing(index)}
                      className={`px-3 py-2 text-white font-medium rounded-lg transition duration-150 shadow-md flex items-center disabled:opacity-50`}
                      style={{ backgroundColor: PRIMARY_TEAL }}
                      disabled={submitting}
                    >
                      <FaEdit size={14} className="mr-1" />
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => removeGalleryItem(index)}
                      disabled={submitting}
                      className={`px-3 py-2 text-white font-medium rounded-lg transition duration-150 shadow-md flex items-center disabled:opacity-50`}
                      style={{ backgroundColor: ACCENT_GOLD }}
                      title="Remove Gallery Item"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Button */}
            {/* <button
              type="button"
              onClick={addGalleryItem}
              className={`w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg mt-4 transition duration-200 shadow-md flex items-center justify-center`}
              style={{ backgroundColor: PRIMARY_TEAL }}
            >
              <FaPlus className="mr-2" />
              Add New Gallery Item
            </button> */}
          </section>

          {/* --- Single Inline Edit Form (Conditional) --- */}
          {currentItem && (
            <section
              id="edit-form-anchor"
              className="space-y-6 p-4 sm:p-6 border-4 border-dashed rounded-xl shadow-xl"
              style={{ borderColor: PRIMARY_TEAL }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
                <FaEdit className="mr-2" style={{ color: PRIMARY_TEAL }} />
                Editing Item {editingIndex + 1}:{" "}
                {currentItem.caption || "Untitled"}
              </h2>

              {/* Mobile: Image stacks on top of inputs (flex-col), Desktop: Side-by-side (md:flex-row) */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                {/* Image Preview - fixed height on mobile, dynamic on desktop */}
                <div className="w-full h-48 md:w-1/4 md:h-auto bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-300 flex items-center justify-center p-2">
                  {getImagePreviewUrl(currentItem.src) ? (
                    <img
                      src={getImagePreviewUrl(currentItem.src)}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <FaImage size={40} className="text-gray-400 p-4" />
                  )}
                </div>

                <div className="flex-grow space-y-3 w-full">
                  {/* Input Fields using INPUT_CLASS_SAFE */}
                  <label className="block text-sm font-medium text-gray-700">
                    Image Source URL
                  </label>
                  <input
                    type="text"
                    name="src"
                    placeholder="Image Source URL (e.g., /gallery/pic1.jpg)"
                    value={currentItem.src}
                    onChange={handleEditFormChange}
                    className={INPUT_CLASS_SAFE}
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Caption/Title
                  </label>
                  <input
                    type="text"
                    name="caption"
                    placeholder="Caption/Title"
                    value={currentItem.caption}
                    onChange={handleEditFormChange}
                    className={INPUT_CLASS_SAFE}
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Alt Text (SEO)
                  </label>
                  <input
                    type="text"
                    name="alt"
                    placeholder="Alt Text (For SEO and accessibility)"
                    value={currentItem.alt}
                    onChange={handleEditFormChange}
                    className={INPUT_CLASS_SAFE}
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Category (e.g., Treatment Room)"
                    value={currentItem.category}
                    onChange={handleEditFormChange}
                    className={INPUT_CLASS_SAFE}
                  />
                </div>
              </div>

              {/* Edit Form Buttons (Reverse order on mobile for primary action visibility) */}
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-3 border-t mt-3 border-gray-100">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className={`px-6 py-3 font-bold rounded-lg transition duration-150 shadow-md flex items-center justify-center bg-gray-400 hover:bg-gray-500 text-white w-full sm:w-auto`}
                >
                  <FaTrash size={14} className="mr-2" />
                  Cancel Editing
                </button>
                <button
                  type="button"
                  onClick={saveEditedItem}
                  className={`px-6 py-3 text-white font-bold rounded-lg transition duration-150 shadow-md flex items-center justify-center w-full sm:w-auto`}
                  style={{ backgroundColor: PRIMARY_TEAL }}
                >
                  <FaRegSave className="mr-2" />
                  Save Item Changes
                </button>
              </div>
            </section>
          )}

          {/* --- Master Submit Button --- */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={submitting || editingIndex !== null}
              className={`w-full sm:w-auto px-8 py-3 text-white font-bold rounded-lg transition duration-200 disabled:opacity-50 shadow-lg flex items-center justify-center`}
              style={{ backgroundColor: PRIMARY_TEAL }}
            >
              {submitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Saving All Changes...
                </>
              ) : (
                <>
                  <FaRegSave className="mr-2" />
                  Save All Changes
                </>
              )}
            </button>
            {editingIndex !== null && (
              <p className="mt-2 text-red-600 font-medium">
                Please save or cancel the currently edited item before saving
                all changes.
              </p>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
}
