import store from './store';
import API from '@/api';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
};

export const fetchProducts = async (filters, sortBy) => {
  try {
    const { data } = await API.getProducts();
    // TODO: 过滤与排序
    store.dispatch({ type: 'scaffold/fetchProducts', payload: data.products });
  } catch (e) {
    console.error(e);
    console.log('Could not fetch products. Try again later.');
  }
};
