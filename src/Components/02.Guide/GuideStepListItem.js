import React from "react";
export default function GuideStepListItem({ data }) {
  const className = data.img
    ? "guide-step-list-item-with-img"
    : "guide-step-list-item";
  return (
    <div className={className}>
      <div className="guide-step-list-item-header">{data.title}</div>
      {!data.img && (
        <div className="guide-step-list-item-text-row-container">
          <div className="bold">Course Location:</div>
          {data.courseLocation}
        </div>
      )}
      {!data.img && (
        <div className="guide-step-list-item-text-row-container">
          <div className="bold">Course Dates:</div>
          {data.courseDates}
        </div>
      )}
      {!data.img && (
        <div className="guide-step-list-item-view-details">
          <div className="bold">View Details</div>
        </div>
      )}
      {data.img && (
        <img
          className="guide-step-list-item-img"
          src={data.img}
          alt={`${data.img}logo`}
        />
      )}
    </div>
  );
}
