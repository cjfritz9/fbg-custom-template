import React from 'react';
import { AboutSubpagesProps } from '@/@types/props';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import placeholderImg from '@/public/assets/images/fbg-placeholder.webp';
import Border from './Border';
import ImageWithText from './ImageWithText';

const AboutSubpages: React.FC<AboutSubpagesProps> = ({ subpage }) => {
  if (subpage === 'our-story') return <OurStory />;
  if (subpage === 'our-mission') return <OurMission />;
  if (subpage === 'why-full-blast') return <WhyFullBlast />;
  if (subpage === 'our-approach') return <OurApproach />;
  if (subpage === 'maintenance') return <Maintenance />;

  return notFound();
};

import groupImg from '@/public/assets/images/fbg-group-hunt.webp';

const OurStory: React.FC = () => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='flex flex-col gap-12'>
        <div>
          <h2 className='text-4xl font-semibold -mb-1'>Our Journey</h2>
          <small className='text-secondary text-lg'>
            Full Blast Gear’s Story
          </small>
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

import womanFiringRange from '@/public/assets/images/fbg-woman-firing-range.jpg';

const OurMission: React.FC = () => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <ImageWithText
        imageSrc={womanFiringRange}
        styles='!p-0 !m-0'
        alignItems='start'
        reverse
      >
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold text-base-300'>
            Our Gun Owners’ Pledge
          </h2>
          <p>
            As dedicated firearm owners, we were always searching for the best
            products at fair prices. Having no luck in finding gear that
            provided consistent satisfaction, we decided to make American-made
            gun cleaning products for all gun enthusiasts. With Full Blast Gear
            innovative products you can be confident the job gets done right,
            the first time, every time.
          </p>
          <p>
            At Full Blast Gear, we seek to revolutionize equipment and outdoor
            apparel with lightweight, durable and technically advanced purpose.
            Our materials are mainly sourced here in the United States,
            establishing jobs for American workers, and promoting the American
            manufacturing industry. Our pride and value in the people and
            communities of this great nation runs deep.
          </p>
          <p>
            We are committed to continuous innovation and improvement. Our team
            is made up of passionate hunters, shooters, and outdoor enthusiasts
            who understand the unique needs of our customers. We take your
            feedback seriously and use it to drive our product development. Our
            journey is one of dedication to quality, service, and the unwavering
            support of our fellow firearm enthusiasts. Thank you for being a
            part of the Full Blast Gear story.
          </p>
        </div>
      </ImageWithText>
    </div>
  );
};

import howItWorksImg from '@/public/assets/images/fbg-how-it-works.jpg';

const WhyFullBlast: React.FC = () => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 gap-8 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>
          If George Washington was still around, he’d use Full Blast​
        </h2>
        <p>
          We strive to use only products and materials made in the USA. We
          strongly believe in bringing back manufacturing and supporting a
          U.S.-based workforce. We know that this inherently increases the costs
          of manufacturing and reduces profits, but we feel it is worth it to
          stay true to our values. We were tired of only seeing gun-cleaning
          products made in East Asia. So tired of it that we created Full Blast
          Gear – the only known entirely American-made gun cleaning tool. We
          aren’t crying with pride now; we just have something in caught in our
          eyes.
        </p>
      </div>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>
          From the forest to the range, we have your back
        </h2>
        <p>
          Whether you hunt out in the field or visit your local range for
          recreation and sport, Full Bore Blast has been meticulously designed
          for various gun users’ needs. Many were frustrated with the cumbersome
          or inefficient products they were forced to use, especially in the
          field. The Full Bore Blast works as both a quick clean and a complete
          clean device kit that is flexible, clean, long-lasting, durable,
          lightweight, and simple to use.
        </p>
      </div>
      <ImageWithText
        imageSrc={howItWorksImg}
        styles='!p-0 !m-0'
        alignItems='start'
        reverse
      >
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold mb-4'>
            How does Full-Bore Blast work?
          </h2>
          <p>
            The Full Blast technology incorporates stiff-yet-flexible
            components, using a unique materials that will bend but not break.
            The key to Full Blast’s endlessly adaptable function is a patented
            technology that features “Drill Clean”, “Dual Clean”, and optional
            “Quick-Connect-and-Release” (QCR) system, which allows you to clip
            on and off various replaceable cleaning elements.
          </p>
          <p>
            Our gun cleaners and kits are available for most all gauges and
            calibers, and can be used for all types of firearms: shotguns for
            game hunting, home-defense tactical shotguns, rifles, ARs, handguns,
            pistols and revolvers.
          </p>
          <p>
            Made with bright colors, it can be found easily amongst all the
            camouflage and dark colors in duffel and range bags, ammo and gun
            boxes, and shooting cases. It is made of the finest materials
            available and our dual slotted-tip ends for patches, brushes, foam
            swabs, cotton mops, flex rods and jags are made proudly in the U.S.
            Our mops and cleaners are designed to be used and washed multiple
            times for longevity and reduced waste.
          </p>
          <p>
            The innovative design of our multi-functional, open-ended
            slotted-tip end allows you to use traditional cleaning and oiling
            products, like disposable patches, rags and cloths with befit of
            covering double the cleaning and oiling surface area in the same
            amount of time.
          </p>
        </div>
      </ImageWithText>
    </div>
  );
};

