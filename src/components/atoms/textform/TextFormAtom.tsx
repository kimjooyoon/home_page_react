import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from "react";

const StyledTextField = styled(TextField)(({theme}) => ({
  '& .MuiInputBase-root': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 1.5),
    boxShadow: theme.shadows[1],

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },

    '&.Mui-focused': {
      backgroundColor: theme.palette.background.default,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    },

    'input': {
      padding: theme.spacing(1),
    },
  },

  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.text.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

export interface TextFormAtomProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
}

const TextFormAtom: React.FC<TextFormAtomProps> =
  ({value, onChange, placeholder, label = 'Input'}) => {
    return (
      <StyledTextField
        variant="outlined"
        placeholder={placeholder}
        label={label}
        fullWidth
        value={value}
        onChange={onChange}
      />
    );
  };

export default TextFormAtom;
