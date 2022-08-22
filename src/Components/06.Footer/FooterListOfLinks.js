import React from "react";

export default function FooterListOfLinks({ data }) {
  // const classes = data.type ? "footer-link" : "footer-link cursor-pointer";
  return (
    <div className="footer-links">
      <div className="footer-links-header">{data.title}</div>
      {data.rows.map((i, index) => (
        <div className="footer-link" key={index}>
          {i}
        </div>
      ))}
    </div>
  );
}
