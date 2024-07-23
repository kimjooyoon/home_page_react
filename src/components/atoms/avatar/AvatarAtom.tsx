import React from 'react';
import { Avatar, AvatarProps } from '@mui/material';

interface AvatarAtomProps extends AvatarProps {
  src: string;
  alt: string;
}

const AvatarAtom: React.FC<AvatarAtomProps> = ({ src, alt, ...rest }) => {
  return <Avatar src={src} alt={alt} {...rest} />;
};

export default AvatarAtom;
