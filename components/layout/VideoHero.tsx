import React from 'react';
import Button from '../actions/Button';

const VideoHero: React.FC = () => {
  return (
    <div className='max-h-[640px] overflow-hidden 2xl:px-12 bg-base-100 backdrop-filter relative'>
      <div className='absolute bg-transparent h-full w-full 2xl:mx-[-3rem] z-10 text-center'>
        <h1 className='text-5xl font-bold absolute w-full bottom-40'>
          Full Bore Blast Firearm Cleaning System
        </h1>
        <p className='text-lg absolute w-full bottom-32'>
          Fostering a Revolution in Firearms Products for Gun Enthusiasts
        </p>
        <div className='text-lg absolute w-full bottom-14'>
          <Button styles='hover:btn-ghost btn-secondary text-lg text-base-100 w-48 justify-self-center bottom-32'>
            BUY NOW
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
        <source src='/assets/videos/gun-cleaning.webm' type='video/webm' />
        <source src='/assets/videos/gun-cleaning.mp4' type='video/mp4' />
        <source src='/assets/videos/gun-cleaning.ogg' type='video/ogg' />
      </video>
    </div>
  );
};

export default VideoHero;
