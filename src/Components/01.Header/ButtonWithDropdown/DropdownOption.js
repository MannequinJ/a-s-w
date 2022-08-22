import React from "react";
import MenuItem from "@mui/material/MenuItem";

export default function DropdownOption({ data, popupState }) {
  return (
    <MenuItem
      PaperProps={{
        style: {
          fontSize: "14px",
        },
      }}
      onClick={popupState}
    >
      {data}
    </MenuItem>
  );
}
