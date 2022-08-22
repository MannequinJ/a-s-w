import React from "react";
import "./HeaderSocialButton.css";

export default function HeaderSocialButton({ imgURL, imgAlt }) {
  return (
    <button className="btn-company-info_socials">
      <img src={imgURL} alt={imgAlt} />
    </button>
  );
}
