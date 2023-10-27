'use client';

import { CartInterface } from '@/@types/shop';
import { createCheckout, getCheckout } from '@/app/api/requests';
import { CartContext } from '@/context/CartContext';
import React, { useContext, useEffect, useState } from 'react';

const CartBadge: React.FC = () => {
  const [itemCount, setItemCount] = useState(0)
  const { checkout } = useContext(CartContext) as CartInterface;

  useEffect(() => {
    setItemCount(checkout?.lineItems.length ?? 0)
  }, [checkout])

  if (itemCount === 0) return null;

  return (
    <div className='badge badge-secondary rounded-full badge-sm lg:badge-md text-base-100 absolute -right-4 -top-2 w-7 h-7 pointer-events-none'>
      {itemCount > 9 ? '9+' : itemCount}
    </div>
  );
};

export default CartBadge;
