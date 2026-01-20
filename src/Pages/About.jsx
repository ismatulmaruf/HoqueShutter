import React from "react";
import Layout from "../Layout/Layout";
import AboutHero from "../Components/AboutHero.jsx";
import Contact from "../Components/ContactSection.jsx";
import AboutSection from "../Components/AboutSection.jsx";


export default function HomePage() {
  return (
    <Layout>
      <AboutHero />
      <AboutSection />
      <Contact />
    </Layout>
  );
}
