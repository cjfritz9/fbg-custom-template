'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import logoAlt from '@/public/assets/images/fbg-logo-white.webp';
import Image from 'next/image';
import anime from 'animejs';

const SplashScreen: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const bgRef = useRef(null);
  const logoRef = useRef(null);
  const [showSplash, setShowSplash] = useState(true);

  const animate = () => {
    const bgEle = bgRef.current;
    const logoEle = logoRef.current;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    const bgLoader = anime.timeline({
      targets: bgEle,
      complete: () => setShowSplash(false)
    });
    const logoLoader = anime.timeline({
      targets: logoEle
    });

    bgLoader.add({
      duration: 500,
      delay: 700,
      translateY: -screenHeight + 184,
      easing: 'linear'
    });

    logoLoader.add({
      duration: 600,
      delay: 0,
      scale: 2,
      translateX: screenWidth / 3 - 240
    });

    logoLoader.add({
      delay: 100,
      duration: 300,
      translateY: screenHeight / 2 - 64,
      translateX: 48,
      scale: 1,
      easing: 'easeOutCirc'
    });
  };

  useEffect(() => {
    animate();
    scroll({behavior: 'smooth', top: 0})
  }, []);

  if (!showSplash || !isHome) return null;

  return (
    <>
      <div className='flex lg:hidden flex-col gap-12 top-4 left-4 sm:top-10 sm:left-12 absolute z-[51]'>
        <Image priority src={logoAlt} alt='Full Blast Gear Logo' height={48} />
      </div>
      <span className='block lg:hidden loading loading-spinner loading-lg text-white text-center absolute z-[52] top-[20dvh] left-[47dvw]'></span>
      <div
        ref={bgRef}
        className='flex fixed bg-[#1d232a] h-full w-full z-50 items-center overflow'
      >
        <div ref={logoRef} className='hidden lg:block translate-x-[-240px]'>
          <Image
            priority
            src={logoAlt}
            alt='Full Blast Gear Logo'
            height={76}
          />
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
