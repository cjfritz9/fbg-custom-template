'use client';
import React from 'react';

const VideoHero: React.FC = () => {
  return (
    <div className='max-h-[640px] overflow-hidden 2xl:px-12 bg-base-100'>
      <video autoPlay muted loop controls={false} className='overflow-hidden mt-[-200px]'>
        <source src='/assets/videos/gun-cleaning.webm' type='video/webm' />
      </video>
    </div>
  );
};

export default VideoHero;
