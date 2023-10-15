import Link from 'next/link';
import React from 'react';
import { MdOutlineCardGiftcard } from 'react-icons/md';

const RewardsBanner: React.FC = () => {
  return (
    <div className='w-full flex justify-between items-center px-44 py-16 bg-base-300'>
      <div className='flex items-center gap-8'>
        <MdOutlineCardGiftcard className='text-7xl' />
        <div>
          <h4 className='text-2xl text-accent font-semibold'>STOCK UP & EARN REWARDS</h4>
          <p className='text-lg'>Earn points for every dollar spent at Full Blast Gear to unlock discounts with each purchase.</p>
        </div>
      </div>
      <Link href='/rewards' className='text-lg underline underline-offset-4'>Learn More</Link>
    </div>
  );
};

export default RewardsBanner;
