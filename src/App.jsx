import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Info from "./Pages/Info";
import FAQ from "./Pages/FAQ";
import Media from "./Pages/Media";
import Services from "./Pages/Services";
import FloatingButtons from "./Components/FloatingButtons.jsx";


import NotFound from "./Pages/NotFound";
// import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
// import ChangePassword from "./Pages/Password/ChangePassword";
// import ForgotPassword from "./Pages/Password/ForgotPassword";
// import ResetPassword from "./Pages/Password/ResetPassword";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";

import RequireAuth from "./Components/auth/RequireAuth";
// import Allusers from "./Pages/adminExam/Allusers";
// import Profile from "./Pages/User/Profile";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import PricngDashboard from "./Pages/Dashboard/PricngDashboard";
import ContactDashboard from "./Pages/Dashboard/ContactDashboard";
import ServiceDashboard from "./Pages/Dashboard/ServiceDashboard";
import AboutDashboard from "./Pages/Dashboard/AboutDashboard";
import MediaDashboard from "./Pages/Dashboard/MediaDashboard";

import AdminDashboardslide from "./Pages/Dashboard/AdminDashboardslide";
import AdminDashboardinfo from "./Pages/Dashboard/AdminDashboardinfo";
import AdminDashboardmethods from "./Pages/Dashboard/AdminDashboardmethods";
import AdminDashboardspecialist from "./Pages/Dashboard/AdminDashboardspecialist";
import FaqDashboard from "./Pages/Dashboard/FaqDashboard";
import { useSelector } from "react-redux";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const { isLoggedIn, role, data } = useSelector((state) => state.auth);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/media" element={<Media />} />
        <Route path="/services" element={<Services />} />

        <Route path="/denied" element={<Denied />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/admin" element={<Login />} />
        {/* <Route
          path="/user/profile/reset-password"
          element={<ForgotPassword />}
        /> */}
        {/* <Route
          path="/user/profile/reset-password/:resetToken"
          element={<ResetPassword />}
        /> */}

       

        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingButtons />
    </>
  );
}

export default App;