import americanFlagImg from '@/public/assets/images/fbg-american-flag.jpg';

const OurApproach: React.FC = () => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <ImageWithText
        imageSrc={americanFlagImg}
        styles='!m-0 !p-0'
        alignItems='start'
        reverse
      >
        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold mb-4'>
            We Are Proudly ’American First’
          </h2>
          <p>
            We take pride in being part of something greater than us. “American
            First” and “Made in America” products are how our gun cleaning tools
            are made and chosen. In doing this, we can give back to those who
            gave so much to us by providing jobs and growing the American
            workforce. Being proudly American is not a statement we use
            thoughtlessly. Our pride is found in the brave individuals who left
            behind families to fight for our freedom and the visionaries who
            took risks and sacrificed their time and energy, making it possible
            for us to create and manufacture our dreams.
          </p>
          <p>
            “American Made” or “Made in the USA” products are granted this title
            when they are manufactured and produced in the United States. The
            Federal Trade Commission guidelines what criteria must be met in
            order for a product to display a “Made in the USA” label. When not
            all standards are met, products may instead be assembled in the
            states, and labeled with an “Assembled in the USA” label. “Made in
            the USA” is an unwritten-yet-understood promise of quality,
            patriotism, and job security for American workers.
          </p>
          <p>
            Our “Stars & Stripes” rating system is designed to guide you in
            buying American-made products. Certain things cannot be produced
            entirely in the states with raw materials strictly sourced from our
            lands, primarily because of restrictions or costs. We want to
            provide you with the best equipment that is 100% crafted in America,
            and at the most affordable prices, but this is not always possible.
            Therefore, our system categorizes the degree to which each product
            is American-made.
          </p>
        </div>
      </ImageWithText>
    </div>
  );
};

import cleaningImage from '@/public/assets/images/fbg-cleaning.jpg';
import Accordion from '../actions/Accordion';

