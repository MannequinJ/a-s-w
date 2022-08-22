import React from "react";
import "./ButtonWithDropdown.css";
import Button from "@mui/material/Button";
import PopupState, { bindTrigger } from "material-ui-popup-state";
import DropdownOption from "./DropdownOption";
import Menu from "@mui/material/Menu";
import { bindMenu } from "material-ui-popup-state";
export default function ButtonWithDropdown({ data }) {
  const courseNames = data.find((i) => i.name === "coursesList");
  return (
    <div className="btn-with-dropdown-wrap">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              className="btn-with-dropdown"
              variant="contained"
              {...bindTrigger(popupState)}
            >
              <div className="btn-with-dropdown-content">
                <img src="/images/01-header/menu.svg"></img>
                <div>VIEW ALL COURSES</div>
              </div>
              <img src="/images/01-header/down-arrow.svg"></img>
            </Button>
            <Menu
              PaperProps={{
                style: {
                  width: 278,
                  backgroundColor: "#0984dd",
                  color: "white",
                },
              }}
              {...bindMenu(popupState)}
            >
              {courseNames.data.map((i, index) => (
                <DropdownOption
                  key={index}
                  data={i.title}
                  popupState={popupState}
                />
              ))}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
}
