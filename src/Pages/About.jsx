import React from "react";
import Layout from "../Layout/Layout";
import AboutHero from "../Components/AboutHero.jsx";
import Contact from "../Components/ContactSection.jsx";
import AboutSection from "../Components/AboutSection.jsx";
import TestimonialSection from "../Components/TestimonialSection.jsx";
import AboutFaqs from "../Components/AboutFaqs.jsx";
import { Helmet } from "react-helmet-async";


export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Rolling Shutter & Sunshade Parda Services in Dubai & UAE</title>

        <meta
          name="description"
          content="About Hoque Technical for rolling shutter and sunshade parda installation in Dubai, Abu Dhabi & across UAE. Call now for fast service, quotes & expert support."
        />

        <meta
          name="keywords"
          content="about rolling shutter Dubai, shutter service UAE contact, sunshade parda Dubai contact, Hoque Technical UAE phone number, shutter installation Dubai contact"
        />

        <link
          rel="canonical"
          href="https://hoquetechnical.com/aboout"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Hoque Technical UAE | Rolling Shutter & Sunshade Experts" />
        <meta property="og:description" content="Get in touch for professional rolling shutter & sunshade parda services across UAE. Fast response and reliable installation." />
        <meta property="og:url" content="https://hoquetechnical.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <AboutHero />
      <AboutSection />
      <TestimonialSection />
      <AboutFaqs />
      <Contact />
    </Layout>
  );
}
