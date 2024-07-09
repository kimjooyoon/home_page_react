import React from "react";
import {styled} from "@mui/material/styles";
import {MenuItem, MenuItemProps} from "@mui/material";

const StyledMenuItemAtom =
  styled(MenuItem)(() => ({}));

export interface MenuItemAtomProps {
  value: string,
  name: string,
}

const MenuItemAtomValueName: React.FC<MenuItemAtomProps> =
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

export {MenuItemAtomValueName}

const MenuItemAtom: React.FC<MenuItemProps> =
  (props) => {
    return (
      <StyledMenuItemAtom {...props} />
    );
  };


export default MenuItemAtom;
