import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import Services from "./Pages/Services";
import FloatingButtons from "./Components/FloatingButtons.jsx";


import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";


import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingButtons />
    </>
  );
}

export default App;
