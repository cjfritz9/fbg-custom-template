import { ButtonProps } from '@/@types/props';
import Link from 'next/link';
import React from 'react';

/**
 * Configurable DaisyUI button
 *
 * https://daisyui.com/components/button/
 */
const Button: React.FC<ButtonProps> = ({
  styles,
  children,
  href,
  prefetch = false
}) => {
  return href ? (
    <Link href={href} prefetch={prefetch}>
      <button className={`btn w-full lg:w-fit ${styles}`}>{children}</button>
    </Link>
  ) : (
    <button className={`btn w-full lg:w-fit ${styles}`}>{children}</button>
  );
};

export default Button;
