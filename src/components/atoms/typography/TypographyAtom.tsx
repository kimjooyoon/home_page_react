import {Typography, TypographyProps} from "@mui/material";
import React from "react";

const TypographyAtom: React.FC<TypographyProps> = ({...props}) => {
  return <Typography {...props} />;
}

export default TypographyAtom;
