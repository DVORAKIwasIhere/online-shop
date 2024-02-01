import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../components/Header';
import { minusItem } from '../redux/slices/cartSlice';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Header />
      {cart.cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
    </div>
  );
};
