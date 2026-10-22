import React from "react";
import Layout from "../Layout/Layout";
import ContactHero from "../Components/ContactHero";
import ContactWhy from "../Components/ContactWhy.jsx";
import Contact from "../Components/ContactSection.jsx";
import LocationSection  from "../Components/LocationSection .jsx";
import { Helmet } from "react-helmet-async";


export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Rolling Shutter & Sunshade Parda Services in Dubai & UAE</title>

        <meta
          name="description"
          content="Contact Hoque Technical for rolling shutter and sunshade parda installation in Dubai, Abu Dhabi & across UAE. Call now for fast service, quotes & expert support."
        />

        <meta
          name="keywords"
          content="contact rolling shutter Dubai, shutter service UAE contact, sunshade parda Dubai contact, Hoque Technical UAE phone number, shutter installation Dubai contact"
        />

        <link
          rel="canonical"
          href="https://hoquetechnical.com/contact"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Hoque Technical UAE | Rolling Shutter & Sunshade Experts" />
        <meta property="og:description" content="Get in touch for professional rolling shutter & sunshade parda services across UAE. Fast response and reliable installation." />
        <meta property="og:url" content="https://hoquetechnical.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ContactHero />
      <ContactWhy />
      <Contact />
      <LocationSection  />
    </Layout>
  );
}
