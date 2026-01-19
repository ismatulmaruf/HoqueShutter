import React from "react";
import Layout from "../Layout/Layout";
import ContactHero from "../Components/ContactHero";
import ContactWhy from "../Components/ContactWhy.jsx";
import Contact from "../Components/ContactSection.jsx";


export default function HomePage() {
  return (
    <Layout>
      <ContactHero />
      <ContactWhy />
      <Contact />
    </Layout>
  );
}
