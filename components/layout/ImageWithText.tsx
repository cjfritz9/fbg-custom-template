import { ImageWithTextProps } from '@/@types/props';
import Image from 'next/image';
import React from 'react';

const ImageWithText: React.FC<ImageWithTextProps> = ({
  styles,
  imageSrc,
  children: textContent,
  reverse = false
}) => {
  return (
    <div className={`hero py-24 px-12 ${styles}`}>
      <div
        className={`hero-content h-full max-w-max gap-24 ${
          reverse
            ? 'flex-col-reverse lg:flex-row-reverse'
            : 'lg:flex-row flex-col'
        }`}
      >
        <Image
          priority={false}
          src={imageSrc}
          height='720'
          alt='Full bore blast firearm cleaning system product image'
          className='min-w-[72rem] shadow-2xl z-0'
        />
        <div className={`${reverse ? 'text-left' : 'text-right'}`}>
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
