import { init } from '@rematch/core';
import { models } from './models';

const store = init({
  models,
  redux: {
    initialState: JSON.parse(window.localStorage.getItem('persist')) || {},
  },
});

store.subscribe(() => {
  const state = store.getState();
  const persist = {
    cart: state.cart,
  };
  localStorage.setItem('persist', JSON.stringify(persist));
});

export default store;
