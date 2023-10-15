import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ImageWithText from '@/components/layout/ImageWithText';
import ProductGallery from '@/components/layout/ProductGallery';
import RewardsBanner from '@/components/layout/RewardsBanner';
import VideoHero from '@/components/layout/VideoHero';
import productImage from '@/public/assets/images/fbg-cleaning-system-E.webp';

export default function Home() {
  return (
    <main>
      <VideoHero />
      <Border />
      <ImageWithText styles='bg-neutral' imageSrc={productImage} reverse>
        <h2 className='text-2xl font-bold'>
          Full-Bore Blast Firearm Cleaning System
        </h2>
        <h4 className='text-lg text-secondary'>
          Fostering a Revolution in Firearms Products
        </h4>
        <div className='flex-col'>
          <p className='text-md pt-4'>
            At Full Blast Gear, we make cleaning your rifle, shotgun or handgun
            QUICK and EASY. Our patented Full-Bore Blast Firearm Cleaning System
            is faster and better than the competition. We are the best
            quick-clean and single-pass cleaner on the market today. By using
            improved methods and innovative technologies we eclipse other
            products made overseas. Our primary objective is to keep your valued
            firearms clean, well-preserved, and firing accurately at all times.
          </p>
        </div>
        <Button styles='btn-outline btn-secondary mt-4'>BUY NOW</Button>
      </ImageWithText>
      <RewardsBanner />
      <ProductGallery />
    </main>
  );
}
