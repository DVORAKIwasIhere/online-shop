import React from 'react';
import './styles.scss';
import { CartIcon } from '../CartIcon';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
  const cartState = useSelector((state) => {
    return state.cart;
  });
  return (
    <div className="header_container">
      <Link to={'/'}>Header</Link>
      <CartIcon totalCount={cartState.totalCount} totalPrice={cartState.totalPrice} />
    </div>
  );
};
