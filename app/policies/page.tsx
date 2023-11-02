import Border from '@/components/layout/Border';
import SocialMediaIcons from '@/components/layout/footer/SocialMediaIcons';
import Link from 'next/link';
import React from 'react';

const PoliciesPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col lg:flex-row gap-12 xl:gap-48'>
          <div className='flex flex-col text-center lg:text-left p-8 lg:p-0 gap-4'>
            <h3 className='text-xl font-semibold my-2'>Policies</h3>
            <p className='max-w-[848px]'>
              Welcome to Full Blast Gear! We are committed to providing you with
              a transparent and secure shopping experience. To ensure that you
              have a clear understanding of our practices and policies, we have
              outlined the following key documents:
            </p>
            <ul className='list-decimal ml-5 max-w-[848px]'>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/policies/terms-and-conditions'>
                    Terms and Conditions:
                  </Link>
                </b>{' '}
                This document outlines the terms of use for our website,
                including your rights and responsibilities as a visitor or
                customer. Please review this document before using our services.
              </li>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/policies/privacy'>Privacy Policy:</Link>
                </b>{' '}
                Our Privacy Policy details how we collect, use, and protect your
                personal information. Your privacy is important to us, and we
                take every measure to safeguard your data.
              </li>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/policies/cookies'>Cookies Policy:</Link>
                </b>{' '}
                Our Cookies Policy explains how we use cookies and similar
                tracking technologies to enhance your browsing experience. By
                using our website, you consent to our use of cookies in
                accordance with this policy.
              </li>
              <li className='max-w-[848px]'>
                <b className='hover:underline'>
                  <Link href='/policies/returns'>Returns and Refunds:</Link>
                </b>{' '}
                We want you to be completely satisfied with your purchases from
                Full Blast Gear. Our Returns and Refunds Policy provides
                information on the process for returning items and requesting
                refunds.
              </li>
            </ul>
            <p className='max-w-[848px]'>
              Please take a moment to review these policies, as they govern your
              use of our website and interactions with our company. If you have
              any questions or require further clarification on any aspect of
              our policies, please do not hesitate to{' '}
              <b className='hover:underline'>
                <Link href='/contact'>contact us.</Link>
              </b>{' '}
              Your satisfaction and trust are of utmost importance to us, and we
              are here to assist you.
            </p>
            <div className='py-8'>
              <Border />
            </div>
            <p className='font-semibold'>
              Thank you for choosing Full Blast Gear. We look forward to serving
              your firearm and outdoor gear needs.
            </p>
          </div>
          <div className='bg-base-100 w-full lg:w-96 p-8 lg:p-0'>
            <div className='hidden lg:flex justify-between items-center bg-base-200 p-8 mb-8 text-xl font-semibold'>
              <p>Follow Us</p>
              <SocialMediaIcons slim />
            </div>
            <div className='bg-base-200 p-8 mb-8'>
              <p className='font-semibold'>OUR POLICIES</p>
              <div className='py-6'>
                <Border />
              </div>
              <ul className='flex flex-col gap-4 text-xl font-semibold'>
                <li className='hover:underline'>
                  <Link href='/policies/terms-and-conditions'>
                    TERMS AND CONDITIONS
                  </Link>
                </li>
                <li className='hover:underline'>
                  <Link href='policies/privacy'>PRIVACY POLICY</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='policies/cookies'>COOKIE POLICY</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='policies/returns'>RETURN POLICY</Link>
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

export default PoliciesPage;
