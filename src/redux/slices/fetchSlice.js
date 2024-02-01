import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
};

export const fetchItems = createAsyncThunk('item/fetchItems', async () => {
  const { data } = await axios.get(`https://fakestoreapi.com/products`);
  return data;
});

export const itemSlice = createSlice({
  name: 'item',
  initialState,

  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log('fulfilled successfully');
    });
    builder.addCase(fetchItems.rejected, () => {
      console.log('total fail');
    });
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
