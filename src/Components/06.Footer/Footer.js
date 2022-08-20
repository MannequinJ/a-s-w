import React from "react";
import FooterLinks from "./FooterLinks";
import FooterAccessabilityImg from "./FooterAccessabilityImg";
export default function Footer(props) {
  const clickableFooterLinks = props.dataClickable.map((el) => (
    <FooterLinks data={el} />
  ));
  const nonClickableFooterLinks = props.dataNonClickable.map((el) => (
    <FooterLinks data={el} />
  ));
  const footerAccessabilityFirstRow = props.dataAccessabilityFirstRow.map(
    (el) => <FooterAccessabilityImg data={el} />
  );
  const footerAccessabilitySecondRow = props.dataAccessabilitySecondRow.map(
    (el) => <FooterAccessabilityImg data={el} />
  );
  return (
    <div className="footer-wrap">
      <div className="footer-left-block">
        <div>
          <img
            src="/images/06-footer/asi-whitelogo.svg"
            alt="Asi Logo"
            className="asi-logo-footer"
          />
          <div className="footer-left-block-text">
            Top quality, accredited continuing medical education. ASI allows you
            to earn credit anywhere in the world on a schedule you customize!
          </div>
        </div>
        <div className="footer-images-wrap">
          <div className="footer-images-row">{footerAccessabilityFirstRow}</div>
          <div className="footer-images-row">
            {footerAccessabilitySecondRow}
          </div>
        </div>
      </div>
      <div className="footer-right-block">
        <div className="footer-list-of-links">{clickableFooterLinks}</div>
        <div className="footer-contact-us">
          <div>{nonClickableFooterLinks}</div>
          <div className="footer-social-icons">
            <img
              className="footer-socials"
              src="/images/06-footer/fb.svg"
              alt="Asi Logo"
            ></img>
            <img
              className="footer-socials"
              src="/images/06-footer/tw.svg"
              alt="Asi Logo"
            ></img>
            <img
              className="footer-socials"
              src="/images/06-footer/inst.svg"
              alt="Asi Logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
