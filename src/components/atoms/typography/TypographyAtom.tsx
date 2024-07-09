import {Typography, TypographyProps} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

const StyledTypographyAtom = styled(Typography)(
  ({theme}) => ({
    color: theme.palette.text.primary,
  }));

const TypographyAtom: React.FC<TypographyProps> = ({...props}) => {
  return <StyledTypographyAtom {...props} />;
}

export default TypographyAtom;
