import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/slices/fetchSlice';
import { ItemBlock } from '../components/ItemBlock';
import { Header } from '../components/Header';

export const Home = () => {
  const getItems = async () => {
    dispatch(fetchItems());
  };

  useEffect(() => {
    getItems();
  }, []);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  return (
    <div>
      <Header />
      {items.map((item) => {
        return (
          <div key={item.id}>
            <ItemBlock
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
};
