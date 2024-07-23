import React from 'react';
import {
  TextFieldProps,
} from '@mui/material';
import StyledTextField from './StyledTextField';

interface InputAtomProps extends Omit<TextFieldProps, 'variant'> {
  variant: 'filled' | 'standard' | 'outlined';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  rows?: number;
}

const InputAtom: React.FC<InputAtomProps> =
  ({
     variant,
     value,
     onChange,
     placeholder,
     label = 'Input',
     multiline = false,
     rows,
     ...rest
   }) => {
    return (
      <StyledTextField
        variant={variant}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        multiline={multiline}
        fullWidth
        rows={rows}
        {...rest}
      />
    );
  };

export default InputAtom;
