import { CartInterface } from '@/@types/shop';
import {
  addItemsToCheckout,
  createCheckout,
  getCheckout,
  removeItemsFromCheckout,
  updateItemsInCheckout
} from '@/app/api/requests';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import ShopifyBuy from 'shopify-buy';

const CHECKOUT_STORAGE_KEY = 'checkout_id';

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

  const updateLineItem = async (
    checkoutId: string,
    lineItems: ShopifyBuy.CheckoutLineItemUpdateInput[]
  ) => {
    const checkoutRes = await updateItemsInCheckout(checkoutId, lineItems);
    setCheckout(checkoutRes);
  };

  const createNewCheckout = async () => {
    const checkoutRes = await createCheckout();
    localStorage.setItem(CHECKOUT_STORAGE_KEY, checkoutRes.id);
    setCheckout(checkoutRes);
  };

  useEffect(() => {
    const storedCheckoutId = localStorage.getItem(CHECKOUT_STORAGE_KEY);
    (async () => {
      if (!storedCheckoutId) {
        await createNewCheckout();
      } else {
        const checkoutRes = await getCheckout(storedCheckoutId);
        if (checkoutRes?.completedAt) {
          await createNewCheckout();
        } else {
          setCheckout(checkoutRes);
        }
      }
    })();
  }, []);

  return (
    <CartContext.Provider
      value={{
        showCart,
        checkout: checkout!,
        openCart,
        closeCart,
        addLineItem,
        updateLineItem,
        removeLineItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
