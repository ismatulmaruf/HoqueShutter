import React from "react";
import Layout from "../Layout/Layout";
import Contact from "../Components/ContactSection.jsx";
import ProjectsHero from "../Components/ProjectsHero.jsx";
import ProjectsPageSection from "../Components/ProjectsPageSection.jsx";
import { Helmet } from "react-helmet-async";


export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Our Projects | Rolling Shutter & Sunshade Parda Work in Dubai & UAE</title>

        <meta
          name="description"
          content="Explore our completed rolling shutter and sunshade parda projects across Dubai, Abu Dhabi, and UAE. See real installations for shops, warehouses, and homes by Hoque Technical."
        />

        <meta
          name="keywords"
          content="rolling shutter projects Dubai, sunshade parda projects UAE, shutter installation portfolio Dubai, shop shutter projects UAE, sunshade installation Dubai, Hoque Technical projects UAE"
        />

        <link
          rel="canonical"
          href="https://hoquetechnical.com/projects"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Our Projects | Rolling Shutter & Sunshade Parda UAE" />
        <meta property="og:description" content="View real rolling shutter and sunshade parda installations across UAE. Trusted work by Hoque Technical." />
        <meta property="og:url" content="https://hoquetechnical.com/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ProjectsHero />
      <ProjectsPageSection />
      <Contact />
    </Layout>
  );
}
