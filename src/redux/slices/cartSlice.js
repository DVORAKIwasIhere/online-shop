import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    setCartItem(state, action) {
      state.cart = action.payload;
    },
    addItem(state, action) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.cartItems.reduce((sum, item) => sum + item.count, 0);
    },
    minusItem(state, action) {
      const findItem = state.cartItems.find((obj) => obj.id === action.payload);
      if (findItem.count > 1) {
        findItem.count--;
        state.totalCount--;
        state.totalPrice = state.totalPrice - findItem.price;
      } else {
        state.cartItems = state.cartItems.filter((item) => item !== findItem);
        state.totalCount--;
        state.totalPrice = state.totalPrice - findItem.price;
      }
    },
  },
});

export const { setCartItem, increment, addItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
