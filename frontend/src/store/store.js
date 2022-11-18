import { configureStore } from '@reduxjs/toolkit';

import storeReducer from './productListSlice';

const store = configureStore({
  reducer: {
    productList: storeReducer,
  },
});

export default store;
