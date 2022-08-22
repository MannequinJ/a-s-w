import React from "react";
import "./Guide.css";
import GuideStepsContainer from "./GuideStepsContainter";
export default function Guide() {
  const guideAPI = [
    {
      name: "coursesList",
      title: "Choose Any Course",
      data: [
        {
          title: "ADDICTION",
          courseLocation: "Online",
          courseDates: "February 14 - February 23, 2022",
        },
        {
          title: "PEDIATRIC DENTAL CARE",
          courseLocation: "Online",
          courseDates: "March 12 - April 11, 2022",
        },
        {
          title: "CLINICAL PHARMACOLOGY",
          courseLocation: "Online",
          courseDates: "June 1 - July 2, 2022",
        },
      ],
    },
    {
      name: "placesList",
      title: "Choose Anytime & Place",
      data: [
        {
          title: "Aspen, Colorado",
          img: "/images/02-guide/colorado.svg",
        },
        {
          title: "Hilo, Hawaii",
          img: "/images/02-guide/hawaii.svg",
        },
        {
          title: "Paris, France",
          img: "/images/02-guide/paris.svg",
        },
      ],
    },
    {
      name: "document",
      title: "We Fully Document it All",
      data: {
        img: "/images/02-guide/document.svg",
      },
    },
  ];
  return (
    <div className="guide ">
      <div className="guide-text">
        <div className="guide-header-text">ANY COURSE. ANYTIME. ANYWHERE.</div>
        <div className="guide-intro-text">
          Take the medical, dental or nursing continuing education course of
          your choice, when and where you like. How it works:
        </div>
      </div>
      {<GuideStepsContainer data={guideAPI} />}
    </div>
  );
}
