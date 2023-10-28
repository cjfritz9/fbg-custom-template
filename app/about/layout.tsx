import React, { PropsWithChildren } from 'react'

const AboutLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-auto bg-base-100'>
      {children}
    </div>
  );
}

export default AboutLayout;