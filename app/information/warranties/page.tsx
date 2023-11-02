import Accordion from '@/components/actions/Accordion';
import Border from '@/components/layout/Border';
import React from 'react';

const WarrantiesPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex text-center lg:text-left p-8 lg:p-0 flex-col gap-2'>
          <h3 className='text-xl font-semibold my-2'>WARRANTY INFORMATION</h3>
          <WarrantyAccordion />
        </div>
      </div>
    </div>
  );
};

const WarrantyAccordion: React.FC = () => {
  return (
    <>
      <Accordion
        title='WHAT WARRANTY COVERS:'
        defaultExpanded
      >
        <p>
          This warranty covers any manufacturer workmanship defects in your Full
          Blast™ products. This warranty applies to consumer use only and is
          null and void if the product is used in a manner it is not intended
          for.
        </p>
      </Accordion>
      <Border />
      <Accordion title='HOW LONG COVERAGE LASTS:'>
        <p>
          This warranty lasts for 24 months from the purchase of the product.
          Proof of purchase must be verified.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='WHO IS COVERED UNDER WARRANTY:'
      >
        <p>
          This warranty is for the original consumer purchaser only. It is not
          transferable. Proof of purchase must be verified.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='WHAT WARRANTY DOES NOT COVER:'
      >
        <p>
          Any problem that is caused by abuse, misuse, or an act of nature
          (fire, flood, etc.) is not covered. Consequential and incidental
          damages are not recoverable under this warranty.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='WHAT FULL BLAST ENTERPRISES™ WILL DO:'
      >
        <p>
          If the item proves to be defective in workmanship, Full Blast™ will
          attempt to repair the item. If this is not possible we will replace it
          with a new item of similar composition and price. If no such item is
          available, a refund for the full purchase price of the original item
          will be issued at Full Blast’s discretion.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='LIMITATION ON DAMAGES AND DURATION OF IMPLIED WARRANTIES:'
      >
        <p>
          Full Blast™ will repair or replace the product as provided under this
          warranty. This shall be the only remedy of the consumer. Full Blast™
          shall not be liable for any loss or damages, including consequential,
          indirect, and incidental damages arising out of the use of, or
          inability to use, the product, or for breach of any expressed or
          implied warranty or condition on this product. Except to the extent
          prohibited by law, any implied warranties or conditions of
          merchantability and fitness for a particular purpose are limited in
          duration to the duration of this warranty.
        </p>
      </Accordion>
    </>
  );
};

export default WarrantiesPage;
