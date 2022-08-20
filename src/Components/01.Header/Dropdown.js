import React from "react";
import DropdownOption from "./DropdownOption";
import Menu from "@mui/material/Menu";
import { bindMenu } from "material-ui-popup-state";

export default function Dropdown(props) {
  const dropdownElements = props.data.map((el) => (
    <DropdownOption popupState={props.popupState} data={el.header} />
  ));
  return (
    <Menu
      PaperProps={{
        style: {
          width: 278,
          backgroundColor: "#0984dd",
          color: "white",
        },
      }}
      {...bindMenu(props.popupState)}
    >
      {dropdownElements}
    </Menu>
  );
}
