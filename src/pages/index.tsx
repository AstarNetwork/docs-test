import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "./index.scss";
import { FooterIcons } from "../components/FooterIcons";
import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="landing-section">
      <div className="title-section">
        <h1>Welcome to Astar</h1>
        <p>{siteConfig.tagline}</p>
      </div>
      <SearchBox />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Astar Network Official Documentation Portal - User Guides, Tutorials, and Tools for Developers."
    >
      <img src="/img/background.svg" className="bg-image" />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <FooterIcons />
    </Layout>
  );
}
