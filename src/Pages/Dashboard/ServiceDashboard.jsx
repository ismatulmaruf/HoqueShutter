// import React, { useEffect, useState } from "react";
// import Layout from "../../Layout/Layout";
// import AdminNavbar from "./AdminNavbar";
// import Loading from "../../Components/Loading";

// const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// const AdminServices = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   // ✅ Fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${API_URL}/services`, {
//           method: "GET",
//           credentials: "include",
//         });
//         const json = await res.json();
//         setData(json.data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // ✅ Generic field change
//   const handleChange = (section, field, value) => {
//     setData((prev) => ({
//       ...prev,
//       [section]: { ...prev[section], [field]: value },
//     }));
//   };

//   // ✅ Array manipulation helpers
//   const handleArrayChange = (section, index, field, value) => {
//     setData((prev) => {
//       const arr = [...prev[section]];
//       arr[index][field] = value;
//       return { ...prev, [section]: arr };
//     });
//   };

//   const handleAddItem = (section, template) => {
//     setData((prev) => ({
//       ...prev,
//       [section]: [...prev[section], template],
//     }));
//   };

//   const handleRemoveItem = (section, index) => {
//     setData((prev) => {
//       const arr = [...prev[section]];
//       arr.splice(index, 1);
//       return { ...prev, [section]: arr };
//     });
//   };

//   // ✅ Save all
//   const handleSave = async () => {
//     try {
//       setSaving(true);
//       const res = await fetch(`${API_URL}/services`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify(data),
//       });
//       const json = await res.json();
//       alert(json.message || "Updated successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading || !data) return <Loading />;

//   return (
//     <Layout>
//       <AdminNavbar />
//       <div className="max-w-5xl mx-auto p-6 space-y-10">
//         <h1 className="text-3xl font-semibold text-center mb-8">
//           Services Page Editor
//         </h1>

//         {/* HERO SECTION */}
//         <Section title="Hero Section">
//           <Input
//             label="Title"
//             value={data.hero.title}
//             onChange={(e) => handleChange("hero", "title", e.target.value)}
//           />
//           <Input
//             label="Subtitle"
//             value={data.hero.subtitle}
//             onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
//           />
//           <Input
//             label="Image URL"
//             value={data.hero.image}
//             onChange={(e) => handleChange("hero", "image", e.target.value)}
//           />
//           <Input
//             label="Overlay Color"
//             value={data.hero.overlayColor}
//             onChange={(e) =>
//               handleChange("hero", "overlayColor", e.target.value)
//             }
//           />
//         </Section>

//         {/* SECTION HEADINGS */}
//         <Section title="Section Headings">
//           <Input
//             label="Services"
//             value={data.sectionHeadings.services}
//             onChange={(e) =>
//               handleChange("sectionHeadings", "services", e.target.value)
//             }
//           />
//           <Input
//             label="Method"
//             value={data.sectionHeadings.method}
//             onChange={(e) =>
//               handleChange("sectionHeadings", "method", e.target.value)
//             }
//           />
//           <Input
//             label="Benefits"
//             value={data.sectionHeadings.benefits}
//             onChange={(e) =>
//               handleChange("sectionHeadings", "benefits", e.target.value)
//             }
//           />
//         </Section>

//         {/* SERVICE CARDS */}
//         <Section title="Service Cards">
//           {data.serviceCards.map((card, i) => (
//             <Card key={i}>
//               <Input
//                 label="Title"
//                 value={card.title}
//                 onChange={(e) =>
//                   handleArrayChange("serviceCards", i, "title", e.target.value)
//                 }
//               />
//               <Input
//                 label="Description"
//                 value={card.description}
//                 onChange={(e) =>
//                   handleArrayChange(
//                     "serviceCards",
//                     i,
//                     "description",
//                     e.target.value
//                   )
//                 }
//               />
//               <Input
//                 label="Icon"
//                 value={card.icon}
//                 onChange={(e) =>
//                   handleArrayChange("serviceCards", i, "icon", e.target.value)
//                 }
//               />
//               <Input
//                 label="Link"
//                 value={card.link}
//                 onChange={(e) =>
//                   handleArrayChange("serviceCards", i, "link", e.target.value)
//                 }
//               />
//               <DeleteBtn onClick={() => handleRemoveItem("serviceCards", i)} />
//             </Card>
//           ))}
//           <AddBtn
//             onClick={() =>
//               handleAddItem("serviceCards", {
//                 title: "",
//                 description: "",
//                 icon: "",
//                 link: "",
//               })
//             }
//           />
//         </Section>

