import React from "react";

export default function CourseSuggestionsNewCourse({ data }) {
  // console.log(data);
  return (
    <div className="course-suggestions-new-course">
      <div className="course-suggestions-new-course-text-container">
        <div className="course-suggestions-course-title">{data.title}</div>
        <div className="course-suggestions-course-subtitle">
          {data.subtitle}
        </div>
        <div className="course-suggestions-new-course-description">
          {data.description}
        </div>
        <div className="course-suggestions-course-link">{data.linkText}</div>
      </div>

      <div
        className="course-suggestions-new-course-img"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      >
        {/* <img src={data.img} alt="X-RAY" /> */}
      </div>
    </div>
  );
}
