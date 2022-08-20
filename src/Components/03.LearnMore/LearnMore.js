import React from "react";
import LearnMoreElement from "./LearnMoreElement";
export default function LearnMore(props) {
  const learnMoreElements = props.data.map((el) => (
    <LearnMoreElement data={el} />
  ));

  return <div className="learn-more">{learnMoreElements}</div>;
}
