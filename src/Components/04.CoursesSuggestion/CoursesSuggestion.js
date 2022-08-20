import React from "react";
import CoursesSuggestionRightBlockElement from "./CoursesSuggestionRightBlockElement";
import CoursesSuggestionLeftBlockElement from "./CoursesSuggestionLeftBlockElement";

export default function CoursesSuggestion(props) {
  const coursesSuggestionRightBlockElements = props.rightBlockData.map((el) => (
    <CoursesSuggestionRightBlockElement data={el} />
  ));
  const coursesSuggestionLeftBlockElement = props.leftBlockData.map((el) => (
    <CoursesSuggestionLeftBlockElement data={el} />
  ));
  return (
    <div className="courses-suggestion">
      <div className="courses-suggestion-left-block">
        {coursesSuggestionLeftBlockElement}
      </div>
      <div className="courses-suggestion-right-block">
        {coursesSuggestionRightBlockElements}
      </div>
    </div>
  );
}
