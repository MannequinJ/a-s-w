import React from "react";

export default function FooterAccessabilityImg({ data }) {
  return (
    <div>
      <img src={data.img} alt={`${data.img}logo`}></img>
    </div>
  );
}
