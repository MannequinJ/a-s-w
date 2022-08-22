import React from "react";
import "./LearnMore.css";
import LearnMoreElement from "./LearnMoreElement";
export default function LearnMore() {
  const learnMoreAPI = {
    name: "learnMore",
    data: [
      {
        img: "/images/03-learn-more/gear.svg",
        title: "How it Works",
        description: `ASI’s flexible, on-demand continuing educational format fits any lifestyle, any time, anywhere in the world!`,
      },
      {
        img: "/images/03-learn-more/accreditation.svg",
        title: "Accreditation",
        description: `AMA PRA Category I; AANA Approved; Provider for ADA, AGD.`,
      },
      {
        img: "/images/03-learn-more/referal.svg",
        title: "Referral",
        description: `Make up to $100 Cash for Each Refferal, Earnings Unlimited!`,
      },
    ],
  };
  const learnMoreElements = learnMoreAPI.data.map((i, index) => (
    <LearnMoreElement key={index} data={i} />
  ));

  return <div className="learn-more">{learnMoreElements}</div>;
}
