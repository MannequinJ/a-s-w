import React from "react";

export default function FooterContactUs({ data }) {
  return (
    <div className="footer-links">
      <div className="footer-links-header">{data.title}</div>
      {data.rows.map((i, index) => (
        <div className="footer-contact-us-text" key={index}>
          {i}
        </div>
      ))}
    </div>
  );
}
