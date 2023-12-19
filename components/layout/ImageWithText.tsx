import { ImageWithTextProps } from '@/@types/props';
import Image from 'next/image';
import React from 'react';

const ImageWithText: React.FC<ImageWithTextProps> = ({
  styles,
  imageSrc,
  priority = false,
  children: textContent,
  alignItems = 'center',
  reverse = false
}) => {
  return (
    <div className={`hero lg:py-8 lg:px-8 xl:py-16 xl:px-40 ${styles}`}>
      <div
        className={`hero-content items-${alignItems} py-12 xl:p-0 h-full max-w-max gap-8 lg:gap-24 ${
          reverse
            ? 'flex-col-reverse 2xl:flex-row-reverse'
            : '2xl:flex-row flex-col'
        }`}
      >
        <div className='w-full h-auto'>
          <Image
            priority={priority}
            src={imageSrc}
            height={512}
            width={896}
            alt='Full bore blast firearm cleaning system product image'
            className='shadow-2xl w-full z-0 h-auto object-cover object-center'
          />
        </div>
        <div
          className={`2xl:w-[576px] ${
            reverse ? 'text-center xl:text-left' : 'text-center xl:text-right'
          }`}
        >
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
