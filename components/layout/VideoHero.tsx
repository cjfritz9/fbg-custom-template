import React from 'react';
import Button from '../actions/Button';
import { VideoHeroProps } from '@/@types/props';

const VideoHero: React.FC<VideoHeroProps> = ({ videoUrl }) => {
  return (
    <div className='max-h-[640px] h-[640px] overflow-hidden 2xl:px-12 bg-base-100 backdrop-filter relative'>
      <div className='absolute bg-transparent h-full w-full 2xl:mx-[-3rem] z-10 text-center'>
        <h1 className='text-5xl font-bold absolute w-full bottom-40 pointer-events-none'>
          Full Bore Blast Firearm Cleaning System
        </h1>
        <p className='text-lg absolute w-full bottom-32 pointer-events-none'>
          Fostering a Revolution in Firearms Products for Gun Enthusiasts
        </p>
        <div className='text-lg absolute w-full bottom-14'>
          <Button styles='hover:brightness-125 hover:bg-white bg-white text-lg text-[#1D232A] w-48 justify-self-center bottom-32'>
            SHOP NOW
          </Button>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        controls={false}
        className='overflow-hidden 2xl:mt-[-200px] xl:mt-[-160px] lg:mt-[-120px] md:mt-[-80px] sm:mt-[-40px] pointer-events-none brightness-[33%]'
      >
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoHero;
