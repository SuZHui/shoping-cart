import store from './store';

// Scaffold
export const fetchProducts = () => {
  store.dispatch.scaffold.fetchProducts();
};

export const updateSort = (sort) => {
  store.dispatch.scaffold.updateSort(sort);
};

export const updateFilters = (filters) => {
  store.dispatch.scaffold.updateFilters(filters);
};

// Cart
export const addProduct = (product) => {
  store.dispatch.cart.add(product);
};

export const removeProduct = (product) => {
  store.dispatch.cart.remove(product);
};

export const updateProduct = (product) => {
  store.dispatch.cart.update(product);
};

export const clearCart = () => store.dispatch.cart.clear();
