import React from "react";
import {ButtonProps} from "@mui/material";
import StyledButton from "./StyledButton";
import SaveIcon from '@mui/icons-material/Save';

export interface ButtonAtomProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const ButtonAtom: React.FC<ButtonAtomProps> =
  ({
     onClick,
     children,
     startIcon,
     endIcon,
     ...rest
   }) => {
    return (
      <StyledButton onClick={onClick} startIcon={startIcon} endIcon={endIcon} {...rest}>
        {children}
      </StyledButton>
    );
  };

const ButtonAtomSaveIcon: React.FC<ButtonAtomProps> = (props) => {
  return (
    <ButtonAtom {...props} startIcon={<SaveIcon/>}/>
  );
};

export default ButtonAtom;
export {ButtonAtomSaveIcon};
