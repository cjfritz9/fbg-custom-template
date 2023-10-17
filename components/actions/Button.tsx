import { ButtonProps } from '@/@types/props';
import React from 'react';

/**
 * Configurable DaisyUI button
 *
 * https://daisyui.com/components/button/
 */
const Button: React.FC<ButtonProps> = ({ styles, children }) => {
  return <button className={`btn w-full lg:w-fit ${styles}`}>{children}</button>;
};

export default Button;
