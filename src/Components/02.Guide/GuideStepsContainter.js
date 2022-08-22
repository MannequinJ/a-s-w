import React from "react";
import "./Guide.css";
import GuideStep from "./GuideStep";
export default function GuideStepsContainer({ data }) {
  const guideStepElements = data.map((i, index) => (
    <GuideStep key={index} num={++index} data={i} />
  ));
  return <div className="guide-steps-block">{guideStepElements}</div>;
}
