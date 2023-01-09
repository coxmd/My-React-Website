import React from "react";
import Works from "./Works";
import "./work.css";

function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Porfolio</h2>
      <span className="section__subtitle">Most recent projects</span>

      <Works />
    </section>
  );
}

export default Work;
