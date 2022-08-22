import React from "react";
import "./CourseSuggestions.css";
import CourseSuggestionsDiscountCourse from "./CourseSuggestionsDiscountCourse";
import CourseSuggestionsNewCourse from "./CourseSuggestionsNewCourse";

export default function CourseSuggestions() {
  const courseSuggestionsAPI = {
    name: "coursesSuggestion",
    data: [
      {
        title: "Radiology",
        subtitle: "New Courses",
        description: "View Continuing Education Courses just for you",
        linkText: "VIEW DETAILS",
        img: "/images/04-courses-suggestion/x-ray.svg",
      },
      {
        title: "Medical Course Specials ",
        subtitle: "Save up to $100",
        description: "Limited time offers. Check back frequently.",
        linkText: "SAVE NOW",
        img: "/images/04-courses-suggestion/medical.svg",
      },
      {
        title: "Dental Course Specials",
        subtitle: "Save up to $200",
        description: "Limited time offers. Check back frequently.",
        linkText: "SAVE NOW",
        img: "/images/04-courses-suggestion/dental.svg",
      },
    ],
  };
  const courseSuggestionsNewCourses = courseSuggestionsAPI.data.map(
    (i, index) =>
      i.linkText === "VIEW DETAILS" && (
        <CourseSuggestionsNewCourse key={index} data={i} />
      )
  );
  const courseSuggestionsDiscountCourses = courseSuggestionsAPI.data.map(
    (i, index) =>
      i.linkText !== "VIEW DETAILS" && (
        <CourseSuggestionsDiscountCourse key={index} num={++index} data={i} />
      )
  );
  return (
    <div className="course-suggestions">
      <div className="course-suggestions-new-courses">
        {courseSuggestionsNewCourses}
      </div>
      <div className="course-suggestions-discount-courses">
        {courseSuggestionsDiscountCourses}
      </div>
    </div>
  );
}
