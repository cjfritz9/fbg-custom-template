import React from 'react';
import { AboutSubpagesProps } from '@/@types/props';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import placeholderImg from '@/public/assets/images/fbg-placeholder.webp';
import groupImg from '@/public/assets/images/fbg-group-hunt.webp';
import Border from './Border';

const AboutSubpages: React.FC<AboutSubpagesProps> = ({ subpage }) => {
  if (subpage === 'our-story') return <OurStory />;

  return notFound();
};

const OurStory: React.FC = () => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='flex flex-col gap-12'>
        <div>
          <h2 className='text-4xl font-semibold -mb-1'>Our Journey</h2>
          <small className='text-secondary text-lg'>{`Full Blast Gear's Story`}</small>
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-24'>
          <div className='flex flex-col gap-4'>
            <p>
              Steve, the founder of Full Blast Gear as been a firearms
              enthusiast since he was a child, and like many people, he
              struggled with traditional cleaning methods. Whether it was
              time-consuming or toilsome, he saw there was room for improvement.
              He wanted to create American Made tools to help make gun cleaning
              easier.
            </p>
            <p>
              When I was around 9 years old, I actively watched and learned from
              my father about firearm cleaning. After every trip to the range
              for target practice, shooting clays, and family hunting trips, my
              brothers and I would sit around our father as he methodically
              disassembled and cleaned our guns. With wide, curious eyes, we
              listened as he taught us the process of disassembling, cleaning,
              and reassembling a firearm. He explained the names of each part
              and how cleaning a firearm is more than “what you’re supposed to
              do.” Dad told us stories about how his father imparted his firearm
              knowledge in the same way, which later became more ingrained
              during his time proudly serving in the United States military.
            </p>
            <p>
              Unfortunately, later in life, I abandoned my fathers’ wisdom.
              Cleaning my firearms took too much time and seemed to be more
              laborious than it was worth. After hunts, my guns would go right
              into their case - dirty, at times wet. So far, I hadn’t come into
              any issues; they always functioned adequately when I needed them.
              This only encouraged the terrible habit I developed, as I fell
              into the trap of “cleaning is a myth.”
            </p>
            <p>
              A couple of years later, my neglect finally caught up. The
              consequences were handed to me on a rust-speckled gun. If that
              wasn’t upsetting enough, shells were not ejecting as they should.
              Frustrated, I disassembled my gun for further inspection.
            </p>
            <p>
              I discovered a gut-wrenching truth: the bore was pitted in places
              from corrosion. This pitting was a devastating problem. I had
              ruined my prized Ithaca Model 37 12-gauge shotgun, and I was the
              only one to blame. The fate of my carelessness was the last lesson
              I would ever need. Since then, I have held onto my father’s
              wisdom, and since then keeping my firearms in pristine condition
              has been a priority.
            </p>
          </div>
          <div className='flex flex-col gap-2 h-[640px] w-full lg:min-w-[640px]'>
            <Image
              src={placeholderImg}
              alt='Founder of Full Blast Gear, Stephen Hoodecheck'
              height={640}
              width={640}
              className='object-cover object-center min-w-[640px]'
            />
            <p className='text-xl font-semibold'>Stephen Hoodecheck</p>
            <p className='text-sm -mt-4 italic'>Founder, Full Blast Gear</p>
          </div>
        </div>
        <Border />
        <div className='flex w-full justify-center'>
          <Image
            src={groupImg}
            alt=''
            height={540}
            width={1080}
            className='object-cover object-center'
          />
        </div>
        <Border />
        <div className='flex flex-col gap-4'>
          <p>
            For decades, I cleaned my rifles, shotguns, and handguns with
            traditional tools and products. During one excursion, I noticed a
            hunting buddy was attempting to use a quick-clean product that was
            popular at the time. I couldn’t help but notice the commotion going
            on in my buddy’s world at that moment. He fussed over trying to feed
            the device through the barrel with one hand while attempting to keep
            his shotgun inverted.
          </p>
          <p>
            Becoming annoyed, he attempted an alternate method, laying his gun
            across his lap, hoping to pull the cord and cleaning material
            through without all the hassle. As it turned out, he then needed to
            upend his gun because his reach was not quite long enough to get the
            job done.
          </p>
          <p>
            Somewhat frustrated over the situation, I kept thinking that there
            has to be an easier, faster, hassle-free way to clean one’s
            firearms. I had an urge to solve this problem so I hit the ground
            running. Several years, many hours of research, exhilarating trials,
            and defeating errors, finally, the Full-Bore Blast firearm cleaning
            product was born!
          </p>
          <p>
            Then and now I am determined to craft quality products for shooting
            enthusiasts right here in the USA. The Full-Bore Blast system is a
            simple, quick, enjoyable way to clean and protect your firearms
            while meeting the utmost standards of quality and efficiency. I
            think my dad would be proud of this made in America gun cleaner. And
            I hope you’ll see and enjoy the benefits of all our innovative
            firearm products here at Full Blast for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSubpages;
