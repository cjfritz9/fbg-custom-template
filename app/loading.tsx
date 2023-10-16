import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex flex-col gap-12 w-[100dvw] h-[100dvh] bg-base-100 items-center justify-center text-6xl'>
      <h3 className='text-xl text-primary'>Preparing content...</h3>
      <span className='loading loading-bars loading-lg mb-96' />
    </div>
  );
};

export default Loading;
