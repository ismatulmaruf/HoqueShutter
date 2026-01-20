import React from "react";
import Layout from "../Layout/Layout";
import ContactHero from "../Components/ContactHero";
// import ServiceHighlight  from "../Components/ServiceHighlight.jsx";
import Contact from "../Components/ContactSection.jsx";
import ServicesHero from "../Components/ServiceHero.jsx";
import ServicesPageSection from "../Components/ServicesPageSection.jsx";


export default function HomePage() {
  return (
    <Layout>
      <ServicesHero />
      {/* <ServiceHighlight  /> */}
      <ServicesPageSection  />
      <Contact />
    </Layout>
  );
}
