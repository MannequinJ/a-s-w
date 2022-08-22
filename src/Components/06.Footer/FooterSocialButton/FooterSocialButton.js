import React from "react";
import "./FooterSocialButton.css";

export default function FooterSocialButton({ data }) {
  return (
    <button className="btn-footer_socials">
      <img src={data.img} alt={data.title} />
    </button>
  );
}
