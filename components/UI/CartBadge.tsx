'use client';

import { createCheckout, getCheckout } from '@/app/api/requests';
import React, { useEffect, useState } from 'react';

const CartBadge: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const storedCheckoutId = localStorage.getItem('checkout_id');
    (async () => {
      if (!storedCheckoutId) {
        const checkout = await createCheckout();
        localStorage.setItem('checkout_id', checkout.id);
      } else {
        const checkout = await getCheckout(storedCheckoutId);
        setItemCount(checkout.lineItems.length)
      }
    })();
  }, []);

  if (itemCount === 0) return null;

  return (
    <div className='badge badge-secondary rounded-full badge-sm lg:badge-md text-base-100 absolute -right-4 -top-2 w-7 h-7 pointer-events-none'>
      {itemCount > 9 ? '9+' : itemCount}
    </div>
  );
};

export default CartBadge;
