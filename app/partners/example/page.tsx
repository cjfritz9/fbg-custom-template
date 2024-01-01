import Image from 'next/image';
import React from 'react';
import brandImage from '@/public/assets/images/patrio-gear-brand.webp';
import ProductGallery from '@/components/layout/ProductGallery';
import Link from 'next/link';

const PartnerExamplePage: React.FC = () => {
  return (
    <main className='py-16 bg-base-100'>
      <section className='flex gap-16'>
        <Image
          src={brandImage}
          alt='Patriot Gear Co. Brand Image'
          height={660}
          width={440}
          className='hidden lg:block'
        />
        <div className='flex flex-col gap-8'>
          <h1 className='text-center font-semibold text-3xl'>
            Unleash the Power of American-Made Tactical Gear
          </h1>
          <p>
            Patriot Gear Co. is a leading provider of high-quality tactical
            gear, specializing in American-made products that cater to the needs
            of military personnel, law enforcement, outdoor enthusiasts, and
            everyday patriots. Our commitment to quality, durability, and
            innovation sets us apart in the tactical gear industry.
          </p>
          <h5 className='text-lg font-semibold'>Product Range:</h5>
          <ul>
            <li>
              <b>Tactical Apparel:</b> Our clothing line includes rugged and
              functional tactical pants, shirts, jackets, and accessories
              designed for optimal performance in various environments.
            </li>
            <li>
              <b>Footwear:</b> PatriotGear Co. offers a range of durable and
              comfortable tactical boots, designed for long-lasting wear and
              superior traction.
            </li>
            <li>
              <b>Bags and Packs:</b> Explore our selection of tactical
              backpacks, duffel bags, and pouches, featuring smart
              organizational layouts and robust materials.
            </li>
            <li>
              <b>Shooting Gear:</b> From holsters and slings to shooting gloves
              and accessories, we provide a comprehensive range of gear for
              firearms enthusiasts.
            </li>
            <li>
              <b>Survival and Outdoor Equipment:</b> Prepare for any situation
              with our survival and outdoor gear, including knives, multi-tools,
              camping equipment, and emergency preparedness supplies.
            </li>
            <li>
              <b>American-Made Excellence:</b> We take pride in offering a
              selection of products that are proudly made in the USA, ensuring
              the highest standards of craftsmanship and supporting local
              manufacturing.
            </li>
          </ul>
          <p>
            At Patriot Gear Co., our mission is to equip our customers with the
            finest American-made tactical gear, empowering them to face any
            challenge with confidence and preparedness. We are dedicated to
            upholding the values of strength, resilience, and patriotism,
            ensuring that our products exceed expectations and contribute to the
            safety and success of those who serve and protect.
          </p>
        </div>
      </section>
      <section className='py-8 text-blue-600 text-lg'>
        <p className='font-bold text-primary'>Patriot Gear Co.</p>
        <Link
          href='https://www.google.com/maps/search/123+Liberty+Way,+Freedom+City,+USA/@38.3169112,-75.6286232,17z/data=!3m1!4b1?entry=ttu'
          target='_blank'
        >
          <p>123 Liberty Way, Freedom City, USA</p>
        </Link>
        <Link href='tel: 5551234567' target='_blank'>
          <p>(555) 123-4567</p>
        </Link>
        <Link href='mailto: info@patriogearco.com' target='_blank'>
          <p>info@patriotgearco.com</p>
        </Link>
        <Link href='https://www.fullblastusa.com' target='_blank'>
          <p>www.patriotgearco.com</p>
        </Link>
      </section>
      <section className='my-16'>
        <ProductGallery
          length={8}
          productsTag='Patriot Gear Co'
          title='Products by Patriot Gear Co.'
          subtitle=''
        />
      </section>
    </main>
  );
};

export default PartnerExamplePage;