//         {/* METHOD STEPS */}
//         <Section title="Method Steps">
//           {data.methodSteps.map((step, i) => (
//             <Card key={i}>
//               <Input
//                 label="Step"
//                 value={step.step}
//                 onChange={(e) =>
//                   handleArrayChange("methodSteps", i, "step", e.target.value)
//                 }
//               />
//               <Input
//                 label="Detail"
//                 value={step.detail}
//                 onChange={(e) =>
//                   handleArrayChange("methodSteps", i, "detail", e.target.value)
//                 }
//               />
//               <Input
//                 label="Purpose"
//                 value={step.purpose}
//                 onChange={(e) =>
//                   handleArrayChange("methodSteps", i, "purpose", e.target.value)
//                 }
//               />
//               <Checkbox
//                 label="Is Caution?"
//                 checked={step.isCaution}
//                 onChange={(e) =>
//                   handleArrayChange(
//                     "methodSteps",
//                     i,
//                     "isCaution",
//                     e.target.checked
//                   )
//                 }
//               />
//               <DeleteBtn onClick={() => handleRemoveItem("methodSteps", i)} />
//             </Card>
//           ))}
//           <AddBtn
//             onClick={() =>
//               handleAddItem("methodSteps", {
//                 step: "",
//                 detail: "",
//                 purpose: "",
//                 isCaution: false,
//               })
//             }
//           />
//         </Section>

//         {/* BENEFITS LISTS */}
//         <Section title="Benefits List 1">
//           <ArrayList
//             data={data.benefitsList1}
//             section="benefitsList1"
//             handleArrayChange={handleArrayChange}
//             handleRemoveItem={handleRemoveItem}
//             handleAddItem={handleAddItem}
//           />
//         </Section>

//         <Section title="Benefits List 2">
//           <ArrayList
//             data={data.benefitsList2}
//             section="benefitsList2"
//             handleArrayChange={handleArrayChange}
//             handleRemoveItem={handleRemoveItem}
//             handleAddItem={handleAddItem}
//           />
//         </Section>

//         {/* CAUTION NOTE */}
//         <Section title="Caution Note">
//           <Input
//             label="Title"
//             value={data.cautionNote.title}
//             onChange={(e) =>
//               handleChange("cautionNote", "title", e.target.value)
//             }
//           />
//           {data.cautionNote.points.map((point, i) => (
//             <div key={i} className="flex items-center gap-2 mb-2">
//               <input
//                 type="text"
//                 value={point}
//                 onChange={(e) => {
//                   const updated = [...data.cautionNote.points];
//                   updated[i] = e.target.value;
//                   setData((prev) => ({
//                     ...prev,
//                     cautionNote: { ...prev.cautionNote, points: updated },
//                   }));
//                 }}
//                 className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//               />
//               <DeleteBtn
//                 onClick={() => {
//                   const updated = [...data.cautionNote.points];
//                   updated.splice(i, 1);
//                   setData((prev) => ({
//                     ...prev,
//                     cautionNote: { ...prev.cautionNote, points: updated },
//                   }));
//                 }}
//               />
//             </div>
//           ))}
//           <AddBtn
//             onClick={() =>
//               setData((prev) => ({
//                 ...prev,
//                 cautionNote: {
//                   ...prev.cautionNote,
//                   points: [...prev.cautionNote.points, ""],
//                 },
//               }))
//             }
//           />
//         </Section>