const Maintenance: React.FC = () => {
  return (
    <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-4xl font-semibold mb-4'>
          Why Cleaning Your Gun is Important
        </h2>
        <p>
          Owning a firearm comes with a lot of responsibility. It doesn’t matter
          if your single gun (or secret bunker/armory) is for hunting, safety,
          sport, or collection, the majority of information discussed usually
          revolves around safety – and rightly so. The topic that often gets
          overlooked is the importance of maintenance and cleaning. While it may
          seem like a simple part of gun ownership, it consists of more than
          just “what you’re supposed to do.” Here are 7 reasons that look into
          the importance to maintain your firearm and gun cleaning, and what you
          gain from it as well.
        </p>
      </div>
      <Border />
      <ImageWithText
        imageSrc={cleaningImage}
        styles='!m-0 !p-0'
        alignItems='start'
        reverse
      >
        <Accordion title='Safety First'>
          <div className='flex flex-col gap-4'>
            <p>
              As gun owners, we proudly value the security our weapons bring to
              our homes. There is peace of mind associated with being able to
              protect ourselves beyond locking the doors before going to bed at
              night. To ensure that safety remains and you can provide that
              protection effectively, routine cleaning of your gun (or armory)
              is critical.
            </p>
            <p>
              The safety firearms provide can become a preventable hazard when
              not adequately cleaned. Residue build-up is one of the most common
              causes of malfunction, such as failure to fire correctly. In a
              situation of self-defense, this could land you in a more
              compromising position, not to mention the risk of the live round
              mishap. Routine cleaning will significantly decrease the
              likelihood of this occurrence.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion
          title='Familiarity and Respect for Your Firearm'
          defaultExpanded
        >
          <div className='flex flex-col gap-4'>
            <p>
              One of the most critical elements in owning and using any firearm
              is understanding it. Thorough cleaning of your gun requires
              disassembly. By doing this, you gain a better understanding of the
              components that make up this mechanical artwork. Gaining an
              understanding of each part’s role within the entire mechanism will
              not only give you more respect for it but also a greater level of
              confidence in handling it.
            </p>
            <p>
              Being familiar with your firearm – inside and out – is also
              helpful if something goes wrong or breaks. You’re likely able to
              diagnose the problem at hand, and in some cases fix it for
              yourself. Through consistent cleaning, you will learn that no two
              guns are the same, with some requiring more frequent cleaning than
              others, even down to where each grime up the most.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion title='Reliability' defaultExpanded>
          <div className='flex flex-col gap-4'>
            <p>
              There is no denying that a reliable weapon is a clean weapon. Few
              things are more annoying and potentially dangerous than an
              unreliable and filthy firearm. Most handgun owners rely on their
              firearms for home security or personal protection. Without proper
              and thorough cleaning, that reliance will quickly decrease and can
              lead to a preventable situation you don’t want to find yourself
              in. Including that 9mm you tucked away by the front door years ago
              and haven’t touched since – dust still gets in and builds up.
            </p>
            <p>
              Relying on your firearm means you also rely on its accuracy. The
              main issue of what will compromise the accuracy of a gun is the
              shooter. But production quality, overall feels, using the proper
              ammunition and overall maintenance also play a critical role.
              Always remember: A clean gun is a safe (and accurate) gun.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion
          title='Maintain Your Weapon’s Value Over Time'
          defaultExpanded
        >
          <div className='flex flex-col gap-4'>
            <p>
              There are very few things in this life you can purchase that will
              hold value. If not monetary, firearms will retain value in
              survival. Here’s the catch: You have to care for these puppies
              like the prized possessions they are. When it comes to
              maintenance, don’t cut corners, or cheap out. Give that fine
              machine the cleaning and storage it needs. With proper cleaning,
              your weapon can last years, to generations – hence a tradition of
              heirloom firearms that have been passed down in families for
              countless generations, notably those that still function at the
              performance levels of when they were manufactured. While you can’t
              necessarily over-clean your gun, it is certainly possible and easy
              to cause damage if not done properly or with low-quality
              equipment.
            </p>
            <p>
              Your firearm is an investment. Whether you’re prepping for
              doomsday, an avid hunter, sport shooter, or hobbyist, you want to
              maintain its value. If you had to choose only one way to do so,
              keeping it clean would be the way to go.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion title='Brushless Solvents' defaultExpanded>
          <div className='flex flex-col gap-4'>
            <p>
              For starters, if you’re a new gun owner or just unfamiliar with a
              new firearm, it’s always a good idea to refer to the owner’s
              manual. Purchased your gun at a pawn shop and it didn’t come with
              one? No reason for excuses, you can almost always find the manual
              online, or by calling the manufacturer.
            </p>
            <p>
              As mentioned above, having quality cleaning equipment is a must.
              Traditionally, bore brushes made of copper or bronze have been
              used. However, some gun aficionados say that this type of cleaning
              method is old-fashioned and may cause damage to the bore, throat,
              crown, and rifling.
            </p>
            <p>
              Recently, brushless solvents are securing their place on the shelf
              as a more modern approach, and rightfully so. Rather than
              scrubbing the bore with abrasive bristles and chemicals that are
              harmful to the steel in your gun’s barrel, the brushless solvents
              only need to be sprayed into the muzzle. While some companies
              boast tremendous success, we at Full Blast still recommend regular
              cleanings with a brush or scrubber that is 100% safe.
            </p>
            <p>
              Just remember, the more thorough you can be, the more confidence
              you can have in your firearm, and the better it will perform.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion title='Lubrication' defaultExpanded>
          <div className='flex flex-col gap-4'>
            <p>
              Lubrication is essential, but that doesn’t mean you should have a
              firearm sopping in it. Balance is key. As stated earlier, every
              gun is different, so finding that balance might be a little tricky
              at first if you get a new gun.
            </p>
            <p>
              This is just one example of how getting in the habit of cleaning
              your weapon and becoming familiar with it is important. If all you
              do is continue to add lubricant or oil and never clean your
              firearm, you can end up with a gummy mess. You want to make sure
              there’s enough lubricant to eliminate friction, but not so much
              that everything in the air sticks to it.
            </p>
            <p>
              Not oiling your firearm is much worse. Oil provides an outer layer
              of protection, and reduces friction on your gun’s mechanical
              parts. After cleaning your gun, lubrication plays an integral part
              in protecting the metal from any possible leftover residue from
              the solvent. This leftover residue could potentially cause
              corrosion. Lubrication not only allows your gun to function, but
              it also protects against rust – the greatest enemy of all things
              metal. And most of all, it leaves you prepared.
            </p>
          </div>
        </Accordion>
        <Border />
        <Accordion title='Avoiding Problems' defaultExpanded>
          <div className='flex flex-col gap-4'>
            <p>
              Some folks clean their firearms after every use, and some when
              they feel it’s “time.” It’s important to keep in mind that every
              shot fired leaves behind some type of combustion residue, whether
              that’s carbon, contaminants from the cartridge, etc., and it will
              accumulate on your weapon. Another issue commonly overlooked is
              the humidity in the air, and two things that don’t get along are
              metal and moisture. Not cleaning your firearm thoroughly will lead
              to problems that are extremely preventable.
            </p>
            <p>
              For target and hunting firearms, it’s recommended that they are
              cleaned after each hunt to prevent rusting and any other
              complications that can occur from dirt or other environmental
              factors.
            </p>
            <p>
              For those of you that have everyday carry firearms every, it’s
              highly recommended a thorough cleaning is done at least every two
              weeks. Even though it’s unlikely you are firing it, lint, dust and
              a multitude of miscellaneous particles accumulate. If a time comes
              when you need to respond with your firearm, the last thing you’d
              want is for it to malfunction.
            </p>
          </div>
        </Accordion>
        <Border />
      </ImageWithText>
    </div>
  );
};

export default AboutSubpages;
