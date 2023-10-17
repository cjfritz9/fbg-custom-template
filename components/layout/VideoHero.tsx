import React from 'react';
import Button from '../actions/Button';
import { VideoHeroProps } from '@/@types/props';

const VideoHero: React.FC<VideoHeroProps> = ({ videoUrl }) => {
  return (
    <div className='max-h-[212px] h-[212px] md:max-h-[640px] md:h-[640px] overflow-hidden 2xl:px-12 bg-[#1D232A] backdrop-filter relative'>
      <div className='absolute bg-transparent h-full w-full 2xl:mx-[-3rem] z-10 text-center'>
        <h1 className='text-lg md:text-5xl text-white font-bold absolute w-full bottom-16 md:bottom-40 lg:bottom-64 xl:bottom-40 pointer-events-none'>
          Full Bore Blast Firearm Cleaning System
        </h1>
        <p className='absolute text-white w-full bottom-32 pointer-events-none hidden xl:block'>
          Fostering a Revolution in Firearms Products for Gun Enthusiasts
        </p>
        <div className='text-lg absolute w-full bottom-4 md:bottom-14 lg:bottom-36 xl:bottom-8'>
          <Button styles='btn-sm md:btn-lg !w-fit hover:brightness-90 hover:bg-white bg-white md:text-lg text-[#1D232A] md:w-48 justify-self-center'>
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
