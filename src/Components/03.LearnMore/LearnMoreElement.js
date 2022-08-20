import React from "react";

export default function LearnMoreElement(props) {
  return (
    <div className="learn-more-el">
      <div>
        <img src={props.data.img} alt="Logo" />
      </div>
      <div className="learn-more-el-header">{props.data.header}</div>
      <div className="learn-more-el-main-text">{props.data.mainText}</div>
      <button className="learn-more-el-button">Learn More</button>
    </div>
  );
}
