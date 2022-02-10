import store from './store';

export const fetchProducts = () => {
  store.dispatch.scaffold.fetchProducts();
};

export const updateSort = (sort) => {
  store.dispatch.scaffold.updateSort(sort);
};
