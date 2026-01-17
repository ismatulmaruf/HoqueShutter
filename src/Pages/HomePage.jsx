import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Components/Hero.jsx"
import ServiceSection from "../Components/ServiceSection.jsx"
import AboutSection from "../Components/AboutSection.jsx"
import ContactSection from "../Components/ContactSection.jsx"
import WhySection from "../Components/WhySectionSection.jsx"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <WhySection />
    </Layout>
  );
}
