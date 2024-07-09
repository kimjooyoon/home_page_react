import React, { ImgHTMLAttributes } from "react";

interface ImageAtomProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ alt, ...props }) => {
  return <img {...props} alt={alt} />;
};

export default ImageAtom;
