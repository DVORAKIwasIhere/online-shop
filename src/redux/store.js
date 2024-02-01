import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import itemSlice from './slices/fetchSlice';

export const store = configureStore({
  reducer: { item: itemSlice, cart: cartSlice },
});
