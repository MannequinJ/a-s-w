import React from "react";
import "./About.css";
import AboutElement from "./AboutElement";

export default function About() {
  const aboutSectionAPI = {
    name: "about",
    data: [
      {
        img: "/images/05-about/questionmark-logo.svg",
        title: `FAQ’s`,
        description: `Explore FAQ’s`,
      },
      {
        img: "/images/05-about/medical-logo.svg",
        title: "Why ASI?",
        description: "What sets us apart ",
      },
      {
        img: "/images/05-about/speaker-logo.svg",
        title: "Testimonials",
        description: "What others are saying",
      },
    ],
  };
  const aboutElements = aboutSectionAPI.data.map((i, index) => (
    <AboutElement key={index} data={i} />
  ));
  return <div className="about-section">{aboutElements}</div>;
}
