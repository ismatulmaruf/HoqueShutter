import React from "react";
import Layout from "../Layout/Layout";
import ContactHero from "../Components/ContactHero";
// import ServiceHighlight  from "../Components/ServiceHighlight.jsx";
import Contact from "../Components/ContactSection.jsx";
import ServicesHero from "../Components/ServiceHero.jsx";
import ServicesPageSection from "../Components/ServicesPageSection.jsx";
import { Helmet } from "react-helmet-async";


export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Rolling Shutter & Sunshade Parda Services in Dubai | Hoque Technical UAE</title>

        <meta
          name="description"
          content="Expert rolling shutter and sunshade parda installation in Dubai, Abu Dhabi & across UAE. We provide automatic shutters, shop security solutions & modern sunshade systems."
        />

        <meta
          name="keywords"
          content="rolling shutter Dubai, sunshade parda UAE, automatic shutter Dubai, shop shutter UAE, shutter repair Dubai, sunshade curtain Dubai, UAE shutter service"
        />

        <link
          rel="canonical"
          href="https://hoquetechnical.com/services"
        />
      </Helmet>
      <ServicesHero />
      {/* <ServiceHighlight  /> */}
      <ServicesPageSection />
      <Contact />
    </Layout>
  );
}
