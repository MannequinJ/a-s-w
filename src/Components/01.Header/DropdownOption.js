import React from "react";
import MenuItem from "@mui/material/MenuItem";

export default function DropdownOption(props) {
  return (
    <MenuItem
      PaperProps={{
        style: {
          fontSize: "14px",
        },
      }}
      onClick={props.popupState}
    >
      {props.data}
    </MenuItem>
  );
}
