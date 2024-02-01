import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import './styles.scss';
import { Button } from '../Button';

export const ItemBlock = ({ id, title, price, description, image }) => {
  const dispatch = useDispatch();

  const onClickAddItem = () => {
    dispatch(addItem({ id, title, price, description, image }));
  };
  return (
    <div className="shop_container">
      <h3>{title}</h3>
      <div>{description}</div>
      <img src={image} alt="image" />

      <Button onClickAddItem={onClickAddItem}>Add to cart for {price}$</Button>
      <br />
    </div>
  );
};
