import React from "react";
import {styled} from "@mui/material/styles";
import {Select} from "@mui/material";
import MenuItemAtom from "./menuitem/MenuItemAtom.tsx";

const StyledDropDownAtom =
  styled(Select)(({theme}) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export interface DropDownAtomProps {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

const DropDownAtom: React.FC<DropDownAtomProps> =
  ({
     onClick,
     children,
     ...props
   }) => {
    return (
      <StyledDropDownAtom onClick={onClick} {...props} value="">
        <MenuItemAtom value="" name={"None"}/>
        {children}
      </StyledDropDownAtom>
    );
  };

export default DropDownAtom;
