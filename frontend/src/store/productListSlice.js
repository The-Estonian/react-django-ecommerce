import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'shop',
  initialState: { dataFetching: '', products: [] },
  reducers: {
    initializeProducts(state, action) {
      state.dataFetching = action.payload.dataFetching;
      state.products = action.payload.products;
    },
    clearProducts(state, action) {
      state.products = [];
      state.dataFetching = "Fetching data failed!"
    },
  },
});

export const storeActions = storeSlice.actions;
export default storeSlice.reducer;
