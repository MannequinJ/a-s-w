import React from "react";

export default function FooterAccessabilityImg(props) {
  return (
    <div>
      <img src={props.data.img} alt={`${props.data.img}logo`}></img>
    </div>
  );
}
