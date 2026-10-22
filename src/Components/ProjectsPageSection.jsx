import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images by category
const shutter = Object.values(
  import.meta.glob("/src/assets/gallery/shutter/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

// console.log(shutter)

const Sunshade = Object.values(
  import.meta.glob("/src/assets/gallery/sunshade/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const Stairs = Object.values(
  import.meta.glob("/src/assets/gallery/stairs/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const Mezzanine = Object.values(
  import.meta.glob("/src/assets/gallery/Mejaine/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const Glass = Object.values(
  import.meta.glob("/src/assets/gallery/Carpentry/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const others = Object.values(
  import.meta.glob("/src/assets/gallery/others/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

const GallerySection = () => {
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState("shutter");

  // ✅ Category map
  const categories = {
    shutter,
    Sunshade,
    Stairs,
    Mezzanine,
    Glass,
    others
  };

  const images = categories[active];

  return (
    <section className="relative w-full bg-[#070F15] py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[#4AA3C8]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
            Our Portfolio
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-extrabold">
            PROJECT GALLERY
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-6">
            Premium rolling shutter, sunshade, and fabrication works across UAE.
          </p>
        </div>

        {/* ✅ CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm uppercase tracking-wider rounded-full transition ${active === cat
                ? "bg-[#4AA3C8] text-white"
                : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* ✅ MASONRY GRID WITH ANIMATION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="break-inside-avoid overflow-hidden rounded-md cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img}
                  alt={`${active}-gallery-${i}`}
                  loading="lazy"
                  className="w-full hover:scale-110 transition duration-700 ease-out"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ✅ LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="max-w-5xl max-h-[90vh] w-full object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default GallerySection;


// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Load images
// const images = Object.values(
//   import.meta.glob("/src/assets/gallary/*.{jpg,jpeg,png,webp}", {
//     eager: true,
//     as: "url",
//   })
// );

// // Random layout generator (for better "rearranged" feel)
// const getSpan = (i) => {
//   const patterns = [
//     "row-span-1 col-span-1",
//     "row-span-1 col-span-2",
//     "row-span-2 col-span-1",
//     "row-span-2 col-span-2",
//   ];
//   return patterns[i % patterns.length];
// };

// const GallerySection = () => {
//   const [selected, setSelected] = useState(null);
//   const [index, setIndex] = useState(0);

//   const openImage = (img, i) => {
//     setSelected(img);
//     setIndex(i);
//   };

//   const nextImage = (e) => {
//     e.stopPropagation();
//     const next = (index + 1) % images.length;
//     setIndex(next);
//     setSelected(images[next]);
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     const prev = (index - 1 + images.length) % images.length;
//     setIndex(prev);
//     setSelected(images[prev]);
//   };

//   return (
//     <section className="relative w-full bg-[#070F15] py-24 overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D546C12_1px,transparent_1px),linear-gradient(to_bottom,#1D546C12_1px,transparent_1px)] bg-[size:80px_80px]" />
//         <div className="absolute inset-0 bg-[#4AA3C8]/10 blur-[180px]" />
//       </div>

//       <div className="relative z-10 container mx-auto px-6 lg:px-20">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-[#4AA3C8] uppercase tracking-[0.5em] text-xs font-semibold mb-4">
//             Our Portfolio
//           </p>

//           <h2 className="text-white text-4xl md:text-6xl font-extrabold">
//             PROJECT GALLERY
//           </h2>

//           <p className="text-white/60 max-w-2xl mx-auto mt-6">
//             Premium rolling shutter, sunshade, and fabrication works across UAE.
//           </p>
//         </div>

//         {/* GRID MASONRY */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">

//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.03 }}
//               viewport={{ once: true }}
//               className={`relative overflow-hidden rounded-xl cursor-pointer group ${getSpan(i)}`}
//               onClick={() => openImage(img, i)}
//             >
//               <img
//                 src={img}
//                 alt={`gallery-${i}`}
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

//               {/* Glow border effect */}
//               <div className="absolute inset-0 ring-1 ring-white/10 group-hover:ring-[#4AA3C8]/40 transition" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* LIGHTBOX */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             {/* Prev */}
//             <button
//               onClick={prevImage}
//               className="absolute left-6 text-white text-3xl"
//             >
//               ‹
//             </button>

//             {/* Image */}
//             <motion.img
//               src={selected}
//               className="max-w-5xl max-h-[90vh] w-full object-contain rounded-lg shadow-2xl"
//               initial={{ scale: 0.85 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.85 }}
//             />

//             {/* Next */}
//             <button
//               onClick={nextImage}
//               className="absolute right-6 text-white text-3xl"
//             >
//               ›
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// };

// export default GallerySection;