import React from "react";
import {styled} from "@mui/material/styles";
import {MenuItem} from "@mui/material";

const StyledMenuItemAtom =
  styled(MenuItem)(() => ({
  }));

export interface MenuItemAtomProps {
  value: string,
  name: string,
}

const MenuItemAtom: React.FC<MenuItemAtomProps> =
  ({
     value,
     name,
   }) => {
    return (
      <StyledMenuItemAtom value={value}>
        <em>{name}</em>
      </StyledMenuItemAtom>
    );
  };

export default MenuItemAtom;
