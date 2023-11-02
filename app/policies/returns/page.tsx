import Accordion from '@/components/actions/Accordion';
import ReturnForm from '@/components/actions/ReturnForm';
import Border from '@/components/layout/Border';
import Link from 'next/link';
import React from 'react';

const ReturnsPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex flex-col p-4 text-center lg:text-left lg:p-0 gap-4'>
          <div className='flex flex-col xl:flex-row gap-12 xl:gap-24'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-semibold my-2'>REFUND ITEM</h3>
              <p className='max-w-[800px]'>
                Refunds for accepted returns will be processed within 5 business
                days of receipt of returned merchandise. Please note that due to
                payment processor rules, it may take up to 10 business days
                after processing for the refund to appear on the account of your
                payment method.
              </p>
              <p className='max-w-[800px]'>
                Refunds will be credited to the original credit/debit card used
                at the time of purchase. Additionally, only items purchased
                directly through Full Blast Gear can be refunded through our
                website.
              </p>
              <p className='max-w-[800px]'>
                Please note: Orders CANNOT be changed, modified, or canceled
                after checkout.
              </p>
            </div>
            <ReturnForm />
          </div>
          <h3 className='text-xl font-semibold my-2'>GIFT EXCHANGES</h3>
          <p>
            If you received merchandise as a gift and would like to exchange it
            for another item, please{' '}
            <Link href='/contact' className='underline break-all'>
              contact us
            </Link>{' '}
            for assistance.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            INCORRECT OR DEFECTIVE ITEM
          </h3>
          <p>
            If you receive an incorrect item or if the merchandise was damaged
            or defective, please{' '}
            <Link href='/contact' className='underline break-all'>
              contact us
            </Link>{' '}
            for assistance.
          </p>
          <p>
            Damaged items must be reported within 3 days of receiving
            merchandise or cannot be returned.
          </p>
          <h3 className='text-xl font-semibold my-2'>
            MARKED DOWN MERCHANDISE
          </h3>
          <p>
            All sales are final on marked-down merchandise. Sale items,
            promotional items, clearance items are not eligible for return or
            exchange.
          </p>
          <p>
            Items cannot be returned smelling of cigarette smoke or fragrances,
            with animal hair, damaged, tags not attached, or received beyond 30
            days from the order date or that are Final Sale.
          </p>
          <p>
            If any returns do not meet these requirements, you will be contacted
            and the items returned to you. We reserve the right to refuse a
            refund if the items have any signs of wear, alteration, misuse, or
            damage.
          </p>
          <Border />
          <h3 className='text-xl font-semibold my-2'>RETURN FAQ</h3>
          <ReturnFAQsAccordion />
        </div>
      </div>
    </div>
  );
};

const ReturnFAQsAccordion: React.FC = () => {
  return (
    <>
      <Accordion title='Is it Easy to Return Items?'>
        <p>
          Once your return is authorized, you’ll receive step-by-step
          instructions and a prepaid shipping label via email.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='How Soon Will I Get My Refund?
'
      >
        <p>
          Once your items are inspected by a Full Blast Gear team member
          (typically within 5 business days). Then, you’ll get your refund
          typically within 72 hours.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='What Items Are Returnable?
'
      >
        <p>Items purchased in the last 30 Days only.</p>
      </Accordion>
      <Border />
      <Accordion
        title='What Items are Non-Refundable?
'
      >
        <p>
          Items marked as final sale. Free or bonus gifts or promotional items
          with retail value. Any purchase points accumulated (no cash value).
        </p>
      </Accordion>
      <Border />
      <Accordion
        title='Did You Use Guest Checkout?
'
      >
        <p>
          If so, please be sure to carefully identify the product(s) you are
          returning/exchanging.
        </p>
      </Accordion>
      <Border />
      <Accordion
        title="Don't Know Which Product You Have?
"
      >
        <p>
          If you are unable to identify your product please contact Full Blast
          Gear Customer Service at 800-318-9030. One of our representatives will
          be able to assist you in determining the product in question. Once the
          product has been identified you will be able to complete the return
          product and exchange process.
        </p>
      </Accordion>
    </>
  );
};

export default ReturnsPage;
