import React from "react";
import GuideStepListItem from "./GuideStepListItem";
export default function GuideStep({ num, headerText, data }) {
  const [unpackedData] = [...data];
  const backgroundImg = unpackedData.type
    ? {
        borderRadius: 8,
        backgroundImage: `url(${unpackedData.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }
    : {};
  const imgWrapp = unpackedData.type ? "guide-step-img" : "guide-step-list";
  const content = unpackedData.type
    ? ""
    : data
    ? data.map((el) => {
        return <GuideStepListItem data={el} />;
      })
    : "";
  return (
    <div className="guide-step">
      <div className="guide-step-header">
        {num}. {headerText}
      </div>
      <div className={imgWrapp} style={backgroundImg}>
        {content}
      </div>
    </div>
  );
}
