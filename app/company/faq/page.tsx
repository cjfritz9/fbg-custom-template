import Accordion from '@/components/actions/Accordion';
import Border from '@/components/layout/Border';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: { default: 'FAQ', template: '' },
  description:
    'Learn about the heart and soul of Full Blast Gear on our Company page. Discover our history, values, and the dedicated team behind our unique firearm cleaning solutions. Explore the driving force that sets us apart in the industry and fuels our commitment to excellence. Get to know the Full Blast Gear story and what makes us your trusted source for firearm maintenance.'
};

const FAQPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px] w-full'>
        <h3 className='text-4xl mb-12 text-center font-semibold'>
          Frequently Asked Questions
        </h3>
        <FAQAccordion />
      </div>
    </div>
  );
};

const FAQAccordion: React.FC = () => {
  return (
    <>
      <Accordion
        title='WHAT HAPPENS IF I DON’T CLEAN MY FIREARM?'
        defaultExpanded
      >
        <p>
          Every time a bullet is shot through the barrel of your gun, it leaves
          behind residue, most commonly powder, copper and lead. In some cases,
          the primer in the cartridge itself expels a corrosive residue
          everywhere, too. Known as residual fouling, over time, it will build
          upon the inside of your firearm and eventually result in issues such
          as rust, pitting, and malfunction, all of which can cause serious
          safety issues.
        </p>
      </Accordion>
      <Border />
      <Accordion title='IS IT NECESSARY TO CLEAN MY FIREARM EVERY TIME I USE IT?'>
        <p>
          It is <i>highly</i> recommended that a thorough cleaning is performed
          after each use. In doing this, the risk of damage from residual
          fouling, or corrosive ammunition is significantly reduced. Each
          cleaning is a proactive measure in preparedness – it’s always better
          to take a little extra time and have your firearms spick-and-span than
          to risk malfunction.
        </p>
      </Accordion>
      <Border />
      <Accordion title='HOW LONG CAN I WAIT TO CLEAN MY GUN AFTER SHOOTING?'>
        <p>
          It is always suggested that cleaning be done right afterward, but we
          know that is not always possible. The next best option is, you guessed
          it, as soon as you are given a chance. It is recommended that you at
          least quickly clean the bore and breach of your gun right away after
          shooting. And then give your gun a thorough more complete cleaning
          preferably within a couple of days. Unless you are using corrosive
          ammunition, in this case, cleaning as soon as possible is a must.
          Lucky for you, the Full-Bore Blast Gun Cleaner can be used on the spot
          wherever you are.
        </p>
      </Accordion>
      <Border />
      <Accordion title='CAN I CLEAN MY GUN WITHOUT TAKING IT APART?'>
        <p>
          Nope, sorry, pal. To properly clean a firearm, it must be
          disassembled. Manufacturers state field stripping as the farthest
          level of disassembly needed, but this may not be sufficient for guns
          used frequently. In this case, a full deep clean is more suitable.
        </p>
      </Accordion>
      <Border />
      <Accordion title='WHAT IS RESIDUAL FOULING?'>
        <p>
          Residual fouling is the build-up of remnants left behind from
          gunpowder and bullets. There are four common types: carbon, copper,
          lead, and plastic. If not cleaned, the residue can result in loss of
          accuracy, cause malfunction, rust, pitting, an overall decline in the
          reliability and value of your firearm.
        </p>
      </Accordion>
      <Border />
      <Accordion title='WHAT IS CORROSIVE AMMUNITION?'>
        <p>
          Some cartridges (typically older manufactured ones purchased from
          surplus stores) contain a primer made with potassium chlorate (aka
          salt). When fired, the primer will get everywhere that combustion took
          place: bore, chamber, face, bolt, etc. When the salt, moisture in the
          air, and metal of your firearm combine, the fast-acting chemical
          reaction creates rust. The good thing is that newly manufactured
          ammunition is highly unlikely to contain this primer.
        </p>
        <p className='mt-4'>
          <i>
            Note: if newly manufactured ammunition is made with corrosive
            primers, a warning will be listed on the box. You may read “mildly”
            or “partially” corrosive, but it is just as damaging as “highly.”
            Corrosive is corrosive, do not fall victim to schemes.{' '}
          </i>
        </p>
      </Accordion>
      <Border />
      <Accordion title='IS RUST ON A GUN BAD?'>
        <p>
          YES. The inevitable truth is that firearms are likely to rust if
          maintenance is negligent, including weapons that are not being used
          and were stored away. Metal is a magnet for moisture. Rust results in
          pitting, which can ultimately be the demise of your firearm.
        </p>
      </Accordion>
      <Border />
      <Accordion title='CAN A RUSTED GUN BE REPAIRED?'>
        <p>
          A rusted firearm can be repaired, but there are limits. If surface
          rust is caught early, you can likely do the job at home with time,
          patience, and elbow grease. Advanced stages of rust result in pitting.
          A professional gunsmith can repair marginal pitting through a process
          called bluing. Be warned, this is time-consuming and can become
          costly, at times considerably exceeding the cost and worth of your
          firearm.
        </p>
      </Accordion>
      <Border />
      <Accordion title='WHAT MATERIALS DO I NEED TO CLEAN MY GUN?'>
        <div className='flex flex-col gap-4'>
          <p>
            For starters, you need to have a solid, sturdy, flat surface to
            work. A well-lit space is beneficial as well, considering the many
            small parts involved. For your health and personal safety, an area
            that is adequately ventilated is essential. Safety glasses are
            recommended to protect your eyes from flying springs.
          </p>
          <p>
            You will only need two cleaning fluids, solvent, and lubricant
            (oil). Solvents can get tricky, as there are many options to choose
            from. You want one that will loosen and remove carbon, copper, lead
            and any other fouling, break down any buildup of oil and dirt, and
            degrease all surfaces. Fortunately, our Full-Bore Blast Gun Cleaner
            does all of it in one solvent, rather than two like most others
            found on the market.
          </p>
          <p>
            Next are the tools. First, you need a high-quality rod. You will
            want one that is softer than the metal of your firearm, such as our{' '}
            <b className='hover:underline'>
              <Link href='/shop/flex-rod-shotgun'>Flex Rods.</Link>
            </b>
          </p>
          <p>
            The rods allow for reach through the bore — no excuses for a poorly
            cleaned firearm.
          </p>
          <p>
            Second, jags/loops “patch holders.” Attaching to the end of the rod,
            they traditionally have one purpose: to hold the patch. Our
            specialized Dual Open-Slotted Tip-Ends are made to keep from
            scratching the bore while offering use for other functions other
            than just for patches.
          </p>
          <p>
            Patches are the third item you will need in your cleaning kit. They
            play multiple roles in cleaning the bore, action, and frame and can
            be used to lubricate your firearm.
          </p>
          <p>
            Brushes are the following item to add. Bore brushes are cylindrical
            twisted wire brushes that attach to your rod. They are used to clean
            out the more stubborn fouling the patches alone cannot clean. They
            come in varying caliber sizes, so you get the best clean possible.
            Other “toothbrushes” like brushes are also helpful in cleaning out
            tight spots. Both come with bronze or nylon bristles.
          </p>
          <p>
            Cleaning mats are optional but a good idea to use. The soft surface
            helps prevent dinging your gun on a solid workspace and any fluids
            from getting on surfaces.
          </p>
        </div>
      </Accordion>
      <Border />
      <Accordion title='DO I HAVE TO OIL MY FIREARM?'>
        <p>
          Yes, yes, and yes. Not using oil on your firearm can lead to several
          complications. Guns are machines made of moving metal parts. You do
          not want metal rubbing against metal without anything coating it. Lube
          is essential – it does not matter your argument. It not only reduces
          friction and allows your firearm to function correctly, but it also
          plays a vital role in preventing rust.
        </p>
      </Accordion>
      <Border />
      <Accordion title='HOW MUCH LUBRICANT SHOULD I USE?'>
        <p>
          You never want your gun dripping in oil. All lubricants are different;
          some last longer, some are tackier – attracting more dirt – and others
          are thin. The more you clean your firearm, the more you understand how
          much oil you need in some areas or less in others. You can try
          different types and find what works best. Whether you plan on storing
          your firearm for some time or use it frequently, you want a healthy
          layer of oil to coat your gun, but never so much that it attracts
          every particle of dust and dirt in the air.
        </p>
      </Accordion>
      <Border />
      <Accordion title='IS IT DANGEROUS TO HAVE A DIRTY FIREARM?'>
        <p>
          Yes. Dangerous in safety to yourself and others in the sense of being
          a responsible gun owner and reckless in situations when you need to
          rely on your weapon and it malfunctions. Common hazardous problems
          that result from a dirty firearm are failure to fire, failure to
          eject, failure to extract, or even broken, worn-out parts. Broken
          parts can be noted and repaired through regular cleaning and
          inspection. There’s simply no responsible excuse for a dirty firearm.
        </p>
      </Accordion>
      <Border />
      <Accordion title='CAN I CAUSE DAMAGE BY OVER CLEANING MY GUN?'>
        <p>
          Technically speaking, no. You can cause damage to your firearm by not
          using quality cleaners and tools. Improper cleaning techniques can
          result in damage. Many people find cleaning their firearms relaxing;
          as long as it is done well, there’s no harm in a little extra TLC.
        </p>
      </Accordion>
      <Border />
      <Accordion title='DO I HAVE TO CLEAN MY FIREARM EVEN IF I DON’T USE IT?'>
        <p className='mb-4'>
          Absolutely! Most “unused” firearms are tucked away in nightstands or
          other places around the home in case of emergencies. These places also
          happen to collect some of the most dust and dirt, settling on and in
          your firearm. An excellent, thorough deep-clean every six months is
          recommended.
        </p>
        <p>
          <i>
            Just note: it’s always a good idea to practice with all firearms
            that you own. Being comfortable using all of your weapons is
            imperative. You will learn if there are any adjustments or issues
            that need to be addressed with that particular gun, too.
          </i>
        </p>
      </Accordion>
      <Border />
      <Accordion title='WHAT GUN CLEANING SAFETY MEASURES SHOULD I TAKE?'>
        <p>
          ALWAYS unload your firearm and check visually and physically for any
          ammunition in the chamber before disassembly. Then, check again, and
          then again – you can never be too cautious. After unloading your gun,
          be sure to keep ammunition in a location separate from your workspace.
          Work in a well-lit area. Your workspace should be a flat, sturdy
          surface clear of any clutter to avoid losing parts, such as pins and
          springs that may tend to roll away. Find a space that is well
          ventilated, as most cleaners have strong fumes that can cause you to
          become lightheaded at least. And most importantly, pay attention to
          what you are doing, limit distractions.
        </p>
        <div className='py-4'></div>
      </Accordion>
      <Border />
    </>
  );
};

export default FAQPage;
