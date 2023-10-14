import './globals.css';
import type { Metadata } from 'next';
import { Inter, Mulish, Montserrat } from 'next/font/google';
import Providers from './providers';
import Announcement from '@/components/actions/Announcement';
import Header from '@/components/layout/Header';
import Border from '@/components/layout/Border';
import Ankle from '@/components/layout/Ankle';
import Footer from '@/components/layout/footer/Footer';

const inter = Inter({ subsets: ['latin'] });
const monsterrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: { default: 'Full Blast Gear', template: '%s | Full Blast Gear' },
  description: 'Full Blast Gear Description.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body className={`${inter.className} ${monsterrat.className} overflow-x-hidden`}>
        <Announcement />
        <Providers>
          <Header />
          {children}
          <Ankle />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
