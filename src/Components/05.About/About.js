import React from "react";
import AboutElement from "./AboutElement";

export default function About(props) {
  const aboutElements = props.data.map((el) => <AboutElement data={el} />);
  return <div className="about-section">{aboutElements}</div>;
}
