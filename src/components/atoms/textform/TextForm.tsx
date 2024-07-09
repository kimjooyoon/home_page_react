import React, {ChangeEvent} from 'react';
import StyledTextField from './StyledTextField';

interface TextFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  rows?: number;
}

const TextForm: React.FC<TextFormProps> =
  ({
     value,
     onChange,
     placeholder,
     label = 'Input',
     multiline = false,
     rows,
   }) => {
    return (
      <StyledTextField
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        label={label}
        multiline={multiline}
        fullWidth
        rows={rows}
      />
    );
  };

export default TextForm;
