import Layout from "../../Layout/Layout";
import React from "react";
import AdminNavbar from "./AdminNavbar.jsx";
import { FaUserShield, FaCode, FaEnvelope } from "react-icons/fa";

export default function AdminHomeEditor() {
  return (
    <Layout hideNav>
      <AdminNavbar />

      <div className="w-full min-h-screen flex items-center justify-center bg-[${LIGHT_GREY}] md:p-6 py-4 px-2">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10 text-center border border-[${TEXT_DARK}]/30">
          {/* Title */}
          <h1 className="text-4xl font-extrabold" style={{ color: "#006973" }}>
            <FaUserShield className="inline-block mr-2 mb-1" size={32} />
            Welcome to Admin Panel
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "#333333" }}
          >
            You are currently inside the admin dashboard. Here you can update
            and manage all dynamic contents of your website. Use the navigation
            bar to edit pages, upload media, and manage settings.
          </p>

          {/* Developer Info Box */}
          <div
            className="mt-8 p-4 rounded-xl border"
            style={{ backgroundColor: "#E5E5E5", borderColor: "#33333380" }}
          >
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "#006973" }}
            >
              <FaCode className="inline-block mr-2 mb-1" />
              Developed By
            </h2>

            <p style={{ color: "#333333" }}>
              This website is developed by{" "}
              <strong style={{ color: "#D4AF37" }}>xisly.net</strong>.
            </p>

            <p
              className="flex justify-center items-center gap-2 mt-2"
              style={{ color: "#333333" }}
            >
              <FaEnvelope /> support@xisly.net
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
