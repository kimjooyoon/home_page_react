import React from "react";
import {Button, ButtonProps} from "@mui/material";
import {styled} from "@mui/material/styles";

// StyledButton 정의
const StyledButton = styled(Button)(({theme}) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// ButtonAtomProps 인터페이스 정의
export interface ButtonAtomProps extends ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

// ButtonAtom 컴포넌트 정의
const ButtonAtom: React.FC<ButtonAtomProps> =
  ({
     onClick, children, ...props
   }) => {
    return (
      <StyledButton onClick={onClick} {...props}>
        {children}
      </StyledButton>
    );
  };

export default ButtonAtom;
