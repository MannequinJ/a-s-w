import React from "react";

export default function CoursesSuggestionLeftBlockElement(props) {
  const backgroundImg = {
    borderRadius: 8,
    backgroundImage: `url(${props.data.img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div className="courses-suggestion-left-block-element">
      <div className="courses-suggestion-element-text-left">
        <div className="courses-suggestion-element-header-1">
          {props.data.firstHeader}
        </div>
        <div className="courses-suggestion-element-header-2">
          {props.data.secondHeader}
        </div>
        <div className="courses-suggestion-left-block-element-main-text">
          {props.data.mainText}
        </div>
        <div className="courses-suggestion-element-link">
          {props.data.linkText}
        </div>
      </div>

      <div
        className="courses-suggestion-left-block-element-img"
        style={backgroundImg}
      >
        {/* <img src={props.data.img} alt="X-RAY" /> */}
      </div>
    </div>
  );
}
