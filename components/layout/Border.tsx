import React from 'react'
import { BorderProps } from '@/@types/props';

const Border: React.FC<BorderProps> = ({ color = 'base-200' }) => {
  return (
    <div className={`w-full border-b border-${color}`}/>
  );
}

export default Border;