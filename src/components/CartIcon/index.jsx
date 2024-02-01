import React from 'react';
import { Link } from 'react-router-dom';

export const CartIcon = ({ totalCount, totalPrice }) => {
  return (
    <Link to={'/cart'}>
      <div>items count {totalCount}</div>
      <div>total price {totalPrice}</div>
    </Link>
  );
};
