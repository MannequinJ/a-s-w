import React from "react";
import "./Header.css";
import HeaderSocialButton from "./HeaderSocialButton/HeaderSocialButton";
import ButtonWithDropdown from "./ButtonWithDropdown/ButtonWithDropdown";
import Badge from "@mui/material/Badge";

export default function Header({ data }) {
  const headerAPI = [
    {
      name: "socialLogos",
      data: [
        {
          title: "facebookLogo",
          img: "/images/01-header/facebook.svg",
        },
        {
          title: "twitterLogo",
          img: "/images/01-header/twitter.svg",
        },
        {
          title: "linkedinLogo",
          img: "/images/01-header/linkedin.svg",
        },
      ],
    },
    {
      name: "phoneNumber",
      data: "866.611.5599",
    },
    { name: "schedule", data: "8am - 5pm MST • Mon-Fri" },
  ];
  const socialLogos = headerAPI.find((i) => i.name === "socialLogos");
  const companyInfoSocialElements = socialLogos.data.map((i, index) => (
    <HeaderSocialButton key={index} imgURL={i.img} imgAlt={i.title} />
  ));

  return (
    <div className="header">
      <div className="header_logo-wrap">
        <img
          src="/images/01-header/asi_logo.svg"
          alt="Asi Logo"
          className="asi-logo"
        />
      </div>
      <div className="header_company-info">
        <ButtonWithDropdown data={data} />
        <div className="header_company-info_phone-number-wrap">
          <img src="/images/01-header/phone.svg"></img>
          <div className="header_company-info_phone-number">
            {headerAPI.find((i) => i.name === "phoneNumber").data}
          </div>
        </div>
        <div className="header_company-info_schedule">
          {headerAPI.find((i) => i.name === "schedule").data}
        </div>
        <div className="header_company-info_socials">
          {companyInfoSocialElements}
        </div>
      </div>
      <div className="header_btns-with-icon-wrap">
        <div className="header_btn-with-icon">
          <img src="/images/01-header/user-icon.svg"></img>
        </div>
        <div className="header_btn-with-icon">
          <Badge badgeContent={10} color="primary" overlap="circular">
            <div>
              <img src="/images/01-header/cart-icon.svg"></img>
            </div>
          </Badge>
        </div>
      </div>
    </div>
  );
}
