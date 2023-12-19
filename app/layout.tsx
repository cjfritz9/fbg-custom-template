import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"
import SplashScreen from '@/components/UI/SplashScreen';
import Announcement from '@/components/actions/Announcement';
import Ankle from '@/components/layout/Ankle';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import Script from 'next/script';
import Providers from './providers';
import CookieBar from '@/components/layout/CookieBar';

const inter = Inter({ subsets: ['latin'] });
const monsterrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Full Blast Gear', template: 'Full Blast Gear | %s' },
  description:
    'Discover the ultimate firearm cleaning system at Full Blast Gear. Our innovative, one-of-a-kind cleaning solution ensures peak performance and longevity for your firearms. Explore our top-quality products designed for gun enthusiasts and professionals. Clean, maintain, and protect your firearms like never before with Full Blast Gear.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='light'>
      <Script
        async
        type='text/javascript'
        src='https://af.uppromote.com/tracking_third_party.js?shop=full-blast-gear.myshopify.com'
      />
      <body
        className={`${inter.className} ${monsterrat.className} overflow-x-hidden`}
      >
        <SplashScreen />
        <Announcement />
        <Providers>
          <Header />
          {children}
        </Providers>
        <Ankle />
        <Footer />
        <CookieBar />
        <SpeedInsights />
      </body>
    </html>
  );
}
