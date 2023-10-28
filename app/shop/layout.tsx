import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Shop Premium Gun Cleaning Kits, Parts, and Outdoor Gear',
  description:
    "Full Blast Gear is your one-stop destination for high-quality gun cleaning kits, top-notch firearm parts, and a wide range of premium outdoor gear. Whether you're a firearm enthusiast, a seasoned hunter, or an outdoor adventurer, we've got you covered with the best tools and equipment. Explore our extensive catalog of gun cleaning kits, upgrade your firearms with our top-tier parts, and gear up for your next outdoor expedition with our top-of-the-line products. Discover the perfect blend of quality, performance, and reliability at Full Blast Gear."
};

const ProductsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex w-full h-auto bg-base-100'>{children}</div>;
};

export default ProductsLayout;
