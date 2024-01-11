import Border from '@/components/layout/Border';
import SocialMediaIcons from '@/components/layout/footer/SocialMediaIcons';
import Link from 'next/link';
import React from 'react';

const InformationPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col lg:flex-row gap-12 xl:gap-48'>
          <div className='flex flex-col text-center lg:text-left p-8 lg:p-0 gap-4'>
            <h3 className='text-xl font-semibold my-2'>
              Information and Resources
            </h3>
            <p className='max-w-[848px]'>
              Welcome to the Full Blast USA Information page, where you can find
              valuable details about our company, services, and important
              topics. We’re dedicated to providing you with the information you
              need. Here are some key areas you might be interested in:
            </p>
            <ul className='list-decimal ml-5 max-w-[848px]'>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/information/warranties'>Warranties:</Link>
                </b>{' '}
                Learn about our product warranties and how they protect your
                investments. Visit our Warranties page for specific details on
                coverage and terms.
              </li>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/information/shipping'>Shipping:</Link>
                </b>{' '}
                Curious about our shipping policies? Head over to our Shipping
                Information page to discover shipping methods, delivery times,
                and any associated fees.
              </li>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/blogs'>Blogs:</Link>
                </b>{' '}
                Explore our Blogs section to stay updated on the latest industry
                trends, product reviews, and helpful guides. Our team regularly
                publishes informative content to keep you informed and
                entertained.
              </li>
            </ul>
            <p className='max-w-[848px]'>
              Full Blast USA is committed to providing you with top-quality
              products and exceptional service. We believe that well-informed
              customers make the best decisions, so please don’t hesitate to
              explore the specific pages linked above for more detailed
              information.
            </p>
            <p className='max-w-[848px]'>
              If you have any questions or require further assistance, our{' '}
              <b className='hover:underline'>
                <Link href='/contact'>Contact</Link>
              </b>{' '}
              page is just a click away. Your satisfaction is our priority, and
              we’re here to help.
            </p>
            <div className='py-8'>
              <Border />
            </div>
            <p className='font-semibold'>
              Thank you for choosing Full Blast USA. We look forward to serving
              your firearm and outdoor gear needs.
            </p>
          </div>
          <div className='bg-base-100 w-full lg:w-96 p-8 lg:p-0'>
            <div className='hidden lg:flex justify-between items-center bg-base-200 p-8 mb-8 text-xl font-semibold'>
              <p>Follow Us</p>
              <SocialMediaIcons slim />
            </div>
            <div className='bg-base-200 p-8 mb-8'>
              <p className='font-semibold'>INFORMATION PAGES</p>
              <div className='py-6'>
                <Border />
              </div>
              <ul className='flex flex-col gap-4 text-xl font-semibold'>
                <li className='hover:underline'>
                  <Link href='/information/warranties'>WARRANTIES</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/information/shipping'>SHIPPING</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/blogs'>BLOGS</Link>
                </li>
              </ul>
            </div>
            <div className='flex justify-between bg-base-200 p-8 mb-8 font-semibold'>
              <Link href='/shop?filter=popular'>
                <p className='text-xl font-semibold hover:underline'>
                  Browse Top Products
                </p>
              </Link>
            </div>
            <div className='flex justify-between bg-base-200 p-8 mb-8 font-semibold'>
              <Link href='/blogs'>
                <p className='text-xl font-semibold hover:underline'>
                  Browse Our Blogs
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
