import React from "react";
import {ButtonProps} from "@mui/material";
import {StyledButton} from "./StyledButton.tsx";

// ButtonAtomProps 인터페이스 정의
export interface ButtonAtomProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

// ButtonAtom 컴포넌트 정의
const ButtonAtom: React.FC<ButtonAtomProps> =
  ({
     onClick, children
   }) => {
    return (
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    );
  };

export default ButtonAtom;
