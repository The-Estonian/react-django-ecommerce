import axios from 'axios';
import { storeActions } from './productListSlice';

export const fetchProductList = () => {
  return async (dispatch) => {
    const fetchList = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/products');
      if (response.statusText !== 'OK') {
        throw new Error('connection failed!');
      }
      const data = await response.data;
      return data;
    };

    try {
      dispatch(storeActions.initializeProducts({ products: [], dataFetching: 'Fetching data' }));
      const productList = await fetchList();
      dispatch(
        storeActions.initializeProducts({ products: productList, dataFetching: "Got data" })
      );
    } catch (error) {
      dispatch(storeActions.clearProducts());
    }
  };
};
