import Border from '@/components/layout/Border';
import SocialMediaIcons from '@/components/layout/footer/SocialMediaIcons';
import Link from 'next/link';
import React from 'react';

const CompanyPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='flex text-center lg:text-left p-8 lg:p-0 flex-col gap-2'>
            <h3 className='text-xl font-semibold my-2'>
              About Full Blast Gear
            </h3>
            <p className='max-w-[848px]'>
              Welcome to Full Blast Gear, your trusted source for premium gun
              cleaning kits, firearm parts, and outdoor gear. We are a company
              dedicated to serving firearm enthusiasts, hunters, and outdoor
              adventurers with top-quality products and exceptional customer
              service.
            </p>
            <h3 className='text-xl font-semibold my-2'>Our Mission</h3>
            <p className='max-w-[848px]'>
              At Full Blast Gear, our mission is to provide the highest level of
              customer satisfaction by offering superior products that enhance
              the shooting and outdoor experience. We are committed to promoting
              safety, responsible firearm ownership, and outdoor exploration.
            </p>
            <h3 className='text-xl font-semibold my-2'>Our Products</h3>
            <p className='max-w-[848px]'>
              Explore our selection of comprehensive gun cleaning kits designed
              to keep your firearms in peak condition. From handguns to shotguns
              and rifles, we have the right cleaning kits for every firearm.
            </p>
            <h3 className='text-xl font-semibold my-2'>Customer Support</h3>
            <p className='max-w-[848px]'>
              We value your satisfaction and are here to assist you. If you have
              any questions or require assistance with our products, please
              don’t hesitate to contact our customer support team. You can reach
              us through our Contact Page or refer to our FAQs for answers to
              common inquiries.
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
              <p className='font-semibold'>RELATED LINKS</p>
              <div className='py-6'>
                <Border />
              </div>
              <ul className='flex flex-col gap-4 text-xl font-semibold'>
                <li className='hover:underline'>
                  <Link href='/company/faq'>FAQ</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/contact'>CONTACT</Link>
                </li>
                <li className='hover:underline'>
                  <Link href='/account'>ACCOUNT</Link>
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

export default CompanyPage;
