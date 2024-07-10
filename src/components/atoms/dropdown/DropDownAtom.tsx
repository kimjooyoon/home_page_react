import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";

const StyledDropDownAtom = styled(Select)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
  },
}));

export interface DropDownAtomProps {
  label: string;
  value: string;
  options: string[];
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

const DropDownAtom: React.FC<DropDownAtomProps> = ({ label, value, options, onChange }) => {
  return (
    <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: '16px' }}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <StyledDropDownAtom labelId={`${label}-label`} value={value} onChange={onChange} label={label}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledDropDownAtom>
    </FormControl>
  );
};

export default DropDownAtom;
