import { StaticImageData } from 'next/image';
import React from 'react';

type TailwindCSSStyles = string;

export interface ButtonProps extends React.PropsWithChildren {
  /** Tailwind CSS string format */
  styles: TailwindCSSStyles;
}

export interface ThemeButtonProps {
  themeChoice: string;
  attributes: {
    'data-set-theme': string;
    'data-act-class': string;
  };
}

/** @type {children} Text content to be rendered aside the image */
export interface ImageWithTextProps extends React.PropsWithChildren {
  imageSrc: StaticImageData;
  /**
   * Container Styles
   *
   * Tailwind CSS style string format
  */
  styles: TailwindCSSStyles;
  /**
   * OPTIONAL - Reverses the layout
   *
   * [default = text | image]
   *
   * [reversed = image | text]
  */
  reverse?: boolean;
}
