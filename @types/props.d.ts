import { StaticImageData } from 'next/image';
import React from 'react';

export interface ThemeButtonProps {
  themeChoice: string;
  attributes: {
    'data-set-theme': string;
    'data-act-class': string;
  };
}

// Text content rendered as children
export interface ImageWithTextProps extends React.PropsWithChildren {
  imageSrc: StaticImageData;
  // TailwindCSS formatted color string
  bgColor: string;
  // default is right-side image, left-side text content
  reverse?: boolean
}
