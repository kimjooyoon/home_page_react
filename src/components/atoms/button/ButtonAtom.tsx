import React from "react";
import {ButtonProps} from "@mui/material";
import StyledButton from "./StyledButton";
import {CanceledButton, CompletedButton, InProgressButton, PlannedButton} from "./StatusButtons.tsx";

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

export default ButtonAtom;


const ButtonAtomIcon: React.FC<ButtonAtomProps> =
  ({
     startIcon,
     children,
     onClick,
   }) => {
    return (
      <ButtonAtom startIcon={startIcon} onClick={onClick}>
        {children}
      </ButtonAtom>
    );
  };

export {ButtonAtomIcon};


const ButtonAtomPlanned = () => {
  return <PlannedButton variant={"outlined"}>
    예정됨
  </PlannedButton>
}
const ButtonAtomInProgress = () => {
  return <InProgressButton variant={"outlined"}>
    진행중
  </InProgressButton>
}
const ButtonAtomCanceled = () => {
  return <CanceledButton variant={"outlined"}>
    취소됨
  </CanceledButton>
}
const ButtonAtomCompleted = () => {
  return <CompletedButton variant={"outlined"}>
    완료됨
  </CompletedButton>
}

export {ButtonAtomPlanned, ButtonAtomInProgress, ButtonAtomCanceled, ButtonAtomCompleted};
