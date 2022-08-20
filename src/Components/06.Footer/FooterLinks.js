import React from "react";

export default function FooterLinks(props) {
  const classes = props.data.type
    ? "footer-link"
    : "footer-link cursor-pointer";
  return (
    <div className="footer-links">
      <div className="footer-links-header">{props.data.header}</div>
      <div className={classes}>{props.data.string_1}</div>
      <div className={classes}>{props.data.string_2}</div>
      <div className={classes}>{props.data.string_3}</div>
      <div className={classes}>{props.data.string_4}</div>
      <div className={classes}>{props.data.string_5}</div>
    </div>
  );
}