//         {/* CTA SECTION */}
//         <Section title="CTA Section">
//           <Input
//             label="Title"
//             value={data.ctaSection.title}
//             onChange={(e) =>
//               handleChange("ctaSection", "title", e.target.value)
//             }
//           />
//           <Textarea
//             label="Description"
//             value={data.ctaSection.description}
//             onChange={(e) =>
//               handleChange("ctaSection", "description", e.target.value)
//             }
//           />
//           <Input
//             label="Button Text"
//             value={data.ctaSection.buttonText}
//             onChange={(e) =>
//               handleChange("ctaSection", "buttonText", e.target.value)
//             }
//           />
//           <Input
//             label="Button Link"
//             value={data.ctaSection.buttonLink}
//             onChange={(e) =>
//               handleChange("ctaSection", "buttonLink", e.target.value)
//             }
//           />
//         </Section>

//         {/* SAVE BUTTON */}
//         <div className="text-center">
//           <button
//             onClick={handleSave}
//             disabled={saving}
//             className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition disabled:opacity-60"
//           >
//             {saving ? "Saving..." : "Save All Changes"}
//           </button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminServices;

// /* ========== REUSABLE UI COMPONENTS ========== */
// const Section = ({ title, children }) => (
//   <div className="bg-white shadow-md rounded-2xl p-5">
//     <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
//     {children}
//   </div>
// );

// const Input = ({ label, value, onChange }) => (
//   <div className="mb-3">
//     <label className="block text-sm font-medium text-gray-600">{label}</label>
//     <input
//       type="text"
//       value={value || ""}
//       onChange={onChange}
//       className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//     />
//   </div>
// );

// const Textarea = ({ label, value, onChange }) => (
//   <div className="mb-3">
//     <label className="block text-sm font-medium text-gray-600">{label}</label>
//     <textarea
//       rows="3"
//       value={value || ""}
//       onChange={onChange}
//       className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
//     ></textarea>
//   </div>
// );

// const Card = ({ children }) => (
//   <div className="border border-gray-200 p-4 rounded-lg mb-4 bg-gray-50">
//     {children}
//   </div>
// );

// const AddBtn = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="mt-2 px-4 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700"
//   >
//     + Add Item
//   </button>
// );

// const DeleteBtn = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="ml-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
//   >
//     Delete
//   </button>
// );

// const Checkbox = ({ label, checked, onChange }) => (
//   <label className="flex items-center gap-2 text-sm text-gray-700">
//     <input type="checkbox" checked={checked} onChange={onChange} />
//     {label}
//   </label>
// );

// const ArrayList = ({
//   data,
//   section,
//   handleArrayChange,
//   handleRemoveItem,
//   handleAddItem,
// }) => (
//   <div>
//     {data.map((item, i) => (
//       <Card key={i}>
//         <Input
//           label="Text"
//           value={item.text}
//           onChange={(e) =>
//             handleArrayChange(section, i, "text", e.target.value)
//           }
//         />
//         <Input
//           label="Icon"
//           value={item.icon}
//           onChange={(e) =>
//             handleArrayChange(section, i, "icon", e.target.value)
//           }
//         />
//         <DeleteBtn onClick={() => handleRemoveItem(section, i)} />
//       </Card>
//     ))}
//     <AddBtn
//       onClick={() =>
//         handleAddItem(section, {
//           text: "",
//           icon: "",
//         })
//       }
//     />
//   </div>
// );
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import AdminNavbar from "./AdminNavbar";
import Loading from "../../Components/Loading";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

