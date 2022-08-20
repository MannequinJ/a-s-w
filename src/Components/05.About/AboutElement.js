import React from "react";

export default function AboutElement(props) {
  const backgroundImg = {
    borderRadius: 8,
    backgroundImage: `url(${props.data.img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="about-element">
      <div className="about-element-logo">
        <img src={props.data.img} alt="logo" />
      </div>
      <div className="about-element-textarea">
        <div className="about-element-header">{props.data.header}</div>
        <div className="about-element-text">{props.data.text}</div>
      </div>
    </div>
  );
}
