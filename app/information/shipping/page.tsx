import Border from '@/components/layout/Border';
import React from 'react';

const ShippingPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center bg-base-100 text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='max-w-[1280px]'>
        <div className='flex text-center lg:text-left p-8 lg:p-0 flex-col gap-2'>
          <h3 className='text-xl font-semibold my-2'>SHIPPING INFORMATION</h3>
          <p>
            Orders typically ship out within 2-3 business days (not including
            weekends or U.S. Holidays) from the day they are placed (applies to
            standard shipping only).
          </p>
          <p>
            Specialized or orders that are hand-assembled at our warehouse may
            require additional shipping time, especially during peak seasons.
          </p>
          <p>
            Once your order ships, you will receive a shipping confirmation
            email with the tracking information. You may track your package by
            entering your tracking number into Google or by going directly to
            USPS.
          </p>
          <p>
            <b>
              DELIVERY FROM CERTAIN CARRIERS MAY NOT BE AVAILABLE IN YOUR AREA.
            </b>
          </p>
          <div className='py-4'>
            <Border />
          </div>
          <h3 className='text-xl font-semibold my-2'>UNITED STATES SHIPPING</h3>
          <h4 className='text-lg font-semibold my-2'>STANDARD SHIPPING</h4>
          <p>
            All of our packages are shipped using USPS or by another third-party
            carrier.
          </p>
          <h4 className='text-lg font-semibold my-2'>3-DAY SHIPPING</h4>
          <p>
            Three-Day Shipping is available for orders that are placed before
            10:30 A.M. MST. and will ship out the same day and be delivered on
            the third business day. Orders placed after 10:30 A.M. MST will not
            ship out until the next business day (business days do not include
            weekends or U.S. Holidays).
          </p>
          <div className='py-4'>
            <Border />
          </div>
          <h3 className='text-xl font-semibold my-2'>INTERNATIONAL SHIPPING</h3>
          <p>All prices are listed in U.S. dollars.</p>
          <p>
            Please note: Canadian Customs limits imports of textile products to
            $1,600 Canadian dollars per day for individuals who are not licensed
            importers.
          </p>
          <p>
            Our rates for international shipping do not include any applicable
            duties, value-added taxes (VAT), or import consumption taxes. The
            recipient of the merchandise will be required to pay the duties or
            taxes upon delivery. Due to import duty valuation adjustments and
            currency valuations, we are unable to provide an estimate for duty
            or taxes.
          </p>
          <p>
            Duties and taxes are not reflected in our prices, and any customs
            fees assessed by your country will be charged at the time of
            delivery. These fees are collected by the local government and are
            not charged by us, please contact your local customs office for more
            information regarding these possible fees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
