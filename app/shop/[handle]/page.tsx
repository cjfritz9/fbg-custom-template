import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import ReviewStars from '@/components/UI/ReviewStars';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ProductGallery from '@/components/layout/ProductGallery';
import ProductReviews from '@/components/layout/ProductReviews';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { IoStar, IoBookmarkOutline, IoBook } from 'react-icons/io5';
import { TbChevronCompactUp, TbChevronCompactDown } from 'react-icons/tb';

export const generateMetadata = async ({
  params: { handle }
}: ProductMetadata) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
  }

  return {
    title: product.title
  };
};

const ProductPage: React.FC<ProductMetadata> = async ({
  params: { handle }
}) => {
  const product = await getProductByHandle(handle);
  const { images } = product;

  if (!product) {
    return notFound();
  }

  return (
    <main>
      <section className='flex-col lg:flex-row gap-8 text-primary inline-flex'>
        <div className='flex flex-col-reverse xl:flex-row justify-between h-fit xl:top-16 xl:sticky gap-8'>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-row xl:flex-col gap-4'>
              <Button styles='bg-base-100 border-0 !w-full -mb-4 hover:bg-base-100 hidden xl:flex'>
                <TbChevronCompactUp className='text-4xl text-base-200' />
              </Button>
              {images.slice(0, 4).map((image) => (
                <Image
                  key={image.url}
                  src={image.url}
                  alt={image.altText}
                  height={256}
                  width={256}
                  className='w-24 xl:w-32 h-24 xl:h-32 object-cover'
                />
              ))}
            </div>
            <Button styles='bg-base-100 border-0 !w-full -mt-4 hover:bg-base-100 hidden xl:flex'>
              <TbChevronCompactDown className='text-4xl text-base-200' />
            </Button>
          </div>
          <div className='flex justify-center max-h-[556px] xl:w-[720px]'>
            <Image
              priority
              src={images[0].url}
              alt={images[0].altText}
              height={800}
              width={800}
              className='object-cover object-center w-full h-auto max-h-[556px]'
            />
          </div>
        </div>
        <div className='flex flex-col gap-8 max-w-[40rem]'>
          <div>
            <h2 className='text-4xl font-bold'>{product.title}</h2>
            <ReviewStars reviews={product.reviews} styles='!text-2xl' showCount />
          </div>
          <Border />
          <div className='flex flex-col gap-4 py-4 -my-4 xl:sticky xl:top-0 bg-base-100'>
            <h4 className='text-2xl xl:text-3xl font-bold tracking-widest'>
              ${product.minPrice}
            </h4>
            <div className='flex gap-4 '>
              <Button styles='btn-primary grow h-16 font-bold text-lg fixed bottom-0 -mx-4 z-30 xl:static xl:mx-0'>
                ADD TO CART
              </Button>
              <div className='hidden xl:inline-block tooltip' data-tip='Bookmark this item'>
                <Button styles='btn-base-200 border border-primary h-16 font-bold text-2xl !w-24 hover:bg-base-100'>
                  <IoBookmarkOutline />
                </Button>
              </div>
            </div>
          </div>
          <Border />
          <div>
            <p className='uppercase font-semibold text-xl pb-4'>DESCRIPTION</p>
            <div className='custom-scroll overflow-y-auto text-lg'>
              <p>
                This innovative Full-Bore Blast Complete Shotgun Cleaning Kit is
                quicker and superior in quality to any single-pass bore cleaner
                on the market. Meticulously crafted by dedicated hunters,
                shooters, and firearms enthusiasts, Full Blast gun cleaning
                supplies are professional grade and designed to last the
                lifetime of your firearm. This professional grade 12-part kit
                includes our proprietary Quick-Connect-and- Release (QCR) system
                with the innovative Full-Bore Blast FlexRod; reusable foxtail
                mops or Bore-tips® and mesh wash bag; a dual open-slotted tip;
                free spinning tip-end adaptors; a premium bore cleaning nylon or
                Bronze brush; a clear hard case accessories organizer; and a
                storage pouch. Select components are made using precision CNC
                machined solid brass, carbon steel, nylon, and micro suede.
                Built to last a lifetime, Full Blast Gear products are proudly
                made in the USA with the finest materials.
              </p>
            </div>
          </div>
          <Border />
          <div>
            <p className='uppercase font-semibold text-xl pb-4'>INCLUDES</p>
            <ul className='custom-scroll list-disc pl-5 overflow-y-auto text-lg'>
              <li>
                Full-Bore Blast Flex Rod (1) Attach cleaning elements on each
                end for push and pull through cleaning
              </li>
              <li>
                Quick Connect - Release Adapter Male (2) - brushes and tip ends
                free spin for additional bore protection
              </li>
              <li>
                Quick Connect - Release Adapter Female (2) - Change out brushes
                and mop in seconds
              </li>
              <li>
                Dual Open-Slotted Tip-End Cleaner (1) - Run two patches through
                with 360° of clean / lubricating
              </li>
              <li>
                Foxtail Mop Cleaner / Applicator (2) or Bore-tip® (1 Pack) -
                washable and re-usable
              </li>
              <li>
                Nylon Brush (1) or Bronze Wire Brush - Premium quality bristles
                twisted in brass and steel
              </li>
              <li>
                Hard Case Brush and Jag Accessories Organizer (1) - Clear case
                to see jags and cleaning tips
              </li>
              <li>
                Mesh Zipper Wash Bag (1) - Toss in washing machine bag for
                cleaning mops and Bore-tips®
              </li>
              <li>
                Micro-Suede Wash and Polish Cloth (1) - Wipe, clean and polish
                Kit and gun parts
              </li>
              <li>
                Storage Zipper Pouch (1) - Semi-clear no tear water resistant
                easy access storage pouch
              </li>
            </ul>
          </div>
          <Border />
          <div>
            <p className='uppercase font-semibold text-xl pb-4'>Specs</p>
            <ul className='custom-scroll list-disc pl-5 overflow-y-auto text-lg'>
              <li>
                Material: Galvanized Carbon Steel, Solid Brass, Micro Suede,
                Nylon Mesh, Polyvinyl, Molded Plastic.
              </li>
              <li>
                Size/Dimensions: Length - 40″ Width - Variable per gauge and
                caliber
              </li>
              <li>Colors: Bright Red, Blaze Orange, Safety Green</li>
              <li>
                Compatible: Bore Chore Quick Connect Release System - Shotgun
              </li>
              <li>Weight: 1 kg</li>
              <li>Manufactured: USA</li>
            </ul>
          </div>
        </div>
      </section>
      <ProductReviews handle={handle} reviews={product.reviews} />
      <section className='mt-12'>
        <ProductGallery title='Similar Products' subtitle='' productsTag='top products' length={5} />
      </section>
    </main>
  );
};

export default ProductPage;
