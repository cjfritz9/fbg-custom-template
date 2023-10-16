import Link from 'next/link';
import React from 'react';
import { MdOutlineCardGiftcard } from 'react-icons/md';

const RewardsBanner: React.FC = () => {
  return (
    <div className='w-full flex justify-between items-center px-44 py-16 bg-base-300 text-primary'>
      <div className='flex items-center gap-8'>
        <MdOutlineCardGiftcard className='text-7xl' />
        <div>
          <h2 className='text-2xl font-semibold'>STOCK UP & EARN REWARDS</h2>
          <p className='text-lg opacity-80'>Earn points for every dollar spent at Full Blast Gear to unlock discounts with each purchase.</p>
        </div>
      </div>
      <Link href='/rewards' className='text-lg text-secondary font-bold underline underline-offset-4'>View Details</Link>
    </div>
  );
};

export default RewardsBanner;
