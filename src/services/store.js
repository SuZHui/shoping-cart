import { init } from '@rematch/core';
import { models } from './models';

let initialState;
try {
  initialState = JSON.parse(localStorage.getItem('persist')) || {};
} catch {
  initialState = {};
}

const store = init({
  models,
  redux: {
    initialState,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const persist = {
    cart: { ...state.cart, isOpen: false },
  };
  localStorage.setItem('persist', JSON.stringify(persist));
});

export default store;
