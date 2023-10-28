import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
// import Providers from './providers';
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
  title: { default: 'Full Blast Gear', template: '%s | Full Blast Gear' },
  description: 'Full Blast Gear Description.'
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
      </body>
    </html>
  );
}
