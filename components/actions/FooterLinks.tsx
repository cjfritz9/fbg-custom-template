'use client';
import React, { useEffect, useState } from 'react';
import { footerLinks } from '@/lib/static/links';
import { usePathname, useRouter } from 'next/navigation';

const FooterLinks: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (slug: string) => {
    router.push(slug);
  };

  useEffect(() => {
    const pathnameIndex = footerLinks.findIndex(
      (link) => link.slug === pathname
    );
    if (pathnameIndex >= 0) {
      setActiveIndex(pathnameIndex);
    } else {
      setActiveIndex(null);
    }
  }, [pathname]);

  console.log(activeIndex);

  return (
    <div className='tabs mt-10'>
      {footerLinks.map((link, i) => (
        <a
          key={i}
          className={`tab tab-bordered ${i === activeIndex && 'tab-active'}`}
          onClick={() => handleClick(link.slug)}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