const AdminServices = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resetting, setResetting] = useState(false);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/services`, {
          method: "GET",
          credentials: "include",
        });
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Generic field change
  const handleChange = (section, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // Array manipulation helpers
  const handleArrayChange = (section, index, field, value) => {
    setData((prev) => {
      const arr = [...prev[section]];
      arr[index][field] = value;
      return { ...prev, [section]: arr };
    });
  };

  const handleAddItem = (section, template) => {
    setData((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const handleRemoveItem = (section, index) => {
    setData((prev) => {
      const arr = [...prev[section]];
      arr.splice(index, 1);
      return { ...prev, [section]: arr };
    });
  };

  // Save all
  const handleSave = async () => {
    try {
      setSaving(true);
      const res = await fetch(`${API_URL}/services`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      alert(json.message || "Updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    } finally {
      setSaving(false);
    }
  };

  // Reset to default
  const handleReset = async () => {
    if (!window.confirm("Are you sure you want to reset to default?")) return;
    try {
      setResetting(true);
      const res = await fetch(`${API_URL}/services/reset`, {
        method: "POST",
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        alert("Services page has been reset to default!");
      } else {
        alert("Failed to reset");
      }
    } catch (err) {
      console.error(err);
      alert("Error resetting data");
    } finally {
      setResetting(false);
    }
  };

  if (loading || !data) return <Loading />;

  return (
    <Layout hideNav>
      <AdminNavbar />
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Services Page Editor
        </h1>

        {/* RESET BUTTON */}
        {/* <div className="text-center mb-6">
            <button
              onClick={handleReset}
              disabled={resetting}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-60"
            >
              {resetting ? "Resetting..." : "Reset to Default"}
            </button>
          </div> */}

        {/* HERO SECTION */}
        <Section title="Hero Section">
          <Input
            label="Title"
            value={data.hero.title}
            onChange={(e) => handleChange("hero", "title", e.target.value)}
          />
          <Input
            label="Subtitle"
            value={data.hero.subtitle}
            onChange={(e) => handleChange("hero", "subtitle", e.target.value)}
          />
          <Input
            label="Image URL"
            value={data.hero.image}
            onChange={(e) => handleChange("hero", "image", e.target.value)}
          />
        </Section>

        {/* SECTION HEADINGS */}
        <Section title="Section Headings">
          <Input
            label="Services"
            value={data.sectionHeadings.services}
            onChange={(e) =>
              handleChange("sectionHeadings", "services", e.target.value)
            }
          />
          <Input
            label="Method"
            value={data.sectionHeadings.method}
            onChange={(e) =>
              handleChange("sectionHeadings", "method", e.target.value)
            }
          />
          <Input
            label="Benefits"
            value={data.sectionHeadings.benefits}
            onChange={(e) =>
              handleChange("sectionHeadings", "benefits", e.target.value)
            }
          />
        </Section>

        {/* SERVICE CARDS */}
        <Section title="Service Cards">
          {data.serviceCards.map((card, i) => (
            <Card key={i}>
              <Input
                label="Title"
                value={card.title}
                onChange={(e) =>
                  handleArrayChange("serviceCards", i, "title", e.target.value)
                }
              />
              <Textarea
                label="Description"
                value={card.description}
                onChange={(e) =>
                  handleArrayChange(
                    "serviceCards",
                    i,
                    "description",
                    e.target.value
                  )
                }
              />
              <Input
                label="Link"
                value={card.link}
                onChange={(e) =>
                  handleArrayChange("serviceCards", i, "link", e.target.value)
                }
              />
              <DeleteBtn onClick={() => handleRemoveItem("serviceCards", i)} />
            </Card>
          ))}
          <AddBtn
            onClick={() =>
              handleAddItem("serviceCards", {
                title: "",
                description: "",
                link: "",
              })
            }
          />
        </Section>

        {/* METHOD STEPS */}
        <Section title="Method Steps">
          {data.methodSteps.map((step, i) => (
            <Card key={i}>
              <Input
                label="Step"
                value={step.step}
                onChange={(e) =>
                  handleArrayChange("methodSteps", i, "step", e.target.value)
                }
              />
              <Input
                label="Detail"
                value={step.detail}
                onChange={(e) =>
                  handleArrayChange("methodSteps", i, "detail", e.target.value)
                }
              />
              <Input
                label="Purpose"
                value={step.purpose}
                onChange={(e) =>
                  handleArrayChange("methodSteps", i, "purpose", e.target.value)
                }
              />
              <Checkbox
                label="Is Caution?"
                checked={step.isCaution}
                onChange={(e) =>
                  handleArrayChange(
                    "methodSteps",
                    i,
                    "isCaution",
                    e.target.checked
                  )
                }
              />
              <DeleteBtn onClick={() => handleRemoveItem("methodSteps", i)} />
            </Card>
          ))}
          <AddBtn
            onClick={() =>
              handleAddItem("methodSteps", {
                step: "",
                detail: "",
                purpose: "",
                isCaution: false,
              })
            }
          />
        </Section>

        {/* BENEFITS LISTS */}
        <Section title="Benefits List 1">
          <ArrayList
            data={data.benefitsList1}
            section="benefitsList1"
            handleArrayChange={handleArrayChange}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
        </Section>

        <Section title="Benefits List 2">
          <ArrayList
            data={data.benefitsList2}
            section="benefitsList2"
            handleArrayChange={handleArrayChange}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
        </Section>

        {/* CAUTION NOTE */}
        <Section title="Caution Note">
          <Input
            label="Title"
            value={data.cautionNote.title}
            onChange={(e) =>
              handleChange("cautionNote", "title", e.target.value)
            }
          />
          {data.cautionNote.points.map((point, i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={point}
                onChange={(e) => {
                  const updated = [...data.cautionNote.points];
                  updated[i] = e.target.value;
                  setData((prev) => ({
                    ...prev,
                    cautionNote: { ...prev.cautionNote, points: updated },
                  }));
                }}
                className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
              />
              <DeleteBtn
                onClick={() => {
                  const updated = [...data.cautionNote.points];
                  updated.splice(i, 1);
                  setData((prev) => ({
                    ...prev,
                    cautionNote: { ...prev.cautionNote, points: updated },
                  }));
                }}
              />
            </div>
          ))}
          <AddBtn
            onClick={() =>
              setData((prev) => ({
                ...prev,
                cautionNote: {
                  ...prev.cautionNote,
                  points: [...prev.cautionNote.points, ""],
                },
              }))
            }
          />
        </Section>

        {/* CTA SECTION */}
        <Section title="CTA Section">
          <Input
            label="Title"
            value={data.ctaSection.title}
            onChange={(e) =>
              handleChange("ctaSection", "title", e.target.value)
            }
          />
          <Textarea
            label="Description"
            value={data.ctaSection.description}
            onChange={(e) =>
              handleChange("ctaSection", "description", e.target.value)
            }
          />
          <Input
            label="Button Text"
            value={data.ctaSection.buttonText}
            onChange={(e) =>
              handleChange("ctaSection", "buttonText", e.target.value)
            }
          />
          <Input
            label="Button Link"
            value={data.ctaSection.buttonLink}
            onChange={(e) =>
              handleChange("ctaSection", "buttonLink", e.target.value)
            }
          />
        </Section>

        {/* SAVE BUTTON */}
        <div className="text-center">
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save All Changes"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AdminServices;

/* ========== REUSABLE UI COMPONENTS ========== */
const Section = ({ title, children }) => (
  <div className="bg-white shadow-md rounded-2xl p-5">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
    {children}
  </div>
);

const Input = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type="text"
      value={value || ""}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
    />
  </div>
);

const Textarea = ({ label, value, onChange }) => (
  <div className="mb-3">
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <textarea
      rows="3"
      value={value || ""}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded bg-white text-gray-800"
    ></textarea>
  </div>
);

const Card = ({ children }) => (
  <div className="border border-gray-200 p-4 rounded-lg mb-4 bg-gray-50">
    {children}
  </div>
);

const AddBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-2 px-4 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700"
  >
    + Add Item
  </button>
);

const DeleteBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    className="ml-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
  >
    Delete
  </button>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 text-sm text-gray-700">
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

const ArrayList = ({
  data,
  section,
  handleArrayChange,
  handleRemoveItem,
  handleAddItem,
}) => (
  <div>
    {data.map((item, i) => (
      <Card key={i}>
        <Input
          label="Text"
          value={item.text}
          onChange={(e) =>
            handleArrayChange(section, i, "text", e.target.value)
          }
        />
        <DeleteBtn onClick={() => handleRemoveItem(section, i)} />
      </Card>
    ))}
    <AddBtn onClick={() => handleAddItem(section, { text: "" })} />
  </div>
);
