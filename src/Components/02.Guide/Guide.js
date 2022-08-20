import React from "react";
import GuideStep from "./GuideStep";
import { CONSTANTS } from "../../Constants";
export default function Guide() {
  return (
    <div
      className="guide"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(246, 249, 252, 0) 0%, #F6F9FC 130%), 
        url(/images/02-guide/ami-homepage-main-image.svg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="guide-text">
        <div className="guide-header-text">ANY COURSE. ANYTIME. ANYWHERE.</div>
        <div className="guide-intro-text">
          Take the medical, dental or nursing continuing education course of
          your choice, when and where you like. How it works:
        </div>
      </div>
      <div className="guide-steps-block">
        <GuideStep
          num={1}
          headerText={"Choose Any Course"}
          data={CONSTANTS.coursesList}
        />
        <GuideStep
          num={2}
          headerText={"Choose Anytime & Place"}
          data={CONSTANTS.placesList}
        />
        <GuideStep
          num={3}
          headerText={"We Fully Document it All"}
          data={CONSTANTS.document}
        />
      </div>
    </div>
  );
}
