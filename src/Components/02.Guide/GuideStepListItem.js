import React from "react";
export default function GuideStepListItem({ data }) {
  const viewDetails = data.courseLocation ? <b>View Details</b> : "";
  const courseLocation = data.courseLocation ? (
    <div>
      <b>Course Location: </b> {data.courseLocation}
    </div>
  ) : (
    ""
  );
  const courseDates = data.courseDates ? (
    <div>
      <b>Course Dates: </b> {data.courseLocation}
    </div>
  ) : (
    ""
  );
  const className = data.type
    ? "guide-step-list-item-document-img"
    : data.img
    ? "guide-step-list-item-with-img"
    : "guide-step-list-item";
  const backGroundImg = data.img ? (
    <img
      className="guide-step-list-item-img"
      src={data.img}
      alt={`${data.img}logo`}
    ></img>
  ) : (
    ""
  );
  const headerClass = data.img
    ? "guide-step-list-item-header-with-img"
    : "guide-step-list-item-header";
  return (
    <div className={className}>
      <div className={headerClass}>{data.header}</div>
      <div>{courseLocation}</div>
      <div>{courseDates}</div>
      <div className="guide-step-list-item-view-details">{viewDetails}</div>
      {backGroundImg}
    </div>
  );
}
