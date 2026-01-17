import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import toast, { Toaster } from "react-hot-toast";
import AdminNavbar from "./AdminNavbar.jsx"; // Assuming path is correct
import {
  FaQuestionCircle,
  FaEdit,
  FaListUl,
  FaTrash,
  FaRegSave,
  FaSpinner,
  FaPlus,
  FaRedo,
  FaRegQuestionCircle,
  FaImage,
} from "react-icons/fa";

// --- Constants (Ensure these are defined elsewhere or passed as props) ---
const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL; // Replace with your actual API base URL
const PRIMARY_TEAL = "#006973"; // Primary Color: Teal
const ACCENT_GOLD = "#D4AF37"; // Accent Color: Gold
const INPUT_CLASS_SAFE =
  "w-full p-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 focus:ring-teal-500 focus:border-teal-500";

// Utility function to get image URL for preview (since you added heroimg)
const getImagePreviewUrl = (url) => {
  if (!url) return null;
  // Basic URL validation check (you might need a more robust check in production)
  return url.startsWith("/") || url.startsWith("http") ? url : null;
};

export default function FaqPageEditor() {
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // 'editingCategoryIndex' tracks the index of the Category being edited
  const [editingCategoryIndex, setEditingCategoryIndex] = useState(null);
  // 'editingQuestionIndex' tracks the index of the Question within the category
  const [editingQuestionIndex, setEditingQuestionIndex] = useState(null);

  console.log(faqData);

  // --- Derived State for clarity ---
  const currentCategory =
    editingCategoryIndex !== null && faqData?.categories
      ? faqData.categories[editingCategoryIndex]
      : null;
  const currentQuestion =
    currentCategory &&
    editingQuestionIndex !== null &&
    currentCategory.questions
      ? currentCategory.questions[editingQuestionIndex]
      : null;

  // --- Fetch FAQ Page Data ---
  const fetchFaqData = async () => {
    setLoading(true);
    try {
      // Assuming your route is '/faqpage' to align with the controller structure
      const res = await fetch(`${API_BASE_URL}/faqpage`);
      const data = await res.json();

      if (data.success && data.data) {
        setFaqData(data.data);
      } else {
        setFaqData(null);
        toast.error("Failed to fetch FAQ page data. ❌");
      }
    } catch (err) {
      console.error(err);
      setFaqData(null);
      toast.error("Failed to fetch FAQ page data 🚨");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  // --- Handle input changes for main content (Title/Subtitle/heroimg) ---
  const handleMainChange = (e) => {
    setFaqData({ ...faqData, [e.target.name]: e.target.value });
  };

  // --- Handle input changes for the Question editing form (q/a) ---
  const handleQuestionEditFormChange = (e) => {
    if (editingCategoryIndex === null || editingQuestionIndex === null) return;

    const newCategories = [...faqData.categories];
    const category = newCategories[editingCategoryIndex];

    const newQuestions = [...category.questions];
    newQuestions[editingQuestionIndex] = {
      ...newQuestions[editingQuestionIndex],
      [e.target.name]: e.target.value,
    };

    category.questions = newQuestions;
    setFaqData({ ...faqData, categories: newCategories });
  };

  // --- Handle input changes for Category Title/Description ---
  const handleCategoryEditFormChange = (e) => {
    if (editingCategoryIndex === null) return;

    const newCategories = [...faqData.categories];
    newCategories[editingCategoryIndex] = {
      ...newCategories[editingCategoryIndex],
      [e.target.name]: e.target.value,
    };

    setFaqData({ ...faqData, categories: newCategories });
  };

  // --- Start editing a Question ---
  const startEditingQuestion = (categoryIndex, questionIndex) => {
    setEditingCategoryIndex(categoryIndex);
    setEditingQuestionIndex(questionIndex);
    // Scroll to the edit form
    requestAnimationFrame(() => {
      document
        .getElementById("edit-form-anchor")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // --- Start editing a Category (to change its title/description) ---
  const startEditingCategory = (categoryIndex) => {
    setEditingCategoryIndex(categoryIndex);
    setEditingQuestionIndex(null); // Clear question editing
    // Scroll to the edit form
    requestAnimationFrame(() => {
      document
        .getElementById("edit-form-anchor")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // --- Stop editing and save data locally ---
  const saveEditedItem = () => {
    if (editingCategoryIndex !== null) {
      const itemType = editingQuestionIndex !== null ? "Question" : "Category";
      toast.success(
        `${itemType} updated locally. Click 'Save All Changes' to persist 💾`
      );
      setEditingCategoryIndex(null);
      setEditingQuestionIndex(null); // Close the edit forms
    }
  };

  // --- Cancel editing ---
  const cancelEditing = () => {
    setEditingCategoryIndex(null);
    setEditingQuestionIndex(null);
    // Note: To revert cancelled changes, you'd need to store a temporary copy of faqData before editing.
  };

  // --- Add new Category ---
  const addCategory = () => {
    const newItem = {
      category: "New FAQ Category",
      description: "A description for the new FAQ category.",
      questions: [
        {
          q: "New Question 1",
          a: "New Answer 1",
          _id: `temp-${Date.now()}-q1`,
        },
      ],
      // Note: _id is crucial for identifying new, unsaved items
      _id: `temp-${Date.now()}`,
    };
    const newIndex = faqData.categories.length;
    setFaqData({ ...faqData, categories: [...faqData.categories, newItem] });
    toast.success("New category added 📚. Now editing the new category.");
    startEditingCategory(newIndex); // Immediately start editing the new category
  };

  // --- Add new Question to the current category being edited ---
  const addQuestionToCategory = (categoryIndex) => {
    const newQuestion = {
      q: "New Question",
      a: "New Answer",
      _id: `temp-q-${Date.now()}`,
    };
    const newCategories = [...faqData.categories];
    const category = newCategories[categoryIndex];
    category.questions.push(newQuestion);

    const newQuestionIndex = category.questions.length - 1;

    setFaqData({ ...faqData, categories: newCategories });
    toast.success("New question added. Now editing.");
    startEditingQuestion(categoryIndex, newQuestionIndex);
  };

  // --- Remove Category ---
  const removeCategory = (index) => {
    const item = faqData.categories[index];
    if (
      !window.confirm(
        `Are you sure you want to remove the Category: "${
          item.category || "New Category"
        }"? This action requires saving to the server.`
      )
    )
      return;

    if (editingCategoryIndex === index) {
      setEditingCategoryIndex(null);
      setEditingQuestionIndex(null);
    }

    const newCategories = faqData.categories.filter((_, i) => i !== index);
    setFaqData({ ...faqData, categories: newCategories });
    toast("Category removed locally. Click 'Save All Changes' to confirm 🗑️", {
      icon: "🗑️",
    });
  };

  // --- Remove Question from Category ---
  const removeQuestion = (categoryIndex, questionIndex) => {
    const category = faqData.categories[categoryIndex];
    const question = category.questions[questionIndex];

    if (
      !window.confirm(
        `Are you sure you want to remove the Question: "${
          question.q || "Untitled Question"
        }"? This action requires saving to the server.`
      )
    )
      return;

    if (
      editingCategoryIndex === categoryIndex &&
      editingQuestionIndex === questionIndex
    ) {
      setEditingCategoryIndex(null);
      setEditingQuestionIndex(null);
    }

    const newCategories = [...faqData.categories];
    newCategories[categoryIndex].questions = category.questions.filter(
      (_, i) => i !== questionIndex
    );

    setFaqData({ ...faqData, categories: newCategories });
    toast("Question removed locally. Click 'Save All Changes' to confirm 🗑️", {
      icon: "🗑️",
    });
  };

  // --- Submit All Changes (Updates title, subtitle, heroimg, and entire categories array) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (editingCategoryIndex !== null) {
      toast.error("Please save or cancel the currently edited item first.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/faqpage`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: faqData.title,
          subtitle: faqData.subtitle,
          heroimg: faqData.heroimg,
          categories: faqData.categories,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setFaqData(data.data);
        toast.success("FAQ page updated successfully! 🚀");
      } else {
        toast.error(data.message || "Update failed 😔");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating FAQ page 🚨");
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
            Loading FAQ data...
          </p>
        </div>
      </Layout>
    );

  if (!faqData)
    return (
      <Layout hideNav>
        <AdminNavbar />
        <div className="flex justify-center items-center h-screen flex-col">
          <FaRegQuestionCircle className="text-3xl text-red-500 mb-2" />
          <p className="text-xl text-red-500">
            No FAQ page data found. Please check API connection. ❌
          </p>
          <button
            onClick={fetchFaqData}
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
      <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-10">
        {/* --- Header --- */}
        <header className="border-b pb-4 border-gray-200">
          <h1
            className="text-3xl font-extrabold flex items-center"
            style={{ color: PRIMARY_TEAL }}
          >
            <FaQuestionCircle className="mr-3" />
            FAQ Page Editor
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Last Updated:{" "}
            {faqData?.updatedAt
              ? new Date(faqData.updatedAt).toLocaleDateString()
              : "N/A"}
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* --- Main Content Section (Title/Subtitle/Hero Image) --- */}
          <section className="space-y-6 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
              <FaEdit className="mr-2" style={{ color: PRIMARY_TEAL }} />
              Page Header Content
            </h2>

            <label className="block text-sm font-medium text-gray-700">
              Main Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Main Page Title"
              value={faqData?.title || ""}
              onChange={handleMainChange}
              className={INPUT_CLASS_SAFE}
            />

            <label className="block text-sm font-medium text-gray-700">
              Subtitle/Description
            </label>
            <textarea
              name="subtitle"
              placeholder="A brief subtitle or description"
              value={faqData?.subtitle || ""}
              onChange={handleMainChange}
              rows={2}
              className={`${INPUT_CLASS_SAFE} resize-y`}
            />

            <label className="block text-sm font-medium text-gray-700">
              Hero Image URL (Field name: heroimg)
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="heroimg"
                placeholder="Hero Image URL"
                value={faqData?.heroimg || ""}
                onChange={handleMainChange}
                className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm transition duration-150 focus:ring-teal-500 focus:border-teal-500"
              />
              {getImagePreviewUrl(faqData?.heroimg) && (
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-300 mt-2 sm:mt-0">
                  <img
                    src={getImagePreviewUrl(faqData.heroimg)}
                    alt="Hero Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* --- Categories Section (List) --- */}
          <section className="space-y-6 p-4 sm:p-6 border border-gray-200 rounded-xl shadow-lg">
            <h2 className="md:text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
              <FaListUl className="mr-2" style={{ color: PRIMARY_TEAL }} />
              FAQ Categories ({faqData?.categories?.length || 0})
            </h2>

            {/* Categories Mapping */}
            <div className="space-y-4">
              {faqData?.categories?.map((category, catIndex) => (
                <div
                  key={category._id || catIndex}
                  className={`border rounded-lg shadow-sm transition duration-300 ${
                    editingCategoryIndex === catIndex &&
                    editingQuestionIndex === null
                      ? "bg-teal-50 border-teal-400"
                      : "bg-white border-gray-100"
                  }`}
                >
                  {/* Category Header Bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border-b">
                    <span className="font-bold text-gray-800 break-words max-w-full">
                      {catIndex + 1}. {category.category || "Untitled Category"}
                      <span className="text-sm font-normal text-gray-500 block sm:inline ml-0 sm:ml-2">
                        ({category.questions?.length || 0} Questions)
                      </span>
                    </span>

                    {/* Category Buttons */}
                    <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto justify-end mt-2 sm:mt-0">
                      <button
                        type="button"
                        onClick={() => startEditingCategory(catIndex)}
                        className={`px-3 py-2 text-white font-medium rounded-lg transition duration-150 shadow-md flex items-center disabled:opacity-50 text-sm`}
                        style={{ backgroundColor: PRIMARY_TEAL }}
                        disabled={submitting}
                        title="Edit Category Title/Description"
                      >
                        <FaEdit size={12} className="mr-1" />
                        Edit Category
                      </button>
                      <button
                        type="button"
                        onClick={() => removeCategory(catIndex)}
                        disabled={submitting}
                        className={`px-3 py-2 text-white font-medium rounded-lg transition duration-150 shadow-md flex items-center disabled:opacity-50 text-sm`}
                        style={{ backgroundColor: ACCENT_GOLD }}
                        title="Remove Category"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Questions List within Category */}
                  <div className="p-3 space-y-2 bg-gray-50">
                    <h4 className="text-sm font-semibold text-gray-700 border-b pb-1">
                      Questions:
                    </h4>
                    {category.questions?.map((question, qIndex) => (
                      <div
                        key={question._id || qIndex}
                        className={`flex justify-between items-start p-2 border rounded-md transition duration-300 ${
                          editingCategoryIndex === catIndex &&
                          editingQuestionIndex === qIndex
                            ? "bg-white border-teal-300 ring-1 ring-teal-300"
                            : "bg-white border-gray-100"
                        }`}
                      >
                        <p className="text-sm text-gray-800 flex-grow font-medium max-w-[80%]">
                          {qIndex + 1}. Q: {question.q || "Untitled Question"}
                        </p>
                        <div className="flex gap-1 flex-shrink-0">
                          <button
                            type="button"
                            onClick={() =>
                              startEditingQuestion(catIndex, qIndex)
                            }
                            className={`p-1 text-white rounded-md transition duration-150 disabled:opacity-50`}
                            style={{ backgroundColor: PRIMARY_TEAL }}
                            disabled={submitting}
                            title="Edit Question/Answer"
                          >
                            <FaEdit size={10} />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeQuestion(catIndex, qIndex)}
                            disabled={submitting}
                            className={`p-1 text-white rounded-md transition duration-150 disabled:opacity-50`}
                            style={{ backgroundColor: ACCENT_GOLD }}
                            title="Remove Question"
                          >
                            <FaTrash size={10} />
                          </button>
                        </div>
                      </div>
                    ))}
                    {/* Add Question Button */}
                    {/* <button
                      type="button"
                      onClick={() => addQuestionToCategory(catIndex)}
                      className={`px-3 py-1 text-white font-medium rounded-lg mt-2 transition duration-200 shadow-sm flex items-center justify-center text-sm`}
                      style={{ backgroundColor: ACCENT_GOLD }}
                    >
                      <FaPlus className="mr-1" size={10} />
                      Add Question
                    </button> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Category Button */}
            {/* <button
              type="button"
              onClick={addCategory}
              className={`w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg mt-4 transition duration-200 shadow-md flex items-center justify-center`}
              style={{ backgroundColor: PRIMARY_TEAL }}
            >
              <FaPlus className="mr-2" />
              Add New Category
            </button> */}
          </section>

          {/* --- Single Inline Edit Form (Conditional) --- */}
          {(currentCategory || currentQuestion) && (
            <section
              id="edit-form-anchor"
              className="space-y-6 p-4 sm:p-6 border-4 border-dashed rounded-xl shadow-xl"
              style={{ borderColor: PRIMARY_TEAL }}
            >
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 flex items-center">
                <FaEdit className="mr-2" style={{ color: PRIMARY_TEAL }} />
                Editing:
                {currentQuestion
                  ? ` Question ${editingQuestionIndex + 1} in Category ${
                      editingCategoryIndex + 1
                    }`
                  : ` Category ${editingCategoryIndex + 1}: ${
                      currentCategory.category || "Untitled"
                    }`}
              </h2>

              {/* Editing Category Title/Description (if a question isn't selected) */}
              {editingCategoryIndex !== null &&
                editingQuestionIndex === null && (
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Category Title
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="Category Title (e.g., Hijama Basics)"
                      value={currentCategory.category || ""}
                      onChange={handleCategoryEditFormChange}
                      className={INPUT_CLASS_SAFE}
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      Category Description
                    </label>
                    <textarea
                      name="description"
                      placeholder="A brief description for the category."
                      value={currentCategory.description || ""}
                      onChange={handleCategoryEditFormChange}
                      rows={2}
                      className={`${INPUT_CLASS_SAFE} resize-y`}
                    />
                  </div>
                )}

              {/* Editing Question (Q/A) (if a question is selected) */}
              {currentQuestion && (
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Question Text (q)
                  </label>
                  <input
                    type="text"
                    name="q"
                    placeholder="The Question (Q)"
                    value={currentQuestion.q || ""}
                    onChange={handleQuestionEditFormChange}
                    className={INPUT_CLASS_SAFE}
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Answer Text (a)
                  </label>
                  <textarea
                    name="a"
                    placeholder="The Answer (A)"
                    value={currentQuestion.a || ""}
                    onChange={handleQuestionEditFormChange}
                    rows={4}
                    className={`${INPUT_CLASS_SAFE} resize-y`}
                  />
                </div>
              )}

              {/* Edit Form Buttons */}
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
                  Save Item Changes Locally
                </button>
              </div>
            </section>
          )}

          {/* --- Master Submit Button --- */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={submitting || editingCategoryIndex !== null}
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
            {editingCategoryIndex !== null && (
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
