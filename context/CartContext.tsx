import { CartInterface } from '@/@types/shop';
import {
  addItemsToCheckout,
  createCheckout,
  getCheckout,
  removeItemsFromCheckout
} from '@/app/api/requests';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import ShopifyBuy from 'shopify-buy';

export const CartContext = React.createContext<CartInterface | null>(null);

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [checkout, setCheckout] = useState<ShopifyBuy.Checkout>();

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const addLineItem = async (
    checkoutId: string,
    variantId: string,
    quantity: number
  ) => {
    const checkoutRes = await addItemsToCheckout(checkoutId, [
      { variantId, quantity }
    ]);
    setShowCart(true);
    setCheckout(checkoutRes);
  };

  const removeLineItem = async (checkoutId: string, lineItemIds: string[]) => {
    const checkoutRes = await removeItemsFromCheckout(checkoutId, lineItemIds);
    setCheckout(checkoutRes);
  };

  useEffect(() => {
    const storedCheckoutId = localStorage.getItem('checkout_id');
    (async () => {
      if (!storedCheckoutId) {
        const checkoutRes = await createCheckout();
        localStorage.setItem('checkout_id', checkoutRes.id);
        setCheckout(checkoutRes);
      } else {
        const checkoutRes = await getCheckout(storedCheckoutId);
        setCheckout(checkoutRes);
      }
    })();
  }, []);

  return <CartContext.Provider value={{
    showCart,
    checkout: checkout!,
    openCart,
    closeCart,
    addLineItem,
    removeLineItem
  }}>{children}</CartContext.Provider>;
};

export default CartProvider;
