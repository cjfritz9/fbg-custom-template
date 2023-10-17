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
    <div className={`hero lg:py-8 lg:px-8 xl:py-16 xl:px-40 ${styles}`}>
      <div
        className={`hero-content py-12 xl:p-0 h-full max-w-max gap-8 lg:gap-24 ${
          reverse
            ? 'flex-col-reverse xl:flex-row-reverse'
            : 'xl:flex-row flex-col'
        }`}
      >
        <Image
          priority={false}
          src={imageSrc}
          alt='Full bore blast firearm cleaning system product image'
          className='max-w-4xl shadow-2xl z-0 w-[100%] xl:w-max h-auto xl:h-max'
        />
        <div className={`${reverse ? 'text-center xl:text-left' : 'text-center xl:text-right'}`}>
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
