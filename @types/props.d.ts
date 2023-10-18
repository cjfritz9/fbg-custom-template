import { footerLinks } from '@/lib/static/links';
import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';
import { Product } from './api';
import { FormattedProduct } from './shop';

type TailwindCSSStyles = string;

export interface ButtonProps extends React.PropsWithChildren {
  /** Tailwind CSS + DaisyUI utility string format */
  styles: TailwindCSSStyles;
}

export interface LogoProps {
  height?: number;
}

export interface VideoHeroProps {
  videoUrl: string;
}

/** @type {children} Text content to be rendered aside the image */
export interface ImageWithTextProps extends React.PropsWithChildren {
  imageSrc: StaticImageData;
  /**
   * Tailwind CSS style string format
   *
   * Container Styles for DaisyUI Hero with figure
   *
   * https://daisyui.com/components/hero/#hero-with-figure
   */
  styles: TailwindCSSStyles;
  /**
   * OPTIONAL - Reverses the layout
   *
   * [default = image | text]
   *
   * [reversed = text | image]
   */
  reverse?: boolean;
}

export interface FooterLinkGroupProps {
  title: string;
  links: typeof footerLinks.companyLinks;
}

export interface ProductCardProps {
  priority: boolean;
  title: string;
  handle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProductMenuProps {
  onUpdateProducts: (
    updatedProducts: FormattedProduct[],
    updatedPageInfo: PageInfo
  ) => void;
  onLoading: (loading: boolean) => void;
}

export interface PaginationBarProps extends ProductMenuProps {
  cursors: [string | null, string | null];
  hasPages: { prev: boolean; next: boolean };
}

export interface PaginationLinkProps extends PropsWithChildren {
  href: string;
}
