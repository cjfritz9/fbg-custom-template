import { footerLinks, navLinks } from '@/lib/static/links';
import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';
import { Product } from './api';
import { FormattedProduct } from './shop';
import { IconType } from 'react-icons';

type TailwindCSSStyles = string;

export interface ButtonProps extends React.PropsWithChildren {
  /** Tailwind CSS + DaisyUI utility string format */
  styles: TailwindCSSStyles;
  href?: string;
  prefetch?: boolean;
}

export interface LogoProps {
  height?: number;
}

export interface VideoHeroProps {
  videoUrl: string;
}

/** @type {children} Text content to be rendered aside the image */
export interface ImageWithTextProps extends React.PropsWithChildren {
  imageSrc: StaticImageData | string;
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

export interface SearchBarProps {
  variant: 'header' | 'drawer';
}

export interface NavLinkProps {
  link: (typeof navLinks)[0];
}

/**
 * @type {variants} Icon variants for hover and non hover states
 * 
 * variants[0] represents initial state
 * 
 * variants[1] represents hover state
 */
export interface NavIconProps {
  variants: [IconType, IconType];
  href?: string;
  styles?: string;
}

export interface FooterLinkGroupProps {
  title: string;
  links: typeof footerLinks.companyLinks;
}

export interface SlideContainerProps extends PropsWithChildren {
  href: string;
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
