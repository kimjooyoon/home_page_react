import React from 'react';
import TextForm from './TextForm';

export interface TextFormAtomProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
}

const TextFormAtom: React.FC<TextFormAtomProps> =
  ({
     value,
     onChange,
     placeholder,
     label = 'Input',
   }) => {
    return (
      <TextForm
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiline={false}
      />
    );
  };

const TextFieldMultilineAtom: React.FC<TextFormAtomProps> =
  ({
     value,
     onChange,
     placeholder,
     label = 'Input',
   }) => {
    return (
      <TextForm
        placeholder={placeholder}
        label={label}
        value={value}
        onChange={onChange}
        multiline={true}
        rows={4}
      />
    );
  };

export default TextFormAtom;
export {TextFieldMultilineAtom};
