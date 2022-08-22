import React from "react";

export default function AboutElement({ data }) {
  // const backgroundImg = {
  //   borderRadius: 8,
  //   backgroundImage: `url(${props.data.img})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };
  return (
    <div className="about-element">
      <div className="about-element-logo">
        <img src={data.img} alt="logo" />
      </div>
      <div className="about-element-textarea">
        <div className="about-element-header">{data.title}</div>
        <div className="about-element-text">{data.description}</div>
      </div>
    </div>
  );
}
