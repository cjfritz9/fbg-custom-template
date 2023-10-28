'use client';

import React, { useContext, useEffect, useState } from 'react';
import { NavIcon } from './header/NavMenu';
import { CartInterface } from '@/@types/shop';
import { CartContext } from '@/context/CartContext';
import {
  IoCart,
  IoCartOutline,
  IoClose
} from 'react-icons/io5';
import { LineItemProps } from '@/@types/props';
import Image from 'next/image';
import Button from '../actions/Button';
import Link from 'next/link';

const Cart: React.FC = () => {
  const { showCart, checkout, openCart, closeCart } = useContext(
    CartContext
  ) as CartInterface;
  return (
    <div className='drawer drawer-end w-fit'>
      <input
        id='cart-drawer'
        type='checkbox'
        checked={showCart}
        className='drawer-toggle w-fit'
        readOnly
      />
      <div className='drawer-content'>
        <label
          htmlFor='cart-drawer'
          className='drawer-button btn btn-base-100 bg-base-100 border-none hover:bg-base-100 px-0 text-2xl'
          onClick={openCart}
        >
          <CartIcon />
        </label>
      </div>
      <div className={`drawer-side z-20`}>
        <label
          htmlFor='cart-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
          onClick={closeCart}
        ></label>
        <div className='w-80 sm:w-[520px] min-h-full bg-base-200 text-base-content'>
          <div className='flex justify-between p-4 w-full border-b border-primary border-opacity-25'>
            <div />
            <h5 className='text-xl font-bold'>YOUR CART</h5>
            <div onClick={closeCart} className='cursor-pointer'>
              <IoClose />
            </div>
          </div>
          <ul className='!text-sm p-4'>
            {checkout && checkout.lineItems.length > 0 ? (
              checkout.lineItems.map((item) => (
                <LineItem key={item.id} item={item} />
              ))
            ) : (
              <li className='text-center'>No Items In Cart</li>
            )}
          </ul>
          {checkout && checkout.lineItems.length > 0 ? (
            <div className='px-4 pb-4 sticky bottom-0 bg-base-200'>
              <Link href={checkout?.webUrl ?? ''}>
                <Button styles='btn-primary !w-full'>CHECKOUT</Button>
              </Link>
            </div>
          ) : (
            <div className='px-4 pb-4 sticky bottom-0 bg-base-200'>
            <Link href='/shop' onClick={closeCart}>
              <Button styles='btn-primary !w-full'>SHOP NOW</Button>
            </Link>
          </div>
          )
          }
        </div>
      </div>
    </div>
  );
};

const CartIcon: React.FC = () => {
  const { openCart } = useContext(CartContext) as CartInterface;
  return (
    <div className='relative' onClick={openCart}>
      <NavIcon variants={[IoCartOutline, IoCart]} />
      <CartBadge />
    </div>
  );
};

const CartBadge: React.FC = () => {
  const [itemCount, setItemCount] = useState(0);
  const { checkout } = useContext(CartContext) as CartInterface;

  useEffect(() => {
    setItemCount(checkout?.lineItems.length ?? 0);
  }, [checkout]);

  if (itemCount === 0) return null;

  return (
    <div className='badge badge-secondary rounded-full badge-sm lg:badge-md text-base-100 absolute -right-4 -top-2 w-7 h-7 pointer-events-none'>
      {itemCount > 9 ? '9+' : itemCount}
    </div>
  );
};

const LineItem: React.FC<LineItemProps> = ({ item }) => {
  const { checkout, removeLineItem } = useContext(CartContext) as CartInterface;

  return (
    <li className='flex w-full h-16 gap-8 mb-8'>
      <Image
        src={item.variant!.image.src}
        alt={
          item.variant!.image.altText ??
          `${item.title} product image - cart item`
        }
        height={72}
        width={72}
        className='object-center object-cover'
      />
      <div className='flex flex-col gap-2 justify-between w-full'>
        <p className='truncate font-semibold'>{item.title}</p>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex gap-2'>
            <p>Qty:</p>
            <input
              defaultValue={item.quantity}
              type='number'
              className='bg-base-100 w-12 text-center'
            />
          </div>
          <div
            onClick={() => removeLineItem(checkout!.id, [item.id])}
            className='cursor-pointer text-xl'
          >
            <p className='text-sm text-secondary underline'>Remove</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart;
