'use client';

import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState
} from 'react';
import { NavIcon } from './header/NavMenu';
import { CartInterface } from '@/@types/shop';
import { CartContext } from '@/context/CartContext';
import { IoCart, IoCartOutline, IoClose } from 'react-icons/io5';
import { LineItemProps } from '@/@types/props';
import Image from 'next/image';
import Button from '../actions/Button';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';

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
      <div className='drawer-side z-20 h-full'>
        <label
          htmlFor='cart-drawer'
          aria-label='close sidebar'
          className='drawer-overlay'
          onClick={closeCart}
        ></label>
        <div className='w-80 sm:w-[560px] h-full bg-base-200 text-base-content'>
          <div className='flex justify-between p-4 w-full border-b border-primary border-opacity-25 sticky top-0 bg-base-200'>
            <div />
            <h5 className='text-xl font-bold'>YOUR CART</h5>
            <div onClick={closeCart} className='cursor-pointer'>
              <IoClose />
            </div>
          </div>
          <div className='flex flex-col justify-between h-full content-between'>
            <ul className='!text-sm p-4 px-8'>
              {checkout && checkout.lineItems.length > 0 ? (
                checkout.lineItems.map((item) => (
                  <LineItem key={item.id} item={item} />
                ))
              ) : (
                <li className='text-center'>No Items In Cart</li>
              )}
            </ul>
            {checkout && checkout.lineItems.length > 0 ? (
              <div className='p-4 sticky bottom-0 bg-base-200'>
                <Link href={checkout?.webUrl ?? ''}>
                  <Button styles='btn-primary !w-full'>CHECKOUT</Button>
                </Link>
              </div>
            ) : (
              <div className='p-4 sticky bottom-0 bg-base-200'>
                <Link href='/shop' onClick={closeCart}>
                  <Button styles='btn-primary !w-full'>SHOP NOW</Button>
                </Link>
              </div>
            )}
          </div>
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
  const { checkout, updateLineItem, removeLineItem } = useContext(
    CartContext
  ) as CartInterface;
  const [isLoading, setIsLoading] = useState(false);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const [debouncedQuantity] = useDebounce(quantity, 400);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (quantity !== 1) {
      setIsLoading(true);
    }
    if (e.key === 'Backspace') {
      setQuantity(1);
      return e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+e.target.value);
    setIsLoading(true);
  };

  const showSuccess = () => {
    setUpdateSuccessful(true);
    setTimeout(() => {
      setUpdateSuccessful(false);
    }, 1200);
  };

  useEffect(() => {
    (async () => {
      await updateLineItem(checkout!.id, [
        { id: item.id, quantity: debouncedQuantity }
      ]);
    })();
    setIsLoading(false);
    showSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuantity]);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  return (
    <li className='flex w-full h-18 gap-8 mb-8'>
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
      <div className='flex flex-col justify-between w-full'>
        <p className='truncate font-semibold uppercase'>{item.title}</p>
        <p className='truncate italic -mt-4'>
          {item.variant?.title === 'Default Title'
            ? 'Standard'
            : item.variant!.title}
        </p>
        <div className='flex gap-2 items-center justify-between'>
          <div className='flex gap-2 items-baseline'>
            <p>Qty:</p>
            <input
              value={quantity}
              min={1}
              type='number'
              className='bg-base-100 w-12 text-center'
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
            {isLoading && (
              <div className='loading loading-spinner loading-xs' />
            )}
            <div
              className={`text-green-600 opacity-${
                updateSuccessful ? 100 : 0
              } transition-opacity duration-300`}
            >
              ✔️
            </div>
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
