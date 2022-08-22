import React from "react";

export default function CourseSuggestionsDiscountCourse({ num, data }) {
  const reverseFade =
    num % 2
      ? {
          backgroundImage: `radial-gradient(50% 50% at 38% 50%, rgba(255, 255, 255, 0) 33%, rgb(255, 255, 255) 130.1%),url(${data.img})`,
        }
      : {
          backgroundImage: `linear-gradient(270deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 96%),url(${data.img})`,
        };
  return (
    <div className="course-suggestions-discount-course">
      <div className="course-suggestions-discount-course-text-container">
        <div className="course-suggestions-course-title">{data.title}</div>
        <div className="course-suggestions-course-subtitle">
          {data.subtitle}
        </div>
        <div className="course-suggestions-discount-course-description">
          {data.description}
        </div>
        <div className="course-suggestions-course-link">{data.linkText}</div>
      </div>
      <div
        className="course-suggestions-discount-course-img"
        style={reverseFade}
      ></div>
    </div>
  );
}
