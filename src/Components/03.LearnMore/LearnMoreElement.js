import React from "react";

export default function LearnMoreElement({ data }) {
  return (
    <div className="learn-more-el">
      <div>
        <img src={data.img} alt="Logo" />
      </div>
      <div className="learn-more-el-title">{data.title}</div>
      <div className="learn-more-el-description">{data.description}</div>
      <button className="learn-more-el-button">Learn More</button>
    </div>
  );
}
