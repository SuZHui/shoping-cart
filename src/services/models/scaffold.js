import { createModel } from '@rematch/core';

export const scaffold = createModel()({
  state: {
    products: [],
  },
  reducers: {
    fetchProducts: (state, payload) => {
      return {
        ...state,
        products: payload,
      };
    },
  },
  effects: (dispatch) => {
    return {};
  },
});
