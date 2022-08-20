import React from "react";
import Badge from "@mui/material/Badge";
import Dropdown from "./Dropdown";
import Button from "@mui/material/Button";
import PopupState, { bindTrigger } from "material-ui-popup-state";
export default function Header(props) {
  // const [open, setOpen] = React.useState(false);
  return (
    <div className="header">
      <div className="leftside-content">
        <img
          src="/images/01-header/asi_logo.svg"
          alt="Asi Logo"
          className="asi-logo"
        />
      </div>
      <div className="center-content">
        <div className="view-all-courses-btn-wrap">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  className="view-all-courses-btn"
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <div className="view-all-courses-btn-header">
                    <img src="/images/01-header/menu.svg"></img>
                    <div>VIEW ALL COURSES</div>
                  </div>
                  <img src="/images/01-header/down-arrow.svg"></img>
                </Button>
                <Dropdown popupState={popupState} data={props.data} />
              </React.Fragment>
            )}
          </PopupState>
          {/* <button
            className="view-all-courses-btn"
            type="button"
            data-toggle="dropdown"
            onClick={() => setOpen((open) => !open)}
          >
            <div className="view-all-courses-btn-header">
              <img src="/images/01-header/menu.svg"></img>
              <div>VIEW ALL COURSES</div>
            </div>
            <img src="/images/01-header/down-arrow.svg"></img>
          </button> */}
          {/* {open && <Dropdown data={props.data} />} */}
        </div>
        <div className="phone-number-wrapp">
          <img src="/images/01-header/phone.svg"></img>
          <div className="phone-number">866.611.5599</div>
        </div>
        <div className="schedule">8am - 5pm MST • Mon-Fri</div>
        <div className="socials">
          <button className="socials-btn">
            <img src="/images/01-header/facebook.svg"></img>
          </button>
          <button className="socials-btn">
            <img src="/images/01-header/twitter.svg"></img>
          </button>
          <button className="socials-btn">
            <img src="/images/01-header/linkedin.svg"></img>
          </button>
        </div>
      </div>
      <div className="rightside-content">
        <div className="user-icon">
          <img src="/images/01-header/user-icon.svg"></img>
        </div>

        <div className="cart-icon">
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
