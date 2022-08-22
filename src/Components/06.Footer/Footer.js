import React from "react";
import "./Footer.css";
import FooterSocialButton from "./FooterSocialButton/FooterSocialButton";
import FooterListOfLinks from "./FooterListOfLinks";
import FooterAccessabilityImg from "./FooterAccessabilityImg";
import FooterContactUs from "./FooterContactUs";
export default function Footer() {
  const footerSectionAPI = [
    {
      name: "footerSectionLinks",
      data: [
        {
          title: "About Us",
          rows: ["Why ASI", "FAQ", "How it works", "Referral Program", "Blog"],
        },
        {
          title: "Customer Care",
          rows: [
            "Cancellation Policy",
            "Download Support",
            "Password Reset",
            "Terms of Use",
            "Privacy Policy",
          ],
        },
      ],
    },
    {
      name: "ContactUs",
      data: [
        {
          title: "Contact Us",
          rows: [
            "American Seminar Institute",
            "PO Box 1400",
            "Carbondale, CO 81623",
            "Phone:  866.611.5599",
            "Fax:  970.963.9112",
          ],
        },
      ],
    },
    {
      name: "footerSectionImages",
      data: [
        {
          img: "/images/06-footer/iphone-ipad-support.svg",
        },
        {
          img: "/images/06-footer/mac-support.svg",
        },
        {
          img: "/images/06-footer/credits-on-demand.svg",
        },
        {
          img: "/images/06-footer/app-store.svg",
        },
      ],
    },
    {
      name: "socialLogos",
      data: [
        {
          title: "facebookLogo",
          img: "/images/06-footer/fb.svg",
        },
        {
          title: "twitterLogo",
          img: "/images/06-footer/tw.svg",
        },
        {
          title: "instagramLogo",
          img: "/images/06-footer/inst.svg",
        },
      ],
    },
  ];
  return (
    <div className="footer-wrap">
      <div className="footer-product-info">
        <div className="footer-company-logo-info-text-container">
          <img
            src="/images/06-footer/asi-whitelogo.svg"
            alt="Asi Logo"
            className="asi-logo-footer"
          />
          <div className="footer-product-info-text">
            Top quality, accredited continuing medical education. ASI allows you
            to earn credit anywhere in the world on a schedule you customize!
          </div>
        </div>
        <div className="footer-accessability-images-wrap">
          {footerSectionAPI
            .find((i) => i.name === "footerSectionImages")
            .data.map((i, index) => (
              <FooterAccessabilityImg key={index} data={i} />
            ))}
        </div>
      </div>
      <div className="footer-about-us">
        {footerSectionAPI
          .find((i) => i.name === "footerSectionLinks")
          .data.map((i, index) => (
            <FooterListOfLinks key={index} data={i} />
          ))}
      </div>
      <div className="footer-contact-us">
        <div>
          {footerSectionAPI
            .find((i) => i.name === "ContactUs")
            .data.map((i, index) => (
              <FooterContactUs key={index} data={i} />
            ))}
        </div>
        <div className="footer-social-buttons">
          {footerSectionAPI
            .find((i) => i.name === "socialLogos")
            .data.map((i, index) => (
              <FooterSocialButton key={index} data={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
