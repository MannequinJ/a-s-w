import React from "react";
import GuideStepListItem from "./GuideStepListItem";
export default function GuideStep({ num, data }) {
  const backgroundImageStatus = data.name !== "document";
  return (
    <div className="guide-step">
      <div className="guide-step-header">
        {num}. {data.title}
      </div>
      <div
        className="guide-step-list"
        style={{ backgroundImage: `url(${data.data.img})` }}
      >
        {backgroundImageStatus &&
          data.data.map((i, index) => (
            <GuideStepListItem key={index} data={i} />
          ))}
      </div>
    </div>
  );
}
