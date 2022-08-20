import React from "react";

export default function CoursesSuggestionRightBlockElement(props) {
  const reverse = props.data.type ? "reverse" : "";
  const reverseFade = props.data.type
    ? {
        backgroundImage: `radial-gradient(50% 50% at 38% 50%, rgba(255, 255, 255, 0) 33%, rgb(255, 255, 255) 130.1%),url(${props.data.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "4px",
      }
    : {
        backgroundImage: `linear-gradient(270deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 96%),url(${props.data.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div className={`courses-suggestion-right-block-element ${reverse}`}>
      <div className="courses-suggestion-element-text-right">
        <div className="courses-suggestion-element-header-1">
          {props.data.firstHeader}
        </div>
        <div className="courses-suggestion-element-header-2">
          {props.data.secondHeader}
        </div>
        <div className="courses-suggestion-right-block-element-main-text">
          {props.data.mainText}
        </div>
        <div className="courses-suggestion-element-link">
          {props.data.linkText}
        </div>
      </div>
      <div
        className="courses-suggestion-right-block-element-img"
        style={reverseFade}
      ></div>
    </div>
  );
}
